import { useState } from 'react';
import Text from '../components/atoms/Text';
import LoginForm from '../components/organisms/LoginForm';

function Login() {
  const [enviado, setEnviado] = useState(false);

  return (
    <section className="page page--estrecha">
      <Text as="h1">Ingresar</Text>
      <LoginForm onSubmit={() => setEnviado(true)} />

      {enviado && (
        <Text role="status" className="aviso">
          Datos válidos. El inicio de sesión se conectará con el backend más adelante.
        </Text>
      )}
    </section>
  );
}

export default Login;
