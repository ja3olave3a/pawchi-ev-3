import { Outlet } from 'react-router-dom';
import Text from '../atoms/Text';
import Navbar from '../organisms/Navbar';

function MainLayout() {
  return (
    <>
      <Navbar />

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <Text as="small">Pawchi Blind Boxes 2026</Text>
      </footer>
    </>
  );
}

export default MainLayout;
