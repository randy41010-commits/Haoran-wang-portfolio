import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

export default function KontaktPage() {
  return (
    <main className="site-frame contact-page" id="top">
      <SiteHeader />
      <PageIntro index="05" title="Kontakt" text="For commissions, exhibitions, collaborations or simply an exchange of ideas." />
      <section className="kontakt-main">
        <div className="contact-links">
          <a className="contact-link" href="mailto:Randy41010@gmail.com"><span>Personal email</span>Randy41010@gmail.com <i>↗</i></a>
          <a className="contact-link" href="mailto:haoran.wang@rsh-duesseldorf.de"><span>Academic email</span>haoran.wang@rsh-duesseldorf.de <i>↗</i></a>
          <a className="contact-link" href="tel:+4915224046270"><span>Phone</span>+49 152 24046270 <i>↗</i></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
