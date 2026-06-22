import React from 'react';

const projects = [
  {
    title: '产品包装与品牌物料',
    type: 'Packaging / Brand',
    image: '/assets/projects/brand-01.png',
    description: '覆盖产品包装、Logo 指南、说明书排版与线下推广物料，支持产品从开发到上市。',
  },
  {
    title: '电商平台主图详情页',
    type: 'E-commerce Visual',
    image: '/assets/projects/poster-01.jpg',
    description: '服务国内与跨境平台，完成主图、详情页、A+ 图、Banner 与产品图精修。',
  },
  {
    title: 'AI 视觉与创意探索',
    type: 'AI Design',
    image: '/assets/projects/ai-box.png',
    description: '结合 AI 软件完成视觉方案探索、线下业务物料辅助设计与创意表达。',
  },
  {
    title: 'C4D / Blender 渲染',
    type: '3D Visual',
    image: '/assets/projects/render-glass.png',
    description: '完成产品建模、配色渲染、效果图制作与新品拍摄修图辅助工作。',
  },
  {
    title: '会展与线下宣传物料',
    type: 'Commercial Visual',
    image: '/assets/projects/poster-02.jpg',
    description: '具备会展策划与设计背景，可完成展台物料、节日海报与推广视觉延展。',
  },
];

const strengths = [
  {
    index: '01',
    title: '设计经验',
    text: '拥有 8 年以上平面设计经验，熟练掌握 PS、AI、C4D、Blender 等主流设计软件。',
  },
  {
    index: '02',
    title: '产品全流程',
    text: '熟悉产品开发相关设计工作，覆盖包装、说明书、推广物料与线下宣传物料。',
  },
  {
    index: '03',
    title: '电商视觉',
    text: '具备线上平台详情页、主图、A+ 图、店铺 Banner 与产品精修设计经验。',
  },
  {
    index: '04',
    title: '协作落地',
    text: '能从产品前期开发到后期推广提供多阶段视觉支持，高效配合团队完成交付。',
  },
];

const experiences = [
  {
    company: '珠海卓力声科技',
    role: '平面设计',
    period: '2023.10 - 2026.03',
    points: [
      '负责产品开发相关设计，包括配色渲染效果图、产品 Logo 指南、包装设计与说明书排版。',
      '完成国内平台主图详情页、跨境平台白底图拍摄修图、主图 A+ 图、Shop 独立站页面搭建与产品视频制作。',
      '负责线下物料与会展展台物料设计。',
    ],
  },
  {
    company: '珠海镭沃科技',
    role: '美工',
    period: '2021.07 - 2023.07',
    points: [
      '负责服装项目模特图修图、静物拍摄精修与店铺图片设计。',
      '协助新品拍摄修图、C4D 渲染设计，并利用 AI 软件完成线下业务相关视觉设计。',
      '完成亚马逊、速卖通等平台店铺海报与 Banner 设计。',
    ],
  },
  {
    company: '安徽高梵电子商务',
    role: '修图师',
    period: '2019.06 - 2021.06',
    points: ['负责服装修图美化、拍摄工作、主图视频剪辑调色与模特图精修。'],
  },
  {
    company: '安徽中诚至合商贸',
    role: '美工',
    period: '2015.03 - 2019.05',
    points: [
      '负责店铺页面数据查看、活动页面设计、产品详情页设计与节日海报设计。',
      '参与新产品包装设计、产品建模渲染效果图制作及宣传海报制作。',
    ],
  },
];

