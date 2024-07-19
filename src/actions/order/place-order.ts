'use server';

import { auth } from "@/auth.config";
import type { Address, ValidSize } from "@/interfaces";
import prisma from '@/lib/prisma';


interface ProductToOrder {
  productId: string;
  quantity: number;
  size: ValidSize;
}

export const placeOrder = async (productIds: ProductToOrder[], address: Address) => {

  const session = await auth();
  const userId = session?.user.id;

  // Verificar sesión de usuario
  if (!userId) {
    return {
      ok: false,
      message: 'User not authenticated'
    }
  }

  // console.log({productIds, address, userId});

  // Obtener la info de los productos. Nota: Se pueden llevar 2 o más productos con el mismo ID

  const products = await prisma.product.findMany({
    where: {
      id: {
        in: productIds.map(p => p.productId)
      }
    }
  });

  // console.log(products);

  // Calcular los montos // Encabezado
  const itemsInOrder = productIds.reduce((acc, product) => acc + product.quantity, 0);
  // console.log({itemsInOrder});

  // Los totales de tax, subtotal, y total

}