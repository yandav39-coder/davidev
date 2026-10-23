"use client";
import { useEffect, useRef } from "react";

// Trechos de Luau que sobem devagar no fundo do site.
// Para mudar, é só editar esta lista.
const SNIPPETS = [
  "local",
  "function()",
  "end",
  ":Connect()",
  "+= 1",
  "</>",
  "task.wait()",
  "game:GetService()",
  "Players.PlayerAdded",
  "RemoteEvent",
  "if then",
  "return",
  "{ }",
  "Instance.new()",
  "leaderstats",
  "Rebirths += 1",
  "TweenService",
  "DataStore:SetAsync()",
  "for i, v in pairs()",
  "Humanoid.WalkSpeed",
  "-- TODO: polish",
  "workspace",
  "nil",
  "Cash += 100",
];

export default function CodeBg() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = ref.current;
    if (!bg) return;
    bg.innerHTML = "";
    const count = window.innerWidth < 640 ? 14 : 26;
    for (let i = 0; i < count; i++) {
      const s = document.createElement("span");
      const dur = 22 + Math.random() * 22;
      const tone = Math.random();
      s.className = "code-float " + (tone < 0.25 ? "tone-a" : tone < 0.6 ? "tone-b" : "tone-c");
      s.textContent = SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)];
      s.style.left = Math.random() * 92 + "%";
      s.style.fontSize = 11 + Math.random() * 9 + "px";
      s.style.animationDuration = dur + "s";
      s.style.animationDelay = -Math.random() * dur + "s"; // já começa espalhado pela tela
      bg.appendChild(s);
    }
  }, []);

  return <div ref={ref} className="rblx-bg" aria-hidden="true" />;
}
