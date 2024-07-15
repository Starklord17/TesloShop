"use client";

import Link from "next/link";
import clsx from "clsx";
import { useUIStore } from "@/store";
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
import { logout } from "@/actions";
import { signOut, useSession } from "next-auth/react";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;
  const isAdmin = session?.user?.role === "admin";

  // console.log({session});

  return (
    <aside>
      {/* Background black */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {/* Blur */}
      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}

      {/* Sidemenu */}
      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <button
          type="button"
          onClick={closeMenu}
          className="absolute top-5 right-5 p-0 rounded-full transition-colors group"
          aria-label="Cerrar menú"
        >
          <IoCloseOutline size={50} aria-hidden="true" />
          <span
            className="absolute inset-0 rounded-full bg-gray-100 opacity-0 group-hover:opacity-50 transition-opacity"
            aria-hidden="true"
          ></span>
        </button>

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
          {/* User Profile */}
          {isAuthenticated && (
            <>
              <li>
                <Link
                  href="/profile"
                  onClick={() => closeMenu()}
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
            </>
          )}

          {/* Logout */}
          {isAuthenticated && (
            <li>
              <button
                className="flex w-full items-center p-2 hover:bg-gray-100 rounded transition-all"
                onClick={async () => {
                  await signOut({ callbackUrl: window.location.href }); // Cierra sesión y recarga
                }}
              >
                <IoLogOutOutline size={30} aria-hidden="true" />
                <span className="ml-3 text-xl">Salir</span>
              </button>
            </li>
          )}

          {!isAuthenticated && (
            <li>
              <Link
                href="/auth/login"
                className="flex items-center p-2 hover:bg-gray-100 rounded transition-all"
                onClick={() => closeMenu()}
              >
                <IoLogInOutline size={30} aria-hidden="true" />
                <span className="ml-3 text-xl">Ingresar</span>
              </Link>
            </li>
          )}
        </ul>

        {/* Admin Menu */}
        {isAdmin && (
          <>
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
          </>
        )}
      </nav>
    </aside>
  );
};
