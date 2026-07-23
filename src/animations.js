import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function initAnimations() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = [...document.querySelectorAll(".reveal")];
  const showImmediately = () => {
    reveals.forEach((element) => {
      element.classList.add("is-revealed");
      gsap.set(element, { clearProps: "opacity,transform" });
    });
  };

  if (reduceMotion) {
    showImmediately();
    return () => {};
  }

  const triggers = [];
  try {
    gsap.set(reveals, { opacity: 0, y: 28 });
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

    [
      [".heroCopy", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, delay: 0.05, ease: "power3.out" }],
      [".heroMeta", { opacity: 0 }, { opacity: 1, duration: 0.7, delay: 0.2, ease: "power2.out" }],
      [".heroFoot", { opacity: 0 }, { opacity: 1, duration: 0.7, delay: 0.35, ease: "power2.out" }],
    ].forEach(([selector, from, to]) => {
      if (document.querySelector(selector)) gsap.fromTo(selector, from, to);
    });
  } catch {
    triggers.forEach((trigger) => trigger.kill());
    showImmediately();
    return () => {};
  }

  return () => {
    triggers.forEach((trigger) => trigger.kill());
    gsap.killTweensOf(".heroCopy, .heroMeta, .heroFoot");
  };
}
