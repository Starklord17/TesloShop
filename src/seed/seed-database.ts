import prisma from "../lib/prisma";
import { initialData } from "./seed";
import { countries } from "./seed-countries";

async function main() {
  // console.log(initialData);

  // await Promise.all([
  // 1. Borrar registros previos
  // prisma.productImage.deleteMany(),
  //   prisma.product.deleteMany(),
  //   prisma.category.deleteMany(),
  // ]);

  await prisma.user.deleteMany();
  await prisma.country.deleteMany();

  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  // console.log("Datos eliminados");

  // Intregración de seed-countries.ts
  // Países
  // const countriesData = countries.map((country) => ({
  //   name: country.name,
  //   id: country.id,
  // }));
  // await prisma.country.createMany({
  //   data: countriesData,
  // });

  await prisma.country.createMany({
    data: countries,
  })

  // Categorias
  // await prisma.category.create({
  //   data: {
  //     name: "Shirts",
  //   },
  // });

  // {
  //   name: "Shirts",
  // }

  const { categories, products, users } = initialData;

  // Inserta todos los usuarios de initialData en la base de datos de una sola vez.
  await prisma.user.createMany({
    data: users,
  });

  // Transforma el array categories (que contiene solo nombres) en un array de objetos
  // con la estructura { name: category }, que es el formato que espera Prisma.
  const categoriesData = categories.map((category) => ({
    name: category,
  }));
  // console.log(categoriesData);
  // Inserta todas las categorías transformadas en la base de datos.
  await prisma.category.createMany({
    data: categoriesData,
  });

  // Se obtienen las categorias de la base de datos
  const categoriesDB = await prisma.category.findMany();
  // console.log(categoriesDB);

  // Transforma el array categoriesDB en un objeto con la estructura { category: id },
  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>); // <--- Record<string=shirt, string=categoryID>

  // console.log(categoriesMap);

  // Productos
  // const {images, type, ...product1} = products[0];

  // Como hacer un insert de un producto
  // await prisma.product.create({
  //   data: {
  //     ...product1,
  //     categoryId: categoriesMap['shirts']
  //   }
  // })

  products.forEach(async (product) => {
    // Desestructura el producto para obtener el tipo (que se usará como clave en categoriesMap), las imágenes y el resto de los datos del producto.
    const { type, images, ...rest } = product;

    // Inserta el producto en la base de datos, utilizando el categoryId obtenido del mapa categoriesMap para asociarlo con la categoría correcta.
    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type],
      },
    });

    // Images
    // Se crea un array imagesData con la estructura que espera Prisma para las imágenes de producto.
    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));

    // Inserta las imágenes del producto en la base de datos.
    await prisma.productImage.createMany({
      data: imagesData,
    });
  });

  console.log("Seed ejecutado correctamente");
}

// Ejecuta la función main si el entorno de ejecución no es producción.
(() => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();
