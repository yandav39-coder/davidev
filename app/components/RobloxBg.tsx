"use client";
import { useEffect, useRef } from "react";

export default function RobloxBg() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = ref.current;
    if (!bg) return;
    const types = ["type-a", "type-b", "type-c"];
    for (let i = 0; i < 30; i++) {
      const b = document.createElement("div");
      const sz = 10 + Math.random() * 32;
      b.className = "rblx-block " + types[Math.floor(Math.random() * 3)];
      b.style.left = Math.random() * 100 + "%";
      b.style.width = sz + "px";
      b.style.height = sz + "px";
      b.style.animationDelay = Math.random() * 26 + "s";
      b.style.animationDuration = 15 + Math.random() * 22 + "s";
      bg.appendChild(b);
    }
  }, []);

  return <div ref={ref} className="rblx-bg" aria-hidden="true" />;
}
