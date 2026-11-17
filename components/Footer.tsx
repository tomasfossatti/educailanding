import { EMAIL, INSTAGRAM_URL } from "@/content/site";

export function Footer() {
  return (
    <footer className="container site-footer">
      <span className="footer-logo">Educai</span>
      <span>Fundado por Tomás Fossatti · Córdoba, Argentina</span>
      <span className="footer-links">
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener">
          Instagram
        </a>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </span>
    </footer>
  );
}
