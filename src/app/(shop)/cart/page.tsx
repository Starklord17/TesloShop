import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { ProductsInCart } from "./ui/ProductsInCart";
import { OrderSummary } from './ui/OrderSummary';


// const productsInCart = [
//   initialData.products[0],
//   initialData.products[1],
//   initialData.products[2],
// ];

export default function CartPage() {

  // redirect("/empty");

  return (
    <main className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <section className="flex flex-col w-[1000px]">
        <Title title="Cart" subtitle="Your cart is empty" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <article className="flex flex-col mt-5">
            <h2 className="text-xl">Agregar más items</h2>
            <Link href="/" className="underline mb-5">
              Continúa comprando
            </Link>

            {/* Items */}
            <ProductsInCart />

          </article>

          {/* Checkout - Resumen de orden*/}
          {/* <aside className="bg-white rounded-xl shadow-xl p-7 flex flex-col justify-between h-72"> */}
          <aside className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-xl mb-2">Resumen de orden</h2>

            <OrderSummary />

            <button className="mt-5 mb-2 w-full">
              <Link
                className="flex btn-primary justify-center"
                href="/checkout/address"
              >
                Checkout
              </Link>
            </button>
          </aside>
        </div>
      </section>
    </main>
  );
}
