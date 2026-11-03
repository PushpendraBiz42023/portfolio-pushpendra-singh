"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface CarouselProps {
  label: string;
  children: React.ReactNode[];
}

/** Dependency-free scroll-snap carousel: 3 / 2 / 1 cards per view, arrow controls. */
export default function Carousel({ label, children }: CarouselProps) {
  const track = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByPage = (direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const slide = el.querySelector("li");
    const step = slide ? slide.getBoundingClientRect().width : el.clientWidth;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") scrollByPage(1);
    if (event.key === "ArrowLeft") scrollByPage(-1);
  };

  return (
    <div className="carousel" role="region" aria-roledescription="carousel" aria-label={label} onKeyDown={onKeyDown}>
      <button type="button" className="carousel__btn carousel__btn--prev" aria-label="Previous" disabled={!canPrev} onClick={() => scrollByPage(-1)}>
        <span aria-hidden="true">‹</span>
      </button>
      <ul className="carousel__track" ref={track}>
        {children.map((child, index) => (
          <li key={index} className="carousel__slide">
            {child}
          </li>
        ))}
      </ul>
      <button type="button" className="carousel__btn carousel__btn--next" aria-label="Next" disabled={!canNext} onClick={() => scrollByPage(1)}>
        <span aria-hidden="true">›</span>
      </button>
    </div>
  );
}
