'use server';

import { revalidatePath } from 'next/cache';
import { Gender, Product, Size } from '@prisma/client';
import prisma from '@/lib/prisma';
import {z} from 'zod';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config(process.env.CLOUDINARY_URL ?? '');

// Esquema de validación de los datos del producto. Sirve para no tener que hacer validaciones manuales con regex.
const productSchema = z.object({
  id: z.string().uuid().optional().nullable(),
  title: z.string().min(3).max(255),
  slug: z.string().min(3).max(255),
  description: z.string(),
  price: z.coerce
    .number()
    .min(0)
    .transform( val => Number(val.toFixed(2))),
  inStock: z.coerce
    .number()
    .min(0)
    .transform( val => Number(val.toFixed())),
  categoryId: z.string().uuid(),
  sizes: z.coerce.string().transform(val => val.split(',')),
  tags: z.string(),
  gender: z.nativeEnum(Gender),
})

export const createUpdateProduct = async (formData: FormData) => {
  // console.log(formData);
  const data = Object.fromEntries(formData);
  const productParsed = productSchema.safeParse(data);

  if (!productParsed.success) {
    console.log(productParsed.error.format());
    return {
      ok: false,
      message: 'Invalid data'
    }
  }

  // console.log(productParsed.data);
  const product = productParsed.data;
  product.slug = product.slug.toLowerCase().replace(/ /g, '-').trim(); // El modificador /g se utiliza para indicar que la operación de reemplazo debe aplicarse de manera global a toda la cadena de texto.

  const {id, ...rest} = product;

  try {
    const prismaTx = await prisma.$transaction(async (tx) => {
  
      let product: Product;
      const tagsArray = rest.tags.split(',').map( tag => tag.trim().toLowerCase() );
  
      if (id) {
        // Actualizar
        product = await prisma.product.update({
          where: {id},
          data: {
            ...rest,
            sizes: {
              set: rest.sizes as Size[],
            },
            tags: {
              set: tagsArray,
            }
          }
        });
  
  
      } else {
        // Crear
        product = await prisma.product.create({
          data: {
            ...rest,
            sizes: {
              set: rest.sizes as Size[],
            },
            tags: {
              set: tagsArray,
            }
          }
        });
      }
  
      // console.log({updatedProduct: product});
      // Proceso de carga y guardado de imagenes
      // Recorrer las imagenes y guardarlas.
      if (formData.getAll('images')) {
        // console.log(formData.getAll('images'));
        // [https://url.jpg, https://url2.jpg]
        const images = await uploadImages(formData.getAll('images') as File[]);
        console.log(images);
        if ( !images ) {
          throw new Error('No se pudo cargar las imágenes, rollingback');
        }

        await prisma.productImage.createMany({
          data: images.map( image => ({
            url: image!,
            productId: product.id,
          }))
        });

      }
  
      return {
        product
      }
    });

  // TODO: RevalidatePaths
    revalidatePath('/admin/products');
    revalidatePath(`/admin/product/${product.slug}`);
    revalidatePath(`/products/${product.slug}`);


    return {
      ok: true,
      product: prismaTx.product
    }
    
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: 'Revisar los logs, no se pudo crear/actualizar el producto'
    }
  }

}

const uploadImages = async( images: File[] ) => {

  try {

    const uploadPromises = images.map( async( image) => {

      try {
        const buffer = await image.arrayBuffer();
        const base64Image = Buffer.from(buffer).toString('base64');
  
        return cloudinary.uploader.upload(`data:image/png;base64,${ base64Image }`, {
          folder: 'teslo-shop',
          transformation: {
            width: 500,
            height: 500,
            crop: 'fit',
          }
        })
          .then( r => r.secure_url );
        
      } catch (error) {
        console.log(error);
        return null;
      }
    })


    const uploadedImages = await Promise.all( uploadPromises );
    return uploadedImages;


  } catch (error) {

    console.log(error);
    return null;
    
  }


}