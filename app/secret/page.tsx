"use client";
import { SiteFooter, SiteHeader } from "../site-shell";

export default function SecretPage() {
  return (
    <main className="site-frame" id="top">
      <SiteHeader />
      <section className="secret-page" aria-label="Hidden page">
        <span aria-hidden="true">?</span>
        <div className="secret-content">
          <p>欢迎来到隐藏界面</p>
          <h1>恭喜你，这是一个秘密！</h1>
          <div className="secret-video">
            <iframe
              src="https://www.youtube-nocookie.com/embed/bwe7zQKx_Iw"
              title="Hidden video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
