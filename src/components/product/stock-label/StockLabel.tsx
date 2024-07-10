"use client";

import { useEffect, useState } from "react";
import { getStockBySlug } from "@/actions";

interface Props {
  slug: string;
}

export const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStock();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStock = async () => {
    const inStock = await getStockBySlug(slug);
    setStock(inStock);
    setIsLoading(false);
  };

  return (
    <>
      {
        isLoading ? (
          <p className={`antialiased text-l bg-gray-200 animate-pulse w-20 rounded-md`}>&nbsp;</p>
        ) : (
          <p className={`antialiased text-l`}>Stock: {stock}</p>
        )
      }
    </>
  );
};
