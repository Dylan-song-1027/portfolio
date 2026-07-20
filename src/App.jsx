import React, { useEffect, useState } from "react";
import initAnimations from "./animations";

const projects = [
  { number: "01", title: "产品展示动画", category: "3D / Motion", desc: "以材质、光线和节奏为核心，建立产品的动态视觉识别。", image: "/assets/projects/box-003.jpg", featured: true },
  { number: "02", title: "中文字体实验", category: "Typography", desc: "从结构、笔画到应用场景，探索中文字体的视觉性格。", image: "/assets/projects/card-02.jpg" },
  { number: "03", title: "品牌线下物料", category: "Brand / Print", desc: "将品牌语言转化为包装、物料与线下触点的统一体验。", image: "/assets/projects/plastic-bag.jpg" },
  { number: "04", title: "展会空间视觉", category: "Spatial / Exhibition", desc: "围绕人流、信息层级和现场传播效率完成空间设计。", image: "/assets/projects/exhibition.jpg" },
  { number: "05", title: "网页视觉系统", category: "Web / Visual System", desc: "为官网搭建清晰、可延展且具备转化目标的视觉系统。", image: "/assets/projects/card-5-new.png" },
  { number: "06", title: "电商视觉项目", category: "E-commerce", desc: "从主视觉到商品页面，完整参与线上项目的设计落地。", image: "/assets/projects/card-6-new.png" },
];

const capabilities = [
  { index: "01", title: "品牌视觉", text: "从定位、概念到落地，建立可被持续使用的品牌视觉语言。" },
  { index: "02", title: "AI 视觉生成", text: "将生成式工具融入创意流程，快速探索风格、叙事与视觉方向。" },
  { index: "03", title: "商业设计落地", text: "理解真实业务目标，兼顾审美表达、交付效率与最终传播效果。" },
  { index: "04", title: "跨媒介执行", text: "覆盖平面、网页、电商、展会与动态影像等多种设计触点。" },
];

const socials = [
  { label: "Email", value: "swl19901027@gmail.com", href: "mailto:swl19901027@gmail.com" },
  { label: "Phone", value: "155 5519 5658", href: "tel:15555195658" },
  { label: "Gitee", value: "songhongsen", href: "https://gitee.com/songhongsen" },
];

function ArrowUpRight() {
  return <span className="arrowIcon" aria-hidden="true">↗</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const cleanup = initAnimations();
    return cleanup;
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={`topbar ${menuOpen ? "topbarOpen" : ""}`}>
        <a className="brand" href="#top" onClick={closeMenu} aria-label="返回首页">
          <span className="brandMark">S</span>
          <span>SONGWANG</span>
        </a>
        <button className="menuButton" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label="切换导航菜单" aria-expanded={menuOpen}>
          <span />
          <span />
        </button>
        <nav className="navLinks" aria-label="主导航">
          <a href="#about" onClick={closeMenu}>关于我</a>
          <a href="#work" onClick={closeMenu}>作品</a>
          <a href="#capabilities" onClick={closeMenu}>能力</a>
          <a href="#contact" onClick={closeMenu}>联系</a>
        </nav>
        <a className="navCta" href="#contact" onClick={closeMenu}>开始合作 <ArrowUpRight /></a>
      </header>

      <section className="hero" id="top">
        <video className="heroVideo" autoPlay muted loop playsInline poster="/assets/projects/website-hero.png" aria-hidden="true">
          <source src="/assets/media/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="heroShade" aria-hidden="true" />
        <div className="heroGrid" aria-hidden="true" />
        <div className="shell heroShell">
          <div className="heroMeta">
            <span className="eyebrow">Independent designer / 2026</span>
            <span className="heroStatus"><i /> Available for select projects</span>
          </div>
          <div className="heroCopy">
            <h1>把视觉<br /><em>变成语言。</em></h1>
            <p>视觉设计师 / AI 设计师 / 品牌设计师<br />为品牌、产品和真实业务创造清晰而有记忆点的视觉体验。</p>
            <div className="heroActions">
              <a className="button buttonPrimary" href="#work">查看精选作品 <ArrowUpRight /></a>
              <a className="textLink" href="#about">了解我的工作方式 <ArrowUpRight /></a>
            </div>
          </div>
          <div className="heroFoot">
            <span>Based in China</span>
            <span className="scrollHint">Scroll to explore <b>↓</b></span>
          </div>
        </div>
      </section>

      <section className="section aboutSection" id="about">
        <div className="shell">
          <div className="sectionIntro reveal">
            <span className="eyebrow">01 / About</span>
            <h2>设计不只是好看，<br /><span>更要让事情发生。</span></h2>
          </div>
          <div className="aboutLayout">
            <div className="aboutLead reveal">
              <p className="leadText">我是一名拥有 10 年经验的视觉设计师，长期参与从产品开发、品牌建立到最终上线的完整流程。</p>
              <p>擅长在复杂的信息与业务目标中找到清晰的视觉秩序，也关注 AI 工具如何让创意探索更快、更广、更有想象力。</p>
              <a className="textLink" href="#contact">聊聊你的项目 <ArrowUpRight /></a>
            </div>
            <div className="statGrid reveal">
              <div className="stat"><strong>10<span>+</span></strong><small>Years in design</small></div>
              <div className="stat"><strong>08</strong><small>Design disciplines</small></div>
              <div className="stat"><strong>∞</strong><small>Curiosity for AI</small></div>
              <div className="stat"><strong>01</strong><small>Clear visual system</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section workSection" id="work">
        <div className="shell">
          <div className="sectionIntro sectionIntroRow reveal">
            <div><span className="eyebrow">02 / Selected work</span><h2>精选项目</h2></div>
            <p>一组来自品牌、平面、网页、电商与动态影像的工作切片。</p>
          </div>
          <div className="projectGrid">
            {projects.map((project) => (
              <article className={`projectCard reveal ${project.featured ? "projectFeatured" : ""}`} key={project.number}>
                <div className="projectMedia"><img src={project.image} alt={project.title} loading="lazy" /></div>
                <div className="projectInfo">
                  <span className="projectNumber">{project.number}</span>
                  <div><span className="projectCategory">{project.category}</span><h3>{project.title}</h3><p>{project.desc}</p></div>
                  <ArrowUpRight />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section capabilitiesSection" id="capabilities">
        <div className="shell">
          <div className="sectionIntro reveal"><span className="eyebrow">03 / Capabilities</span><h2>我能带来的<br /><span>不止一种能力。</span></h2></div>
          <div className="capabilityGrid">
            {capabilities.map((capability) => (
              <article className="capabilityCard reveal" key={capability.index}>
                <span>{capability.index}</span><h3>{capability.title}</h3><p>{capability.text}</p><i>↗</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div className="shell contactShell">
          <div className="contactTop reveal"><span className="eyebrow">04 / Contact</span><span>Have a project in mind?</span></div>
          <div className="contactMain reveal"><h2>让我们一起<br /><em>做点有意义的。</em></h2><a className="button buttonPrimary" href="mailto:swl19901027@gmail.com">联系我 <ArrowUpRight /></a></div>
          <div className="contactDetails reveal">
            <div className="contactLinks">{socials.map((social) => <a href={social.href} key={social.label}><small>{social.label}</small><span>{social.value}</span><ArrowUpRight /></a>)}</div>
            <footer><span>© {new Date().getFullYear()} SONGWANG</span><span>Visual / AI / Brand design</span><a href="#top">Back to top ↑</a></footer>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
