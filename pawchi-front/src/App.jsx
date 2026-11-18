import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/templates/MainLayout';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
