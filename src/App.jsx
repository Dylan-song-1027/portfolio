import React, { useState, useEffect } from "react";
import initAnimations from './animations';

const projects = [
  { title: "各类产品展示动画", tag: "Blender / 动画渲染", desc: "简单动画展示", image: "/assets/projects/box-003.jpg" },
  { title: "字体设计", tag: "个人 / 相关练习", desc: "个人日常学习", image: "/assets/projects/card-02.jpg" },
  { title: "各项目展示", tag: "平面设计 / 线下物料", desc: "前任职公司所有项目经历", image: "/assets/projects/plastic-bag.jpg" },
  { title: "项目展示", tag: "平面设计 / 展会展台设计", desc: "前任职公司项目经历", image: "/assets/projects/exhibition.jpg" },
  { title: "网页海报设计", tag: "Web / 网页搭建", desc: "前任职公司官网", image: "/assets/projects/card-5-new.png" },
  { title: "各类目作品", tag: "电商 / 工作项目非练习", desc: "前任职公司上线项目非个人练习作品", image: "/assets/projects/card-6-new.png" },
];

const skills = [
  "UI Design","UX Research","Figma","Sketch","Adobe XD","Photoshop","Illustrator",
  " prototyping","Design System","User Flow","Wireframe","Web",
];

const IconGitHub = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const IconDribbble = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.815zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702C16.86 2.52 14.56 1.24 12 1.24c-.825 0-1.634.12-2.4.812zm10.335 3.483c-.218.29-1.91 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
  </svg>
);

const IconZcool = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <circle cx="12" cy="12" r="10" />
    <text x="12" y="16" textAnchor="middle" fill="currentColor" stroke="none" fontSize="12" fontWeight="700">Z</text>
  </svg>
);

const IconHuaban = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-3-3 1.41-1.41L11 14.17l5.59-5.59L18 10l-7 7z" />
  </svg>
);

const socials = [
  { label: "GitHub", href: "#", icon: <IconGitHub /> },
  { label: "Dribbble", href: "#", icon: <IconDribbble /> },
  { label: "站酷", href: "#", icon: <IconZcool /> },
  { label: "花瓣", href: "#", icon: <IconHuaban /> },
];

function App() {
  useEffect(() => { initAnimations(); }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <nav className={`nav ${menuOpen ? "navOpen" : ""}`}>
        <a className="navLogo" href="#hero">
          <img src="/logo.svg" alt="SONGWANG" />
        </a>
        <button className="navToggle" onClick={() => setMenuOpen((v) => !v)} aria-label="菜单"><span /><span /></button>
        <div className="navLinks">
          <a href="#about" onClick={() => setMenuOpen(false)}>关于我</a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>项目介绍</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>联系我</a>
        </div>
      </nav>

      <section className="hero" id="hero">
        <video className="heroVideo" autoPlay muted loop playsInline>
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_031045_0e1165dd-ab48-46e3-ad3d-5fe77f217647.mp4" type="video/mp4" />
        </video>
        <div className="heroOverlay" />
        <div className="heroBg" />
        <div className="heroContent">
          <p className="heroEyebrow hero-eyebrow">UI / UX Designer — 8 年经验</p>
          <h1>
                  <span className="hero-title-line">SONGWANG</span>
                </h1>
          <p className="heroDesc" data-anim>独立设计师 | AI设计师 | 品牌设计师 | 电商设计师</p>
          <div className="heroActions" data-anim="cta">
            <a href="#portfolio" className="btnPrimary">订阅服务</a>
            <a href="#contact" className="btnGhost">联系我</a>
          </div>
        </div>
        <div className="heroScroll" aria-hidden="true"><span /></div>
      </section>

      <section className="section" id="about">
        <div className="shell">
          <div className="sectionHeader">
            <span className="sectionTag">About</span>
            <h2>Cedric Song</h2>
          </div>
          <div className="aboutGrid">
            <div className="aboutBio">
              <p>平面设计师 | 电商设计师 | AI设计师</p>
              <p>拥有10年的工作经验，8年前从0开始一步一步踏上设计路程，从产品开发阶段到后期上线的全过程设计需求皆可参与。</p>
            </div>
            <div className="aboutSkills">{skills.map((s) => (<span className="skillTag" key={s}>{s}</span>))}</div>
          </div>
        </div>
      </section>

      <section className="section" id="portfolio">
        <div className="shell">
          <div className="sectionHeader">
            <span className="sectionTag">Portfolio</span>
            <h2>项目技能展示</h2>
          </div>
          <div className="portfolioGrid">
            {projects.map((p, i) => (
              <article className={`projectCard projectCard${i % 4}`} key={p.title} data-anim>
                  <div className="cardVisual">
                    {p.image ? (
                      <img src={p.image} alt={p.title} loading="lazy" />
                    ) : (
                      <div className="cardPlaceholder">
                        <span>{String(i + 1).padStart(2, "0")}</span>
                      </div>
                    )}
                  </div>
                  <div className="cardBody">
                    <span className="cardTag">{p.tag}</span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                  <div className="cardOverlay" />
                </article>
            ))}
          </div>
</div>
      </section>

      <section className="section contact" id="contact">
        <div className="shell">
          <div className="contactInner">
            <span className="sectionTag">Contact</span>
            <h2>Cedric Song</h2>
            <a href="mailto:swl19901027@gmail.com" className="btnPrimary emailBtn">swl19901027@gmail.com</a>
            <div className="socialRow">{socials.map((s) => (<a className="socialLink" href={s.href} key={s.label}>{s.icon}{s.label}</a>))}</div>
          </div>
        </div>
        <footer className="footer"><p>&copy; {new Date().getFullYear()} SONGWANG. All rights reserved.</p></footer>
      </section>
    </main>
  );
}

export default App;