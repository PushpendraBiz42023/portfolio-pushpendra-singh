"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button type="button" className="topcontrol" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0 })}>
      <Icon name="arrow-up" />
    </button>
  );
}
