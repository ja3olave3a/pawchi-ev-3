import ProductCard from './ProductCard';

function ProductGrid({ productos }) {
  return (
    <section className="grid">
      {productos.map((producto) => (
        <ProductCard key={producto.id} producto={producto} />
      ))}
    </section>
  );
}

export default ProductGrid;
