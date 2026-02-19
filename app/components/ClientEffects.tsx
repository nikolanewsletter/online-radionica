"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    const linkHandler = (event: Event) => {
      const target = event.currentTarget as HTMLAnchorElement | null;
      const targetId = target?.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const section = document.querySelector(targetId);
      if (!section) return;
      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    links.forEach((link) => link.addEventListener("click", linkHandler));

    const triggers = Array.from(document.querySelectorAll<HTMLButtonElement>(".accordion-trigger"));
    const triggerHandlers = new Map<HTMLButtonElement, () => void>();
    triggers.forEach((trigger) => {
      const handler = () => {
        const expanded = trigger.getAttribute("aria-expanded") === "true";
        triggers.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
        trigger.setAttribute("aria-expanded", expanded ? "false" : "true");
      };
      triggerHandlers.set(trigger, handler);
      trigger.addEventListener("click", handler);
    });

    let observer: IntersectionObserver | null = null;
    const mobileCta = document.getElementById("mobile-cta");
    const heroSection = document.querySelector(".hero");
    if (mobileCta && heroSection) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              mobileCta.classList.add("visible");
              mobileCta.setAttribute("aria-hidden", "false");
            } else {
              mobileCta.classList.remove("visible");
              mobileCta.setAttribute("aria-hidden", "true");
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(heroSection);
    }

    return () => {
      links.forEach((link) => link.removeEventListener("click", linkHandler));
      triggers.forEach((trigger) => {
        const handler = triggerHandlers.get(trigger);
        if (handler) trigger.removeEventListener("click", handler);
      });
      if (observer) observer.disconnect();
    };
  }, []);

  return null;
}
