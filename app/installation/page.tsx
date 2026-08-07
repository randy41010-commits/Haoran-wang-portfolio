import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

const installations = [
  { no: "01", title: "Resonant Field", year: "2026", location: "Shanghai", text: "A room-scale sound environment responding to the electrical activity of the surrounding architecture.", tone: "install-a" },
  { no: "02", title: "Peripheral Light", year: "2025", location: "Berlin", text: "Light, translucent material and low-frequency sound create a slowly shifting spatial threshold.", tone: "install-b" },
  { no: "03", title: "Archive of Air", year: "2024", location: "Hangzhou", text: "An installation built from recorded breath, found objects and an eight-channel speaker system.", tone: "install-c" },
];

export default function InstallationPage() {
  return (
    <main className="site-frame" id="top">
      <SiteHeader />
      <PageIntro index="04" title="Installation" text="Spatial works bringing sound, light, objects and architecture into relation." />
      <section className="installation-list">
        {installations.map((item) => (
          <article className="installation-item" key={item.no}>
            <div className={`installation-view ${item.tone}`}><span>{item.no}</span><i /></div>
            <div className="installation-info"><span>{item.year} / {item.location}</span><h2>{item.title}</h2><p>{item.text}</p></div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
