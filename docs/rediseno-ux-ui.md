# Rediseño UX/UI de la landing de Educai

Especificación para implementar de punta a punta. Está escrita para que la ejecute una IA (o una persona) que trabaja sobre este repositorio. Leela entera antes de tocar código.

---

## 0. Cómo usar este documento

1. Leé `CLAUDE.md`, `README.md`, `content/*.ts`, `app/globals.css`, `app/layout.tsx`, todas las páginas de `app/` y todos los componentes de `components/`. Este documento asume que conocés ese código.
2. Respetá las **reglas duras** (sección 1). Están por encima de cualquier otra indicación del documento.
3. Implementá en el orden de la sección 14. Cada fase tiene que dejar el sitio compilando.
4. Al terminar, recorré la checklist de aceptación (sección 15) y abrí un PR a `main` (nunca pushees directo a `main`).

Convención del documento:

- `TODO(material)`: depende de un archivo o dato que todavía no existe. El componente se construye igual, pero **no se renderiza** mientras el dato sea `null`.
- `TODO(confirmar)`: un dato que Tomás tiene que confirmar. No se publica hasta que se confirme.
- Los textos entre comillas latinas «así» o en bloques de cita son **copy final**: usalos tal cual.

---

## 1. Reglas duras

1. **No inventes datos.** Ni números, ni testimonios, ni nombres, ni logos, ni tiempos ("en 15 minutos"), ni gratuidad ("gratis"), ni plazos ("te respondemos en 48 h"). Todo dato tiene que salir de `content/*.ts` actuales o de este documento. Si falta, usá `TODO(material)` o `TODO(confirmar)` y ocultá el bloque.
2. **Conservá la honestidad del sitio.** Todos los descargos actuales siguen visibles: "Observación sin grupo control. No atribuimos la mejora a Educai.", "El reparto a docentes todavía no está implementado…", "Los insights agregados y el mapa de temas todavía no se evaluaron…", "especificado, todavía no construido", "Vista de ejemplo con datos ilustrativos." Podés cambiar dónde y cómo se ven, nunca borrarlos ni suavizarlos.
3. **Español rioplatense con voseo** en todos los textos. Le hablás de **vos** al docente.
4. **Todos los textos viven en `content/`.** Ningún string visible queda hardcodeado en un componente o página (salvo `aria-label` genéricos de componentes reutilizables).
5. **Todos los colores, tipografías, radios, sombras y espacios son tokens en `app/globals.css`.** Ningún hex suelto fuera de `:root`, salvo dentro de SVG inline que use `currentColor` o `var(--…)`.
6. **Sin dependencias nuevas de npm.** Todo se hace con Next.js, React, CSS y SVG inline. `next/font/google` y `next/og` ya vienen con Next.
7. **`npm run build` y `npm run typecheck` sin errores** antes de abrir el PR.
8. **No borres la página de Funcionamiento técnico ni su contenido.** Se reestiliza; el contenido técnico queda.

---

## 2. Contexto: para quién diseñamos

### 2.1 Lector principal: el docente

Docente de una institución **privada** (universidad o secundario), de unos 35 a 60 años, en Córdoba o el interior del país. Probablemente abre el link desde un Android de gama media que le pasaron por WhatsApp, en un grupo de docentes o de la institución.

- **Le duele:** el silencio cuando pregunta «¿se entendió?». No saber si seguir con el programa o volver a explicar. Preparar clases hasta las once de la noche y cobrar lo mismo. Sentir que sus estudiantes aprenden más con YouTube o ChatGPT que en su clase.
- **Le da miedo:** que la IA lo reemplace, que le sume trabajo, perder el control de lo que se enseña, quedar como "el que no sabe de tecnología", que se vigile a sus estudiantes.
- **Quiere:** saber qué pasa en la cabeza de sus estudiantes, que su esfuerzo se note y valga más, conservar la decisión pedagógica.

### 2.2 Lector secundario: la institución

Coordinador académico, director o decano. Le importa que los estudiantes **quieran ir a clase** (para una institución que cobra cuota, «¿para qué ir a clase?» es una pregunta existencial), la privacidad, el riesgo y que lo que se adopte se use.

### 2.3 Lector terciario

Mentores, jurados, prensa. Les importan el rigor, el estado real del producto y quién está detrás. Para ellos están *Resultados*, *Funcionamiento técnico* y *Quién soy*.

### 2.4 El trabajo emocional del sitio

Llevar al docente de **"esto me va a reemplazar o me va a dar más laburo"** a **"esto me devuelve lo que el silencio del aula me quita, y lo hizo alguien que viene de una familia de docentes"**.

### 2.5 Diagnóstico del diseño actual

| Funciona, se conserva | Juega en contra, se cambia |
|---|---|
| Voseo y tono personal | Violeta `#5B3FD0` + Space Grotesk + secciones oscuras violetas: lenguaje visual de startup de IA |
| La historia de la mamá y la abuela | Radios de 16 a 28 px y tarjetas lilas: se ve como app, no como aula |
| Las dos columnas "Docentes / Estudiantes" | Tercera persona ("el docente", "su clase") |
| La honestidad y los descargos | Jerga en Inicio: onboarding, feedback, insights, patrones |
| Estructura de cuatro páginas | El hero muestra el chat del estudiante y no lo que ve el docente, que es quien decide |
| | Textos densos dentro de tarjetas; eyebrows en mayúsculas espaciadas |
| | Gráfico de columnas abstracto donde podría verse cada estudiante |

---

## 3. Concepto rector: "el cuaderno del docente"

La metáfora sale del propio relato del sitio: **papel, birome azul, el lápiz rojo de la abuela, el resaltador y el pizarrón**.

- Tiene que verse **editorial y cuidado**, como una revista cultural o una editorial universitaria que entiende el aula.
- **No** tiene que verse kitsch: nada de manzanas, birretes, lápices dibujados, fuentes "escolares", Comic Sans, texturas de tiza fuertes o papel arrugado.
- **No** tiene que verse como startup de IA: nada de degradés brillantes, glassmorphism, neón, destellos ✨, cerebros con circuitos, robots, chicos con visores de realidad virtual, partículas, cursores custom ni efecto "máquina de escribir" de chatbot.

Tres reglas de uso del color que definen el concepto:

1. **Azul birome** es el color de acción (botones, links, datos destacados).
2. **Rojo lápiz** es la **marca del docente**: subrayados, círculos, notas al margen, línea de margen en citas. **Nunca** en botones, nunca para errores, nunca para fondos.
3. **Amarillo resaltador** se usa detrás de **una o dos frases por página como máximo**.

---

## 4. Tokens de diseño

Reemplazá **todo** el bloque `:root` de `app/globals.css` por este. Después migrá cada regla del archivo para que use estos nombres. Los tokens violetas (`--violet-light`, `--dark`, `--dark-card`, `--dark-border*`, `--text-on-dark-*`, `--bar-muted`, `--chip-border`, `--tint` lila) desaparecen.

