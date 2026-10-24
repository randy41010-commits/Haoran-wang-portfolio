"use client";
import Link from "next/link";
import { useLocale } from "../i18n";
import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

const arbeitenIntro = {
  de: {
    credits: <>Performance: Haoran Wang, Jasper van der Hövel<br />Computersteuerung: Xinyun Zhang</>,
    material: "Rechen, MPU6050, ESP32, 3,3-V-Batteriestromversorgung, Kontaktmikrofon.",
    paragraphs: ["Die Farmen-Symphonie, komponiert für den Steingarten.", "An den Harken sind Sensoren angebracht. Die Signale der Sensoren (ESP32) werden vom Computer über die Arduino IDE erkannt und anschließend in Max/MSP verarbeitet und in Klänge umgewandelt. Die erzeugten Klänge werden über ein 8-Kanal-Lautsprechersystem wiedergegeben.", "Die Performer können durch verschiedene Bewegungen der Harken, wie zum Beispiel Verschieben, Drehen oder Rotieren, die Klänge in Echtzeit steuern und miteinander interagieren."],
  },
  en: {
    credits: <>Performance: Haoran Wang, Jasper van der Hövel<br />Computer control: Xinyun Zhang</>,
    material: "Rakes, MPU6050, ESP32, 3.3 V battery power supply, contact microphone.",
    paragraphs: ["The farming symphony, composed for the rock garden.", "Sensors are attached to the rakes. The sensor signals (ESP32) are detected by the computer through the Arduino IDE, then processed in Max/MSP and converted into sounds. The resulting sounds are played through an eight-channel loudspeaker system.", "Through different movements of the rakes, such as shifting, turning or rotating, the performers can control the sounds in real time and interact with one another."],
  },
  zh: {
    credits: <>表演：王浩然，Jasper van der Hövel<br />电脑控制：张欣云</>,
    material: "耙子、MPU6050、ESP32、3.3 V 电池电源、接触式麦克风。",
    paragraphs: ["为石头花园而作的农场交响曲。", "耙子上安装了传感器。传感器（ESP32）的信号通过 Arduino IDE 被电脑识别，随后在 Max/MSP 中进行处理并转换为声音。生成的声音通过八声道扬声器系统播放。", "表演者可以通过移动、转动或旋转耙子等不同动作，实时控制声音，并与彼此互动。"],
  },
} as const;

const localized = {
  de: [["Material: Karton, Acrylplatten, Lautsprecher und Spiegel.", "Der Entwurf sah vor, mit Karton, Acrylplatten, Lautsprechern und Spiegeln einen theoretisch nicht existierenden Raum zu schaffen.", "Ein Shepard-Ton wurde rekonstruiert und mit einem Synthesizer in Logic Pro bearbeitet. Der vollständig versiegelte Raum macht den über Lautsprecher wiedergegebenen Ton noch psychedelischer. Spiegel im Inneren des Kartons erzeugen beim Betreten ein Schwindelgefühl und spiegeln damit die Konzeption der Installation."], ["", "„THE MOMENT“ konzentriert sich auf die Verbindung räumlicher Klanglandschaften mit den umgebenden Jahreszeiten und kombiniert Raum- und Videoinstallation.", "Die Betrachtenden stehen in der Mitte der Lautsprecher und sehen multimediale Bilder durch ein Fenstermodell. So werden sie in die Jahreszeiten der Umgebung von Shanghai versetzt."], ["", "", ""]],
  en: [["Materials: cardboard, acrylic sheets, loudspeakers and mirrors.", "This installation uses cardboard, acrylic sheets, loudspeakers and mirrors to create a theoretically non-existent space.", "A Shepard tone was reconstructed and processed with a synthesizer in Logic Pro. The fully sealed room makes the sound played through the loudspeakers even more psychedelic. Mirrors inside the cardboard create a feeling of dizziness when entering, reflecting the installation’s concept."], ["", "“THE MOMENT” focuses on integrating spatial soundscapes with the surrounding seasons, combining a spatial installation with video.", "Visitors stand in the middle of the loudspeakers and view multimedia images through a window model, placing them within the seasons of Shanghai’s environment."], ["", "", ""]],
  zh: [["材料：纸板、亚克力板、扬声器与镜子。", "作品以纸板、亚克力板、扬声器和镜子构建一个在理论上并不存在的空间。", "作品修复并使用 Logic Pro 中的合成器处理谢泼德音。完全密封的空间让扬声器播放的声音更具迷幻感；纸板内侧的镜子使观众进入时产生眩晕感，回应装置的核心构想。"], ["", "《THE MOMENT》聚焦于将空间声音景观与周围季节融合，是空间装置与影像装置的结合。", "观众站在扬声器的中央，通过窗户模型观看多媒体影像，从而进入上海环境中四季更替的感受。"], ["", "", ""]]
} as const;

