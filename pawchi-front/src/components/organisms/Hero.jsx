import Link from '../atoms/Link';
import Text from '../atoms/Text';

function Hero({ titulo, texto, textoBoton, to }) {
  return (
    <section className="hero">
      <Text tipo="h1">{titulo}</Text>
      <Text>{texto}</Text>
      <Link to={to} className="btn">{textoBoton}</Link>
    </section>
  );
}

export default Hero;