```css
:root {
  /* Papel y tinta */
  --paper: #fbf8f2;          /* fondo general */
  --sheet: #ffffff;          /* fichas, tarjetas, paneles */
  --kraft: #f3eee2;          /* sección alternativa cálida */
  --ink: #1e2b4a;            /* texto principal (13,2:1 sobre papel) */
  --ink-muted: #3f4a66;      /* texto secundario (8,3:1 sobre papel) */
  --ink-soft: #5a6380;       /* notas, leyendas (5,6:1 sobre papel) */
  --rule: rgba(30, 43, 74, 0.14);        /* filetes y bordes */
  --rule-strong: rgba(30, 43, 74, 0.28);

  /* Acción: azul birome */
  --accent: #1f3fa8;         /* 8,5:1 sobre papel; blanco encima 9:1 */
  --accent-hover: #18328a;
  --accent-wash: #eaf0fb;    /* fondo muy suave para resaltar datos */

  /* Marca del docente: lápiz rojo */
  --red: #b3261e;            /* 6,2:1 sobre papel */
  --red-soft: rgba(179, 38, 30, 0.35);

  /* Resaltador */
  --highlight: #ffe873;      /* tinta encima 11,4:1 */

  /* Pizarrón (reemplaza las secciones oscuras violetas) */
  --board: #1f3b33;
  --board-raised: #2a4a40;
  --board-rule: rgba(255, 255, 255, 0.14);
  --chalk: #f4f1e8;          /* texto principal sobre pizarrón */
  --chalk-muted: #c9d6cf;    /* 8,1:1 sobre pizarrón */
  --chalk-yellow: #f2d16b;   /* eyebrows y datos sobre pizarrón, 8,2:1 */

  /* Tipografía */
  --font-display: var(--font-fraunces), "Fraunces", Georgia, "Times New Roman", serif;
  --font-body: var(--font-inter), "Inter", system-ui, sans-serif;
  --font-mono: ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;

  /* Escala tipográfica fluida (mobile 360 px → desktop 1280 px) */
  --fs-display: clamp(2.5rem, 1.55rem + 3.9vw, 4.25rem);  /* H1 Inicio: 40 → 68 */
  --fs-h1: clamp(2.25rem, 1.6rem + 2.8vw, 3.5rem);        /* H1 internas: 36 → 56 */
  --fs-h2: clamp(1.875rem, 1.45rem + 1.9vw, 2.875rem);    /* 30 → 46 */
  --fs-h3: clamp(1.25rem, 1.12rem + 0.55vw, 1.5rem);      /* 20 → 24 */
  --fs-quote: clamp(1.5rem, 1.15rem + 1.5vw, 2.25rem);    /* 24 → 36 */
  --fs-stat: clamp(2.75rem, 2rem + 3vw, 4.5rem);          /* 44 → 72 */
  --fs-lead: clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem);/* 18 → 21 */
  --fs-body: 1.125rem;                                    /* 18 */
  --fs-small: 1rem;                                       /* 16 */
  --fs-note: 0.9375rem;                                   /* 15 */
  --fs-eyebrow: 0.9375rem;                                /* 15 */

  /* Formas */
  --radius-xs: 4px;    /* chips de código, marcas */
  --radius-sm: 6px;    /* fichas chicas */
  --radius: 8px;       /* tarjetas y botones */
  --radius-lg: 12px;   /* paneles del producto, fotos */
  --radius-xl: 16px;   /* banda de cierre */
  --radius-pill: 999px;

  --shadow-paper: 0 1px 0 rgba(30, 43, 74, 0.04), 0 10px 24px -16px rgba(30, 43, 74, 0.28);
  --shadow-lift: 0 1px 0 rgba(30, 43, 74, 0.05), 0 16px 32px -18px rgba(30, 43, 74, 0.34);

  /* Layout */
  --container: 1200px;
  --gutter: 32px;
  --section-y: 112px;
  --measure: 66ch;

  /* Movimiento */
  --ease: cubic-bezier(0.2, 0.7, 0.2, 1);
  --dur-fast: 150ms;
  --dur: 300ms;
  --dur-draw: 700ms;

  color-scheme: light;
}

@media (max-width: 640px) {
  :root {
    --gutter: 20px;
    --section-y: 72px;
  }
}
```

Contrastes verificados (WCAG): tinta/papel 13,2; tinta-muted/papel 8,3; tinta-soft/papel 5,6; azul/papel 8,5; blanco/azul 9,0; rojo/papel 6,2; tiza/pizarrón ≥ 12; tiza-muted/pizarrón 8,1; amarillo tiza/pizarrón 8,2; tinta/resaltador 11,4. **No uses `--ink-soft` para texto de menos de 15 px.**

No hay modo oscuro: el sitio es papel. Dejá `color-scheme: light` y `themeColor: "#FBF8F2"` en `app/layout.tsx`.

### 4.1 Mapeo de tonos de sección

`components/Section.tsx` pasa a aceptar `tone: "paper" | "sheet" | "kraft" | "board"` (default `"paper"`).

| Tono viejo | Tono nuevo |
|---|---|
| `bg` | `paper` |
| `white` | `sheet` |
| `tint` | `kraft` |
| `ink`, `dark` | `board` |

`board` agrega la clase `on-board`, que cambia texto a `--chalk`, secundarios a `--chalk-muted`, eyebrows y datos a `--chalk-yellow`, bordes a `--board-rule` y el foco a `outline-color: var(--chalk)`.

**Regla de ritmo:** nunca dos secciones `board` seguidas, y como máximo **dos** secciones `board` por página. Entre secciones del mismo tono, separá con un filete de 1 px `--rule` a todo el ancho del contenedor.

---

## 5. Tipografía

### 5.1 Fuentes

En `app/layout.tsx` reemplazá Space Grotesk por **Fraunces** y mantené **Inter**:

```tsx
import { Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],   // fuente variable: no pases "weight"
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});
```

Si `axes` da problemas en el build, usá `weight: ["500", "600"]` sin `axes` y seguí. La alternativa a Fraunces, si la descartan, es **Newsreader** con la misma configuración.

Cambiá también `<html lang="es">` por `<html lang="es-AR">`.

### 5.2 Reglas

| Elemento | Fuente | Tamaño | Peso | Interlineado | Tracking | Otros |
|---|---|---|---|---|---|---|
| H1 de Inicio | display | `--fs-display` | 560 | 1.04 | -0.02em | `font-variation-settings: "SOFT" 50, "opsz" 144`; `text-wrap: balance` |
| H1 de internas | display | `--fs-h1` | 560 | 1.06 | -0.02em | ídem |
| H2 | display | `--fs-h2` | 560 | 1.1 | -0.015em | `"SOFT" 50`; `text-wrap: balance` |
| H3 | display | `--fs-h3` | 600 | 1.25 | -0.005em | |
| Cita grande | display **itálica** | `--fs-quote` | 400 | 1.3 | -0.01em | |
| Cifras (stats) | display | `--fs-stat` | 500 | 1 | -0.03em | `font-variant-numeric: lining-nums tabular-nums` |
| Lead | body | `--fs-lead` | 400 | 1.55 | 0 | color `--ink-muted`, `max-width: 38em` |
| Cuerpo | body | `--fs-body` | 400 | 1.65 | 0 | `max-width: var(--measure)`; `text-wrap: pretty` |
| Texto de tarjeta | body | `--fs-small` | 400 | 1.6 | 0 | |
| Nota / descargo | body | `--fs-note` | 400 | 1.55 | 0 | color `--ink-soft` |
| Eyebrow | body | `--fs-eyebrow` | 600 | 1.4 | 0.01em | **sin mayúsculas forzadas**, ver 5.3 |
| Nota al margen | display **itálica** | 1.0625rem | 400 | 1.35 | 0 | color `--red`, ver 7.4 |
| Código / estados técnicos | mono | 0.9375rem | 500 | 1.4 | 0 | solo en *Funcionamiento técnico* |
| Botón | body | 1.0625rem | 600 | 1.2 | 0 | |
| Nav | body | 1rem | 500 | 1.2 | 0 | |

### 5.3 Eyebrow

Se elimina el `text-transform: uppercase`. El eyebrow queda en minúscula de oración, peso 600, color `--accent` (o `--chalk-yellow` sobre pizarrón), precedido por un trazo rojo corto:

```css
.eyebrow { display: inline-flex; align-items: center; gap: 10px; }
.eyebrow::before {
  content: ""; width: 22px; height: 2px; border-radius: 2px;
  background: var(--red);
}
.on-board .eyebrow::before { background: var(--chalk-yellow); }
```

El `.label` (etiquetas chicas dentro de componentes) también pierde las mayúsculas: 0.875rem, peso 600, `--ink-soft`.

### 5.4 Resaltador

```css
.mark {
  background: linear-gradient(transparent 58%, var(--highlight) 58%, var(--highlight) 92%, transparent 92%);
  padding-inline: 0.08em;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
```

Para poder resaltar palabras sin meter HTML en `content/`, usá esta convención: en los strings de contenido, el fragmento a resaltar va entre `==dobles iguales==`, y el fragmento a subrayar en rojo entre `__dobles guiones bajos__`. Creá `components/RichText.tsx`, que parsea **solo** esas dos marcas (sin `dangerouslySetInnerHTML`) y devuelve `<mark className="mark">` y `<Scribble variant="underline">` respectivamente.

---

## 6. Base, layout y elementos generales

- `body`: fondo `--paper`, color `--ink`, `font-size: var(--fs-body)`, `line-height: 1.65`.
- `.container`: `max-width: var(--container)`, padding lateral `--gutter`.
- Sección: `padding-block: var(--section-y)`. Hero de Inicio: 48 px arriba, 112 px abajo (mobile: 24 / 72).
- Ancho de lectura: todo párrafo largo con `max-width: var(--measure)`.
- **Links dentro de texto: subrayados siempre** (los docentes esperan ver el subrayado): `text-decoration: underline; text-decoration-thickness: 1.5px; text-underline-offset: 3px; text-decoration-color: var(--red-soft);` y en hover `text-decoration-color: var(--red)`.
- `.text-link` (links sueltos tipo "Ver resultados →"): color `--accent`, peso 600, la flecha `→` en un `<span aria-hidden>` que se desplaza 3 px a la derecha en hover.
- Foco: `outline: 2px solid var(--accent); outline-offset: 3px; border-radius: var(--radius-xs)`.
- `::selection { background: var(--highlight); color: var(--ink); }`
- Mantené el bloque `prefers-reduced-motion` y el `skip-link` (reestilizalo con `--ink` y `--radius`).
- Eliminá las clases utilitarias de tamaños sueltos que queden sin uso (`.h2--38`, `.h3--26`, etc.). La escala de la sección 5 las reemplaza. Mantené las utilidades de layout (`stack`, `row`, `gap-*`, `basis-*`) que sigan en uso.

