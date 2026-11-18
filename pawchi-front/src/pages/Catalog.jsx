import Text from '../components/atoms/Text';
import ProductGrid from '../components/organisms/ProductGrid';
import useProductos from '../hooks/useProductos';

function Catalog() {
  const { productos, cargando, error } = useProductos();

  return (
    <section className="page">
      <Text as="h1">Catálogo</Text>
      <ProductGrid productos={productos} cargando={cargando} error={error} />
    </section>
  );
}

export default Catalog;
