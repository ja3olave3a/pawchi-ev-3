# Pawchi – Frontend

Frontend de la Evaluación Parcial 3 (FullStack 2), hecho con React + Vite.
El backend (Spring Boot) está en la carpeta `../pawchi`.

## Cómo ejecutarlo

```bash
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build
```

## Arquitectura: atomic design

```
src/
├── components/
│   ├── atoms/        Button, Input, Label, Text, Image, Link
│   ├── molecules/    FormField (Label + Input + error), Precio
│   ├── organisms/    Navbar, Hero, ProductCard, ProductGrid, LoginForm
│   └── templates/    MainLayout (Navbar + contenido + footer)
├── pages/            Home, Catalog, Login, NotFound
├── hooks/            useProductos
├── services/         productos (datos de prueba; luego llamadas a la API)
└── styles/           global.css (variables y estilos)
```

Reglas del equipo:

- Las etiquetas de texto y formulario (`h1`, `p`, `label`, `input`, `button`) solo se escriben dentro de `atoms/`.
- Una molécula combina átomos; un organismo combina moléculas y átomos.
- Las páginas no tienen estilos propios: eligen un template y ensamblan organismos con datos.
- Las llamadas al backend viven en `services/` y los hooks las exponen a las páginas.