---

## 7. Componentes

### 7.1 Botones (`components/Button.tsx`)

Variantes: `primary | secondary | chalk | quiet`.

| Variante | Fondo | Texto | Borde | Hover | Uso |
|---|---|---|---|---|---|
| `primary` | `--accent` | blanco | — | `--accent-hover`, la flecha se mueve 3 px | CTA principal |
| `secondary` | transparente | `--ink` | 1.5px `--ink` | fondo `--kraft` | CTA secundario |
| `chalk` | `--chalk` | `--ink` | — | fondo `#ffffff` | CTA sobre pizarrón o sobre la banda azul |
| `quiet` | transparente | `--accent` | — | subrayado | acciones terciarias |

- Alto mínimo **48 px**; padding 14 px × 24 px; `border-radius: var(--radius)`. **Nada de píldoras.**
- `:active { transform: translateY(1px); }`
- Prop nueva `arrow?: boolean` (default `true` en `primary`), que agrega `<span aria-hidden="true" className="btn__arrow">→</span>`.
- Links externos: mantené `target="_blank" rel="noopener"` y agregá un texto oculto `<span className="sr-only"> (se abre en una pestaña nueva)</span>`.
- Debajo del CTA principal del hero y de la banda de cierre va una **microcopy de riesgo bajo** (sección 9).

### 7.2 Tarjeta = "Ficha" (`components/Card.tsx`)

Variantes: `sheet | kraft | outline | board | note`.

- `sheet`: fondo `--sheet`, borde 1px `--rule`, `--radius`, `--shadow-paper`, padding 28 px (mobile 22 px).
- `kraft`: fondo `--kraft`, sin borde, `--radius`.
- `outline`: transparente, borde 1px `--rule-strong`, `--radius`.
- `board`: fondo `--board-raised`, borde 1px `--board-rule`, `--radius`.
- `note`: ficha con **línea de margen roja** a la izquierda (ver 7.3), sin sombra, fondo `--sheet`.
- Tarjetas clickeables (si hay): hover con `transform: translateY(-2px)` y `--shadow-lift`, `transition: var(--dur-fast) var(--ease)`.
- Dentro de una ficha: título H3, texto `--fs-small`, **máximo unas 45 palabras**. Si un texto actual supera eso, acortalo en `content/` sin perder información, o pasá el texto a un párrafo fuera de la ficha.

### 7.3 Cita con margen de cuaderno (`components/MarginQuote.tsx`, nuevo)

Reemplaza a `.callout--quote` y a los `blockquote` actuales.

```css
.margin-quote {
  position: relative;
  padding: 8px 0 8px 32px;
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--fs-quote);
  line-height: 1.3;
  max-width: 28em;
}
.margin-quote::before {            /* el margen rojo del cuaderno */
  content: ""; position: absolute; left: 0; top: 0; bottom: 0;
  width: 2px; background: var(--red);
}
.on-board .margin-quote::before { background: var(--chalk-yellow); }
.margin-quote cite { display: block; margin-top: 16px; font: 500 var(--fs-note)/1.4 var(--font-body); font-style: normal; color: var(--ink-soft); }
```

Props: `quote: string`, `cite?: string`. Usá comillas latinas «» del contenido tal cual.

### 7.4 Marcas a mano (`components/Scribble.tsx`, nuevo)

SVG inline con `stroke="currentColor"`, color `--red` por defecto, `stroke-width: 2.25`, `stroke-linecap: round`, `fill: none`, `vector-effect: non-scaling-stroke`, `aria-hidden="true"`.

Variantes y trazados de partida (ajustalos a ojo para que se vean hechos a mano, levemente irregulares):

```tsx
// underline: se posiciona absoluto debajo del texto (bottom: -0.18em; height: 0.35em; width: 100%)
<svg viewBox="0 0 200 12" preserveAspectRatio="none"><path d="M2 8 C 40 3, 80 11, 120 6 S 180 4, 198 7" /></svg>

// circle: envuelve una palabra (inset: -0.28em -0.4em)
<svg viewBox="0 0 210 64" preserveAspectRatio="none"><path d="M118 7 C 52 2, 6 16, 9 35 C 12 55, 82 61, 142 54 C 197 48, 207 20, 164 9 C 136 3, 96 5, 72 12" /></svg>

// arrow: flecha curva para conectar bloques (ancho 120 px aprox.)
<svg viewBox="0 0 120 60"><path d="M4 10 C 40 4, 86 14, 104 46" /><path d="M92 40 L 105 48 L 108 33" /></svg>

// check y question: para el bloque "Lo que sabemos / Lo que todavía no"
<svg viewBox="0 0 24 24"><path d="M4 13 C 7 15, 8 17, 10 19 C 13 13, 16 8, 21 4" /></svg>
<svg viewBox="0 0 24 24"><path d="M8 8 C 8 4, 16 3, 16 8 C 16 11, 12 11, 12 14" /><path d="M12 19 L 12 19.5" /></svg>
```

**Animación de dibujo:** cuando la marca entra en pantalla, se dibuja una sola vez con `stroke-dasharray`/`stroke-dashoffset` en `--dur-draw`. Ver la sección 11 para el mecanismo. Con `prefers-reduced-motion: reduce` aparece ya dibujada.

**Cantidad:** como máximo **3 marcas a mano por pantalla**. Si se usan de más, el recurso se gasta.

**Notas al margen (`components/MarginNote.tsx`, nuevo):** texto corto (máximo 8 palabras) en Fraunces itálica, color `--red`, con una `Scribble variant="arrow"` que apunta al elemento que comenta. En desktop se posiciona al costado del panel; en mobile pasa debajo del elemento, alineado a la izquierda, sin flecha. Si en el futuro existen escaneos de notas manuscritas reales (`TODO(material)`: `public/notas/*.svg`), se reemplaza el texto por la imagen, con el texto como `alt`.

### 7.5 Chips (`components/Chip.tsx`)

Se mantienen en píldora (son etiquetas), pero con estética de etiqueta escolar: fondo `--sheet`, borde 1px `--rule-strong`, texto `--ink`, 0.9375rem, peso 500, padding 6 × 12. Variante `done` (fondo `--accent-wash`, borde `--accent` al 30 %) y `pending` (borde punteado `1px dashed var(--rule-strong)`, texto `--ink-muted`). En *Funcionamiento técnico*, los chips de stack usan `--font-mono`.

### 7.6 Header (`components/Header.tsx`)

- `position: sticky; top: 0; z-index: 20;` fondo `--paper` al 92 % con `backdrop-filter: saturate(1.2) blur(6px)` (con fallback de fondo sólido si no hay soporte). Cuando el usuario scrollea más de 8 px, aparece un filete inferior de 1 px `--rule` (usá un `IntersectionObserver` sobre un centinela, no un listener de scroll).
- Alto: 72 px desktop, 64 px mobile.
- Logo: "Educai" en Fraunces 600, 1.5rem. La "i" final lleva un punto rojo: envolvé el último carácter en un `<span>` y dibujale el punto con un pseudo-elemento rojo, o usá una "ı" sin punto más un punto rojo en CSS. Que se lea perfecto como "Educai" para lectores de pantalla (`aria-label="Educai, inicio"`).
- Nav desktop (≥ 900 px): Inicio, Resultados, Cómo funciona, Quién soy, y el botón `primary` chico (alto 44 px) «Sumate al piloto». La página actual se marca con `aria-current="page"` y un subrayado `Scribble underline` en rojo (sin animación).
- **Renombrá el link "Funcionamiento técnico" a «Cómo funciona»** en la navegación (la ruta `/funcionamiento-tecnico` no cambia, el H1 de la página tampoco).
- **Mobile (< 900 px):** logo a la izquierda; a la derecha, el botón «Sumate» (alto 44 px) y un botón «Menú» que abre un panel desplegable debajo del header con los cuatro links en tamaño 1.25rem y un filete entre cada uno. Botón con `aria-expanded` y `aria-controls`; se cierra con Escape, al tocar un link y al cambiar de ruta. Bloqueá el scroll del body mientras está abierto.
- Unificá el texto del CTA: hoy el header dice "Sumarme al piloto 2027" y el resto dice "Sumate al piloto 2027". Todo usa `PILOT_CTA` de `content/site.ts`; en el header, la versión corta `PILOT_CTA_SHORT = "Sumate al piloto"`.

