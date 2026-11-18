import Text from '../atoms/Text';
import Navbar from '../organisms/Navbar';

function MainLayout({ children }) {
  return (
    <div>
      <Navbar />

      <main className="main">{children}</main>

      <footer className="footer">
        <Text>Pawchi Blind Boxes 2026</Text>
      </footer>
    </div>
  );
}

export default MainLayout;
