import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function initAnimations() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = document.querySelectorAll(".reveal");

  if (reduceMotion) {
    gsap.set(reveals, { clearProps: "all" });
    return () => {};
  }

  gsap.set(reveals, { opacity: 0, y: 28 });
  const triggers = [];
  reveals.forEach((element) => {
    const tween = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      ease: "power3.out",
      scrollTrigger: { trigger: element, start: "top 86%", once: true },
    });
    if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
  });

  gsap.fromTo(".heroCopy", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1, delay: 0.15, ease: "power3.out" });
  gsap.fromTo(".heroMeta, .heroFoot", { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 0.45, ease: "power2.out" });

  return () => {
    triggers.forEach((trigger) => trigger.kill());
    gsap.killTweensOf(".heroCopy, .heroMeta, .heroFoot");
  };
}