### 7.7 Footer (`components/Footer.tsx`)

Fondo `--paper`, filete superior `--rule`. Tres columnas que en mobile se apilan:

1. Logo + «Hecho en Córdoba, Argentina, por un hijo y nieto de docentes.» + «Fundado por Tomás Fossatti».
2. Links: Inicio, Resultados, Cómo funciona, Quién soy.
3. Contacto: correo (`EMAIL`), Instagram, WhatsApp (solo si `WHATSAPP_URL` no es `null`) y el botón `secondary` «Sumate al piloto 2027».

Abajo, en `--fs-note`: «Los resultados del test son observacionales y sin grupo control.»

### 7.8 Banda de cierre (`components/CtaBand.tsx`)

- Fondo `--accent`, texto blanco, `--radius-xl`, padding 72 × 64 (mobile 40 × 24).
- A la izquierda: eyebrow (con trazo `--chalk-yellow`), H2, texto.
- A la derecha: **"Qué pasa después"**, una lista ordenada de tres pasos con números en Fraunces (ver copy en 9.14), el botón `chalk` y la microcopy.
- Opcional (`TODO(material)`: `PHOTOS.tomasRetrato`): una foto circular de 72 px de Tomás junto a «Te escribimos nosotros, no un bot.»
- Si `WHATSAPP_URL` existe, un segundo botón `quiet` en blanco: «O escribinos por WhatsApp».

### 7.9 Panel del docente, mock del hero (`components/TeacherPanelMock.tsx`, reemplaza `ChatMock.tsx`)

Es la pieza más importante del sitio. Muestra **lo que ve el docente**, con el chat del estudiante como origen.

Estructura (de arriba hacia abajo, todo en una ficha `sheet` con `--radius-lg` y `--shadow-lift`, ancho máximo 520 px):

1. **Barra superior del panel:** a la izquierda, nombre de materia de ejemplo «Metodología de la investigación · Comisión B» (`TODO(confirmar)`: si Tomás prefiere otra materia de ejemplo); a la derecha, un chip «Antes de la clase del jueves».
2. **Tarjeta "Lo que se repite en tu curso":** etiqueta `label`, y el texto del ejemplo real de `content/tecnico.ts` (`signals.example`): «Varios participantes muestran señales relacionadas con dificultades para distinguir correlación y causalidad.» Debajo, una línea de evidencia: «Evidencia suficiente · basada en participantes independientes, sin nombres». No pongas cifras.
3. **Tarjeta "Para la próxima clase":** fondo `--accent-wash`, con la recomendación de `content/tecnico.ts` (`insights.items[1]`): «Usar dos casos comparativos donde exista una correlación sin relación causal.» y un texto chico «Vos decidís si la usás.»
4. **Origen (chat), más chico y atenuado, a la izquierda del panel en desktop o arriba en mobile:** dos burbujas. Estudiante: «¿Si dos cosas suben juntas, una causa la otra?». Tutor: «No necesariamente. Antes de responder, ¿qué otra cosa podría estar haciendo subir a las dos?». Burbuja de estudiante: fondo `--kraft`, radio `12px 12px 12px 4px`. Burbuja del tutor: fondo `--sheet`, borde `--rule`, radio `12px 12px 4px 12px`. Etiqueta arriba: «Lo que pregunta un estudiante, en su casa».
5. **Flecha a mano** (`Scribble arrow`) del chat al panel, con la nota al margen «sin nombres, solo patrones».
6. Abajo, siempre visible: «Vista de ejemplo con datos ilustrativos.» (`--fs-note`, `--ink-soft`).

Accesibilidad: contenedor `role="group" aria-label="Ilustración: lo que ve el docente en Educai, con datos de ejemplo"`.

Todos estos textos van a `content/inicio.ts` en un objeto `teacherPanel`.

Cuando exista una captura real del panel (`TODO(material)`: `PHOTOS.panelDocente`, PNG 2x en `public/photos/panel-docente.png`), mostrá la captura dentro de un marco de navegador minimalista (barra de 28 px con tres puntos en `--rule-strong`) y conservá las notas al margen y la nota de datos. Mientras no exista, se usa el mock en código.

### 7.10 Gráfico de unidades (`components/UnitChart.tsx`, nuevo)

Reemplaza a `ColumnChart` en Inicio y Resultados. Cada estudiante es un punto.

- Props: `rows: { label: string; filled: number; total: number; tone: "muted" | "accent" }[]`, `caption: string`.
- Cada fila: etiqueta arriba («1.er parcial, antes de Educai»), y a la derecha de la etiqueta el valor en Fraunces («33 de 47»). Debajo, `total` puntos en una grilla de **12 columnas fijas** en mobile y **24 columnas** desde 640 px. Punto de 12 px (mobile 10 px), gap 6 px.
- Puntos llenos: `muted` = `--ink-soft`; `accent` = `--accent`. Puntos vacíos: borde 1.5px `--rule-strong`, sin relleno.
- Entre la primera y la segunda fila, la diferencia en itálica roja como nota al margen: «11 estudiantes más aprobaron» (es 44 − 33, sale de los datos; calculalo, no lo hardcodees).
- Animación: al entrar en pantalla, los puntos de la fila `accent` se llenan en cascada de izquierda a derecha (12 ms de delay por punto, `--dur` cada uno). Con movimiento reducido, se ven llenos.
- Accesibilidad: el contenedor de puntos de cada fila es `role="img"` con `aria-label="33 de 47 estudiantes aprobaron el 1.er parcial"`. Los puntos individuales son `aria-hidden`.
- Debajo del gráfico, siempre: el descargo `approvals.reading` y «Observación sin grupo control. No atribuimos la mejora a Educai.»

`HorizontalBarChart` (adopción) se mantiene pero reestilizado: pista `--kraft` (o `--board-rule` sobre pizarrón), relleno `--accent` (o `--chalk-yellow`), alto 10 px, radio 5 px, valores en tabular nums.

### 7.11 "Lo que sabemos / Lo que todavía no" (`components/KnowledgeLedger.tsx`, nuevo)

Dos columnas tipo hoja de cuaderno (fondo `--sheet`, borde `--rule`, `--radius`). Columna izquierda con `Scribble check` en `--accent` por ítem; columna derecha con `Scribble question` en `--red`. Ítems en `--fs-small`. Fondo de la ficha con renglones tenues (ver 7.13). En mobile, una columna debajo de la otra.

### 7.12 Video liviano de YouTube (`components/LiteYouTube.tsx`, nuevo)

- Muestra la miniatura `https://i.ytimg.com/vi/<id>/hqdefault.jpg` con `next/image` (agregá `images.remotePatterns` para `i.ytimg.com` en `next.config.ts`), un botón de play centrado (círculo de 72 px en `--accent` con triángulo blanco) y el título de la charla.
- Al hacer clic, se reemplaza por un `<iframe>` de `https://www.youtube-nocookie.com/embed/<id>?autoplay=1` con `title` descriptivo, `allow="autoplay; encrypted-media; picture-in-picture"` y `allowFullScreen`.
- Relación 16:9, `--radius-lg`, `--shadow-paper`.
- Es un componente cliente (`"use client"`); el resto del sitio sigue siendo estático.
- El ID de la charla TEDx sale de `YOUTUBE_TEDX_URL` (`n1LSi7t5WKs`). Agregá en `content/site.ts` `YOUTUBE_TEDX_ID`.

### 7.13 Renglones de cuaderno (`.ruled`)

Utilidad para **una sola sección por página** como máximo (la carta de "Por qué me importa" en Inicio y el bloque de 7.11):

```css
.ruled {
  background-image: repeating-linear-gradient(
    to bottom,
    transparent 0,
    transparent calc(1.65em - 1px),
    rgba(30, 43, 74, 0.06) calc(1.65em - 1px),
    rgba(30, 43, 74, 0.06) 1.65em
  );
  background-position: 0 0.35em;
}
```

Ajustá el período al `line-height` real del texto para que las líneas caigan debajo de cada renglón.

### 7.14 Preguntas frecuentes (`components/Faq.tsx`, nuevo)

- Lista de `<details>`/`<summary>` nativos (funcionan sin JS). Cada `summary` en Fraunces 600, `--fs-h3`, con un signo `+` a la derecha que rota a `×` cuando está abierto (pseudo-elemento, transición `--dur-fast`). Filete `--rule` entre preguntas. Respuesta en `--fs-body`, `--ink-muted`, `max-width: var(--measure)`.
- Agregá datos estructurados `FAQPage` en JSON-LD **solo** con las preguntas que se publiquen.
- Una pregunta sin respuesta confirmada **no se renderiza** (en `content/`, `answer: null`).

