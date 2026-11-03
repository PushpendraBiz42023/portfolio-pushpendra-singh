"use client";

import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header id="navigation" className={`site-navigation${scrolled ? " navbar-fixed" : ""}`}>
      <div className="container">
        <div className="nav-bar">
          <a href="#home" className="site-logo" onClick={() => setOpen(false)}>
            {siteConfig.name}
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" className="menu-toggle__bars" />
          </button>

          <nav id="main-menu" aria-label="Primary" className={open ? "is-open" : undefined}>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} aria-current={active === item.id ? "true" : undefined} onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
