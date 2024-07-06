import prisma from "../lib/prisma";
import { initialData } from "./seed";

async function main() {
  // console.log(initialData);

  // await Promise.all([
    // 1. Borrar registros previos
    // prisma.productImage.deleteMany(),
  //   prisma.product.deleteMany(),
  //   prisma.category.deleteMany(),
  // ]);

  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

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

  const categoriesDB = await prisma.category.findMany(); // Se obtienen las categorias de la base de datos
  // console.log(categoriesDB);

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

  products.forEach( async(product) => {
    
    const { type, images, ...rest } = product;

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type]
      }
    });

    // Images
    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id
    }));

    await prisma.productImage.createMany({
      data: imagesData
    });

  });

  console.log('Seed ejecutado correctamente');
  
}

(() => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();
