import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <h1>Teslo Shop</h1>
      <h1 className={`${titleFont.className} font-bold`}>Developer</h1>
      <h1 className={`${titleFont.className}`}>Pato</h1>
    </div>
  );
}
