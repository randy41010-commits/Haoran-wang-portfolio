"use client";
import { useLocale } from "../i18n";
import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

const content = {
  // Localised biography copy.
  de: ["Ich bin Haoran Wang, Musikproduzent und Künstler an der Schnittstelle von Klang, Musik und künstlerischer Forschung.", "Ich habe Musik und Medien am Shanghai Conservatory of Music studiert und studiere derzeit Klang und Realität an der Robert Schumann Hochschule Düsseldorf.", "Willkommen auf meiner Website. Hier zeige ich einen Teil der Werke, die ich geschaffen habe oder an denen ich beteiligt war. Sie können Videos ansehen und Musik hören. Derzeit suche ich nach Projekten von Mitstudierenden oder Lehrenden an der Hochschule, an denen ich für Leistungspunkte mitwirken kann. Wenn Sie Unterstützung bei Komposition, Aufführung, Aufnahme oder Fotografie suchen, kontaktieren Sie mich gern – E-Mail-Adresse und Telefonnummer finden Sie auf dieser Website.", "Ich arbeite in Komposition, Musikproduktion und Sounddesign. Meine Praxis beginnt oft mit einer präzisen traditionellen Kompositionstechnik und erweitert sich zugleich in experimentelles Theater. Im Sinne der von meinem Professor Martin Supper an der Universität der Künste Berlin betonten Beziehung zwischen Raum und Klang betrachte ich jeden Raum als ein einzigartiges, offenes Feld mit einer eigenen Fähigkeit zu singen."],
  en: ["I am Haoran Wang, a music producer and creator working across sound, music and artistic research.", "I graduated from the Shanghai Conservatory of Music, where I studied Music and Media. I am currently studying Sound and Reality at the Robert Schumann Hochschule Düsseldorf.", "Welcome to my website. Here I share a selection of works I have created or contributed to; you can explore videos and listen to music. I am currently looking to participate in projects led by fellow students or tutors at the university in order to earn credits. If you are looking for support with composition, performance, recording or photography, please get in touch — you can find my email address and telephone number on this website.", "I work across composition, music production and sound design. My practice often begins with rigorous traditional compositional techniques, while also extending into experimental theatre-making. Following the relationship between space and sound emphasised by Martin Supper, my professor at the Berlin University of the Arts, I treat every space as a unique, open field with its own capacity to sing."],
  zh: ["我是王浩然，一名音乐制作人和创作者，致力于声音、音乐与艺术研究的交叉实践。", "我毕业于上海音乐学院音乐与媒体专业，目前就读于罗伯特·舒曼杜塞尔多夫音乐学院“声音与现实”专业。", "欢迎来到我的网站，我在这里上传了我创作和参与的部分作品，您可以浏览视频或是听到音乐。我目前正在寻找大学内其他同学或是导师的项目并参与，以赚取学分。如果你刚好有这方面的需求，不管是创作、演奏、录音或是摄影，都请联系我，你可以在网站上找到我的邮箱和电话。", "我从事作曲、音乐制作与声音设计。我的创作往往从严谨的传统作曲技法出发，同时延展至实验性剧场实践。正如我在柏林艺术大学的教授 Martin Supper 所强调的空间和声音的关系那样，我把每个空间都当作独特而开放的场域，并拥有自身的歌唱能力。"]
} as const;

export default function InfoPage() {
  const { locale } = useLocale(); const text = content[locale];
  const portraitSrc = process.env.GITHUB_ACTIONS === "true"
    ? "/Haoran-wang-portfolio/haoran-wang.jpg"
    : "/haoran-wang.jpg";

  return (
    <main className="site-frame" id="top">
      <SiteHeader />
      <PageIntro index="01" />
      <section className="info-layout">
        <div className="portrait-field">
          <img src={portraitSrc} alt="Haoran Wang on the coast" />
          <span>PORTRAIT / ÉTRETAT, FR</span>
        </div>
        <div className="bio-copy">
          <p className="lead">{text[0]}</p>
          <p>{text[1]}</p>
          <p>{text[2]}</p>
          <p>{text[3]}</p>
          <dl>
            <div><dt>Practice</dt><dd>Music Production<br />Sound Art<br />Composition<br />Creative Research</dd></div>
            <div><dt>Education</dt><dd>Shanghai Conservatory of Music<br />Robert Schumann Hochschule Düsseldorf</dd></div>
            <div><dt>Languages</dt><dd>Chinese<br />English<br />German</dd></div>
          </dl>
        </div>
      </section>
      <section className="statement-band"><p>Listening closely.<br />Shaping sound.<br />Opening space.</p></section>
      <SiteFooter />
    </main>
  );
}
