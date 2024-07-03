import { notFound } from "next/navigation";

import { initialData } from "@/seed/seed";
import { titleFont } from "@/config/fonts";
import { SizeSelector } from '@/components/product/size-selector/SizeSelector';
import { QuantitySelector } from "@/components/product/quantity-selector/QuantitySelector";
import { ProductSlideShow } from "@/components";


interface Props {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">

      {/* SlideShow */}
      <section className="col-span-1 md:col-span-2">
        <ProductSlideShow 
          title={product.title}
          images={product.images}
        />
      </section>

      {/* Details */}
      <section className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>

        {/* Selector de Tallas */}
        <SizeSelector 
          selectedSize={product.sizes[0]}
          availableSizes={product.sizes}
        />

        {/* Selector de cantidad */}
        <QuantitySelector 
          quantity={2}
        />

        {/* Button */}
        <button className="btn-primary my-5">Add to Cart</button>

        {/* Description */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p>{product.description}</p>
      </section>

    </main>
  );
}
