"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";



export const OrderSummary = () => {

  const [loaded, setLoaded] = useState(false);
  const { itemsInCart, subTotal, tax, total } = useCartStore((state) => state.getSummaryInformation());

  // Resuelve el problema de hidratación.
  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      <span>Nº Productos</span>
      <span className="text-right">{itemsInCart === 1 ? '1 artículo' : `${itemsInCart} artículos`}</span>

      <span>Subtotal</span>
      <span className="text-right">{currencyFormat(subTotal)}</span>

      <span>Impuestos (15%)</span>
      <span className="text-right">{currencyFormat(tax)}</span>

      <span className="mt-5 text-2xl">Total:</span>
      <span className="mt-5 text-2xl text-right">{currencyFormat(total)}</span>
    </div>
  );
};
