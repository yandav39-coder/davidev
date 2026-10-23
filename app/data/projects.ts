// Seus jogos. Visitas, jogadores ao vivo e ícones são atualizados
// automaticamente pela rota /api/games quando o site está no ar.
// "visits" e "thumbnail" aqui são valores de reserva (dados oficiais do Roblox de 22/out/2026),
// usado se a API do Roblox falhar. Para adicionar um jogo, copie um
// bloco e troque o placeId (o número no link roblox.com/games/NUMERO).

export type Project = {
  name: string;
  placeId: string;
  visits: number;
  thumbnail: string;
};

export const projects: Project[] = [
  {
    name: "Build a Scam Empire!",
    placeId: "83942919686609",
    visits: 69556703,
    thumbnail: "https://tr.rbxcdn.com/180DAY-2546902eb245b9ed5c50856bbe9d92e9/512/512/Image/Png/noFilter",
  },
  {
    name: "+1 Fat Per Step",
    placeId: "101325745836000",
    visits: 42425937,
    thumbnail: "https://tr.rbxcdn.com/180DAY-eefef86a261da556cd64cb69aa26ad44/512/512/Image/Png/noFilter",
  },
  {
    name: "+1 Speed Glider Escape",
    placeId: "115442728708640",
    visits: 31931431,
    thumbnail: "https://tr.rbxcdn.com/180DAY-6d2cf9c46173ebfd0e84747acda8a4ae/512/512/Image/Png/noFilter",
  },
  {
    name: "Fly with Brainrot",
    placeId: "133744225916796",
    visits: 6884355,
    thumbnail: "https://tr.rbxcdn.com/180DAY-340223eab21821b031c55d507a6671b8/512/512/Image/Png/noFilter",
  },
  {
    name: "Wheelchair for Brainrot",
    placeId: "94416836737659",
    visits: 26259563,
    thumbnail: "https://tr.rbxcdn.com/180DAY-989f99cb69769773eeee615ba8bd4864/512/512/Image/Png/noFilter",
  },
  {
    name: "Blind Draw",
    placeId: "72504901395668",
    visits: 3352337,
    thumbnail: "https://tr.rbxcdn.com/180DAY-e36d8448ef609eb41614520b975ddfa4/512/512/Image/Png/noFilter",
  },
  {
    name: "Plane Training",
    placeId: "115469775440792",
    visits: 52939941,
    thumbnail: "https://tr.rbxcdn.com/180DAY-7ee7ef01dc82562da001869106adf1f1/512/512/Image/Png/noFilter",
  },
  {
    name: "Launch Your Rocket",
    placeId: "73982574886804",
    visits: 43225282,
    thumbnail: "https://tr.rbxcdn.com/180DAY-82f2f14eb733f7ae794e641bbd3743c1/512/512/Image/Png/noFilter",
  },
  {
    name: "Shoot LASERS For Brainrots!",
    placeId: "134374139747297",
    visits: 34074946,
    thumbnail: "https://tr.rbxcdn.com/180DAY-c9f3e51070fbb36b78bfaf1bec4c603b/512/512/Image/Png/noFilter",
  },
  {
    name: "Find and Snipe Brainrot",
    placeId: "122889506854558",
    visits: 32711552,
    thumbnail: "https://tr.rbxcdn.com/180DAY-6bddb413378482952102ca4b95152390/512/512/Image/Png/noFilter",
  },
  {
    name: "Build a Battleship",
    placeId: "81384381511872",
    visits: 8607312,
    thumbnail: "https://tr.rbxcdn.com/180DAY-8cddd9ec34fb358b16755a6d62a47e01/512/512/Image/Png/noFilter",
  },
  {
    name: "Drink Matching",
    placeId: "111059037264288",
    visits: 14913548,
    thumbnail: "https://tr.rbxcdn.com/180DAY-656fcaab2abfdc8e462477cf2fb5b9d9/512/512/Image/Png/noFilter",
  },
  {
    name: "Vacuum For Brainrots!",
    placeId: "93724112271596",
    visits: 33288876,
    thumbnail: "https://tr.rbxcdn.com/180DAY-3275ee4446877ad9897c8115a69cbe25/512/512/Image/Png/noFilter",
  },
  {
    name: "Hide Your Body Parts",
    placeId: "130662936949299",
    visits: 15698435,
    thumbnail: "https://tr.rbxcdn.com/180DAY-3368322ced6942bfb2fd1bb5b02252d8/512/512/Image/Png/noFilter",
  },
];

export const gameUrl = (p: Project) => `https://www.roblox.com/games/${p.placeId}`;
