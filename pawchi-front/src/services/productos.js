// Datos de prueba. Cuando el backend de Spring Boot tenga el endpoint,
// reemplazar el contenido de obtenerProductos por un fetch a la API.
const PRODUCTOS = [
  { id: 1, nombre: 'Fantasy Pups', descripcion: 'Perritos con alas, coronas y capas de cuento.', precio: 12990, imagen: null },
  { id: 2, nombre: 'Foodies', descripcion: 'Perritos disfrazados de tu comida favorita.', precio: 12990, imagen: null },
  { id: 3, nombre: 'Everyday Chaos', descripcion: 'Los perritos más desordenados de la colección.', precio: 14990, imagen: null },
  { id: 4, nombre: 'Lineup Everyday Chaos', descripcion: 'Serie completa en una sola caja.', precio: 39990, imagen: null },
];

export function obtenerProductos() {
  return Promise.resolve(PRODUCTOS);
}
