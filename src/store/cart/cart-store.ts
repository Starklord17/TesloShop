import { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  cart: CartProduct[];

  addProductToCart: (product: CartProduct) => void;
  // removeProductQuantity
  // removeProduct
}

export const useCartStore = create<State>()(
  // persist() is a middleware that saves the state in the local storage
  // and hydrates it when the app is reloaded

  persist(
    (set, get) => ({
      cart: [],

      // Methods
      addProductToCart: (product: CartProduct) => {
        const { cart } = get();
        // console.log(cart);

        // 1. Revisar si el producto ya existe en el cart con la talla seleccionada
        const productInCart = cart.some(
          (item) => item.id === product.id && item.size === product.size
        );

        if (!productInCart) {
          set({ cart: [...cart, product] });
          return;
        }

        // 2. Si el producto ya existe, incrementar la cantidad
        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return {
              ...item,
              quantity: item.quantity + product.quantity,
            };
          }
          return item;
        });

        set({ cart: updatedCartProducts });
      },
    }),
    {
      name: "shopping-cart",
      // skipHydration: true,
    }
  )
);
