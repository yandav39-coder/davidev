import { NextResponse } from "next/server";
import { projects } from "@/app/data/projects";

// Busca dados ao vivo dos jogos no Roblox (roda no servidor da Vercel).
// Resposta: { [placeId]: { visits, playing, icon } }

export const revalidate = 60;

type Live = { visits: number; playing: number; icon?: string };

async function universeIdFor(placeId: string): Promise<number | null> {
  try {
    const r = await fetch(`https://apis.roblox.com/universes/v1/places/${placeId}/universe`, {
      next: { revalidate: 86_400 }, // o universeId não muda — cache de 1 dia
    });
    if (!r.ok) return null;
    const j = await r.json();
    return typeof j.universeId === "number" ? j.universeId : null;
  } catch {
    return null;
  }
}

export async function GET() {
  const ids = await Promise.all(projects.map((p) => universeIdFor(p.placeId)));
  const byUniverse = new Map<number, string>();
  ids.forEach((u, i) => { if (u) byUniverse.set(u, projects[i].placeId); });

  const universeIds = [...byUniverse.keys()].join(",");
  const out: Record<string, Live> = {};
  if (!universeIds) return NextResponse.json(out, { status: 502 });

  const [gamesRes, iconsRes] = await Promise.all([
    fetch(`https://games.roblox.com/v1/games?universeIds=${universeIds}`, { next: { revalidate: 60 } }).catch(() => null),
    fetch(
      `https://thumbnails.roblox.com/v1/games/icons?universeIds=${universeIds}&size=512x512&format=Png&isCircular=false`,
      { next: { revalidate: 3_600 } }
    ).catch(() => null),
  ]);

  if (gamesRes?.ok) {
    const j = await gamesRes.json();
    for (const g of j.data ?? []) {
      const placeId = byUniverse.get(g.id);
      if (placeId) out[placeId] = { visits: g.visits ?? 0, playing: g.playing ?? 0 };
    }
  }

  if (iconsRes?.ok) {
    const j = await iconsRes.json();
    for (const t of j.data ?? []) {
      const placeId = byUniverse.get(t.targetId);
      if (placeId && t.state === "Completed" && t.imageUrl) {
        out[placeId] = { ...(out[placeId] ?? { visits: 0, playing: 0 }), icon: t.imageUrl };
      }
    }
  }

  return NextResponse.json(out, {
    headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120" },
  });
}
