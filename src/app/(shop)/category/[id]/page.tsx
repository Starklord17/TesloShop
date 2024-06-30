import { notFound } from "next/navigation";
import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { ValidCategory } from '@/interfaces';

const seedProducts = initialData.products;

interface Props {
  params: {
    id: ValidCategory;
  }
}

export default function CategoryPage({params}: Props) {

  const {id} = params;
  const products = seedProducts.filter(product => product.gender === id);

  // const labels: {[key: ValidCategories]: string} = {
  const labels: Record<ValidCategory, string> = {
    'men': 'para hombres',
    'women': 'para mujeres',
    'kid': 'para niños',
    'unisex': 'para todos'
  }

  // if (id !== 'kids') {
  //   notFound();
  // }

  if (!products || !products.length || !labels[id as ValidCategory]) {
    notFound();
  }

  return (
    <>
      <Title 
        title={`Artículos ${(labels)[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid 
        products={products}
      />

    </>
  );
}