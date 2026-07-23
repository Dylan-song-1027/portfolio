import React, { useEffect, useRef, useState } from "react";
import initAnimations from "./animations";

const projects = [
  {
    number: "01",
    slug: "product-visual-support",
    filter: "Product",
    title: "产品视觉支持",
    client: "珠海卓力声科技 · 2023.10—2026.03",
    category: "Product / 3D",
    desc: "参与产品配色、渲染效果图、包装与推广物料，支持产品从开发到上市的视觉落地。",
    deliverables: "产品渲染 / 包装 / 推广物料",
    image: "/assets/projects/box-003.jpg",
    gallery: ["/assets/projects/box-003.jpg", "/assets/projects/ecommerce-01.jpg", "/assets/projects/ecommerce-02.jpg"],
    accent: "#5968f5",
    featured: true,
  },
  {
    number: "02",
    slug: "packaging-editorial-system",
    filter: "Packaging",
    title: "包装与说明书系统",
    client: "珠海卓力声科技 · 2023.10—2026.03",
    category: "Packaging / Editorial",
    desc: "将产品信息整理为清晰、可生产的包装与说明书版式，兼顾品牌表达与实际交付。",
    deliverables: "包装设计 / 说明书排版",
    image: "/assets/projects/card-02.jpg",
    gallery: ["/assets/projects/card-02.jpg", null, null],
    accent: "#c42a32",
  },
  {
    number: "03",
    slug: "ecommerce-visual-system",
    filter: "Commerce",
    title: "电商平台视觉",
    client: "珠海卓力声科技 · 2023.10—2026.03",
    category: "E-commerce",
    desc: "负责国内平台主图、详情页、A+ 页面及产品图设计，覆盖从视觉规划到上线落地。",
    deliverables: "主图 / 详情页 / A+ 页面",
    image: "/assets/projects/plastic-bag.jpg",
    gallery: ["/assets/projects/plastic-bag.jpg", null, null],
    accent: "#159cc3",
  },
  {
    number: "04",
    slug: "exhibition-visuals",
    filter: "Spatial",
    title: "展会与线下物料",
    client: "珠海卓力声科技 · 2023.10—2026.03",
    category: "Event / Spatial",
    desc: "围绕展台信息层级和现场传播效率，完成会展空间及配套线下物料设计。",
    deliverables: "展台视觉 / 宣传物料",
    image: "/assets/projects/exhibition.jpg",
    gallery: ["/assets/projects/exhibition.jpg", null, null],
    accent: "#d5a65a",
  },
  {
    number: "05",
    slug: "product-image-campaign",
    filter: "Image",
    title: "产品图像与推广视觉",
    client: "珠海镭沃科技 · 2021.07—2023.07",
    category: "Image / Campaign",
    desc: "完成产品拍摄、修图、C4D 渲染与平台 Banner，协助把产品信息转化为线上视觉内容。",
    deliverables: "产品图 / 修图 / Banner",
    image: "/assets/projects/card-5-new.png",
    gallery: ["/assets/projects/card-5-new.png", null, null],
    accent: "#12b9b1",
  },
  {
    number: "06",
    slug: "fashion-ecommerce-visuals",
    filter: "Commerce",
    title: "服装电商视觉",
    client: "安徽高梵电子商务 · 2019.06—2021.06",
    category: "Fashion / Retouching",
    desc: "负责服装拍摄、模特图修图、静物精修及主图视频的剪辑调色与视觉优化。",
    deliverables: "拍摄 / 精修 / 主图视频",
    image: "/assets/projects/card-6-new.png",
    gallery: ["/assets/projects/card-6-new.png", null, null],
    accent: "#5968f5",
  },
];

const projectFilters = ["All", "Product", "Packaging", "Commerce", "Spatial", "Image"];

const capabilities = [
  {
    index: "01",
    title: "产品与包装",
    text: "从产品配色、渲染效果图到包装、说明书排版，参与产品开发的完整视觉支持。",
    tools: "PS / AI / C4D",
  },
  {
    index: "02",
    title: "电商与独立站",
    text: "围绕平台规则和用户浏览路径，完成主图、详情页、A+ 页面与独立站视觉搭建。",
    tools: "详情页 / A+ / Web",
  },
  {
    index: "03",
    title: "图像与动态内容",
    text: "覆盖产品拍摄、商业修图、C4D / Blender 渲染，以及产品视频的剪辑与调色。",
    tools: "Retouch / 3D / Motion",
  },
  {
    index: "04",
    title: "AI 辅助创意",
    text: "将 AI 工具融入视觉探索和线下业务，在明确目标下提高方向试验与内容生产效率。",
    tools: "AI / Visual research",
  },
];

