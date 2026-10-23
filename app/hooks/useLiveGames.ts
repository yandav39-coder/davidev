"use client";

import { useEffect, useState } from "react";

export type LiveGame = { visits: number; playing: number; icon?: string };
export type LiveGames = Record<string, LiveGame>;

export function useLiveGames(intervalMs = 60_000) {
  const [data, setData] = useState<LiveGames>({});

  useEffect(() => {
    const load = () =>
      fetch("/api/games")
        .then((r) => (r.ok ? r.json() : {}))
        .then((d: LiveGames) => { if (d && Object.keys(d).length) setData(d); })
        .catch(() => {});
    load();
    const id = setInterval(load, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return data;
}
