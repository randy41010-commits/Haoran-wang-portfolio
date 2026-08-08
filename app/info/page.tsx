import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

export default function InfoPage() {
  return (
    <main className="site-frame" id="top">
      <SiteHeader />
      <PageIntro index="01" title="Info" text="Background, education and areas of ongoing musical research." />
      <section className="info-layout">
        <div className="portrait-field" aria-label="Portrait placeholder">
          <span>PORTRAIT / ARCHIVE</span><i />
        </div>
        <div className="bio-copy">
          <p className="lead">I am Haoran Wang, a music producer and creator working across sound, music and artistic research.</p>
          <p>I graduated from the Shanghai Conservatory of Music, where I studied Music and Media. I am currently studying Sound and Reality at the Robert Schumann Hochschule Düsseldorf.</p>
          <p>My work follows the ways sound can shape attention, memory and space. I approach each project as an open field for listening, composition and encounter.</p>
          <dl>
            <div><dt>Practice</dt><dd>Music Production<br />Sound Art<br />Composition<br />Creative Research</dd></div>
            <div><dt>Education</dt><dd>Shanghai Conservatory of Music<br />Robert Schumann Hochschule Düsseldorf</dd></div>
            <div><dt>Languages</dt><dd>Chinese<br />English<br />German</dd></div>
          </dl>
        </div>
      </section>
      <section className="statement-band"><p>Listening closely.<br />Shaping sound.<br />Opening space.</p></section>
      <SiteFooter />
    </main>
  );
}
