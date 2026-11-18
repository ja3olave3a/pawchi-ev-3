import Link from '../atoms/Link';
import Text from '../atoms/Text';

function Hero({ titulo, texto, cta }) {
  return (
    <section className="hero">
      <div className="hero__texto">
        <Text as="h1" className="hero__titulo">{titulo}</Text>
        <Text className="hero__lead">{texto}</Text>
        <Link to={cta.to} className="btn btn--accent">{cta.label}</Link>
      </div>

      <div className="hero__caja" aria-hidden="true">
        <Text as="span">?</Text>
      </div>
    </section>
  );
}

export default Hero;
