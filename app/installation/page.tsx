import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

const installations = [
  {
    no: "01",
    title: "Tai Chi",
    year: "2023",
    videoId: "pcCegXxbYxs",
    credits: <>Sound Design: Haoran Wang, Dayou Yu<br />Material purchase and installation: Haoran Wang, Dayou Yu, Ziang Ye, Jiayi Wang</>,
    material: "Material: Karton, Acrylplatten, Lautsprechern und Spiegeln.",
    description: <>Der Entwurf sah vor, mit Materialien wie Karton, Acrylplatten, Lautsprechern und Spiegeln einen theoretisch nichtexistierenden Raum zu schaffen.</>,
    detail: <>Ein Shepard Ton wurde restauriert und mit einem Synthesizer in Logic Pro bearbeitet. Der Ton wurde dann in dem Raum gestellt, der vollständig versiegelt wurde, um den Shepard-Ton noch psychedelischer zu machen, wenn er über die Lautsprecher abgespielt wird. Die Spiegel auf der Innenseite des Kartons erzeugen beim Betreten des Raums ein Schwindelgefühl, das die Konzeption dieser Installation widerspiegelt.</>,
  },
  {
    no: "02",
    title: "The Moment",
    year: "2024",
    videoId: "KUXaac8QKwQ",
    credits: <>Author &amp; Teacher: Wang Man<br />Sound Design: Haoran Wang<br />Video Design: Yixuan Wei, Ziyang Chen</>,
    description: <>„THE MOMENT“ konzentriert sich auf die Integration von räumlichen Klanglandschaften mit den umgebenden Jahreszeiten und ist eine Kombination aus Raum- und Videoinstallationen.</>,
    detail: <>Der Betrachter steht in der Mitte der Lautsprecher und sieht die multimedialen Bilder durch das Fenstermodell, wodurch er sich in die Jahreszeiten der Umwelt in Shanghai hineinversetzt.</>,
  },
];

export default function InstallationPage() {
  return (
    <main className="site-frame" id="top">
      <SiteHeader />
      <PageIntro index="04" title="Installation" text="Spatial works bringing sound, light, objects and architecture into relation." />
      <section className="installation-list" aria-label="Installations">
        {installations.map((item) => (
          <article className="installation-item installation-video" key={item.no}>
            <div className="installation-view">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${item.videoId}`}
                title={`Haoran Wang — ${item.title}`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <span>{item.no}</span>
            </div>
            <div className="installation-info">
              <span>{item.year} / Installation</span>
              <h2>{item.title}</h2>
              <p className="installation-credits">{item.credits}</p>
              {item.material && <p className="installation-material">{item.material}</p>}
              <p>{item.description}</p>
              <p>{item.detail}</p>
              <a href={`https://www.youtube.com/watch?v=${item.videoId}`} target="_blank" rel="noreferrer">Watch on YouTube ↗</a>
            </div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
