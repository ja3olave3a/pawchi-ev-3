import Text from '../atoms/Text';
import ProductCard from './ProductCard';

function ProductGrid({ productos, cargando = false, error = '' }) {
  if (error) {
    return <Text role="alert" className="aviso aviso--error">{error}</Text>;
  }

  if (cargando) {
    return <Text role="status" className="aviso">Cargando productos…</Text>;
  }

  if (productos.length === 0) {
    return <Text className="aviso">Todavía no hay productos.</Text>;
  }

  return (
    <section className="grid">
      {productos.map((producto) => (
        <ProductCard key={producto.id} producto={producto} />
      ))}
    </section>
  );
}

export default ProductGrid;
