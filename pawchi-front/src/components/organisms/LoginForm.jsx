import { useState } from 'react';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

function validar({ correo, clave }) {
  const errores = {};

  if (!/^\S+@\S+\.\S+$/.test(correo)) {
    errores.correo = 'Escribe un correo válido, por ejemplo nombre@correo.cl.';
  }

  if (clave.length < 6) {
    errores.clave = 'La clave debe tener al menos 6 caracteres.';
  }

  return errores;
}

function LoginForm({ onSubmit }) {
  const [valores, setValores] = useState({ correo: '', clave: '' });
  const [errores, setErrores] = useState({});

  function cambiar(evento) {
    const { name, value } = evento.target;
    setValores((anteriores) => ({ ...anteriores, [name]: value }));
  }

  function enviar(evento) {
    evento.preventDefault();

    const nuevosErrores = validar(valores);
    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      onSubmit(valores);
    }
  }

  return (
    <form className="form" noValidate onSubmit={enviar}>
      <FormField
        id="correo"
        name="correo"
        type="email"
        label="Correo"
        autoComplete="email"
        value={valores.correo}
        onChange={cambiar}
        error={errores.correo}
      />

      <FormField
        id="clave"
        name="clave"
        type="password"
        label="Clave"
        autoComplete="current-password"
        value={valores.clave}
        onChange={cambiar}
        error={errores.clave}
      />

      <Button type="submit">Ingresar</Button>
    </form>
  );
}

export default LoginForm;
