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
        <p className="home-intro">在品牌、影像与数字体验之间工作。以清晰的结构、克制的视觉和持续的好奇心，记录人与世界之间微妙的联系。</p>
        <a className="enter-link" href="/works">View selected works <span>↗</span></a>
      </section>
      <SiteFooter />
    </main>
  );
}
