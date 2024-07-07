import { redirect } from "next/navigation";
import { ProductGrid, Title } from "@/components";
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
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  // const productsTemp = await getPaginatedProductsWithImages();
  const {products, currentPage, totalPages} = await getPaginatedProductsWithImages({page});

  console.log({currentPage, totalPages});

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
      />

    </>
  );
}
