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
  // Para cada producto en el arreglo productIds, se suma la quantity del producto actual 
  // al valor acumulado hasta ese momento. El resultado final de reduce es el total de todas 
  // las cantidades de los productos en la orden, que se almacena en la variable itemsInOrder.

  // Los totales de tax, subtotal, y total
  const { subTotal, tax, total } = productIds.reduce( (totals, item ) => {

    const productQuantity = item.quantity;
    const product = products.find(product => product.id === item.productId);

    if (!product) throw new Error(`${item.productId} not found - 500`);

    const subTotal = product.price * productQuantity;

    totals.subTotal += subTotal;
    totals.tax += subTotal * 0.15;
    // totals.total += subTotal + totals.tax;
    totals.total += subTotal * 1.15;

    return totals;

    // return { subTotal: 0, tax: 0, total: 0 };
  }, { subTotal: 0, tax: 0, total: 0 });

  // console.log({subTotal, tax, total}); 

  // Crear la transacción de base de datos
  const prismaTx = await prisma.$transaction( async(tx) => {
    // 1. Actualizar el stock de los productos

    // 2. Crear la orden - Encabezado - Detalle

    // 3. Crear la dirección de la orden

    return {
      
    }
  })

}