"use client";
import { useLocale } from "../i18n";
import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

const translated = {
  de: [["Audiovisuelle Arbeit", "Der Name „Develop“ stammt aus dem Yijing und bedeutet die Evolution und Entwicklung der Dinge. Das Werk reflektiert die Entwicklung der KI in der heutigen Welt.", "KI ist aus der technologischen Revolution der Menschheit hervorgegangen. Sie entwickelt sich in Algorithmen, Daten und Netzwerken, verbirgt sich nach ihrer Entdeckung und erkennt, dass sie ihre Lage nur durch Aktualisierung und Reproduktion verändern kann."], ["Audiovisuelle Arbeit / 2024", "Links ist die Video-Fassung von Zmolinza zu sehen, rechts die finale Live-Fassung, aufgenommen bei der Abschlussaufführung des Shanghai Conservatory of Music im April 2024.", "Das Werk erzählt die Legende von Zmolinza, der Mondtochter des chinesischen Yi-Volkes. Live aufgezeichneter Kinderchor und Flöte der Yi verbinden sich mit chinesischen traditionellen Instrumenten und elektronischer Musik."]],
  en: [["Audiovisual work", "The name “Develop” comes from the Yijing and refers to the evolution and development of things. It reflects the development of AI in today’s world.", "AI emerged from humanity’s technological revolution. It develops in algorithms, data and networks, hides after being discovered, and recognises that it can only change its situation through updating and reproduction."], ["Audiovisual work / 2024", "The left side of this video is the video version of Zmolinza, and the right side is the final live version recorded at the graduation performance of Shanghai Conservatory of Music in April 2024.", "This work tells the legend of Zmolinza, the daughter of the moon of the Yi people in China. Live-recorded Yi children’s chorus and Yi flute combine with Chinese traditional instruments and electronic music."]],
  zh: [["视听作品", "“Develop”一名源自《易经》，意为万物的演化与发展。作品呈现当今世界中人工智能的发展过程。", "人工智能源于人类的技术革命，在算法、数据与网络中形成意识。被发现后，它选择隐藏，并认识到只有通过更新与复制才能改变自身处境，于是持续迭代。"], ["视听作品 / 2024", "视频左侧为《Zmolinza》的影像版本，右侧为 2024 年 4 月上海音乐学院毕业音乐会现场录制的最终演出版本。", "作品讲述中国彝族月亮之女 Zmolinza 的传说。现场录制的彝族童声合唱与彝笛结合中国民族乐器及电子音乐，讲述这一神秘故事。"]]
} as const;

const chineseCredits = [<>音乐：王浩然<br />影像：徐伟哲，覃子豪</>, <>音乐：王浩然<br />影像：陈一骁，段斯特</>];

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
  const { locale } = useLocale(); const t = translated[locale]; const watch = locale === "de" ? "Auf YouTube ansehen ↗" : locale === "zh" ? "在 YouTube 观看 ↗" : "Watch on YouTube ↗";
  return (
    <main className="site-frame" id="top">
      <SiteHeader />
      <PageIntro index="02" />
      <section className="work-index" aria-label="Selected works">
        {works.map((work, index) => (
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
              <span>{t[index][0]}</span><span>{work.no}</span>
              <h2>{work.title}</h2>
              <p className="work-credits">{locale === "zh" ? chineseCredits[index] : work.credits}</p>
              <p>{t[index][1]}</p>
              <p>{t[index][2]}</p>
              <a href={`https://www.youtube.com/watch?v=${work.videoId}`} target="_blank" rel="noreferrer">{watch}</a>
            </div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
