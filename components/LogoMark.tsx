import { SITE_META } from "@/content/site";

/** "Educai" con la última «i» sin punto: el punto lo dibuja el CSS en rojo. */
export function LogoMark() {
  const name = SITE_META.name;
  return (
    <span aria-hidden="true">
      {name.slice(0, -1)}
      <span className="logo__i">ı</span>
    </span>
  );
}
