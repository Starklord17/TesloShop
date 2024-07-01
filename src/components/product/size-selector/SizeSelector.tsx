import type { ValidSize } from "@/interfaces"; // type indica a TS que se puede ignorar en tiempo de transpilación.
import clsx from "clsx";

interface Props {
  selectedSize: ValidSize;
  availableSizes: ValidSize[];
}
 
 export const SizeSelector = ({selectedSize, availableSizes}: Props) => {

  

   return (
      <main className="my-5">
        <h3 className="font-bold mb-4">Tallas disponibles</h3>

        <section className="flex">
          {availableSizes.map((ValidSize) => (
            // <button
            //   key={ValidSize}
            //   className={`btn-secondary ${selectedSize === ValidSize ? 'btn-secondary-active' : ''} mr-2 mb-2 text-sm`}
            // >
            <button
              key={ValidSize}
              className={
                clsx(
                  "mr-2 mb-2 hover:underline text-sm btn-secondary",
                  {
                    'underline': ValidSize === selectedSize
                  }
                )
              }
            >
              {ValidSize}
            </button>
          ))}
        </section>

      </main>
   )
 }
 