const experience = [
  {
    period: "2023.10—2026.03",
    company: "珠海卓力声科技",
    role: "平面设计",
    detail: "产品开发视觉、电商平台、独立站、包装说明书、产品视频与会展物料",
  },
  {
    period: "2021.07—2023.07",
    company: "珠海镭沃科技",
    role: "美工",
    detail: "服装与静物修图、C4D 渲染、说明书排版、印刷物料及平台 Banner",
  },
  {
    period: "2019.06—2021.06",
    company: "安徽高梵电子商务",
    role: "修图师",
    detail: "服装拍摄、模特图精修、静物图处理及主图视频剪辑调色",
  },
  {
    period: "2015.03—2019.05",
    company: "安徽中诚至合商贸",
    role: "美工",
    detail: "店铺页面、活动页面、详情页、节日海报、包装及产品建模渲染",
  },
];

const socials = [
  { label: "Email", value: "swl19901027@gmail.com", href: "mailto:swl19901027@gmail.com" },
  { label: "Phone", value: "155 5519 5658", href: "tel:15555195658" },
  { label: "Location", value: "珠海，中国", href: "#contact" },
  { label: "Gitee", value: "songhongsen", href: "https://gitee.com/songhongsen" },
];

function ArrowUpRight() {
  return <span className="arrowIcon" aria-hidden="true">↗</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [motionPaused, setMotionPaused] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const videoRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const cleanup = initAnimations();
    const video = videoRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion && video) {
      video.pause();
      setMotionPaused(true);
    } else if (video) {
      video.play().then(() => setMotionPaused(false)).catch(() => setMotionPaused(true));
    }

    return cleanup;
  }, []);

  useEffect(() => {
    const syncProjectFromLocation = () => {
      const slug = window.location.hash.startsWith("#project/") ? window.location.hash.slice(9) : "";
      setActiveProject(projects.find((project) => project.slug === slug) || null);
    };

    syncProjectFromLocation();
    window.addEventListener("hashchange", syncProjectFromLocation);
    window.addEventListener("popstate", syncProjectFromLocation);
    return () => {
      window.removeEventListener("hashchange", syncProjectFromLocation);
      window.removeEventListener("popstate", syncProjectFromLocation);
    };
  }, []);

  useEffect(() => {
    if (!activeProject) return undefined;

    setActiveSlide(0);
    document.body.classList.add("modalOpen");
    const previousFocus = document.activeElement;
    const focusDialog = typeof window.requestAnimationFrame === "function"
      ? window.requestAnimationFrame(() => dialogRef.current?.focus())
      : null;
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeProject();
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        const galleryLength = activeProject.gallery?.length || 1;
        if (galleryLength > 1) {
          const direction = event.key === "ArrowRight" ? 1 : -1;
          setActiveSlide((current) => (current + direction + galleryLength) % galleryLength);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      if (focusDialog !== null && typeof window.cancelAnimationFrame === "function") {
        window.cancelAnimationFrame(focusDialog);
      }
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("modalOpen");
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [activeProject]);

  const closeMenu = () => setMenuOpen(false);

  const filteredProjects = activeFilter === "All" ? projects : projects.filter((project) => project.filter === activeFilter);
  const activeGallery = activeProject?.gallery?.length ? activeProject.gallery : activeProject?.image ? [activeProject.image] : [];
  const activeSlideSource = activeGallery[activeSlide];

  const openProject = (project) => {
    window.history.pushState({ project: project.slug }, "", `#project/${project.slug}`);
    setActiveProject(project);
  };

  const closeProject = () => {
    window.history.pushState({}, "", `${window.location.pathname}${window.location.search}`);
    setActiveProject(null);
  };

  const toggleMotion = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setMotionPaused(false)).catch(() => setMotionPaused(true));
    } else {
      video.pause();
      setMotionPaused(true);
    }
  };

  return (
    <main>
      <header className={`topbar ${menuOpen ? "topbarOpen" : ""}`}>
        <a className="brand" href="#top" onClick={closeMenu} aria-label="返回首页">
          <span className="brandMark"><img src="/assets/logo-mark.svg" alt="" /></span>
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
        <video ref={videoRef} className="heroVideo" autoPlay muted loop playsInline aria-hidden="true">
          <source src="/assets/media/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="heroShade" aria-hidden="true" />
        <div className="shell heroShell">
          <div className="heroMeta">
            <span className="eyebrow">Visual / AI / Brand designer</span>
            <span className="heroStatus"><i /> 珠海 / 可承接项目</span>
          </div>
          <div className="heroCopy">
            <h1>把产品与品牌<br /><em>做成可被记住的视觉。</em></h1>
            <p>我是一名拥有 10 年经验的视觉设计师，专注于产品视觉、电商内容、包装与品牌落地。</p>
            <div className="heroActions">
              <a className="button buttonPrimary" href="#work">查看项目档案 <ArrowUpRight /></a>
              <a className="textLink" href="#about">了解我的工作经历 <ArrowUpRight /></a>
            </div>
          </div>
          <div className="heroFoot">
            <span>Based in Zhuhai, China</span>
            <div className="heroFootRight">
              <span className="heroMediaMeta"><span>MOTION STUDY</span><span>LOOP 01 / 2026</span></span>
              <span className="scrollHint">Scroll to explore <b>↓</b></span>
              <button className="heroMotionButton" type="button" onClick={toggleMotion} aria-pressed={motionPaused} aria-label={motionPaused ? "播放动态背景" : "暂停动态背景"}>
                <span className="heroMotionIcon" aria-hidden="true">{motionPaused ? "▶" : "Ⅱ"}</span>
                <span>{motionPaused ? "Play" : "Pause"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section aboutSection" id="about">
        <div className="shell">
          <div className="sectionIntro reveal">
            <span className="eyebrow">Practice notes</span>
            <h2>设计不只是好看，<br /><span>更要进入真实的业务。</span></h2>
          </div>

          <div className="aboutIdentity">
            <div className="identityPanel reveal" aria-label="宋汪良个人设计档案">
              <div className="identityTop"><span>DESIGN ARCHIVE</span><span>SW / ARCHIVE</span></div>
              <img className="identityPortrait" src="/assets/profile-portrait.jpg" alt="宋汪良黑白肖像" />
              <div className="identityType">PRODUCT / BRAND / IMAGE</div>
              <div className="identityRule" />
              <div className="materialPalette" aria-label="Material palette"><span className="swatchIndigo" /><span className="swatchCyan" /><span className="swatchRed" /><span className="swatchPaper" /></div>
              <div className="identityBottom"><span>SONGWANG</span><span>VISUAL DESIGNER</span></div>
            </div>
            <div className="aboutLead reveal">
              <p className="leadText">我是宋汪良，一名来自珠海的视觉设计师，拥有 10 年平面、电商与产品视觉经验。</p>
              <p>从产品前期开发，到包装、详情页、独立站、产品视频和线下展会，我习惯把设计放进真实的生产与传播流程里。</p>
              <div className="roleTags" aria-label="工作方向">
                <span>产品视觉</span><span>电商设计</span><span>包装设计</span><span>AI 辅助创意</span>
              </div>
              <a className="textLink" href="#contact">聊聊你的项目 <ArrowUpRight /></a>
            </div>
          </div>

          <div className="proofStrip reveal" aria-label="个人工作数据">
            <div className="proofItem"><strong>10<span>+</span></strong><small>Years in design</small></div>
            <div className="proofItem"><strong>04</strong><small>Companies worked with</small></div>
            <div className="proofItem"><strong>2015</strong><small>Started design practice</small></div>
            <div className="proofItem"><strong>4<span>×</span></strong><small>PS / AI / C4D / Blender</small></div>
          </div>

          <div className="experienceBlock reveal">
            <div className="experienceHeader"><span className="eyebrow">Work history</span><span>2015—2026</span></div>
            <div className="experienceList">
              {experience.map((item) => (
                <article className="experienceItem" key={`${item.company}-${item.period}`}>
                  <span className="experienceDate">{item.period}</span>
                  <div className="experienceCompany"><strong>{item.company}</strong><span>{item.role}</span></div>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section workSection" id="work">
        <div className="shell">
          <div className="sectionIntro sectionIntroRow reveal">
            <div><span className="eyebrow">Selected work</span><h2>项目档案</h2></div>
            <p>来自产品开发、电商平台、包装、影像与线下展会的工作样本，按真实工作经历整理。</p>
          </div>
          <div className="projectFilters" role="group" aria-label="Filter projects">
            {projectFilters.map((filter) => (
              <button key={filter} type="button" className={`filterButton ${activeFilter === filter ? "isActive" : ""}`} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>
                {filter}
              </button>
            ))}
          </div>
          <div className="projectGrid" data-filtered={activeFilter !== "All"} role="list" aria-live="polite">
            {filteredProjects.map((project) => (
              <article className={`projectCard reveal ${project.featured ? "projectFeatured" : ""}`} key={project.slug} style={{ "--project-accent": project.accent }} role="listitem">
                <button className="projectCardHit" type="button" onClick={() => openProject(project)} aria-label={`Open project: ${project.title}`}>
                  <div className="projectMedia">
                    <img src={project.image} alt="" loading="lazy" />
                    <span className="projectPreview" aria-hidden="true"><span>Open case study</span><ArrowUpRight /></span>
                  </div>
                <div className="projectInfo">
                  <div>
                    <span className="projectCategory">{project.category}</span>
                    <h3>{project.title}</h3>
                    <span className="projectClient">{project.client}</span>
                    <p>{project.desc}</p>
                    <small className="projectDeliverables">{project.deliverables}</small>
                  </div>
                  <ArrowUpRight />
                </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section capabilitiesSection" id="capabilities">
        <div className="shell">
          <div className="sectionIntro reveal"><span className="eyebrow">How I work</span><h2>从想法到交付，<br /><span>我能把视觉做完整。</span></h2></div>
          <div className="capabilityGrid">
            {capabilities.map((capability) => (
              <article className="capabilityCard reveal" key={capability.index}>
                <span>{capability.index}</span><h3>{capability.title}</h3><p>{capability.text}</p><small>{capability.tools}</small><i aria-hidden="true">↗</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div className="shell contactShell">
          <div className="contactTop reveal"><span className="eyebrow">Start a project</span><span>欢迎聊聊具体项目</span></div>
          <div className="contactMain reveal"><h2>让设计进入真实业务，<br /><em>从一场具体的对话开始。</em></h2><a className="button buttonPrimary" href="mailto:swl19901027@gmail.com">联系我 <ArrowUpRight /></a></div>
          <div className="contactDetails reveal">
            <div className="contactLinks">{socials.map((social) => <a href={social.href} key={social.label}><small>{social.label}</small><span>{social.value}</span><ArrowUpRight /></a>)}</div>
            <footer><span>© {new Date().getFullYear()} SONGWANG</span><span>Visual / AI / Brand design</span><a href="#top">Back to top ↑</a></footer>
          </div>
        </div>
      </section>

      {activeProject && (
        <div className="projectDialogBackdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && closeProject()}>
          <section className="projectDialog" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={`project-title-${activeProject.slug}`} tabIndex="-1">
            <button className="dialogClose" type="button" onClick={closeProject} aria-label="Close project details">×</button>
            <div className="projectDialogMedia">
              {activeSlideSource ? (
                <img key={activeSlideSource} src={activeSlideSource} alt={`${activeProject.title} ${activeSlide + 1}`} />
              ) : (
                <div className="galleryPlaceholder" role="img" aria-label={`${activeProject.title} image placeholder`}>
                  <span>IMAGE PLACEHOLDER</span>
                  <strong>{String(activeSlide + 1).padStart(2, "0")}</strong>
                  <small>CASE MATERIAL TO BE ADDED</small>
                </div>
              )}
              {activeGallery.length > 1 && (
                <>
                  <button className="galleryButton galleryPrevious" type="button" onClick={() => setActiveSlide((current) => (current - 1 + activeGallery.length) % activeGallery.length)} aria-label="Previous project image">‹</button>
                  <button className="galleryButton galleryNext" type="button" onClick={() => setActiveSlide((current) => (current + 1) % activeGallery.length)} aria-label="Next project image">›</button>
                  <div className="galleryControls">
                    <span aria-live="polite">{String(activeSlide + 1).padStart(2, "0")} / {String(activeGallery.length).padStart(2, "0")}</span>
                    <div className="galleryDots" role="tablist" aria-label="Project images">
                      {activeGallery.map((image, index) => (
                        <button key={image} className={`galleryDot ${index === activeSlide ? "isActive" : ""}`} type="button" role="tab" aria-selected={index === activeSlide} aria-label={`Show image ${index + 1}`} onClick={() => setActiveSlide(index)} />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="projectDialogContent">
              <span className="projectCategory" style={{ color: activeProject.accent }}>{activeProject.category}</span>
              <h2 id={`project-title-${activeProject.slug}`}>{activeProject.title}</h2>
              <p className="projectDialogClient">{activeProject.client}</p>
              <p>{activeProject.desc}</p>
              <div className="projectDialogScope"><span>Scope</span><strong>{activeProject.deliverables}</strong></div>
              <div className="projectDialogFooter"><span>Case study preview</span><button type="button" className="textLink" onClick={closeProject}>Back to archive <ArrowUpRight /></button></div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default App;
