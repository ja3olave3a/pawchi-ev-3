import Text from '../atoms/Text';

function Precio({ valor }) {
  return (
    <Text as="span" className="precio">
      ${valor.toLocaleString('es-CL')}
    </Text>
  );
}

export default Precio;
