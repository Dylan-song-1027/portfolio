import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function initAnimations() {
  ScrollTrigger.getAll().forEach(function(st) { st.kill(); });

  // ── Set initial states ──
  gsap.set("[data-anim]", { opacity: 0, y: 50 });
  gsap.set(".hero-eyebrow", { opacity: 0, y: 30 });
  gsap.set(".hero-title-line", { opacity: 0, y: 120, scaleY: 0.4, transformOrigin: "50% 100%" });
  gsap.set("[data-anim='cta']", { opacity: 0, y: 25 });
  gsap.set(".heroScroll", { opacity: 0 });

  // ── Hero Opening ──
  var heroTL = gsap.timeline({ defaults: { ease: "power4.out" } });

  heroTL
    .to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.7 }, 0.2)
    .to(".hero-title-line", { opacity: 1, y: 0, scaleY: 1, duration: 1.5, ease: "power4.out" }, 0.35)
    .to("[data-anim]", { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, "-=0.3")
    .to("[data-anim='cta']", { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 }, "-=0.2")
    .to(".heroScroll", { opacity: 1, duration: 0.5 }, 0);

  // ── Section scroll animations ──
  var sections = document.querySelectorAll(".section");
  sections.forEach(function(sec) {
    var tag = sec.querySelector(".sectionTag");
    var title = sec.querySelector(".sectionHeader h2");
    var contentGrid = sec.querySelector(".aboutGrid, .portfolioGrid, .contactInner");
    var items = contentGrid ? Array.from(contentGrid.children) : [];

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: sec,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    if (tag) tl.fromTo(tag, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6 }, 0);
    if (title) tl.fromTo(title, { opacity: 0, y: 80, scaleY: 1.08 }, { opacity: 1, y: 0, scaleY: 1, duration: 1.1, ease: "power3.out" }, 0.15);
    if (items.length) tl.to(items, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" }, 0.3);
  });

  // ── Card image parallax ──
  gsap.utils.toArray(".cardVisual img").forEach(function(img) {
    var trigger = img.closest(".projectCard") || img.parentElement;
    gsap.fromTo(img, { y: -15 }, { y: 15, ease: "none", scrollTrigger: { trigger: trigger, start: "top bottom", end: "bottom top", scrub: 1 } });
  });
  // ── Mouse tracking glow ──
  document.querySelectorAll('.projectCard').forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      var rect = this.getBoundingClientRect();
      this.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
      this.style.setProperty('--my', (e.clientY - rect.top) + 'px');
    });
  });

}