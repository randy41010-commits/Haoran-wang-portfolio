const navigation = [
  ["Info", "/info"],
  ["Works", "/works"],
  ["Music", "/music"],
  ["Installation", "/installation"],
  ["Kontakt", "/kontakt"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Haoran Wang home">HAORAN WANG</a>
      <nav aria-label="Primary navigation">
        {navigation.map(([label, href], index) => (
          <a href={href} key={href}><sup>0{index + 1}</sup>{label}</a>
        ))}
      </nav>
      <span className="header-note">SOUND / PORTFOLIO / 2026</span>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© 2026 HAORAN WANG</span>
      <span>MUSIC · SOUND · INSTALLATION</span>
      <a href="#top">Top ↑</a>
    </footer>
  );
}

export function PageIntro({ index, title, text }: { index: string; title: string; text: string }) {
  return (
    <header className="page-intro">
      <span className="page-index">{index}</span>
      <h1>{title}</h1>
      <p>{text}</p>
    </header>
  );
}
