import Image from '../atoms/Image';
import Text from '../atoms/Text';
import Precio from '../molecules/Precio';

function ProductCard({ producto }) {
  return (
    <article className="card">
      <Image src={producto.imagen} alt={producto.nombre} />

      <div className="card-cuerpo">
        <Text tipo="h3">{producto.nombre}</Text>
        <Text>{producto.descripcion}</Text>
        <Precio valor={producto.precio} />
      </div>
    </article>
  );
}

export default ProductCard;
