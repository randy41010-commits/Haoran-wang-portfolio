import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

export default function KontaktPage() {
  return (
    <main className="site-frame contact-page" id="top">
      <SiteHeader />
      <PageIntro index="05" title="Kontakt" text="For commissions, exhibitions, collaborations or simply an exchange of ideas." />
      <section className="kontakt-main">
        <p>Let’s make<br />something <em>clear.</em></p>
        <a className="mail-link" href="mailto:Randy41010@gmail.com">Randy41010@gmail.com <span>↗</span></a>
      </section>
      <section className="kontakt-grid">
        <div><span>Phone</span><a href="tel:+4915224046270">+49 152 24046270</a></div>
        <div><span>Academic email</span><a href="mailto:haoran.wang@rsh-duesseldorf.de">haoran.wang@rsh-duesseldorf.de</a></div>
        <div><span>Availability</span><p>Selected commissions<br />from September 2026</p></div>
      </section>
      <SiteFooter />
    </main>
  );
}
