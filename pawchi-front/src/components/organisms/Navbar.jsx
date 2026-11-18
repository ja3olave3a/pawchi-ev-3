import Link from '../atoms/Link';

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" end className="navbar__marca">
        Pawchi
      </Link>

      <nav aria-label="Principal">
        <ul className="navbar__lista">
          <li>
            <Link to="/" end>Inicio</Link>
          </li>
          <li>
            <Link to="/catalogo">Catálogo</Link>
          </li>
          <li>
            <Link to="/login">Ingresar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
