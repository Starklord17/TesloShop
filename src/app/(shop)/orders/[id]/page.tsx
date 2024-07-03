import Link from "next/link";
import Image from "next/image";
import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import { IoCartOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: {
    id: string;
  };
}

export default function OrderIDpage({ params }: Props) {
  const { id } = params;

  // TODO: verificar
  // redirect(/)

  return (
    <main className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <section className="flex flex-col w-[1000px]">
        <Title title={`Orden #${id}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <article className="flex flex-col mt-5">
            <div
              className={clsx(
                "flex items-center rounded-lg py-2 px3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-500": false,
                  "bg-green-700": true,
                }
              )}
            >
              <IoCartOutline size={30} className="ml-2" />
              {/* <span className="mx-2">Pendiente de pago</span> */}
              <span className="mx-2">Pagada</span>
            </div>

            {/* Items */}
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={100}
                  height={100}
                  style={{
                    objectFit: "cover",
                  }}
                  className="mr-5 rounded"
                />

                <div>
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                  <p className="font-semibold">
                    Subtotal: ${product.price * 3}
                  </p>

                  {/* <div className="mt-2">
                    <QuantitySelector quantity={1} />
                  </div> */}

                  {/* <p className="mt-2">Talla: M</p> */}
                </div>
              </div>
            ))}
          </article>

          {/* Checkout - Resumen de orden*/}
          <aside className="bg-white rounded-xl shadow-xl p-7 flex flex-col justify-between">
            <h2 className="text-2xl mb-2">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Bart Simpson</p>
              <p>Av. Siempre viva 123</p>
              <p>Springfield, 12345</p>
              <p>Estados Unidos</p>
              <p>Código Postal: 7600</p>
              <p>Tel: 333444555</p>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10"></div>

            <h2 className="text-xl mb-2">Resumen de orden</h2>

            <div className="grid grid-cols-2 gap-2">
              <span>Nº Productos</span>
              <span className="text-right">3 artículos</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">$ 15</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">$ 115</span>
            </div>

            <button className="mt-5 mb-2 w-full">
              <div
                className={clsx(
                  "flex items-center rounded-lg py-2 px3.5 text-xs font-bold text-white mb-5",
                  {
                    "bg-red-500": false,
                    "bg-green-700": true,
                  }
                )}
              >
                <IoCartOutline size={30} className="ml-2" />
                {/* <span className="mx-2">Pendiente de pago</span> */}
                <span className="mx-2">Pagada</span>
              </div>

            </button>
          </aside>
        </div>
      </section>
    </main>
  );
}
