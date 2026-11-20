import Link from "next/link";
import { EMAIL, FOOTER, FORM_URL, INSTAGRAM_URL, NAV_LINKS, PILOT_CTA, SITE_META, WHATSAPP_URL, A11Y } from "@/content/site";
import { Button } from "./Button";
import { LogoMark } from "./LogoMark";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="stack gap-12">
            <span className="footer-logo">
              <LogoMark />
              <span className="sr-only">{SITE_META.name}</span>
            </span>
            <p className="footer-text">{FOOTER.tagline}</p>
            <p className="footer-text">{FOOTER.founder}</p>
          </div>

          <nav aria-label={FOOTER.navLabel}>
            <ul className="footer-list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="stack gap-20" aria-label={FOOTER.contactLabel} role="group">
            <ul className="footer-list">
              <li>
                <a className="footer-link" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </li>
              <li>
                <a className="footer-link" href={INSTAGRAM_URL} target="_blank" rel="noopener">
                  {FOOTER.instagram}
                  <span className="sr-only">{A11Y.newTab}</span>
                </a>
              </li>
              {WHATSAPP_URL ? (
                <li>
                  <a className="footer-link" href={WHATSAPP_URL} target="_blank" rel="noopener">
                    {FOOTER.whatsapp}
                    <span className="sr-only">{A11Y.newTab}</span>
                  </a>
                </li>
              ) : null}
            </ul>
            <div>
              <Button href={FORM_URL} variant="secondary">
                {PILOT_CTA}
              </Button>
            </div>
          </div>
        </div>
        <p className="site-footer__note">{FOOTER.note}</p>
      </div>
    </footer>
  );
}
