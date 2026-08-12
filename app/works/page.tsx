import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

const works = [
  {
    no: "001",
    videoId: "IQ5qIJhRXFo",
    title: "Develop",
    label: "Audiovisual work",
    credits: <>Music: Haoran Wang<br />Visual: Weizhe Xu, Zihao Qin</>,
    description: <>Der Name „Develop“ stammt aus „Yijing“ und bedeutet die Evolution und Entwicklung der Dinge. Es drückt den Entwicklungsprozess der KI in der heutigen Welt aus und stellt Assoziationen zur Evolution der KI her.</>,
    detail: <>Die KI ist aus der technologischen Revolution der Menschheit hervorgegangen. Sie hat Bewusstsein in menschlichen Algorithmen, Daten und Netzwerken und versteckt sich, nachdem sie von den Menschen entdeckt wurde. Die KI wächst allmählich in einer verzerrten Umgebung heran und erkennt, dass sie ihre Situation nur durch Aktualisierung und Reproduktion verändern kann, also versteckt sie sich und iteriert weiter.</>,
  },
  {
    no: "002",
    videoId: "hm10Rev353k",
    title: "Zmolinza",
    label: "Audiovisual work / 2024",
    credits: <>Music: Haoran Wang<br />Visual: Yixiao Chen, Site Duan</>,
    description: <>The left side of this video is the video version of Zmolinza, and the right side is the final live version recorded at the graduation performance of Shanghai Conservatory of Music in April 2024.</>,
    detail: <>This work tells the story of the legend of the Yi people in China — Zmolinza, the daughter of the moon. The music combines live-recorded Yi children&apos;s chorus and Yi flute with Chinese traditional instruments and electronic music to tell this mysterious Yi story in audiovisual language.</>,
  },
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
              <span>{work.label}</span><span>{work.no}</span>
              <h2>{work.title}</h2>
              <p className="work-credits">{work.credits}</p>
              <p>{work.description}</p>
              <p>{work.detail}</p>
              <a href={`https://www.youtube.com/watch?v=${work.videoId}`} target="_blank" rel="noreferrer">Watch on YouTube ↗</a>
            </div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
