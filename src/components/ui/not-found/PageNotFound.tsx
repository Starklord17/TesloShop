import Image from "next/image"
import Link from "next/link"
import { titleFont } from "@/config/fonts"

export const PageNotFound = () => {
  return (
    <main className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <section className="text-center px-5 mx-5">
        <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
        <p className="font-semibold text-xl">Whoops! Lo sentimos mucho.</p>
        <p className="font-light">
          <span>Puedes regresar al </span>
          <Link href='/' className="font-normal hover:underline transition-all">
            Inicio
          </Link>
        </p>
      </section>

      <section className="px-5 mx-5">
        <Image src="/imgs/starman_750x750.png" alt="Starman" className="p-5 sm:p-0" width={550} height={550}/>
      </section>

    </main>
  )
}
