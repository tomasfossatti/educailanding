import Image from "next/image";
import type { Photo } from "@/content/site";

type PhotoFrameProps = {
  photo: Photo;
  /** "portrait" = 4:5 alineada arriba (TEDx). "landscape" = 3:2 (ferias y mentores). */
  ratio: "portrait" | "landscape";
  caption?: string;
  /** Sólo la foto del hero de Quién soy se carga sin diferir. */
  preload?: boolean;
  sizes: string;
  hero?: boolean;
  className?: string;
};

export function PhotoFrame({
  photo,
  ratio,
  caption,
  preload = false,
  sizes,
  hero = false,
  className = "",
}: PhotoFrameProps) {
  const image = (
    <Image
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      sizes={sizes}
      preload={preload}
      loading={preload ? undefined : "lazy"}
      className={`photo photo--${ratio}${hero ? " photo--hero" : ""}`}
    />
  );

  if (!caption) {
    return <div className={className}>{image}</div>;
  }

  return (
    <figure className={`stack gap-12 ${className}`.trim()}>
      {image}
      <figcaption className="photo-caption">{caption}</figcaption>
    </figure>
  );
}
