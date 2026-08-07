import { SiteFooter, SiteHeader } from "./site-shell";

export default function Home() {
  return (
    <main className="site-frame home-page">
      <SiteHeader />
      <section className="home-stage">
        <div className="home-meta">
          <span>ZHIMING</span>
          <span>Independent designer<br />& visual storyteller</span>
          <span>Shanghai · 2026</span>
        </div>
        <h1><span>Ideas</span><span>in quiet</span><span>motion.</span></h1>
        <p className="home-intro">Working across image, sound, installation and digital experience. Clear structures, restrained gestures and ongoing curiosity shape each project.</p>
        <a className="enter-link" href="/works">View selected works <span>↗</span></a>
      </section>
      <SiteFooter />
    </main>
  );
}
