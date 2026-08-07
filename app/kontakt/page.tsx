import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

export default function KontaktPage() {
  return (
    <main className="site-frame contact-page" id="top">
      <SiteHeader />
      <PageIntro index="05" title="Kontakt" text="For commissions, exhibitions, collaborations or simply an exchange of ideas." />
      <section className="kontakt-main">
        <p>Let’s make<br />something <em>clear.</em></p>
        <a className="mail-link" href="mailto:hello@example.com">hello@example.com <span>↗</span></a>
      </section>
      <section className="kontakt-grid">
        <div><span>Social</span><a href="/">Instagram ↗</a><a href="/">LinkedIn ↗</a><a href="/">Xiaohongshu ↗</a></div>
        <div><span>Studio</span><p>Shanghai, China<br />CET / UTC+8</p></div>
        <div><span>Availability</span><p>Selected commissions<br />from September 2026</p></div>
      </section>
      <SiteFooter />
    </main>
  );
}
