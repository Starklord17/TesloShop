'use client';

import Image from "next/image";
import { QuantitySelector } from "@/components";
import { useCartStore } from "@/store";
import { useEffect, useState } from "react";
import Link from "next/link";

export const ProductsInCart = () => {

  const updateProductQuantity = useCartStore((state) => state.updateProductQuantity);
  const [loaded, setLoaded] = useState(false)
  const productsInCart = useCartStore((state) => state.cart);

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) {
    return <p>Loading...</p>
  }

  return (
    <>
      {productsInCart.map((product) => (
        <div key={`${product.slug}-${product.size}`} className="flex mb-5">
          <Image
            src={`/products/${product.image}`}
            alt={product.title}
            width={100}
            height={100}
            style={{
              objectFit: "cover",
            }}
            className="mr-5 rounded"
          />

          <div>
            <Link className="hover:underline cursor-pointer" href={`/product/${product.slug}`}>
              {product.title} / Size: {product.size}
            </Link>
            <p>${product.price}</p>
            <QuantitySelector 
              quantity={product.quantity} 
              // onQuantityChanged={(quantity) => console.log(quantity)}
              onQuantityChanged={(quantity) => updateProductQuantity(product, quantity)}
            />

            <button className="underline mt-3">Remover</button>
          </div>
        </div>
      ))}
    </>
  );
};
