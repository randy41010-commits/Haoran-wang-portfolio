import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

const works = [
  { no: "001", videoId: "IQ5qIJhRXFo", label: "Selected work / 2026" },
  { no: "002", videoId: "hm10Rev353k", label: "Selected work / 2026" },
];

export default function WorksPage() {
  return (
    <main className="site-frame" id="top">
      <SiteHeader />
      <PageIntro index="02" title="Works" text="Selected audiovisual works. Composition, sound, image and spatial research." />
      <section className="work-index" aria-label="Selected works">
        {works.map((work) => (
          <article className="work-row work-video" key={work.no}>
            <div className="work-media">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${work.videoId}`}
                title={`Haoran Wang — work ${work.no}`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <span>{work.no}</span>
            </div>
            <div className="work-data">
              <span>{work.label}</span><span>Video</span>
              <h2>Work {work.no}</h2>
              <p>Watch the complete audiovisual work. Presented through YouTube.</p>
              <a href={`https://www.youtube.com/watch?v=${work.videoId}`} target="_blank" rel="noreferrer">Watch on YouTube ↗</a>
            </div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
