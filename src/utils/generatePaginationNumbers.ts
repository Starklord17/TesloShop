// [1,2,3,4,5,...,7]
export const generatePaginationNumbers = (currentPage: number, totalPages: number) => {

  // Si el numero total de paginas es menor o igual a 5
  // vamos a mostrar todas las paginas sin puntos suspensivos
  if (totalPages <= 5) {
    return Array.from({length: totalPages}, (_, i) => i + 1); // [1,2,3,4,5]
  }

  // Si la pagina actual es menor o igual a 3, mostrar las primeras 3 paginas, puntos suspensivos, y la ultima pagina.
  if (currentPage <= 3) {
    return [1,2,3,'...',totalPages -1, totalPages]; // [1,2,3,...,7]
  }

  // Si la pagina actual esta entre las ultimas 3 paginas, mostrar las primeras 2 paginas, puntos suspensivos, y las ultimas 3 paginas.
  if (currentPage >= totalPages - 2) {
    return [1,2,'...',totalPages -2, totalPages -1, totalPages]; // [1,2,...,5,6,7]
  }

  // Si la página actual está en otro lugar medio, mostrar la primera página, puntos suspensivos, la página actual, puntos suspensivos, y la última página.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages
  ]

}