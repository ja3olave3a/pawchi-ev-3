import { useEffect, useState } from 'react';
import { obtenerProductos } from '../services/productos';

function useProductos() {
  const [estado, setEstado] = useState({ productos: [], cargando: true, error: '' });

  useEffect(() => {
    let activo = true;

    obtenerProductos()
      .then((productos) => {
        if (activo) setEstado({ productos, cargando: false, error: '' });
      })
      .catch(() => {
        if (activo) {
          setEstado({ productos: [], cargando: false, error: 'No se pudieron cargar los productos. Intenta de nuevo.' });
        }
      });

    return () => {
      activo = false;
    };
  }, []);

  return estado;
}

export default useProductos;
