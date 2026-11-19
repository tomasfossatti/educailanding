import { EMAIL, FOOTER, INSTAGRAM_URL, PERSONAL_SITE_URL } from "@/content/site";

export function Footer() {
  return (
    <footer className="container site-footer">
      <span className="wordmark">Educai</span>
      <span className="site-footer__links">
        <span>
          {FOOTER.before}
          <a className="site-footer__person" href={PERSONAL_SITE_URL} target="_blank" rel="noopener me">
            {FOOTER.name}
          </a>
          {FOOTER.after}
        </span>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener">
          Instagram
        </a>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </span>
    </footer>
  );
}
