import Link from 'next/link';
import { Title } from '@/components';

export default function AddressPage() {
  return (
    <main className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">

      <section className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
        
        <Title title="Dirección" subtitle="Dirección de entrega" />

        <form className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">


          <fieldset className="flex flex-col mb-2">
            <legend>Nombres</legend>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </fieldset>

          <fieldset className="flex flex-col mb-2">
            <legend>Apellidos</legend>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </fieldset>

          <fieldset className="flex flex-col mb-2">
            <legend>Dirección</legend>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </fieldset>

          <fieldset className="flex flex-col mb-2">
            <legend>Dirección 2 (opcional)</legend>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </fieldset>


          <fieldset className="flex flex-col mb-2">
            <legend>Código postal</legend>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </fieldset>

          <fieldset className="flex flex-col mb-2">
            <legend>Ciudad</legend>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </fieldset>

          <fieldset className="flex flex-col mb-2">
            <legend>País</legend>
            <select 
              className="p-2 border rounded-md bg-gray-200"
            >
              <option value="">[ Seleccione ]</option>
              <option value="ARG">Argentina</option>
              <option value="ESP">España</option>
              <option value="CRI">Costa Rica</option>
            </select>
          </fieldset>

          <fieldset className="flex flex-col mb-2">
            <span>Teléfono</span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </fieldset>


          <footer className="flex flex-col mb-2 sm:mt-10">
            <Link 
              href='/checkout'
              className="btn-primary flex w-full sm:w-1/2 justify-center ">
              Siguiente
            </Link>
          </footer>

        </form>

      </section>

    </main>
  );
}