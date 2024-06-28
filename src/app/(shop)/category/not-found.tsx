import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 Not found</h1>
      <Link href="/">Ir a la pagina de inicio</Link>
    </div>
  );
}