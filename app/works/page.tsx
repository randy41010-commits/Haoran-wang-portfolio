import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

const works = [
  { no: "001", title: "Blank Notes", year: "2026", type: "Digital Product", tone: "tone-a", text: "A knowledge space for artists, turning fragments of thought into a living personal archive." },
  { no: "002", title: "Urban Drift", year: "2025", type: "Identity System", tone: "tone-b", text: "A route identity and digital guide created for independent urban exploration." },
  { no: "003", title: "Low Light", year: "2025", type: "Campaign", tone: "tone-c", text: "A long-term cultural initiative connecting independent makers with meaningful commissions." },
  { no: "004", title: "In Between", year: "2024", type: "Editorial", tone: "tone-d", text: "A photographic publishing experiment about space, distance and everyday observation." },
];

export default function WorksPage() {
  return (
    <main className="site-frame" id="top">
      <SiteHeader />
      <PageIntro index="02" title="Works" text="Selected projects, 2024—2026. Each work brings research, image and applied systems together." />
      <section className="work-index">
        {works.map((work) => (
          <article className="work-row" key={work.no}>
            <div className={`work-media ${work.tone}`}><span>{work.no}</span><i /></div>
            <div className="work-data">
              <span>{work.type}</span><span>{work.year}</span>
              <h2>{work.title}</h2>
              <p>{work.text}</p>
              <a href="/kontakt">Project details on request ↗</a>
            </div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
