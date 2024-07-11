export const revalidate = 604800; // 7 days

import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

// import { initialData } from "@/seed/seed";
import { titleFont } from "@/config/fonts";
import { SizeSelector } from "@/components/product/size-selector/SizeSelector";
import { QuantitySelector } from "@/components/product/quantity-selector/QuantitySelector";
import {
  ProductMobileSlideShow,
  ProductSlideShow,
  StockLabel,
} from "@/components";
import { getProductBySlug } from "@/actions";
import { AddToCart } from "./ui/AddToCart";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const product = await getProductBySlug(slug);

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: product?.title ?? "Product not found",
    description: product?.description ?? "",
    openGraph: {
      title: product?.title ?? "Product not found",
      description: product?.description ?? "",
      // images: [], // https://misitioweb.com/products/prod-1/image.png
      images: [`/products/${product?.images[1]}`],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = params;
  // const product = initialData.products.find((product) => product.slug === slug);
  const product = await getProductBySlug(slug);
  // console.log(product);

  if (!product) {
    notFound();
  }

  return (
    <main className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Mobile SlideShow */}
      <section className="col-span-1 md:hidden">
        <ProductMobileSlideShow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />
      </section>

      {/* Desktop SlideShow */}
      <section className="col-span-1 md:col-span-2">
        <ProductSlideShow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </section>

      {/* Details */}
      <section className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>

        <StockLabel slug={product.slug} />

        <AddToCart product={product} />

        {/* Description */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p>{product.description}</p>
      </section>
    </main>
  );
}
