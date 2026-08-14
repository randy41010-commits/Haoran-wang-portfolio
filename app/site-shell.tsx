"use client";
import Link from "next/link";
import { copy, useLocale } from "./i18n";
const navigation = ["/info", "/works", "/music", "/installation", "/kontakt"];

export function SiteHeader() {
  const { locale, setLocale } = useLocale(); const t = copy[locale];
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Haoran Wang home">HAORAN WANG</Link>
      <nav aria-label="Primary navigation">
        {navigation.map((href, index) => (
          <Link href={href} key={href}><sup>0{index + 1}</sup>{t.nav[index]}</Link>
        ))}
      </nav>
      <div className="header-tools"><span className="header-note">SOUND / PORTFOLIO / 2026</span><div className="language-switch" aria-label="Language"><button onClick={() => setLocale("de")} className={locale === "de" ? "active" : ""}>DE</button><button onClick={() => setLocale("en")} className={locale === "en" ? "active" : ""}>EN</button><button onClick={() => setLocale("zh")} className={locale === "zh" ? "active" : ""}>中文</button></div></div>
    </header>
  );
}

export function SiteFooter() {
  const { locale } = useLocale(); const t = copy[locale];
  return (
    <footer className="site-footer">
      <span>© 2026 HAORAN WANG</span>
      <span>{t.footer}</span>
      <a href="#top">{t.top}</a>
    </footer>
  );
}

export function PageIntro({ index }: { index: string; title?: string; text?: string }) {
  const { locale } = useLocale(); const i = Number(index) - 1; const t = copy[locale];
  return (
    <header className="page-intro">
      <span className="page-index">{index}</span>
      <h1>{t.titles[i]}</h1>
      <p>{t.intros[i]}</p>
    </header>
  );
}
import Link from "next/link";
