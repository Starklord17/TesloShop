'use client'

import { useState } from "react";
import { QuantitySelector, SizeSelector } from "@/components";
import { Product, ValidSize } from "@/interfaces";

interface Props {
  product: Product;
}

export const AddToCart = ({product}: Props) => {

  const [size, setSize] = useState<ValidSize|undefined>()

  return (
    <>
      {/* Selector de Tallas */}
      <SizeSelector
        selectedSize={size}
        availableSizes={product.sizes}
        onSizeChanged={setSize}
      />

      {/* Selector de cantidad */}
      <QuantitySelector quantity={2} />

      {/* Button */}
      <button className="btn-primary my-5">Add to Cart</button>
    </>
  );
};
