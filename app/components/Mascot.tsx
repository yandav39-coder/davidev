"use client";

import { useEffect, useState } from "react";

// Mascote DD: pisca sozinho de vez em quando e fica feliz quando o mouse passa por cima.
export default function Mascot() {
  const [face, setFace] = useState<"normal" | "wink" | "happy">("normal");
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (hover) return;
    const id = setInterval(() => {
      setFace("wink");
      setTimeout(() => setFace("normal"), 450);
    }, 4200);
    return () => clearInterval(id);
  }, [hover]);

  const current = hover ? "happy" : face;

  return (
    <div
      className="mascot-wrap reveal reveal-delay-2 relative hidden shrink-0 md:block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-hidden="true"
    >
      <div className="absolute inset-8 rounded-full bg-[#4d8dff]/25 blur-3xl" />
      <div className="mascot-float relative h-[300px] w-[300px] lg:h-[380px] lg:w-[380px]">
        {(["normal", "wink", "happy"] as const).map((k) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={k}
            src={`/mascote-${k}.svg`}
            alt=""
            className={"mascot-img absolute inset-0 h-full w-full transition-opacity duration-150 " + (current === k ? "opacity-100" : "opacity-0")}
          />
        ))}
      </div>
    </div>
  );
}
