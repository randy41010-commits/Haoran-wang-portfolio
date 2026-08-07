import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

export default function InfoPage() {
  return (
    <main className="site-frame" id="top">
      <SiteHeader />
      <PageIntro index="01" title="Info" text="Background, working methods and fields of ongoing interest." />
      <section className="info-layout">
        <div className="portrait-field" aria-label="Portrait placeholder">
          <span>PORTRAIT / ARCHIVE</span><i />
        </div>
        <div className="bio-copy">
          <p className="lead">I am ZHIMING, an independent designer and visual artist based in Shanghai.</p>
          <p>My practice moves between identity systems, digital products, sound, moving image and installation. Rather than pursuing one fixed style, I search for the language each project genuinely needs.</p>
          <p>I see visual practice as a form of editing: removing noise, establishing order and creating enough space for content to breathe and be understood.</p>
          <dl>
            <div><dt>Practice</dt><dd>Art Direction<br />Visual Identity<br />Digital Experience<br />Moving Image</dd></div>
            <div><dt>Based in</dt><dd>Shanghai, China<br />Available worldwide</dd></div>
            <div><dt>Languages</dt><dd>Chinese<br />English<br />German / basic</dd></div>
          </dl>
        </div>
      </section>
      <section className="statement-band"><p>Clear thinking.<br />Precise form.<br />Open endings.</p></section>
      <SiteFooter />
    </main>
  );
}
