# [TesloShop](https://max-teslo-shop.vercel.app/)

## Configuración del Entorno de Desarrollo

1. Clonar el repositorio:

    ```sh
    git clone https://github.com/Starklord17/teslo-shop.git
    cd teslo-shop
    ```

2. Crear una copia del archivo `.env.template` y renombrarlo a `.env`. Luego, configurar las variables de entorno según tu configuración local.

3. Instalar las dependencias:

    ```sh
    pnpm install
    ```

4. Levantar la base de datos con Docker:

    ```sh
    docker compose up -d
    ```

5. Ejecutar las migraciones de Prisma:

    ```sh
    npx prisma migrate dev
    ```

6. Ejecutar el seed para poblar la base de datos:

    ```sh
    pnpm run seed
    ```

7. Limpiar el `localStorage` del navegador para evitar conflictos de datos anteriores.

8. Correr el proyecto en modo desarrollo:

    ```sh
    pnpm run dev
    ```

---

## Deploy en Vercel

[https://max-teslo-shop.vercel.app/](https://max-teslo-shop.vercel.app/)

---

## Tecnologías Utilizadas

El proyecto utiliza las siguientes tecnologías y herramientas:

### Principales

- **Next.js**: Framework de React para el desarrollo de aplicaciones web.
- **React**: Biblioteca de JavaScript para la construcción de interfaces de usuario.
- **TypeScript**: Lenguaje de programación que se basa en JavaScript, añadiendo tipos estáticos.
- **Prisma**: ORM (Object-Relational Mapping) para bases de datos.
- **PostgreSQL**: Sistema de gestión de bases de datos relacional.
- **TailwindCSS**: Framework de CSS para estilos rápidos y eficientes.
- **Docker**: Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores.

### Autenticación y Autorización

- **NextAuth.js**: Solución de autenticación para Next.js.

### Gestión de Estado

- **Zustand**: Pequeña biblioteca de gestión de estado para React.

### Formularios y Validación

- **React Hook Form**: Biblioteca para el manejo de formularios en React.
- **Zod**: Biblioteca de validación y análisis de esquemas para TypeScript.

### Otros

- **clsx**: Utilidad para construir strings de clases condicionales.
- **bcryptjs**: Biblioteca para hashing de contraseñas.
- **Cloudinary**: Servicio de gestión de imágenes y videos en la nube.
- **Swiper**: Biblioteca para crear sliders y carruseles modernos.
- **React Icons**: Conjunto de íconos populares para React.
- **PayPal SDK**: Integración con PayPal para pagos.

### Desarrollo y Herramientas

- **ESLint**: Herramienta para encontrar y arreglar problemas en el código JavaScript.
- **PostCSS**: Herramienta para transformar estilos con plugins de JavaScript.
- **ts-node**: Herramienta para ejecutar TypeScript directamente en Node.js.
- **dotenv**: Biblioteca para cargar variables de entorno desde un archivo `.env`.

---

## Documentación

- [Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)
- [clsx](https://www.npmjs.com/package/clsx)
- [Swiper React](https://swiperjs.com/react)
- [Prisma](https://www.prisma.io/docs/getting-started/quickstart)
- [Best practice for instantiating Prisma Client with Next.js](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices#solution)
- [Route Segment Config](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config)
- [Dynamic Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Prisma Docs - Tx - example](https://www.prisma.io/docs/orm/prisma-client/queries/transactions#interactive-transactions)
- [Zod: TypeScript-first schema validation for product form](https://zod.dev/)

## Recursos

- [React Icons](https://react-icons.github.io/react-icons/)
- [Zustand - Gestor de estado](https://zustand-demo.pmnd.rs/)
- [Swiper](https://swiperjs.com/)
- [Open Graph Meta Tags](https://www.opengraph.xyz/)
- [Ngrok](https://ngrok.com/)
- [React Hook Form](https://react-hook-form.com/)
- [PayPal](https://developer.paypal.com/dashboard)
- [PayPal JS SDK](https://www.npmjs.com/package/@paypal/react-paypal-js)
- [paypal-js](https://www.npmjs.com/package/@paypal/paypal-js)
- [Cloudinary](https://cloudinary.com/)

**Next Auth**

- [Next.js Authentication Tutorial](https://nextjs.org/learn/dashboard-app/adding-authentication)
- [NextAuth.js Documentation](https://authjs.dev/reference/nextjs)