### 7.15 Testimonio (`components/Testimonial.tsx`, nuevo)

`TODO(material)`. Props: `quote`, `name`, `role` (materia e institución), `photo?`, `videoId?`. Layout: `MarginQuote` grande + foto circular de 64 px + nombre y rol. Si hay `videoId`, usa `LiteYouTube` al lado. **En `content/inicio.ts`, `testimonial: null` hasta que Tomás entregue un testimonio real con autorización.** Con `null`, la sección entera no se renderiza (no dejes un hueco ni un placeholder visible).

### 7.16 Franja de credibilidad (`components/ProofStrip.tsx`, nuevo)

Una fila de texto (no logos, salvo que existan con permiso: `TODO(material)`), centrada, en `--fs-note`, `--ink-soft`, separada por puntos medios `·`, con filete arriba y abajo. En mobile hace scroll horizontal **dentro** de la franja (no de la página) con `overflow-x: auto` y máscara de desvanecido en los bordes, o se parte en dos líneas: elegí la que se vea mejor a 360 px.

---

## 8. Redacción

### 8.1 Principios

1. **Segunda persona singular, voseo**: «tu clase», «tus apuntes», «vas a ver», «vos decidís».
2. **Vocabulario de la sala de profesores**, no de startup.
3. **Frases cortas.** Una idea por oración. Párrafos de tres oraciones como máximo en Inicio.
4. **Nombrá los miedos** en vez de esquivarlos.
5. **Lo concreto le gana a lo abstracto**: «antes del parcial», «la clase del jueves», «tus apuntes en PDF».
6. **La honestidad se ve**: los descargos no van en letra chiquita escondida, van bien diseñados.

### 8.2 Glosario obligatorio en Inicio, Resultados y Quién soy

| No usar | Usar |
|---|---|
| feedback | devolución |
| onboarding | primera charla |
| insights | lo que se repite en tu curso / lo que necesita tu clase |
| patrones (en títulos) | lo que se repite |
| materiales activos | tus apuntes y tu bibliografía |
| intervención | lo que hiciste en clase |
| usuario | estudiante / docente |
| MVP | la versión que ya funciona |
| plataforma (en titulares) | Educai |
| el docente / su clase (dirigiéndose al lector) | vos / tu clase |

En *Funcionamiento técnico* se conservan los términos técnicos (RAG, NO_DATA, SUFFICIENT, insight, MVP) porque esa página es para un público técnico, pero cada término aparece explicado la primera vez.

---

## 9. Inicio (`app/page.tsx` + `content/inicio.ts`)

Reescribí `content/inicio.ts` con la estructura de abajo. Orden de secciones y tono de fondo:

| # | Sección | Tono | Objetivo psicológico |
|---|---|---|---|
| 1 | Hero | paper | "Me entiende" + ver el producto desde mi lado |
| 2 | Franja de credibilidad | paper | "No es humo" |
| 3 | Esto nos pasa | board | "Es mi problema, contado por los dos lados" |
| 4 | Por qué me importa | paper, `.ruled` | "Lo hizo alguien de los nuestros" |
| 5 | Cómo funciona en tres pasos | sheet | "Es simple, no me suma laburo" |
| 6 | Lo que vas a ver vos | paper | "Me sirve para la próxima clase" |
| 7 | Lo que Educai no hace | kraft | "No me reemplaza ni vigila a mis estudiantes" |
| 8 | Lo que probamos | paper | "Hay evidencia y me la cuentan honestamente" |
| 9 | Testimonio (si existe) | sheet | "A un colega le sirvió" |
| 10 | Que enseñar mejor valga más | board | "Mi esfuerzo puede valer más" |
| 11 | Para instituciones | paper | "Esto también le sirve a mi institución" |
| 12 | Preguntas frecuentes | sheet | "Me sacan las últimas dudas" |
| 13 | Cierre | paper + banda azul | "Es fácil dar el paso" |

### 9.1 Hero

Layout: dos columnas en desktop (texto 7/12, panel 5/12, `align-items: center`, gap 64 px); en mobile, texto arriba y panel debajo. **El H1 y el CTA tienen que verse sin scroll en un teléfono de 360 × 740.**

```ts
hero: {
  eyebrow: "Tutor de IA para tu cátedra",
  title: "Que el «¿se entendió?» tenga __respuesta__.",
  subtitle:
    "Tus estudiantes ya estudian con IA. Con Educai, esa IA responde con tus apuntes y te cuenta, sin nombres, qué no se entendió ==antes del parcial==.",
  primaryCta: "Sumate al piloto 2027",
  ctaNote: "Buscamos docentes de instituciones privadas para la cohorte 2027.",
  secondaryCta: "Ver qué pasó en el test",
}
```

- «respuesta» lleva el subrayado rojo animado (`Scribble underline`), que se dibuja 400 ms después de la carga.
- «antes del parcial» va con resaltador.
- Botón `primary` → `FORM_URL`; botón `secondary` → `ROUTES.resultados`.
- `ctaNote` va debajo de los botones, en `--fs-note`, `--ink-soft`.
- A la derecha: `TeacherPanelMock` (7.9).
- La pregunta original «Si la IA ya lo sabe todo, ¿para qué ir a clase?» **no se pierde**: pasa a la sección 3.

### 9.2 Franja de credibilidad

```ts
proof: {
  label: "Probado y presentado",
  items: [
    "2 meses de prueba en una materia universitaria y una escuela de robótica",
    "Charla en TEDxUniversidad Siglo 21",
    "Congreso Innova Educa 21",
    "Feria21 Tech 2025",
    "Meet the mentors, con mentores de Endeavor",
  ],
}
```

`label` es `sr-only` o un eyebrow chico centrado. No pongas logos sin permiso.

### 9.3 Esto nos pasa (pizarrón)

- Eyebrow «Esto nos pasa». Título: «Dos personas en la misma aula que no terminan de conectar».
- Dos columnas, cada una una ficha `board`:
  - Columna 1, título «Lo que te pasa a vos» (reemplaza "Docentes"), con los cuatro ítems actuales de docentes pasados a segunda persona:
    - «Te quedás hasta las once de la noche preparando una clase para que tus estudiantes entiendan.»
    - «Llegás al aula con toda la energía, preguntás «¿se entendió?» y recibís ese silencio que todos conocemos.»
    - «Tenés que decidir si seguís con el programa o volvés a explicar algo sin saber cuántos lo entendieron.»
    - «Y a fin de mes descubrís que haber preparado una mejor clase no cambió lo que cobrás.»
  - Columna 2, título «Lo que tus estudiantes no te dicen» (reemplaza "Nosotros, los estudiantes"), con los cuatro ítems actuales de estudiantes, sin cambios (están en primera persona del plural y así tienen que quedar: es la voz del estudiante).
- Los ítems no son viñetas: cada uno es un párrafo con un filete `--board-rule` arriba. En la columna 2, cada ítem va en Fraunces itálica para que se lea como una voz.
- Debajo, a todo el ancho, `MarginQuote` con la cita actual («Si puedo aprenderlo en mi casa… ¿para qué voy a ir a clase?») y `cite`: «Lo que nos preguntamos los estudiantes».
- Cerrá la sección con una línea en `--chalk-yellow`, Fraunces 560, `--fs-h3`: «Educai nace para que esa pregunta tenga una buena respuesta.»

### 9.4 Por qué me importa (carta)

- Layout: columna izquierda (4/12) con eyebrow «Por qué me importa», H2 «Soy estudiante, hijo y nieto de docentes» y la foto familiar; columna derecha (8/12) con los cuatro párrafos actuales sobre fondo `.ruled`, como una carta.
- **Foto familiar:** `TODO(material)`: `PHOTOS.familiaDocente` (foto real de la abuela o la mamá dando clase, o un parcial corregido con lápiz rojo). Se muestra en blanco y negro o en sus colores originales, **sin filtros sepia artificiales**, con borde blanco de 10 px, `--shadow-paper` y una rotación de `-1.5deg` (como una foto apoyada sobre la hoja). Epígrafe con el nombre y el año si Tomás los da. Si es `null`, la columna izquierda queda solo con el texto.
- El cuarto párrafo («Esas preguntas me llevaron a construir Educai.») va en Fraunces itálica, `--fs-lead`.
- Firma al final: «Tomás Fossatti» en Fraunces itálica, y debajo el link «Conocer quién está detrás de Educai →» a `ROUTES.quienSoy`.
- Resaltá con `==…==` una sola frase: «==porque amaba enseñar y le importaban sus estudiantes==».

### 9.5 Cómo funciona en tres pasos

Reemplaza a la sección "El ciclo que probamos en clase" en Inicio (el ciclo de 5 pasos queda en *Cómo funciona*).

