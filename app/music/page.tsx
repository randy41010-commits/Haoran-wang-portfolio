import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

// Curated SoundCloud selection by Haoran Wang.

const traditionalCompositions = [
  { no: "01", title: "The Pearl River Fisherwoman", url: "https://soundcloud.com/wang-haoran-962901748/the-pearl-river-fisherwoman" },
  { no: "02", title: "Shadow", url: "https://soundcloud.com/wang-haoran-962901748/shadow" },
  { no: "03", title: "Float", url: "https://soundcloud.com/wang-haoran-962901748/float" },
];

const otherMusic = [
  { no: "04", title: "Jerking Motion", url: "https://soundcloud.com/wang-haoran-962901748/jerking-motion" },
  { no: "05", title: "Hear · Voices", url: "https://soundcloud.com/wang-haoran-962901748/hear-voices" },
];

function Track({ no, title, url }: { no: string; title: string; url: string }) {
  const embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23161616&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false`;
  return (
    <article className="music-item">
      <div className="soundcloud-player">
        <iframe title={`${title} — SoundCloud`} src={embedUrl} allow="autoplay" loading="lazy" />
      </div>
      <div className="music-info"><span>{no} / SOUND</span><h2>{title}</h2><a href={url} target="_blank" rel="noreferrer">Open on SoundCloud ↗</a></div>
    </article>
  );
}

export default function MusicPage() {
  return (
    <main className="site-frame" id="top">
      <SiteHeader />
      <PageIntro index="03" title="Music" text="Compositions and recorded works." />
      <section className="music-list" aria-label="Music works">
        <h2 className="music-category">Traditional Composition</h2>
        {traditionalCompositions.map((track) => <Track key={track.no} {...track} />)}
        <h2 className="music-category music-category-secondary">Other Music</h2>
        {otherMusic.map((track) => <Track key={track.no} {...track} />)}
      </section>
      <SiteFooter />
    </main>
  );
}
