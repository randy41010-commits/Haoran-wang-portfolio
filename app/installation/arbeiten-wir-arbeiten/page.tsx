"use client";
import Link from "next/link";
import { useState } from "react";
import { useLocale } from "../../i18n";
import { SiteHeader, SiteFooter } from "../../site-shell";

const detailCopy = {
  "de": {
    "back": "← Installation",
    "performance": "Performance",
    "computer": "Computersteuerung",
    "materials": "Materialien",
    "material": "Rechen, MPU6050, ESP32, 3,3-V-Batteriestromversorgung, Kontaktmikrofon.",
    "lead": "Die Farmen-Symphonie, komponiert für den Steingarten.",
    "paragraphs": [
      "An den Harken sind Sensoren angebracht. Die Signale der Sensoren (ESP32) werden vom Computer über die Arduino IDE erkannt und anschließend in Max/MSP verarbeitet und in Klänge umgewandelt. Die erzeugten Klänge werden über ein 8-Kanal-Lautsprechersystem wiedergegeben.",
      "Die Performer können durch verschiedene Bewegungen der Harken, wie zum Beispiel Verschieben, Drehen oder Rotieren, die Klänge in Echtzeit steuern und miteinander interagieren."
    ],
    "photos": "Fotodokumentation",
    "previous": "Vorheriges Foto",
    "next": "Nächstes Foto",
    "group": "Gruppe"
  },
  "en": {
    "back": "← Installation",
    "performance": "Performance",
    "computer": "Computer control",
    "materials": "Materials",
    "material": "Rakes, MPU6050, ESP32, 3.3 V battery power supply, contact microphone.",
    "lead": "The farming symphony, composed for the rock garden.",
    "paragraphs": [
      "Sensors are attached to the rakes. The sensor signals (ESP32) are detected by the computer through the Arduino IDE, then processed in Max/MSP and converted into sounds. The resulting sounds are played through an eight-channel loudspeaker system.",
      "Through different movements of the rakes, such as shifting, turning or rotating, the performers can control the sounds in real time and interact with one another."
    ],
    "photos": "Photo documentation",
    "previous": "Previous photograph",
    "next": "Next photograph",
    "group": "Group"
  },
  "zh": {
    "back": "← 装置",
    "performance": "表演",
    "computer": "电脑控制",
    "materials": "材料",
    "material": "耙子、MPU6050、ESP32、3.3 V 电池电源、接触式麦克风。",
    "lead": "为石头花园而作的农场交响曲。",
    "paragraphs": [
      "耙子上安装了传感器。传感器（ESP32）的信号通过 Arduino IDE 被电脑识别，随后在 Max/MSP 中进行处理并转换为声音。生成的声音通过八声道扬声器系统播放。",
      "表演者可以通过移动、转动或旋转耙子等不同动作，实时控制声音，并与彼此互动。"
    ],
    "photos": "照片记录",
    "previous": "上一张",
    "next": "下一张",
    "group": "组"
  }
} as const;

const galleryGroups = [
  ["/arbeiten-galerie/04.jpg", "/arbeiten-galerie/05.jpg", "/arbeiten-galerie/performance-5837.png"],
  ["/arbeiten-galerie/06.jpg", "/arbeiten-galerie/07.jpg", "/arbeiten-galerie/08.jpg", "/arbeiten-galerie/09.jpg", "/arbeiten-galerie/10.jpg", "/arbeiten-galerie/11.jpg", "/arbeiten-galerie/rakes-5826.png", "/arbeiten-galerie/rakes-5827.png"],
] as const;

function ArbeitenGallery({ groupIndex }: { groupIndex: 0 | 1 }) {
  const { locale } = useLocale();
  const t = detailCopy[locale];
  const [photoIndex, setPhotoIndex] = useState(0);
  const group = galleryGroups[groupIndex];
  const previous = () => setPhotoIndex(index => (index - 1 + group.length) % group.length);
  const next = () => setPhotoIndex(index => (index + 1) % group.length);

  return (
    <section className="installation-gallery artwork-gallery" aria-label={`${t.photos} — ${t.group} ${groupIndex + 1}`}>
      <div className="gallery-meta"><span>{t.group} {groupIndex + 1}</span><span aria-live="polite">{String(photoIndex + 1).padStart(2, "0")} / {String(group.length).padStart(2, "0")}</span></div>
      <div className="gallery-stage">
        <button type="button" onClick={previous} aria-label={t.previous}>←</button>
        <figure>
          <img src={group[photoIndex]} alt={`Arbeiten, wir arbeiten — ${t.group} ${groupIndex + 1}, ${photoIndex + 1}`} loading="lazy" />
        </figure>
        <button type="button" onClick={next} aria-label={t.next}>→</button>
      </div>
      <p className="gallery-credit">{locale === "zh" ? "摄影：" : locale === "de" ? "Fotografie: " : "Photography: "}Phillip Schulze</p>
    </section>
  );
}


export default function ArbeitenDetailPage() {
  const { locale } = useLocale();
  const t = detailCopy[locale];
  return (
    <main className="site-frame" id="top">
      <SiteHeader />
      <article className="artwork-detail">
        <Link className="artwork-back" href="/installation/">{t.back}</Link>
        <header className="artwork-heading">
          <span>2026 / Installation</span>
          <h1>Arbeiten, wir arbeiten</h1>
        </header>
        <div className="artwork-video">
          <iframe src="https://www.youtube-nocookie.com/embed/HxIikpebSoE" title="Haoran Wang — Arbeiten, wir arbeiten" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
        <div className="artwork-story-row">
          <div className="artwork-credits">
            <p>{t.performance}: {locale === "zh" ? "王浩然" : "Haoran Wang"}, Jasper van der Hövel<br />{t.computer}: Xinyun Zhang</p>
            <h2>{t.materials}</h2>
            <p>{t.material}</p>
          </div>
          <ArbeitenGallery groupIndex={0} />
        </div>
        <div className="artwork-story-row">
          <ArbeitenGallery groupIndex={1} />
          <div className="artwork-copy">
            <p className="artwork-lead">{t.lead}</p>
            {t.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
