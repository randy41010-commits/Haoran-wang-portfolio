import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

export default function InfoPage() {
  const portraitSrc = process.env.GITHUB_ACTIONS === "true"
    ? "/Haoran-wang-portfolio/haoran-wang.jpg"
    : "/haoran-wang.jpg";

  return (
    <main className="site-frame" id="top">
      <SiteHeader />
      <PageIntro index="01" title="Info" text="Background, education and areas of ongoing musical research." />
      <section className="info-layout">
        <div className="portrait-field">
          <img src={portraitSrc} alt="Haoran Wang on the coast" />
          <span>PORTRAIT / ÉTRETAT, FR</span>
        </div>
        <div className="bio-copy">
          <p className="lead">I am Haoran Wang, a music producer and creator working across sound, music and artistic research.</p>
          <p>I graduated from the Shanghai Conservatory of Music, where I studied Music and Media. I am currently studying Sound and Reality at the Robert Schumann Hochschule Düsseldorf.</p>
          <p>I work across composition, music production and sound design. My practice often begins with rigorous traditional compositional techniques, while also extending into experimental theatre-making. As Martin Supper, my professor at the Berlin University of the Arts, puts it: “ROOM AS AN INSTRUMENT.” Every space is a singular, open field with its own capacity to sing.</p>
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
