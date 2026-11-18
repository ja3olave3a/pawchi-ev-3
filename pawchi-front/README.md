# Pawchi – Frontend

Frontend de la Evaluación Parcial 3 (FullStack 2), hecho con React + Vite.
El backend (Spring Boot) está en la carpeta `../pawchi`.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

## Estructura (atomic design)

```
src/
├── components/
│   ├── atoms/        Button, Input, Label, Text, Image, Link
│   ├── molecules/    FormField (Label + Input), Precio
│   ├── organisms/    Navbar, Hero, ProductCard, ProductGrid, LoginForm
│   └── templates/    MainLayout (Navbar + contenido + footer)
├── pages/            Home, Catalog, Login
├── data/             productos de prueba
└── styles/           global.css
```

- Los átomos son los elementos básicos (botón, input, texto, imagen).
- Las moléculas juntan átomos (por ejemplo, Label + Input).
- Los organismos juntan moléculas y átomos (por ejemplo, la tarjeta de producto).
- El template define el diseño general de la página.
- Las páginas usan el template y los organismos.
