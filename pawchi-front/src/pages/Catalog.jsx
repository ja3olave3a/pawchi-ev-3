import Text from '../components/atoms/Text';
import ProductGrid from '../components/organisms/ProductGrid';
import { productos } from '../data/productos';

function Catalog() {
  return (
    <section className="page">
      <Text tipo="h1">Catálogo</Text>
      <ProductGrid productos={productos} />
    </section>
  );
}

export default Catalog;
