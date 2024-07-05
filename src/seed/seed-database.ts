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

  // console.log("Datos eliminados");

  // Categorias
  // await prisma.category.create({
  //   data: {
  //     name: "Shirts",
  //   },
  // });

  // {
  //   name: "Shirts",
  // }

  const { categories, products } = initialData;
  
  const categoriesData = categories.map((category) => ({
    name: category
  }));
  // console.log(categoriesData);
  await prisma.category.createMany({
    data: categoriesData,
  });
  
}

(() => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();
