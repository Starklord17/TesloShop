import { CartProduct } from "@/interfaces";
import { create } from "zustand";

 interface State {
  cart: CartProduct[];

  // addProductToCart
  // removeProductQuantity
  // removeProduct
 }

 export const useCartStore = create<State>()(
  (set) => ({
    cart: [],

 })
);