export const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",

    heroTag: "Welcome",
    heroTitle: "Hi, I'm Davi",
    heroHi: "Hi, I'm",
    heroRoles: "Roblox Developer|Luau Scripter|Gameplay Systems",
    heroDescription:
      "Roblox developer specialized in Luau scripting and game systems, building experiences that keep players hitting \"Play\" again.",
    heroCta: "See my games",
    heroLearnMore: "Learn more",

    aboutTag: "About me",
    aboutTitle: "Who I am",
    aboutP1:
      "I make Roblox games with clean, organized code and polished mechanics: progression, upgrades, rebirths and leaderboards that feel right from the moment you join.",
    aboutP2:
      "From simulators to tycoons to party games, every project across different genres taught me something new. I've worked as a developer at Nordic Studio, and with each release I keep raising the bar on quality.",
    aboutYears: "Years experience",
    aboutProjects: "Projects done",
    aboutVisits: "Total visits",
    aboutStudios: "Studios worked with",
    topTag: "Highlights",
    topTitle: "Top games",
    topVisits: "visits",
    topPlaying: "playing now",

    expTag: "Experience",
    expTitle: "Where I've worked",

    statGames: "Games Shipped",
    statYears: "Years Experience",
    statVisits: "Total Visits",
    statCCU: "Live CCU",
    liveCCU: "live CCU",
    totalVisits: "total visits",

    projectsTag: "Portfolio",
    projectsTitle: "Games I worked on",
    projectsDescription:
      "Roblox experiences I've helped build. Numbers update live from Roblox.",
    projectsPlaying: "playing",

    contactTag: "Contact",
    contactTitle: "Let's work together",
    contactDescription:
      "Have a game idea or need a scripter on your team? Send me a message and let's talk about what we can build.",
    contactEmail: "Email",
    contactDiscord: "Discord",
    contactSoon: "Contacts coming soon",
  },
  pt: {
    navHome: "Início",
    navAbout: "Sobre",
    navProjects: "Projetos",
    navContact: "Contato",

    heroTag: "Bem-vindo",
    heroTitle: "Olá, eu sou Davi",
    heroHi: "Olá, eu sou",
    heroRoles: "Desenvolvedor Roblox|Scripter Luau|Sistemas de Gameplay",
    heroDescription:
      "Desenvolvedor Roblox especializado em scripting Luau e sistemas de jogo, criando experiências que fazem o jogador apertar \"Jogar\" de novo.",
    heroCta: "Ver meus jogos",
    heroLearnMore: "Saiba mais",

    aboutTag: "Sobre mim",
    aboutTitle: "Quem eu sou",
    aboutP1:
      "Faço jogos Roblox com código limpo e organizado e mecânicas bem polidas: progressão, upgrades, rebirths e rankings que funcionam desde o primeiro minuto de jogo.",
    aboutP2:
      "De simuladores a tycoons e jogos de festa, cada projeto em um gênero diferente me ensinou algo novo. Trabalhei como developer na Nordic Studio e, a cada lançamento, sigo subindo o nível de qualidade.",
    aboutYears: "Anos de experiência",
    aboutProjects: "Projetos feitos",
    aboutVisits: "Visitas no total",
    aboutStudios: "Estúdios atendidos",
    topTag: "Destaques",
    topTitle: "Maiores jogos",
    topVisits: "visitas",
    topPlaying: "jogando agora",

    expTag: "Experiência",
    expTitle: "Onde trabalhei",

    statGames: "Jogos Publicados",
    statYears: "Anos de Experiência",
    statVisits: "Visitas Totais",
    statCCU: "CCU ao Vivo",
    liveCCU: "CCU ao vivo",
    totalVisits: "visitas no total",

    projectsTag: "Portfólio",
    projectsTitle: "Jogos em que trabalhei",
    projectsDescription:
      "Experiências Roblox que ajudei a construir. Os números atualizam ao vivo pelo Roblox.",
    projectsPlaying: "jogando",

    contactTag: "Contato",
    contactTitle: "Vamos trabalhar juntos",
    contactDescription:
      "Tem uma ideia de jogo ou precisa de um scripter no time? Me manda uma mensagem e vamos ver o que dá pra construir.",
    contactEmail: "Email",
    contactDiscord: "Discord",
    contactSoon: "Contatos em breve",
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof (typeof translations)["en"];