```ts
steps: {
  eyebrow: "Cómo funciona",
  title: "Tres pasos, y la decisión sigue siendo tuya",
  items: [
    {
      title: "Cargás tus apuntes",
      text: "Subís tus materiales en PDF, Markdown o texto y elegís cuáles usa el tutor.",
    },
    {
      title: "Tus estudiantes estudian con ellos",
      text: "Preguntan sin vergüenza, a cualquier hora, y el tutor responde con lo que vos cargaste.",
    },
    {
      title: "Antes de la próxima clase, sabés qué reforzar",
      text: "Ves lo que se repite en el grupo, sin nombres, y una sugerencia concreta para la clase.",
    },
  ],
  link: "Ver cómo funciona por dentro →",
}
```

- Layout: tres columnas en desktop, una en mobile. Número grande en Fraunces (`--fs-stat` al 70 %), color `--accent`. Entre columnas, en desktop, una `Scribble arrow` corta en `--ink-soft`.
- Sin fichas con fondo: número, título H3 y texto, con un filete `--rule` arriba de cada paso.
- `TODO(confirmar)`: si Tomás confirma cuánto tiempo lleva el paso 1, se agrega como dato («te lleva unos X minutos»). Hasta entonces, no se menciona tiempo.

### 9.6 Lo que vas a ver vos

Sección dedicada al lado del docente, que amplía el panel del hero.

```ts
teacherView: {
  eyebrow: "Para vos",
  title: "Ver qué necesita tu clase antes del parcial",
  text: "Educai agrupa lo que preguntan tus estudiantes y te muestra lo que se repite en el grupo, con una sugerencia concreta para la próxima clase. Lo que hacés con eso lo decidís vos.",
  points: [
    { title: "Lo que se repite", text: "Los temas que generan dudas y las preguntas que vuelven a aparecer." },
    { title: "Con evidencia suficiente", text: "Un tema aparece recién cuando lo muestran al menos 3 participantes independientes." },
    { title: "Una sugerencia, no una orden", text: "Una idea concreta para la clase, ligada a lo que se observó." },
    { title: "Lo que hiciste, registrado", text: "Anotás qué hiciste en clase y después ves la devolución de tus estudiantes." },
  ],
  studentSide: {
    title: "Y para tus estudiantes",
    text: "Un tutor que responde con tus materiales. Pueden pedir ejemplos, comparaciones o una explicación distinta, y seguir la conversación cuantos turnos necesiten.",
  },
}
```

- Layout: a la izquierda, la captura real del panel (`TODO(material)`) o una versión ampliada del `TeacherPanelMock`; a la derecha, los cuatro puntos en lista con filetes, cada uno con un número chico en rojo.
- `studentSide` va abajo, en una ficha `kraft` angosta.

### 9.7 Lo que Educai no hace

Clave para bajar el miedo.

```ts
notDoing: {
  eyebrow: "Para que estés tranquilo",
  title: "Lo que Educai no hace",
  items: [
    { title: "No te reemplaza", text: "La IA aporta evidencia y sugerencias. El criterio pedagógico es tuyo." },
    { title: "No te muestra quién preguntó qué", text: "Ves al grupo, nunca a un estudiante con nombre y apellido." },
    { title: "No arma rankings ni diagnósticos", text: "No hay perfiles individuales, ni puntajes, ni etiquetas por estudiante." },
    { title: "No pone notas", text: "Lo que detecta son observaciones sobre las conversaciones, no calificaciones." },
    { title: "No responde con cualquier cosa", text: "Se apoya en los materiales que vos elegiste para la materia." },
    { title: "No se queda con lo que el estudiante borra", text: "Si elimina una conversación, se eliminan también los análisis que salieron de ella." },
  ],
}
```

- Grilla de 3 × 2 en desktop, 1 columna en mobile. Cada ítem: título en H3 con la palabra «No» en `--red` y el resto en `--ink`; texto debajo; filete `--rule` arriba. Sin íconos ni fichas con fondo.
- Dato de soporte: todo sale de `product.principles` y `privacy.items` actuales. No agregues promesas nuevas.

### 9.8 Lo que probamos

```ts
results: {
  eyebrow: "Lo que probamos",
  title: "Dos meses en una materia universitaria y en una escuela de robótica",
  chart: /* datos de content/resultados.ts → approvals */,
  stats: [
    { value: "25 de 29", label: "de los que empezaron el ciclo lo terminaron." },
    { value: "3–4", label: "fue la valoración promedio de la clase al final del período, en una escala de 1 a 4." },
  ],
  ledger: {
    known: [
      "Con Educai disponible, aprobaron el 2.º parcial 44 de 47 estudiantes (en el 1.º, 33 de 47).",
      "25 de los 29 que empezaron el ciclo lo terminaron.",
      "En la escuela de robótica, los 20 estudiantes lo usaron y lo completaron.",
    ],
    unknown: [
      "Si la mejora se debe a Educai: no hubo grupo control.",
      "Si los dos parciales tenían la misma dificultad.",
      "Por qué 18 estudiantes no lo usaron.",
    ],
    knownTitle: "Lo que sabemos",
    unknownTitle: "Lo que todavía no",
  },
  link: "Ver los resultados completos",
}
```

- `UnitChart` (7.10) a la izquierda; los dos stats a la derecha, como cifras grandes en Fraunces **sin tarjeta**, con filete arriba.
- Debajo, `KnowledgeLedger` (7.11).
- Importá los números desde `content/resultados.ts` (no los dupliques a mano) para que haya una sola fuente.
- Los stats son estáticos. **No uses contadores animados.**

### 9.9 Testimonio

`TODO(material)`. Solo se renderiza si `testimonial` no es `null`. Prioridad de material, de mayor a menor: video corto del docente del piloto, cita escrita con foto, cita escrita sin foto. Título de sección: «Lo que dice un docente que lo probó».

### 9.10 Que enseñar mejor valga más (pizarrón)

Mantené el contenido de `model`, con estos cambios:

- Eyebrow «Modelo en construcción», título igual: «Que enseñar mejor valga más. Y que ir a clase también.»
- Texto en segunda persona: «Estamos desarrollando un modelo en el que las instituciones privadas pagan por cada estudiante activo que usa Educai, durante un período acordado. Los docentes participan de lo que Educai cobra por la adopción en sus cátedras, y la intención es que su parte sea mayor que la nuestra.»
- Tres fichas `board`: «Para tus estudiantes», «Para vos», «Para tu institución», con los textos actuales adaptados a segunda persona.
- El descargo («El reparto a docentes todavía no está implementado…») va **inmediatamente debajo del título**, no al final, dentro de una ficha con borde punteado `--chalk-muted` y la etiqueta «Importante»: que nadie lo lea como una promesa.

### 9.11 Para instituciones

Banda corta, en dos columnas (texto + link):

```ts
institutions: {
  eyebrow: "¿Sos de una institución?",
  title: "Que tus estudiantes no quieran perderse una clase",
  text: "Educai le da a tus docentes información para mejorar cada clase, y a tus estudiantes una experiencia de aprendizaje que les sirva. Buscamos instituciones privadas para la cohorte 2027.",
  cta: "Escribinos",
}
```

CTA `secondary` a `mailto:${EMAIL}` con asunto «Educai para mi institución» (`?subject=` codificado).

### 9.12 Preguntas frecuentes

Solo las respuestas que se pueden sostener con el contenido actual. Las que tienen `answer: null` no se publican.

```ts
faq: {
  eyebrow: "Preguntas frecuentes",
  title: "Lo que nos preguntan los docentes",
  items: [
    {
      q: "¿Educai me va a reemplazar?",
      answer: "No. Educai responde con los materiales que vos elegís y te muestra lo que se repite en el grupo. Qué hacer en clase lo decidís vos.",
    },
    {
      q: "¿Voy a ver qué preguntó cada estudiante?",
      answer: "No. Ves lo que se repite en el grupo, de forma anónima. Un tema aparece recién cuando lo muestran al menos 3 participantes independientes, y los fragmentos que ves están anonimizados.",
    },
    {
      q: "¿De dónde saca las respuestas el tutor?",
      answer: "De los materiales que cargás y activás para tu materia, en PDF, Markdown o texto. Educai registra qué fragmentos usó en cada respuesta.",
    },
    {
      q: "¿Qué pasa con las conversaciones de mis estudiantes?",
      answer: "Son de cada estudiante. Las comparte por decisión propia y puede eliminarlas cuando quiera. Si las elimina, se borran también los análisis que salieron de ellas.",
    },
    {
      q: "¿En qué materias se probó?",
      answer: "Durante dos meses, en una materia universitaria con 47 estudiantes y en una escuela de robótica con 20 estudiantes de 12 a 18 años.",
    },
    {
      q: "¿Cuánto cuesta?",
      answer: "Estamos construyendo un modelo en el que la institución paga por estudiante activo durante un período acordado, y los docentes participan de lo que se cobra. Las condiciones del piloto 2027 las charlamos cuando nos escribís.",
    },
    { q: "¿Cuánto tiempo me lleva prepararlo?", answer: null }, // TODO(confirmar)
    { q: "¿Mis estudiantes no van a usarlo para que la IA les haga la tarea?", answer: null }, // TODO(confirmar)
    { q: "¿Mis materiales siguen siendo míos?", answer: null }, // TODO(confirmar)
  ],
}
```

