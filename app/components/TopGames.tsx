"use client";

import { Eye, ExternalLink, Users } from "lucide-react";
import { projects, gameUrl } from "../data/projects";
import { profile } from "../data/profile";
import type { LiveGames } from "../hooks/useLiveGames";
import { formatNumber } from "./ProjectsCarousel";

export default function TopGames({ live, visitsLabel, playingLabel }: { live: LiveGames; visitsLabel: string; playingLabel: string }) {
  const top = projects
    .map((p) => ({ p, visits: live[p.placeId]?.visits || p.visits, playing: profile.showLiveCCU ? live[p.placeId]?.playing ?? 0 : 0 }))
    .sort((a, b) => b.visits - a.visits)
    .slice(0, 3);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {top.map(({ p, visits, playing }, idx) => (
        <a
          key={p.placeId}
          href={gameUrl(p)}
          target="_blank"
          rel="noopener noreferrer"
          className={"top-card group reveal relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#4d8dff]/50 reveal-delay-" + (idx + 1)}
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/[0.03]">
            <span className="absolute inset-0 flex items-center justify-center text-7xl font-black italic text-white/[0.06]">
              #{idx + 1}
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.thumbnail}
              alt={p.name}
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060b16] via-[#060b16]/30 to-transparent" />
            <span className="absolute left-4 top-4 rounded-lg border border-[#4d8dff]/40 bg-[#4d8dff]/25 px-2.5 py-1 text-[11px] font-black italic tracking-wider text-white backdrop-blur-md">
              #{idx + 1}
            </span>
            {playing > 0 && (
              <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-lg border border-green-500/25 bg-green-500/15 px-2.5 py-1 backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                <Users size={11} className="text-green-300" />
                <span className="text-[11px] font-semibold text-green-300">{formatNumber(playing)} {playingLabel}</span>
              </span>
            )}
          </div>
          <div className="flex items-end justify-between gap-3 px-5 pb-5 pt-1">
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-semibold leading-snug text-white">{p.name}</h3>
              <div className="flex items-center gap-1.5 text-white/45">
                <Eye size={13} strokeWidth={1.5} />
                <span className="text-sm">
                  <span className="font-bold text-white">{formatNumber(visits)}</span> {visitsLabel}
                </span>
              </div>
            </div>
            <ExternalLink size={15} className="mb-1 shrink-0 text-white/25 transition-colors group-hover:text-white" />
          </div>
        </a>
      ))}
    </div>
  );
}
