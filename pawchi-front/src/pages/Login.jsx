import Text from '../components/atoms/Text';
import LoginForm from '../components/organisms/LoginForm';

function Login() {
  return (
    <section className="page">
      <Text tipo="h1">Ingresar</Text>
      <LoginForm />
    </section>
  );
}

export default Login;
