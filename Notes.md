# Sección 22: Creación de Ordenes

En esta sección vamos a trabajar creando las ordenes de compra de los clientes. Puntualmente veremos:

- Relaciones uno a uno
- Relaciones de uno a muchos
- Transacciones de base de datos
- Transacciones con Prisma
- Manejo de inventario
- Crear ordenes
- Maestro - Detalle
- Server actions
- Consideraciones a la hora de crear la orden basado en un carrito de compras

Es una sección técnicamente intermedia, ya que debemos de considerar muchos factores para crear una orden, y todo debe de salir bien a la hora de guardar en la base de datos y si algo falla, debemos de hacer un rollback de todo, aquí es donde las transacciones nos ayudarán.