"use client";

import Link from "next/link";
import {
  IoCloseOutline,
  IoSearchOutline,
  IoPersonOutline,
  IoTicketOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoShirtOutline,
  IoPeopleOutline,
} from "react-icons/io5";

export const Sidebar = () => {
  return (
    <aside>
      {/* Background black */}
      <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />

      {/* Blur */}
      <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />

      {/* Sidemenu */}
      <nav
        // TODO: efecto de slide
        className="fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300"
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => console.log("click")}
        />

        {/* Search */}
        <form className="relative mt-14" role="search">
          <label htmlFor="search" className="sr-only">
            Buscar
          </label>
          <IoSearchOutline
            size={20}
            className="absolute top-2 left-2"
            aria-hidden="true"
          />
          <input
            type="search"
            id="search"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </form>

        {/* Main Menu */}
        <ul className="mt-10 space-y-6">
          <li>
            <Link
              href="/"
              className="flex items-center p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoPersonOutline size={30} aria-hidden="true" />
              <span className="ml-3 text-xl">Perfil</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoTicketOutline size={30} aria-hidden="true" />
              <span className="ml-3 text-xl">Ordenes</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoLogInOutline size={30} aria-hidden="true" />
              <span className="ml-3 text-xl">Ingresar</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoLogOutOutline size={30} aria-hidden="true" />
              <span className="ml-3 text-xl">Salir</span>
            </Link>
          </li>
        </ul>

        {/* Line Separator */}
        <hr className="w-full h-px bg-gray-200 my-10" aria-hidden="true" />

        {/* Admin Menu */}
        <ul className="space-y-6">
          <li>
            <Link
              href="/"
              className="flex items-center p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoShirtOutline size={30} aria-hidden="true" />
              <span className="ml-3 text-xl">Productos</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoTicketOutline size={30} aria-hidden="true" />
              <span className="ml-3 text-xl">Ordenes</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoPeopleOutline size={30} aria-hidden="true" />
              <span className="ml-3 text-xl">Usuarios</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
