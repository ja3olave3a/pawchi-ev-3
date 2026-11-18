import { useState } from 'react';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import FormField from '../molecules/FormField';

function LoginForm() {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [mensaje, setMensaje] = useState('');

  function enviar(evento) {
    evento.preventDefault();

    if (!correo.includes('@')) {
      setMensaje('Escribe un correo válido.');
      return;
    }

    if (clave.length < 6) {
      setMensaje('La clave debe tener al menos 6 caracteres.');
      return;
    }

    setMensaje('Datos válidos. Falta conectar con el backend.');
  }

  return (
    <form onSubmit={enviar}>
      <FormField
        id="correo"
        label="Correo"
        value={correo}
        onChange={(evento) => setCorreo(evento.target.value)}
      />

      <FormField
        id="clave"
        label="Clave"
        type="password"
        value={clave}
        onChange={(evento) => setClave(evento.target.value)}
      />

      <Button type="submit">Ingresar</Button>
      <Text className="mensaje">{mensaje}</Text>
    </form>
  );
}

export default LoginForm;
