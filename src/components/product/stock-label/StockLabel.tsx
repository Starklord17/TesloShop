"use client";

import { useEffect, useState } from "react";
import { titleFont } from "@/config/fonts";
import { getStockBySlug } from "@/actions";

interface Props {
  slug: string;
}

export const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getStock = async () => {
      const inStock = await getStockBySlug(slug);
      setStock(inStock);
      setIsLoading(false);
    };

    getStock();
  }, [slug]);


  return (
    <>
      {
        isLoading ? (
          <p className={`${titleFont.className} antialiased text-l bg-gray-200 animate-pulse w-20 rounded-md`}>&nbsp;</p>
        ) : (
          <p className={`${titleFont.className} antialiased text-l`}>Stock: {stock}</p>
        )
      }
    </>
  );
};
