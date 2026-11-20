import Image from "next/image";
import type { Photo } from "@/content/site";

type PhotoFrameProps = {
  photo: Photo;
  /** "portrait" = 4:5 alineada arriba (TEDx). "landscape" = 3:2 (ferias y mentores). */
  ratio: "portrait" | "landscape";
  caption?: string;
  /** Solo la foto del hero de Quién soy se carga sin diferir. */
  preload?: boolean;
  sizes: string;
  /** Borde blanco de 8 px (o 10 px en "lg"), como una foto apoyada sobre la hoja. */
  border?: "md" | "lg";
  /** Rotación de collage: solo en collages y en la foto familiar. */
  tilt?: "left" | "right";
  className?: string;
};

export function PhotoFrame({
  photo,
  ratio,
  caption,
  preload = false,
  sizes,
  border = "md",
  tilt,
  className = "",
}: PhotoFrameProps) {
  const classes = [
    "photo-frame",
    `photo-frame--${border}`,
    tilt ? `photo-frame--tilt-${tilt}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <figure className={classes}>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes={sizes}
        preload={preload}
        loading={preload ? undefined : "lazy"}
        className={`photo photo--${ratio}`}
      />
      {caption ? <figcaption className="photo-caption">{caption}</figcaption> : null}
    </figure>
  );
}
