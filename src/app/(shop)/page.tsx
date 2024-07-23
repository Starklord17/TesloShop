export const revalidate = 60; // 60 seconds

import { redirect } from "next/navigation";
import { Pagination, ProductGrid, Title } from "@/components";
import { getPaginatedProductsWithImages } from "@/actions";
// import { initialData } from "@/seed/seed";

// const products = initialData.products;

interface Props {
  searchParams: {
    page?: string;
  }
}

export default async function Home({searchParams}:Props) {

  // console.log(searchParams);
  const page = searchParams.page ? parseInt(searchParams.page, 10) : 1;

  // const productsTemp = await getPaginatedProductsWithImages();
  // Server Action para obtener los productos paginados
  const {products, currentPage, totalPages} = await getPaginatedProductsWithImages({page});

  // console.log({currentPage, totalPages});

  // const productsWithImages = products.filter((product) => product.ProductImage.length > 0); // Solo productos con imagenes

  if (products.length === 0) {
    redirect('/');
  }

  // console.log(products);

  return (
    <>
      <Title 
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid 
        products={products}
        // products={productsWithImages}
      />

      <Pagination totalPages={totalPages}/>

    </>
  );
}
