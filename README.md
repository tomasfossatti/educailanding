# Educai: landing

Sitio de cuatro páginas (Inicio, Resultados, Cómo funciona, Quién soy) hecho con Next.js (App Router) y TypeScript. No tiene backend ni CMS: todos los textos viven en `content/`.

La especificación del diseño está en [`docs/rediseno-ux-ui.md`](docs/rediseno-ux-ui.md): el concepto "el cuaderno del docente" (papel, birome azul, lápiz rojo, resaltador y pizarrón).

## Desarrollo

```bash
npm install
npm run dev
```

`npm run build` genera el sitio estático. `npm run typecheck` corre TypeScript. Los dos tienen que terminar sin errores antes de abrir un PR.

## Dónde cambiar cada cosa

- Textos y datos de cada página: `content/inicio.ts`, `content/resultados.ts`, `content/tecnico.ts`, `content/quien-soy.ts`. Los números del test viven solo en `content/resultados.ts`; Inicio los importa.
- Formulario, Instagram, correo, WhatsApp, video de TEDx, fotos, material pendiente, textos del header, del pie y del 404: `content/site.ts`.
- Colores, tipografías, radios, sombras y espacios: los tokens están en el `:root` de `app/globals.css`. Ningún color va suelto fuera de ahí.
- Fotos: `public/photos/`.

### Marcas en los textos

En los strings de `content/` se pueden usar dos marcas, que interpreta `components/RichText.tsx`:

- `==texto==` → resaltador amarillo. Como máximo dos por página.
- `__texto__` → subrayado rojo hecho a mano.

### Tokens principales

| Token | Uso |
|---|---|
| `--paper`, `--sheet`, `--kraft` | Fondos: papel, fichas, sección cálida |
| `--ink`, `--ink-muted`, `--ink-soft` | Texto principal, secundario y notas (`--ink-soft` nunca debajo de 15 px) |
| `--accent` | Azul birome: botones, links y datos destacados |
| `--red` | Lápiz rojo: solo marcas, notas al margen y márgenes. Nunca en botones ni errores |
| `--highlight` | Resaltador |
| `--board`, `--chalk`, `--chalk-muted`, `--chalk-yellow` | Secciones de pizarrón (como máximo dos por página, nunca seguidas) |
| `--font-display`, `--font-body`, `--font-mono` | Fraunces, Inter y monoespaciada (solo en Cómo funciona) |
| `--fs-*` | Escala tipográfica fluida de 360 a 1280 px |

## Material pendiente

Cada bloque que depende de material se construyó, pero no se muestra mientras el dato sea `null` (o la lista esté vacía). Para activarlo, poné el archivo en su lugar y completá el valor en `content/site.ts`.

| Falta | Dónde va | Qué se activa |
|---|---|---|
| Captura real del panel docente, PNG 2x, sin datos reales de estudiantes | `public/photos/panel-docente.png` y `MATERIAL.panelDocente` | Reemplaza el mock en código del hero y de «Lo que vas a ver vos» por la captura, en un marco de navegador |
| Foto real de la abuela o la mamá dando clase, o un parcial corregido en rojo | `public/photos/` y `MATERIAL.familiaDocente` (y `MATERIAL.familiaDocenteCaption` con nombre y año) | La foto en «Por qué me importa» (Inicio) y la sección «De dónde vengo» (Quién soy) |
| Retrato cuadrado de Tomás | `public/photos/` y `MATERIAL.tomasRetrato` | Foto circular de 72 px con «Te escribimos nosotros, no un bot.» en la banda de cierre de Inicio |
| Póster del congreso Innova Educa 21 | `public/photos/` y `MATERIAL.posterInnovaEduca` | La sección del póster en Resultados |
| Fotos del aula del piloto, con consentimiento | `public/photos/` y `MATERIAL.aulaPiloto` | Reservado para el piloto (todavía sin bloque) |
| Testimonio real de un docente del piloto, con autorización | `MATERIAL.testimonial` (cita, nombre, materia e institución, foto y/o ID de video opcionales) | La sección «Lo que dice un docente que lo probó» en Inicio |
| Video de presentación de 60 a 90 segundos | `MATERIAL.videoPresentacion` (ID de YouTube) | El bloque «Educai en 90 segundos» entre «Cómo funciona» y «Para vos» en Inicio |
| Número de WhatsApp | `WHATSAPP_URL` (`https://wa.me/<número>` con texto prellenado) | WhatsApp en el pie y el botón «O escribinos por WhatsApp» en las bandas de cierre |
| Notas manuscritas escaneadas | `public/notas/*.svg` | Reemplazarían el texto de las notas al margen (hoy no hay código que las use) |

### Datos por confirmar

- Materia de ejemplo del panel del hero: «Metodología de la investigación · Comisión B» (`teacherPanel.course` en `content/inicio.ts`).
- Cuánto tiempo lleva cargar los apuntes (paso 1 de «Cómo funciona»). Hasta confirmarlo, no se menciona tiempo.
- Respuestas de tres preguntas frecuentes, hoy con `answer: null` y ocultas: «¿Cuánto tiempo me lleva prepararlo?», «¿Mis estudiantes no van a usarlo para que la IA les haga la tarea?» y «¿Mis materiales siguen siendo míos?».

## Despliegue

Producción: https://educai-sitio.vercel.app (proyecto `educai-sitio` en Vercel). Para volver a desplegar desde la terminal: `npx vercel deploy --prod`.

Pensado para Vercel. Las URL absolutas (canonical, sitemap, Open Graph) salen de `NEXT_PUBLIC_SITE_URL` si está definida, si no del dominio de producción de Vercel. Cuando haya dominio propio, conviene definir `NEXT_PUBLIC_SITE_URL`.
