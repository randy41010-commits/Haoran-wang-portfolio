import { SiteFooter, SiteHeader } from "./site-shell";
import Link from "next/link";

export default function Home() {
  return (
    <main className="site-frame home-page">
      <SiteHeader />
      <section className="home-stage">
        <div className="home-meta">
          <span>HAORAN WANG</span>
          <span>Music producer<br />& creator</span>
          <span>Shanghai · Düsseldorf · 2026</span>
        </div>
        <h1><span>Creation,</span><span>Expression</span><span>&amp; Narration.</span></h1>
        <p className="home-intro">Let&apos;s create meaningful work together.</p>
        <Link className="enter-link" href="/music">Explore the work <span>↗</span></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
