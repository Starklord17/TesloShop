'use client';

import { useEffect, useState } from "react";
import { getStockBySlug } from "@/actions";

interface Props {
  slug: string;
}

export const StockLabel = ({slug}:Props) => {

  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStock();
  }, []);

  const getStock = async () => {
    const inStock = await getStockBySlug(slug);
    setStock(inStock);
  }

  return (
    <p className={`antialiased text-l`}>
      Stock: {stock}
    </p>
  );
};
