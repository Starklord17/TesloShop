import prisma from "../lib/prisma";
import { initialData } from "./seed";

async function main() {
  // console.log(initialData);
  // console.log('Seed ejecutado correctamente');

  await Promise.all([
    // 1. Borrar registros previos
    prisma.productImage.deleteMany(),
    prisma.product.deleteMany(),
    prisma.category.deleteMany(),
  ]);

  console.log("Datos eliminados");
  
}

(() => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();
