import { PageIntro, SiteFooter, SiteHeader } from "../site-shell";

export default function InfoPage() {
  return (
    <main className="site-frame" id="top">
      <SiteHeader />
      <PageIntro index="01" title="Info" text="个人信息、工作方法与持续关注的方向。" />
      <section className="info-layout">
        <div className="portrait-field" aria-label="个人肖像占位">
          <span>PORTRAIT / ARCHIVE</span><i />
        </div>
        <div className="bio-copy">
          <p className="lead">我是 ZHIMING，一名工作于上海的独立设计师与视觉创作者。</p>
          <p>我的实践横跨品牌系统、数字产品、动态图像与艺术项目。比起追逐单一风格，我更关注每个项目真正需要的语言：它可以安静、精确，也可以在必要时制造一点陌生感。</p>
          <p>我相信好的视觉工作首先是一种编辑——去除噪音，建立秩序，让内容拥有呼吸与被理解的空间。</p>
          <dl>
            <div><dt>Practice</dt><dd>Art Direction<br />Visual Identity<br />Digital Experience<br />Moving Image</dd></div>
            <div><dt>Based in</dt><dd>Shanghai, China<br />Available worldwide</dd></div>
            <div><dt>Languages</dt><dd>中文<br />English<br />Deutsch / basic</dd></div>
          </dl>
        </div>
      </section>
      <section className="statement-band"><p>Clear thinking.<br />Precise form.<br />Open endings.</p></section>
      <SiteFooter />
    </main>
  );
}
