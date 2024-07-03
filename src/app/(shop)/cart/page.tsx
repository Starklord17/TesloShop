import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

export default function CartPage() {
  return (
    <main className="flex justify-center items-center mb-72 px-10 sm:px-0">

      <section className="flex flex-col w-[1000px]">

        <Title 
          title="Cart" 
          subtitle="Your cart is empty"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

        {/* Carrito */}
        <div className="flex flex-col mt-5">
          <span className="text-xl">Agregar más items</span>
          <Link href="/" className="underline mb-5">
            Continúa comprando
          </Link>
        </div>

        {/* Items */}
        {
          productsInCart.map( product => (

            <div key={product.slug} className="flex">
              <Image
                src={`/products/${product.images[0]}`}
                alt={product.title}
                width={100}
                height={100}
                className="mr-5 rounded"
              />

              <div>
                <p>{product.title}</p>
                <p>${product.price}</p>
                <QuantitySelector quantity={3} />

                <button className="underline mt-3">
                  Remover
                </button>

              </div>

            </div>

          ))
        }

        {/* Checkout */}


        </div>

      </section>

    </main>
  );
}