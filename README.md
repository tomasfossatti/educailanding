# Educai: landing

Sitio de cuatro páginas (Inicio, Resultados, Funcionamiento técnico, Quién soy) hecho con Next.js (App Router) y TypeScript. No tiene backend ni CMS: todos los textos viven en `content/`.

## Desarrollo

```bash
npm install
npm run dev
```

`npm run build` genera el sitio estático. `npm run typecheck` corre TypeScript.

## Dónde cambiar cada cosa

- Textos y datos de cada página: `content/inicio.ts`, `content/resultados.ts`, `content/tecnico.ts`, `content/quien-soy.ts`.
- Formulario, Instagram, correo, enlace de TEDx y fotos: `content/site.ts`.
- Colores, tipografías y espacios: los tokens están al principio de `app/globals.css`, con su versión para modo oscuro justo debajo (se activa sola según el sistema). El sitio es monocromático: `--accent` vale lo mismo que el color del texto y se usa en botones y en la serie destacada de los gráficos.
- Tipografía: Geist para todo el texto y Geist Mono solo para identificadores técnicos (por ejemplo `NO_DATA` o `DRAFT`).
- Grilla: 12 columnas en escritorio, 6 en tablet y 4 en celular (`.grid` con las clases `d-*` y `t-*`).
- Fotos: `public/photos/`.

## Despliegue

Producción: https://educai-sitio.vercel.app (proyecto `educai-sitio` en Vercel). Para volver a desplegar desde la terminal: `npx vercel deploy --prod`.

Pensado para Vercel. Las URL absolutas (canonical, sitemap, Open Graph) salen de `NEXT_PUBLIC_SITE_URL` si está definida, si no del dominio de producción de Vercel. Cuando haya dominio propio, conviene definir `NEXT_PUBLIC_SITE_URL`.
