'use server';

import { Gender } from '@prisma/client';
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

  console.log(productParsed.data);

  return {
    ok: true
  }
}