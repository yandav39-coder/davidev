"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let delay = deleting ? 35 : 70;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === "") delay = 250;

    const id = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") { setDeleting(false); setI((n) => n + 1); }
      else setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, i, words]);

  useEffect(() => { setText(""); setDeleting(false); setI(0); }, [words]);

  return (
    <span className="inline-flex items-center">
      <span>{text}</span>
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[1px] animate-pulse bg-[#4d8dff]" />
    </span>
  );
}
