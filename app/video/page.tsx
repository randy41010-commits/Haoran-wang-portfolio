import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

const videos = [
  ["01", "Between Frames", "02:14", "2026", "A short study on light, repetition and urban memory."],
  ["02", "Slow Signals", "01:42", "2025", "Moving identity experiment for an independent sound project."],
  ["03", "Afterimage", "03:08", "2024", "An audiovisual essay about objects that remain after people leave."],
];

export default function VideoPage() {
  return (
    <main className="site-frame" id="top">
      <SiteHeader />
      <PageIntro index="03" title="Video" text="短片、动态设计与进行中的影像实验。" />
      <section className="video-list">
        {videos.map(([no, title, duration, year, text], index) => (
          <article className="video-item" key={no}>
            <div className={`video-frame video-${index + 1}`}>
              <span className="play">PLAY</span><span className="duration">{duration}</span><i />
            </div>
            <div className="video-info"><span>{no} / {year}</span><h2>{title}</h2><p>{text}</p></div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