function App() {
  return (
    <main>
      <section className="hero" id="home">
        <video
          className="heroVideo"
          src="/assets/media/hero-loop.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/projects/render-glass.png"
        />
        <div className="heroScrim" />
        <nav className="nav shell" aria-label="主导航">
          <a className="brand" href="#home" aria-label="返回首页">
            SWL
          </a>
          <div className="navLinks">
            <a href="#experience">经历</a>
            <a href="#projects">项目</a>
            <a href="#strengths">优势</a>
            <a href="#contact">联系</a>
          </div>
          <a className="navCta" href="#contact">
            联系合作
          </a>
        </nav>

        <div className="heroContent shell">
          <p className="eyebrow">Graphic Designer / AI Designer / Brand Visual</p>
          <h1>宋汪良</h1>
          <p className="heroLead">
            10 年设计相关工作经验，聚焦平面设计、产品包装、电商视觉、AI 辅助创意与 3D 渲染。
          </p>
          <div className="heroActions">
            <a href="#projects" className="primaryButton">
              查看作品
            </a>
            <a href="tel:15555195658" className="ghostButton">
              15555195658
            </a>
          </div>
        </div>

        <div className="heroMeta shell" aria-label="作品概览">
          <span>10 Years Experience</span>
          <span>PS / AI / C4D / Blender</span>
          <span>Zhuhai, China</span>
        </div>
      </section>

      <section className="experience section shell" id="experience">
        <div className="sectionHeader">
          <p className="eyebrow">Profile</p>
          <h2>工作经历与设计方法</h2>
        </div>
        <div className="profileGrid">
          <div className="portraitCard">
            <div className="portraitGlow" />
            <div className="portraitMark">SWL</div>
            <img src="/assets/projects/render-glass.png" alt="个人视觉占位图" />
          </div>
          <div className="profileCopy">
            <p>
              我是一名平面设计师 / AI 设计师 / 品牌视觉设计师，拥有 10 年设计相关工作经验。
              作品覆盖产品包装、说明书排版、线下推广物料、电商详情页、海报 Banner、AI 视觉与 3D 渲染。
            </p>
            <p>
              熟悉从产品前期开发到后期推广的视觉支持流程，能够结合业务目标、平台规范与用户需求，
              输出兼具专业度、细节完成度与市场适应性的设计内容。
            </p>
            <div className="contactStrip">
              <a href="tel:15555195658">电话：15555195658</a>
              <span>求职意向：平面设计</span>
              <span>期望城市：珠海</span>
            </div>
          </div>
          <div className="stats">
            <div>
              <strong>10</strong>
              <span>年工作时长</span>
            </div>
            <div>
              <strong>8+</strong>
              <span>年平面设计经验</span>
            </div>
            <div>
              <strong>8-12K</strong>
              <span>期望薪资</span>
            </div>
          </div>
        </div>
        <div className="timeline">
          {experiences.map((item) => (
            <article className="timelineItem" key={item.company}>
              <div>
                <span>{item.period}</span>
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="projects section shell" id="projects">
        <div className="sectionHeader wide">
          <p className="eyebrow">Selected Projects</p>
          <h2>精选项目</h2>
          <p>
            根据简历中的实际工作方向，首版聚焦产品包装、电商视觉、AI 创意、3D 渲染和线下物料。
          </p>
        </div>
        <div className="projectGrid">
          {projects.map((project, index) => (
            <article className={`projectCard projectCard${index}`} key={project.title}>
              <img src={project.image} alt={project.title} />
              <div className="projectInfo">
                <span>{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="strengths section shell" id="strengths">
        <div className="sectionHeader">
          <p className="eyebrow">Capabilities</p>
          <h2>个人优势</h2>
        </div>
        <div className="strengthGrid">
          {strengths.map((item) => (
            <article className="strengthCard" key={item.title}>
              <span>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contactFinal" id="contact">
        <div className="contactInner shell">
          <p className="eyebrow">Contact</p>
          <h2>让下一次视觉表达更清晰、更有识别度。</h2>
          <div className="contactRows">
            <a href="tel:15555195658">15555195658</a>
            <span>男 / 32 岁</span>
            <span>平面设计 / 珠海 / 8-12K</span>
            <span>证书：会展策划师 / 驾驶证 C1</span>
          </div>
          <a className="backTop" href="#home">
            返回顶部
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
