import Link from '../atoms/Link';

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="marca">Pawchi</Link>

      <nav className="menu">
        <Link to="/">Inicio</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/login">Ingresar</Link>
      </nav>
    </header>
  );
}

export default Navbar;
