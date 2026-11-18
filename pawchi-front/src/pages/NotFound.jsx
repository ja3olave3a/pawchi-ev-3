import Link from '../components/atoms/Link';
import Text from '../components/atoms/Text';

function NotFound() {
  return (
    <section className="page page--estrecha">
      <Text as="h1">Página no encontrada</Text>
      <Text>La dirección que escribiste no existe en Pawchi.</Text>
      <Link to="/">Volver al inicio</Link>
    </section>
  );
}

export default NotFound;