### 9.13 Cierre

`CtaBand` (7.8) con:

```ts
closing: {
  eyebrow: "Cohorte 2027",
  title: "Probá Educai en tu cátedra",
  text: "Queremos empezar en una cátedra, junto con vos y tus estudiantes, y aprender de lo que pase en el aula. Si das clases en una institución privada, completá el formulario y te escribimos.",
  next: [
    "Completás el formulario.",
    "Te escribimos para conocer tu cátedra.",
    "Si encaja, armamos juntos el piloto 2027.",
  ],
  nextTitle: "Qué pasa después",
  cta: "Sumate al piloto 2027",
}
```

---

## 10. Páginas internas

### 10.1 Resultados (`app/resultados/page.tsx` + `content/resultados.ts`)

Orden:

1. **Hero (paper):** eyebrow, H1 y subtítulo actuales. Los tres datos de contexto («2 meses», «47», «20») como cifras grandes en Fraunces sin tarjeta, separadas por filetes verticales en desktop.
2. **Aprobados por parcial (sheet):** `UnitChart` a todo el ancho, con la lectura y el descargo debajo.
3. **Adopción (board):** `HorizontalBarChart` reestilizado + los dos stats + la lectura (`adoption.reading`).
4. **Lo que observamos en clase (paper):** las tres observaciones como tres columnas con número rojo, sin fichas. Cada título en Fraunces. La nota de robótica en `MarginQuote` chica (tamaño `--fs-lead`).
5. **Lo que sabemos / Lo que todavía no (kraft):** `KnowledgeLedger` con el contenido de `limits` (los ítems salen de partir el texto actual en oraciones: diseño observacional sin grupo control; el anonimato impide vincular uso y desempeño; no se controló la dificultad de los parciales; no sabemos por qué 18 estudiantes no lo usaron).
6. **Qué vamos a medir en 2027 (paper):** texto actual, con los tres objetivos como lista numerada.
7. **Póster** `TODO(material)`: `PHOTOS.posterInnovaEduca`, la imagen del póster del congreso con epígrafe y link para abrirla en grande.
8. **Cierre:** `CtaBand` con `closing` actual.

### 10.2 Cómo funciona (`app/funcionamiento-tecnico/page.tsx` + `content/tecnico.ts`)

Se mantiene todo el contenido técnico. Cambios:

- Agregá al principio del hero un aviso: «Esta página es para quien quiere ver el detalle técnico. Si sos docente y querés lo esencial, mirá ==cómo funciona en tres pasos==» con link a `/#como-funciona` (agregá ese `id` a la sección 9.5).
- Chips del stack en `--font-mono`.
- **Ciclo completo:** los nueve pasos como una línea de tiempo vertical (no grilla de fichas): número en círculo de 36 px con borde `--accent`, línea vertical de 2 px `--rule-strong` que une los círculos, título y texto a la derecha. En desktop, dos columnas de línea de tiempo (pasos 1–5 y 6–9).
- **Flujo RAG:** lista numerada compacta con filetes, en una ficha `sheet`.
- **Estados de evidencia (board):** los códigos `NO_DATA`, `INSUFFICIENT`, `SUFFICIENT` en `--font-mono`, color `--chalk-yellow`, cada uno con una traducción en castellano en Fraunces debajo («Sin datos», «Pocas personas todavía», «Evidencia suficiente»). El mensaje de ejemplo va en `MarginQuote`.
- **Recorrido de los datos (privacidad):** los siete pasos del flujo como una cadena horizontal de etiquetas unidas por flechas `→` en `--ink-soft` (en mobile se apila verticalmente con flechas `↓`). El último paso («Docente») en `--accent`. Entre «Análisis» y «Pseudonimización», una nota al margen roja: «acá se separa la identidad».
- **Hoja de ruta (board):** la etiqueta «Especificado, todavía no construido» como sello: borde punteado `--chalk-yellow`, rotación `-2deg`, Fraunces itálica. Fichas `board`.
- **Estado actual:** chips `done` y `pending` (7.5) bajo los títulos «Ya funciona» y «Todavía falta».
- Máximo dos secciones `board` en la página: usá `board` para los estados de evidencia y la hoja de ruta, y `paper`/`sheet`/`kraft` para el resto.

### 10.3 Quién soy (`app/quien-soy/page.tsx` + `content/quien-soy.ts`)

1. **Hero (paper):** foto TEDx a la derecha con `--radius-lg`, borde blanco de 10 px y `--shadow-paper`; nombre en H1; subtítulo; chips. Agregá una nota al margen roja apuntando a la foto: «TEDx, noviembre de 2025».
2. **Perspectiva (board):** H2 y párrafos actuales. La primera oración del primer párrafo (la pregunta guía) en `MarginQuote`.
3. **De dónde vengo** (nuevo, paper, `.ruled`): `TODO(material)` foto familiar (la misma de 9.4 u otra) y un párrafo corto reutilizando la historia de `whyItMatters` (no dupliques el texto: importalo). Si no hay foto, esta sección se omite.
4. **Proyectos (sheet):** dos fichas `sheet` lado a lado, igual que hoy.
5. **Exposiciones:** la charla TEDx con `LiteYouTube` en lugar del botón externo (mantené un link de texto «Ver en YouTube» debajo). Fotos de ferias en una grilla tipo collage: la foto grande con rotación `-1deg`, las dos chicas con `1deg`, todas con borde blanco de 8 px y `--shadow-paper`. Epígrafes en `--fs-note`.
6. **Congreso y entrevista:** dos fichas `kraft`.
7. **Contacto:** `CtaBand` con `contact` actual; botón a `mailto:` y, si existe, WhatsApp.

### 10.4 404 (`app/not-found.tsx`)

Fondo papel, H1 «No encontramos esta página» con un círculo rojo a mano alrededor de «esta página», texto «Puede que el link esté mal escrito o que la página se haya movido.» (va a `content/site.ts`) y botón `primary` «Volver al inicio».

---

## 11. Movimiento

Principio: **el movimiento acompaña la lectura, nunca la interrumpe ni la condiciona.**

### 11.1 Mecanismo

Creá `components/InView.tsx` (`"use client"`), un envoltorio que usa un `IntersectionObserver` (`threshold: 0.25`, `rootMargin: "0px 0px -10% 0px"`) y, la primera vez que el elemento entra en pantalla, le agrega `data-inview="true"` y deja de observar.

**Sin JS, todo tiene que verse.** Para eso, los estados iniciales "ocultos" solo se aplican cuando el `<html>` tiene la clase `js`, que se agrega con un script inline mínimo en `app/layout.tsx` (`document.documentElement.classList.add('js')`, dentro de `<head>` con `next/script` `strategy="beforeInteractive"` o un `<script>` inline equivalente).

### 11.2 Qué se anima

| Elemento | Animación | Duración |
|---|---|---|
| `Scribble` | Trazo que se dibuja (`stroke-dashoffset` de 100 % a 0) | `--dur-draw` |
| Puntos de `UnitChart` (fila accent) | Llenado en cascada | `--dur` + 12 ms por punto |
| Bloques de sección (títulos, fichas) | `opacity 0 → 1` y `translateY(8px) → 0` | `--dur`, `--ease`; fichas en cascada de 60 ms |
| Botones | Cambio de fondo y flecha | `--dur-fast` |
| Fichas clickeables | Elevación de 2 px | `--dur-fast` |
| Header | Filete inferior al scrollear | `--dur-fast` |

### 11.3 Qué está prohibido

Parallax; contadores de números; autoplay de video; carruseles automáticos; efecto máquina de escribir; animaciones en loop; cursores custom; transiciones de página; cualquier animación que se repita cada vez que el elemento entra en pantalla.

Con `prefers-reduced-motion: reduce`: todo aparece en su estado final, sin transición (el bloque existente en `globals.css` ya lo fuerza; verificá que también cubra los `Scribble` y los puntos).

---

## 12. Imágenes, video y material pendiente

### 12.1 Tratamiento de fotos

