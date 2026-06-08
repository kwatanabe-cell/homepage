"use client";

import { useEffect } from "react";

export function ClientBehavior() {
  useEffect(() => {
    const header = document.getElementById("siteHeader");
    const navToggle = document.getElementById("navToggle");
    const globalNav = document.getElementById("globalNav");
    const savedTheme = window.localStorage.getItem("kst-theme");

    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
    }

    let themeToggle = document.querySelector<HTMLButtonElement>(".theme-toggle");
    if (header && !themeToggle) {
      themeToggle = document.createElement("button");
      themeToggle.className = "theme-toggle";
      themeToggle.type = "button";
      themeToggle.setAttribute("aria-label", "テーマを切り替える");
      themeToggle.innerHTML = '<span class="theme-dot"></span><span class="theme-label">White</span>';
      header.appendChild(themeToggle);
    }

    const syncThemeLabel = () => {
      if (!themeToggle) return;
      const isLight = document.body.classList.contains("light-theme");
      themeToggle.setAttribute("aria-pressed", String(isLight));
      const label = themeToggle.querySelector(".theme-label");
      if (label) label.textContent = isLight ? "Black" : "White";
    };

    const onThemeClick = () => {
      const isLight = document.body.classList.toggle("light-theme");
      window.localStorage.setItem("kst-theme", isLight ? "light" : "dark");
      syncThemeLabel();
    };

    const onScroll = () => {
      header?.classList.toggle("scrolled", window.scrollY > 30);
    };

    const onNavClick = () => {
      const isOpen = globalNav?.classList.toggle("open") ?? false;
      navToggle?.setAttribute("aria-expanded", String(isOpen));
    };

    const closeNav = () => {
      globalNav?.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    };

    const onFormSubmit = (event: Event) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const button = form.querySelector<HTMLButtonElement>("button");
      if (!button) return;
      const originalText = button.textContent ?? "";
      button.textContent = "送信処理は未接続です";
      window.setTimeout(() => {
        button.textContent = originalText;
      }, 1800);
    };

    syncThemeLabel();
    onScroll();

    themeToggle?.addEventListener("click", onThemeClick);
    window.addEventListener("scroll", onScroll);
    navToggle?.addEventListener("click", onNavClick);
    globalNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));
    document.querySelectorAll<HTMLFormElement>(".contact-form").forEach((form) => {
      form.addEventListener("submit", onFormSubmit);
    });

    return () => {
      themeToggle?.removeEventListener("click", onThemeClick);
      window.removeEventListener("scroll", onScroll);
      navToggle?.removeEventListener("click", onNavClick);
      globalNav?.querySelectorAll("a").forEach((link) => link.removeEventListener("click", closeNav));
      document.querySelectorAll<HTMLFormElement>(".contact-form").forEach((form) => {
        form.removeEventListener("submit", onFormSubmit);
      });
    };
  }, []);

  return null;
}
