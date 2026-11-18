import Image from '../atoms/Image';
import Text from '../atoms/Text';
import Precio from '../molecules/Precio';

function ProductCard({ producto }) {
  return (
    <article className="card">
      <Image src={producto.imagen} alt={`Caja ${producto.nombre}`} className="card__img" />

      <div className="card__cuerpo">
        <Text as="h3" className="card__titulo">{producto.nombre}</Text>
        <Text className="card__descripcion">{producto.descripcion}</Text>
        <Precio valor={producto.precio} />
      </div>
    </article>
  );
}

export default ProductCard;
