"use client";
import { useLocale } from "../i18n";
import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

const localized = {
  de: [["Material: Karton, Acrylplatten, Lautsprecher und Spiegel.", "Der Entwurf sah vor, mit Karton, Acrylplatten, Lautsprechern und Spiegeln einen theoretisch nicht existierenden Raum zu schaffen.", "Ein Shepard-Ton wurde rekonstruiert und mit einem Synthesizer in Logic Pro bearbeitet. Der vollständig versiegelte Raum macht den über Lautsprecher wiedergegebenen Ton noch psychedelischer. Spiegel im Inneren des Kartons erzeugen beim Betreten ein Schwindelgefühl und spiegeln damit die Konzeption der Installation."], ["", "„THE MOMENT“ konzentriert sich auf die Verbindung räumlicher Klanglandschaften mit den umgebenden Jahreszeiten und kombiniert Raum- und Videoinstallation.", "Die Betrachtenden stehen in der Mitte der Lautsprecher und sehen multimediale Bilder durch ein Fenstermodell. So werden sie in die Jahreszeiten der Umgebung von Shanghai versetzt."]],
  en: [["Materials: cardboard, acrylic sheets, loudspeakers and mirrors.", "This installation uses cardboard, acrylic sheets, loudspeakers and mirrors to create a theoretically non-existent space.", "A Shepard tone was reconstructed and processed with a synthesizer in Logic Pro. The fully sealed room makes the sound played through the loudspeakers even more psychedelic. Mirrors inside the cardboard create a feeling of dizziness when entering, reflecting the installation’s concept."], ["", "“THE MOMENT” focuses on integrating spatial soundscapes with the surrounding seasons, combining a spatial installation with video.", "Visitors stand in the middle of the loudspeakers and view multimedia images through a window model, placing them within the seasons of Shanghai’s environment."]],
  zh: [["材料：纸板、亚克力板、扬声器与镜子。", "作品以纸板、亚克力板、扬声器和镜子构建一个在理论上并不存在的空间。", "作品修复并使用 Logic Pro 中的合成器处理谢泼德音。完全密封的空间让扬声器播放的声音更具迷幻感；纸板内侧的镜子使观众进入时产生眩晕感，回应装置的核心构想。"], ["", "《THE MOMENT》聚焦于将空间声音景观与周围季节融合，是空间装置与影像装置的结合。", "观众站在扬声器的中央，通过窗户模型观看多媒体影像，从而进入上海环境中四季更替的感受。"]]
} as const;

const chineseCredits = [
  <>声音设计：王浩然，于大有<br />材料采购与装置搭建：王浩然，于大有，叶子昂，王嘉仪</>,
  <>作者与教师：王满<br />声音设计：王浩然<br />影像设计：魏子轩，陈子阳</>,
];

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
  const { locale } = useLocale(); const t = localized[locale]; const watch = locale === "de" ? "Auf YouTube ansehen ↗" : locale === "zh" ? "在 YouTube 观看 ↗" : "Watch on YouTube ↗";
  return (
    <main className="site-frame" id="top">
      <SiteHeader />
      <PageIntro index="04" />
      <section className="installation-list" aria-label="Installations">
        {installations.map((item, index) => (
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
              <p className="installation-credits">{locale === "zh" ? chineseCredits[index] : item.credits}</p>
              {t[index][0] && <p className="installation-material">{t[index][0]}</p>}
              <p>{t[index][1]}</p>
              <p>{t[index][2]}</p>
              <a href={`https://www.youtube.com/watch?v=${item.videoId}`} target="_blank" rel="noreferrer">{watch}</a>
            </div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
