import Text from '../components/atoms/Text';
import Hero from '../components/organisms/Hero';
import ProductGrid from '../components/organisms/ProductGrid';
import useProductos from '../hooks/useProductos';

function Home() {
  const { productos, cargando, error } = useProductos();

  return (
    <>
      <Hero
        titulo="Cajas sorpresa de perritos para coleccionar"
        texto="Elige una serie, abre la caja y descubre cuál te tocó."
        cta={{ to: '/catalogo', label: 'Ver catálogo' }}
      />

      <section className="page">
        <Text as="h2">Destacados</Text>
        <ProductGrid productos={productos.slice(0, 3)} cargando={cargando} error={error} />
      </section>
    </>
  );
}

export default Home;
