import Text from '../components/atoms/Text';
import Hero from '../components/organisms/Hero';
import ProductGrid from '../components/organisms/ProductGrid';
import { productos } from '../data/productos';

function Home() {
  return (
    <>
      <Hero
        titulo="Cajas sorpresa de perritos para coleccionar"
        texto="Elige una serie, abre la caja y descubre cuál te tocó."
        textoBoton="Ver catálogo"
        to="/catalogo"
      />

      <section className="page">
        <Text tipo="h2">Destacados</Text>
        <ProductGrid productos={productos.slice(0, 3)} />
      </section>
    </>
  );
}

export default Home;
