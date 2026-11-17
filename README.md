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
- Colores, tipografías y espacios: los tokens están al principio de `app/globals.css`. El acento se cambia en `--accent` (alternativas: `#0F7C8A`, `#C2410C`, `#241F4A`).
- Fotos: `public/photos/`.

## Despliegue

Producción: https://educai-sitio.vercel.app (proyecto `educai-sitio` en Vercel). Para volver a desplegar desde la terminal: `npx vercel deploy --prod`.

Pensado para Vercel. Las URL absolutas (canonical, sitemap, Open Graph) salen de `NEXT_PUBLIC_SITE_URL` si está definida, si no del dominio de producción de Vercel. Cuando haya dominio propio, conviene definir `NEXT_PUBLIC_SITE_URL`.
