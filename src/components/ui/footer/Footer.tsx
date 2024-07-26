import Link from "next/link";
import { titleFont } from "@/config/fonts";

export const Footer = () => {
  return (
    <footer className="flex w-full justify-center text-xs mb-10">
      <Link
        href="https://github.com/Starklord17/TesloShop"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={`${titleFont.className} antialiased font-bold `}>
          Teslo{" "}
        </span>
        <span>| shop </span>
        <span>© {new Date().getFullYear()}</span>
      </Link>

      <Link href="/" className="mx-3">
        Privacidad & Legal
      </Link>

      <Link href="/" className="mx-3">
        Ubicaciones
      </Link>
    </footer>
  );
};