const chineseCredits = [
  <>声音设计：王浩然，于大有<br />材料采购与装置搭建：王浩然，于大有，叶子昂，王嘉仪</>,
  <>作者与教师：王满<br />声音设计：王浩然<br />影像设计：魏子轩，陈子阳</>,
  "",
];

const installations = [
  {
    no: "01",
    title: "Tai Chi",
    titleZh: "太极",
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
    titleZh: "The Moment",
    year: "2024",
    videoId: "KUXaac8QKwQ",
    credits: <>Author &amp; Teacher: Wang Man<br />Sound Design: Haoran Wang<br />Video Design: Zixuan Wei, Ziyang Chen</>,
    description: <>„THE MOMENT“ konzentriert sich auf die Integration von räumlichen Klanglandschaften mit den umgebenden Jahreszeiten und ist eine Kombination aus Raum- und Videoinstallationen.</>,
    detail: <>Der Betrachter steht in der Mitte der Lautsprecher und sieht die multimedialen Bilder durch das Fenstermodell, wodurch er sich in die Jahreszeiten der Umwelt in Shanghai hineinversetzt.</>,
  },
  {
    no: "03",
    title: "Arbeiten, wir arbeiten",
    titleZh: "劳动，我们劳动",
    year: "2026",
    videoId: "HxIikpebSoE",
    credits: "",
  },
];

const orderedInstallations = installations.map((item, index) => ({ item, index })).sort((a, b) => Number(b.item.year) - Number(a.item.year));

export default function InstallationPage() {
  const { locale } = useLocale(); const t = localized[locale]; const watch = locale === "de" ? "Auf YouTube ansehen ↗" : locale === "zh" ? "在 YouTube 观看 ↗" : "Watch on YouTube ↗";
  return (
    <main className="site-frame" id="top">
      <SiteHeader />
      <PageIntro index="04" />
      <section className="installation-list" aria-label="Installations">
        {orderedInstallations.map(({ item, index }) => (
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
              <div className="installation-title-row"><h2>{locale === "zh" ? item.titleZh : item.title}</h2>{item.no === "03" && <Link className="installation-detail-link" href="/installation/arbeiten-wir-arbeiten/">{locale === "zh" ? "详情 ↗" : locale === "de" ? "Details ↗" : "Details ↗"}</Link>}</div>
              {(locale === "zh" ? chineseCredits[index] : item.credits) && <p className="installation-credits">{locale === "zh" ? chineseCredits[index] : item.credits}</p>}
              {t[index][0] && <p className="installation-material">{t[index][0]}</p>}
              {t[index][1] && <p>{t[index][1]}</p>}
              {t[index][2] && <p>{t[index][2]}</p>}
              {item.no === "03" && <>
                <p className="installation-credits">{arbeitenIntro[locale].credits}</p>
                <p className="installation-material">{arbeitenIntro[locale].material}</p>
                {arbeitenIntro[locale].paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              </>}
              <a href={`https://www.youtube.com/watch?v=${item.videoId}`} target="_blank" rel="noreferrer">{watch}</a>
            </div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