- Siempre con `next/image`, `sizes` correcto y `loading="lazy"` salvo la del hero de *Quién soy*.
- Borde blanco de 8 a 10 px (`padding` + fondo blanco en el contenedor, no `border`), `--shadow-paper`, `--radius-sm` en la foto. Rotaciones de ±1 a 1,5 grados **solo** en collages y en la foto familiar.
- Sin filtros de color, sin sepia, sin superposiciones de color de marca sobre las caras.
- Epígrafe siempre que la foto muestre un evento o una persona.

### 12.2 Material que tiene que entregar Tomás

Agregá a `content/site.ts` este objeto. Cada componente que use un ítem se renderiza **solo** si el valor no es `null`.

```ts
/** Material pendiente. Mientras sea null, el bloque que lo usa no se muestra. */
export const MATERIAL = {
  panelDocente: null as Photo | null,       // captura real del panel docente, PNG 2x, sin datos reales de estudiantes
  familiaDocente: null as Photo | null,     // foto real de la abuela o la mamá dando clase, o un parcial corregido en rojo
  tomasRetrato: null as Photo | null,       // retrato cuadrado para la banda de cierre
  posterInnovaEduca: null as Photo | null,  // póster del congreso
  aulaPiloto: [] as Photo[],                // fotos del aula del piloto, con consentimiento
  testimonial: null as null | {
    quote: string; name: string; role: string; photo?: Photo; videoId?: string;
  },
  videoPresentacion: null as string | null, // ID de YouTube de un video de 60–90 s
};

export const WHATSAPP_URL: string | null = null; // TODO(material): https://wa.me/<número> con texto prellenado
```

Para cada `TODO(material)`, agregá una línea en una sección nueva del `README.md`, «Material pendiente», que diga qué archivo hace falta, dónde se pone y qué bloque se activa.

### 12.3 Video

- La charla TEDx va con `LiteYouTube` en *Quién soy*. En Inicio, si `MATERIAL.videoPresentacion` existe, va un bloque entre las secciones 5 y 6 con el título «Educai en 90 segundos»; si no existe, no se muestra nada.
- Nunca autoplay, nunca video de fondo.

### 12.4 Íconos

No se usan bibliotecas de íconos. Los únicos pictogramas son los `Scribble` (check, pregunta, flecha) y la flecha tipográfica `→`.

### 12.5 Favicon e imagen para compartir

- `app/icon.svg`: cuadrado de radio 14 con fondo `#1F3FA8` y una «e» minúscula en blanco, con un punto rojo `#B3261E` arriba a la derecha (dibujala en SVG; no dependas de fuentes).
- `app/opengraph-image.tsx` (nuevo) con `ImageResponse` de `next/og`, 1200 × 630: fondo `#FBF8F2`, el título del hero «Que el «¿se entendió?» tenga respuesta.» en tinta, con un subrayado rojo dibujado debajo de «respuesta», y abajo «Educai · Tutor de IA para tu cátedra». Si cargar Fraunces en `ImageResponse` complica el build, usá la tipografía por defecto. Quitá la foto TEDx vertical como imagen OG por defecto de `app/layout.tsx` (en *Quién soy* puede quedar como OG propia).
- Agregá `twitter: { card: "summary_large_image" }` en los metadatos.

---

## 13. Accesibilidad, rendimiento y SEO

### 13.1 Accesibilidad

- Contraste AA como mínimo en todo; los pares de la sección 4 ya cumplen. No inventes pares nuevos sin medirlos.
- Áreas táctiles de 44 × 44 px como mínimo (botones, links de nav, `summary`).
- Un solo `h1` por página; jerarquía de encabezados sin saltos.
- Todo SVG decorativo con `aria-hidden="true"`; todo gráfico con `role="img"` y `aria-label` que diga el dato.
- El menú mobile se maneja con teclado y devuelve el foco al botón al cerrarse.
- `lang="es-AR"`.
- Las marcas `==…==` y `__…__` no cambian lo que lee un lector de pantalla.

### 13.2 Rendimiento

Objetivo: en un Android de gama media con 4G, LCP < 2,5 s, CLS < 0,05.

- El hero no depende de imágenes (el panel es código).
- Dos familias tipográficas, subset latin, `display: swap`.
- Componentes cliente solo donde hace falta: `Header`, `InView`, `LiteYouTube`. El resto, componentes de servidor.
- Nada de iframes de YouTube cargados de entrada.

### 13.3 SEO

- Títulos y descripciones por página en `content/` (no hardcodeados en `page.tsx`).
- Inicio: `title` «Educai: tutor de IA para tu cátedra», `description` «Tus estudiantes ya estudian con IA. Con Educai, responde con tus apuntes y te muestra, sin nombres, qué no se entendió antes del parcial.»
- JSON-LD `Organization` en `app/layout.tsx` y `FAQPage` en Inicio (solo preguntas publicadas).

---

## 14. Orden de implementación

Cada fase termina con `npm run build` y `npm run typecheck` en verde y un commit.

1. **Tokens y base:** nuevo `:root`, fuentes, `lang`, base tipográfica, links, foco, selección. Migrá todas las reglas viejas a tokens nuevos. El sitio tiene que compilar y verse "papel" aunque las secciones sigan con la estructura vieja.
2. **Componentes base:** `Section` (tonos nuevos), `Button`, `Card`, `Chip`, `Eyebrow`, `SectionHeading`, `Header` (con menú mobile), `Footer`, `CtaBand`.
3. **Componentes nuevos:** `RichText`, `Scribble`, `MarginNote`, `MarginQuote`, `InView`, `UnitChart`, `KnowledgeLedger`, `LiteYouTube`, `Faq`, `Testimonial`, `ProofStrip`, `TeacherPanelMock`.
4. **Contenido:** reescribí `content/inicio.ts` según la sección 9; ajustá `content/site.ts` (`MATERIAL`, `WHATSAPP_URL`, `PILOT_CTA_SHORT`, `YOUTUBE_TEDX_ID`, label de nav «Cómo funciona», texto del 404, metadatos) y adaptá `content/resultados.ts`, `content/tecnico.ts` y `content/quien-soy.ts` al glosario.
5. **Inicio** completa.
6. **Resultados, Cómo funciona, Quién soy y 404.**
7. **Favicon, imagen OG, JSON-LD, README** (tokens nuevos y «Material pendiente»).
8. **QA** (sección 15) y PR.

---

## 15. Checklist de aceptación

### 15.1 Build y código

- [ ] `npm run build` y `npm run typecheck` sin errores ni warnings nuevos.
- [ ] `grep -rniE "#5b3fd0|#241f4a|#2f2a5e|#bdb0ff|space.?grotesk|violet" app components content` no devuelve nada.
- [ ] Ningún hex fuera de `:root` en `globals.css` (salvo `#ffffff` si hace falta); ningún string visible fuera de `content/`.
- [ ] No hay dependencias nuevas en `package.json`.

### 15.2 Contenido

- [ ] Ningún dato, testimonio, tiempo, precio o promesa que no esté en `content/` original o en este documento.
- [ ] Todos los descargos de la regla dura 2 están visibles.
- [ ] En Inicio no aparecen: feedback, onboarding, insight(s), MVP, usuario, "el docente" dirigido al lector.
- [ ] Todo en voseo.
- [ ] Los bloques con `MATERIAL` en `null` no se ven (ni huecos, ni placeholders).

### 15.3 Visual

Sacá capturas con Playwright (Chromium ya está instalado; no corras `playwright install`) de las cuatro páginas y el 404, a 360 × 740, 390 × 844, 768 × 1024 y 1440 × 900, y revisá:

- [ ] Sin scroll horizontal de página en ningún ancho.
- [ ] En 360 × 740, el H1 y el CTA principal de Inicio se ven sin scrollear.
- [ ] Nunca dos secciones `board` seguidas; como máximo dos por página.
- [ ] Como máximo 3 marcas a mano por pantalla y 2 resaltados por página.
- [ ] Rojo solo en marcas, notas y márgenes; nunca en botones.
- [ ] El menú mobile abre, cierra con Escape y al navegar.
- [ ] El sitio se ve completo con JavaScript deshabilitado (salvo el menú mobile, que puede degradar a mostrar los links).

### 15.4 Accesibilidad y rendimiento

- [ ] Lighthouse mobile: Accesibilidad ≥ 95, Rendimiento ≥ 90, Buenas prácticas ≥ 95, SEO ≥ 95 en Inicio.
- [ ] Navegación completa con teclado, foco siempre visible.
- [ ] Con `prefers-reduced-motion: reduce`, no hay animaciones.

### 15.5 PR

- [ ] PR a `main` desde la rama de trabajo, con capturas de antes y después de Inicio en mobile y desktop, y la lista de `TODO(material)` y `TODO(confirmar)` que quedaron pendientes.
