import { EMAIL, FOOTER_TEXT, INSTAGRAM_URL } from "@/content/site";

export function Footer() {
  return (
    <footer className="container site-footer">
      <span className="wordmark">Educai</span>
      <span className="site-footer__links">
        <span>{FOOTER_TEXT}</span>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener">
          Instagram
        </a>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </span>
    </footer>
  );
}
