import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

const pieces = [
  ["01", "Slow Signals", "08:42", "2026", "Electroacoustic composition for field recordings, prepared piano and processed voice."],
  ["02", "Night Current", "12:16", "2025", "A spatial sound work built from electromagnetic recordings collected across Shanghai."],
  ["03", "Distance Studies", "06:38", "2024", "Three short pieces for tape, cello and granular synthesis."],
];

export default function MusicPage() {
  return (
    <main className="site-frame" id="top">
      <SiteHeader />
      <PageIntro index="03" title="Music" text="Compositions, sound studies and works for spatial listening." />
      <section className="music-list">
        {pieces.map(([no, title, duration, year, text], index) => (
          <article className="music-item" key={no}>
            <div className={`sound-field sound-${index + 1}`}><span>LISTEN</span><i /><b>{duration}</b></div>
            <div className="music-info"><span>{no} / {year}</span><h2>{title}</h2><p>{text}</p></div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
