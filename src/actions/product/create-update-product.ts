'use server';

import prisma from '@/lib/prisma';
import { Gender, Product, Size } from '@prisma/client';
import {z} from 'zod';

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

      console.log({updatedProduct: product});

    } else {
      // Crear
    }

    return {

    }
  });

  // TODO: RevalidatePaths

  return {
    ok: true
  }
}