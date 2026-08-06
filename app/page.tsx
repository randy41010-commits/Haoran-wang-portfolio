"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "留白笔记",
    type: "产品设计 · 2026",
    description: "一个帮助创作者整理灵感与长期思考的极简知识空间。",
    accent: "project-lime",
  },
  {
    number: "02",
    title: "城市漫游",
    type: "视觉系统 · 2025",
    description: "为城市探索者打造的路线品牌与数字化导览体验。",
    accent: "project-blue",
  },
  {
    number: "03",
    title: "微光计划",
    type: "品牌策略 · 2025",
    description: "连接独立创作者与真实需求，让好想法被更多人看见。",
    accent: "project-coral",
  },
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText("hello@example.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main>
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="#top" aria-label="返回首页">
          Z<span>·</span>
        </a>
        <div className="nav-links">
          <a href="#work">作品</a>
          <a href="#about">关于</a>
          <a href="#contact">联系</a>
        </div>
        <span className="status"><i /> OPEN TO WORK</span>
      </nav>

      <section className="hero" id="top">
        <div className="eyebrow"><span>独立设计师 / 创作者</span><span>中国 · 上海</span></div>
        <h1>把复杂的事，<br /><em>做得简单而动人。</em></h1>
        <div className="hero-bottom">
          <p>你好，我是 <strong>ZHIMING</strong>。我专注于品牌、数字产品与视觉体验，在策略与美感之间寻找恰到好处的平衡。</p>
          <a className="circle-link" href="#work" aria-label="查看精选作品"><span>↓</span></a>
        </div>
        <div className="hero-orbit" aria-hidden="true"><span /><b>IDEAS<br />IN MOTION</b></div>
      </section>

      <section className="work section" id="work">
        <header className="section-head">
          <span>01 / 精选作品</span>
          <p>从想法到落地，记录每一次认真解决问题的过程。</p>
        </header>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number} tabIndex={0}>
              <div className={`project-visual ${project.accent}`}>
                <span className="project-number">{project.number}</span>
                <div className="visual-mark" aria-hidden="true"><i /><i /><i /></div>
                <span className="view-project">查看项目 ↗</span>
              </div>
              <div className="project-copy">
                <p>{project.type}</p>
                <h2>{project.title}</h2>
                <span>{project.description}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <header className="section-head light"><span>02 / 关于我</span></header>
        <div className="about-grid">
          <h2>好设计不只是<br />“看起来不错”。</h2>
          <div className="about-copy">
            <p>它应该清晰、诚实，并且真正有用。我喜欢从问题的本质出发，把零散的信息组织成清楚的系统，再赋予它令人愿意靠近的表达。</p>
            <p>过去几年，我与科技、文化和生活方式领域的团队合作，参与从品牌定义到产品上线的完整过程。</p>
          </div>
          <div className="skills">
            <span>品牌策略</span><span>视觉设计</span><span>产品体验</span><span>创意开发</span>
          </div>
        </div>
        <div className="manifesto"><span>THINK CLEARLY.</span><span>MAKE BOLDLY.</span><span>STAY CURIOUS.</span></div>
      </section>

      <section className="contact section" id="contact">
        <span className="contact-label">03 / 一起做点有意思的事</span>
        <h2>有一个想法？<br /><em>聊聊吧。</em></h2>
        <div className="contact-row">
          <button onClick={copyEmail}>{copied ? "邮箱已复制 ✓" : "hello@example.com ↗"}</button>
          <div><a href="#top">小红书</a><a href="#top">即刻</a><a href="#top">LinkedIn</a></div>
        </div>
      </section>

      <footer><span>© 2026 ZHIMING</span><span>用好奇心持续创造</span><a href="#top">回到顶部 ↑</a></footer>
    </main>
  );
}
