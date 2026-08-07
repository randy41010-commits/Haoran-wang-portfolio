import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

const works = [
  { no: "001", title: "留白笔记", year: "2026", type: "Digital Product", tone: "tone-a", text: "面向创作者的知识整理空间，将碎片化灵感转化为可持续生长的个人档案。" },
  { no: "002", title: "城市漫游", year: "2025", type: "Identity System", tone: "tone-b", text: "为城市探索者建立的一套路线品牌与数字导览系统。" },
  { no: "003", title: "微光计划", year: "2025", type: "Campaign", tone: "tone-c", text: "连接独立创作者与真实需求的长期文化项目。" },
  { no: "004", title: "之间", year: "2024", type: "Editorial", tone: "tone-d", text: "关于空间、距离与日常观察的影像出版实验。" },
];

export default function WorksPage() {
  return (
    <main className="site-frame" id="top">
      <SiteHeader />
      <PageIntro index="02" title="Works" text="选择项目，2024—2026。每个项目均以研究、视觉与应用系统共同构成。" />
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
