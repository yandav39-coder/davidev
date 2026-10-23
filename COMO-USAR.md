# Portfólio Davi Dev

## Onde editar
- `app/data/profile.ts` → anos de experiência, nº de projetos, Nordic Studio (período), e-mail e Discord.
- `app/data/projects.ts` → lista de jogos (para adicionar um, copie um bloco e troque o número do link).
- `app/data/translations.ts` → todos os textos do site, em inglês e português.

Visitas, jogadores ao vivo e ícones dos jogos atualizam sozinhos quando o site está no ar.

## Rodar no seu computador
1. Instale o Node.js (nodejs.org, versão LTS).
2. Abra esta pasta no VS Code → Terminal → New Terminal.
3. `npm install` (só na primeira vez)
4. `npm run dev` e abra http://localhost:3000

## Publicar na Vercel
1. Crie uma conta em github.com e crie um repositório novo (ex.: `davidev`).
2. Envie esta pasta para ele (no VS Code: aba "Source Control" → "Publish to GitHub").
3. Entre em vercel.com com a conta do GitHub → "Add New… → Project" → escolha o repositório → "Deploy".
4. Pronto: o link fica tipo `davidev.vercel.app`. Toda vez que você mudar algo e enviar pro GitHub, o site atualiza sozinho.
