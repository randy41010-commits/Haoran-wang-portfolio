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
        <h1><span>Sound</span><span>in quiet</span><span>motion.</span></h1>
        <p className="home-intro">Music producer and creator working across composition, sound art and spatial listening. Listening, research and encounter shape each project.</p>
        <Link className="enter-link" href="/music">Explore the work <span>↗</span></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
