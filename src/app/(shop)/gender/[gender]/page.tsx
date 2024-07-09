export const revalidate = 60; // 60 seconds

import { notFound, redirect } from "next/navigation";
import { Pagination, ProductGrid, Title } from "@/components";
import { getPaginatedProductsWithImages } from "@/actions";
import { Gender } from "@prisma/client";
// import { initialData } from "@/seed/seed";
// import { ValidCategory } from "@/interfaces";

// const seedProducts = initialData.products;

interface Props {
  params: {
    gender: string;
  };
  searchParams: {
    page?: string;
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { gender } = params;
  // const products = seedProducts.filter((product) => product.gender === id);

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const {products, currentPage, totalPages} = await getPaginatedProductsWithImages({page, gender: gender as Gender});

  if (products.length === 0) {
    redirect(`/gender/${gender}`);
  }

  // const labels: {[key: ValidCategories]: string} = {
  const labels: Record<string, string> = {
    men: "para hombres",
    women: "para mujeres",
    kid: "para niños",
    unisex: "para todos",
  };

  // if (id !== 'kids') {
  //   notFound();
  // }

  // if (!products || !products.length || !labels[id as ValidCategory]) {
  //   notFound();
  // }

  return (
    <>
      <Title
        title={`Artículos ${labels[gender]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </>
  );
}
