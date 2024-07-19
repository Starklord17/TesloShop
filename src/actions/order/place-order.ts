'use server';

import { auth } from "@/auth.config";
import type { Address, ValidSize } from "@/interfaces";

interface ProductToOrder {
  productId: string;
  quantity: number;
  size: ValidSize;
}

export const placeOrder = async (productIds: ProductToOrder[], address: Address) => {

  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    return {
      ok: false,
      message: 'User not authenticated'
    }
  }

  console.log({productIds, address, userId});

}