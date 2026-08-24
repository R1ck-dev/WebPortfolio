// Fonte única de conteúdo do portfólio. Edite aqui, não nos componentes.
// Origem dos dados: CurriculoVsCode/curriculo.html e o vault Obsidian (05 - SVSA, 10 - Sanesoluti,
// 04 - IC - CodeInsights, 02 - Projetos). Ao atualizar o currículo, atualize este arquivo junto.

export const perfil = {
  nome: "Henrique de Almeida Marangoni Inacio",
  nomeCurto: "Henrique Marangoni",
  cargo: "Desenvolvedor Backend Java",
  nivel: "Júnior",
  tagline:
    "Construo APIs REST em Spring Boot que aguentam gente de verdade do outro lado — com arquitetura hexagonal, autenticação stateless e deploy em produção.",
  local: "São Paulo, Brasil",
  formacaoCurta: "Bacharelado em Ciência da Computação · IFSP",
  email: "henriquemarangoni.inacio1108@gmail.com",
  github: "https://github.com/R1ck-dev",
  githubLabel: "github.com/R1ck-dev",
  linkedin: "https://linkedin.com/in/henriquemarangoni",
  linkedinLabel: "linkedin.com/in/henriquemarangoni",
  curriculoPdf: "/curriculo.pdf",
} as const;

export const sobre = {
  paragrafos: [
    "Sou desenvolvedor backend Java. O que me interessa não é a tecnologia pela tecnologia: é o que acontece quando um sistema trava e alguém do outro lado não consegue trabalhar naquele dia. Foi assim que aprendi a depurar — começando pela pessoa, não pelo stack trace.",
    "No dia a dia isso vira Spring Boot com Spring Security e JWT, JPA/Hibernate sobre PostgreSQL e MySQL, schema versionado com Flyway e uma separação séria entre domínio e infraestrutura: arquitetura hexagonal, Clean Architecture e DDD. Também levo o produto até o fim — React com TypeScript no front, Docker para empacotar e deploy em nuvem.",
    "Passei os últimos meses dentro de um sistema público em produção, mantido desde 2019 e usado por assistentes sociais de uma prefeitura inteira. Legado de verdade: 500+ classes e 97 tabelas. Em paralelo, conduzo uma Iniciação Científica no IFSP investigando o impacto da IA generativa na autonomia de quem está aprendendo a programar.",
  ],
  destaques: [
    { valor: "11", rotulo: "cards entregues em 3 meses num legado em produção" },
    { valor: "3", rotulo: "aplicações full stack construídas da concepção ao deploy" },
    { valor: "1", rotulo: "Iniciação Científica em andamento (PIBIFSP)" },
  ],
} as const;

export type Projeto = {
  slug: string;
  nome: string;
  subtitulo: string;
  periodo: string;
  contexto: string;
  problema: string;
  construcao: string[];
  numeros: { valor: string; rotulo: string }[];
  stack: string[];
  links: { rotulo: string; href: string; destaque?: boolean }[];
};

export const projetos: Projeto[] = [
  {
    slug: "ifconecta",
    nome: "IFConecta",
    subtitulo: "Plataforma de comunicação acadêmica",
    periodo: "abr/2026 — atual",
    contexto: "Projeto acadêmico full stack · IFSP",
    problema:
      "Comunicado de instituto se perde entre mural, grupo de WhatsApp e e-mail — e ninguém sabe ao certo quem pode avisar o quê, para quem.",
    construcao: [
      "Arquitetura hexagonal (ports & adapters) organizada por feature, com o domínio puro separado das entidades JPA por mappers manuais, distribuída em 5 módulos.",
      "Autenticação stateless com JWT e Spring Security (filtro customizado, BCrypt, sessão STATELESS) e autorização por papel: admin, institucional, professor e aluno.",
      "Uma matriz de permissão de negócio que decide quem pode enviar cada tipo de comunicado, validada no domínio e não no controller.",
      "Fluxos de cadastro com ativação por e-mail, convite de professores e redefinição de senha com tokens de verificação e Spring Mail.",
      "Empacotamento com Dockerfile multi-stage (Maven + JRE 21) e Docker Compose subindo PostgreSQL e MailHog; SPA em React 18 + Vite consumindo a API via Axios.",
    ],
    numeros: [
      { valor: "44", rotulo: "endpoints REST" },
      { valor: "44", rotulo: "use cases" },
      { valor: "9", rotulo: "migrations Flyway" },
      { valor: "4", rotulo: "papéis de acesso" },
    ],
    stack: [
      "Java 21",
      "Spring Boot 4",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "Flyway",
      "Docker Compose",
      "React 18",
      "Vite",
    ],
    links: [{ rotulo: "Código no GitHub", href: "https://github.com/R1ck-dev/ifconecta" }],
  },
  {
    slug: "bloodcrown",
    nome: "BloodCrown",
    subtitulo: "Mesa de RPG colaborativa em tempo real",
    periodo: "dez/2025 — jan/2026",
    contexto: "Projeto pessoal full stack · em produção",
    problema:
      "Ficha de RPG em papel não acompanha uma mesa que joga junto: cada mudança precisa aparecer para todo mundo, na hora.",
    construcao: [
      "Backend em Java 21 / Spring Boot 4 com arquitetura hexagonal e Clean Architecture; frontend em React 19 + TypeScript com tabuleiro interativo em canvas (Konva).",
      "Mesa colaborativa em tempo real com WebSocket + STOMP, reaproveitando o token JWT no handshake e autorizando assinatura e envio por mesa.",
      "Autenticação stateless com Spring Security e JWT, schema versionado com Flyway e cache de leitura com Caffeine sobre MySQL 8.",
      "Docker multi-stage e Docker Compose (MySQL + backend + frontend), com API no Render, front no Netlify e keepalive automatizado por GitHub Actions.",
    ],
    numeros: [
      { valor: "75", rotulo: "endpoints REST" },
      { valor: "14", rotulo: "entidades JPA" },
      { valor: "0s", rotulo: "de espera entre jogadores" },
    ],
    stack: [
      "Java 21",
      "Spring Boot 4",
      "WebSocket/STOMP",
      "MySQL 8",
      "Caffeine",
      "React 19",
      "TypeScript",
      "Konva",
      "Render",
      "Netlify",
    ],
    links: [
      { rotulo: "Ver no ar", href: "https://bloodcrown.netlify.app", destaque: true },
      { rotulo: "Código no GitHub", href: "https://github.com/R1ck-dev/BloodCrown-CharacterSheet" },
    ],
  },
  {
    slug: "codeinsights",
    nome: "CodeInsights",
    subtitulo: "Métricas de aprendizado em programação",
    periodo: "jun/2026 — atual",
    contexto: "Iniciação Científica PIBIFSP · IFSP",
    problema:
      "A IA generativa entrou na sala de aula antes de existir uma forma de medir o que ela faz com a autonomia de quem está aprendendo a programar.",
    construcao: [
      "Plataforma que é, ao mesmo tempo, ferramenta de portfólio de código para o aluno e instrumento empírico da pesquisa.",
      "Backend em Spring Boot 4 (Java 21) com arquitetura hexagonal e Clean Architecture: domínio puro isolado, casos de uso e mapeamento manual entre domínio e JPA.",
      "Modelagem dos contextos de identidade (usuários, perfis, ativação por e-mail) e de conhecimento (desafios, resoluções e snippets categorizados), com o Índice de Autonomia IA validado como invariante de domínio.",
      "Módulo de métricas modular e extensível: estimativa de Big O e de complexidade de espaço via AST, além da complexidade ciclomática de McCabe.",
      "Metodologia científica com dados anonimizados e submissão ao Comitê de Ética do IFSP.",
    ],
    numeros: [
      { valor: "1–5", rotulo: "escala do Índice de Autonomia IA" },
      { valor: "3", rotulo: "motores de métricas" },
      { valor: "AST", rotulo: "análise estática de código" },
    ],
    stack: [
      "Java 21",
      "Spring Boot 4",
      "Clean Architecture",
      "PostgreSQL",
      "Flyway",
      "OpenAPI/Swagger",
      "JWT",
      "Python",
    ],
    links: [{ rotulo: "Código no GitHub", href: "https://github.com/R1ck-dev/CodeInsights" }],
  },
];

export const habilidades = [
  {
    grupo: "Backend",
    itens: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "Spring Mail",
      "JWT",
      "BCrypt",
      "APIs REST",
      "OpenAPI/Swagger",
      "WebSocket/STOMP",
      "JPA",
      "Hibernate",
      "Bean Validation",
      "JSF",
      "PrimeFaces",
      "CDI",
      "Maven",
      "Tomcat",
      "Caffeine",
      "Python",
    ],
  },
  {
    grupo: "Arquitetura",
    itens: [
      "Arquitetura Hexagonal",
      "Clean Architecture",
      "DDD",
      "Design Patterns",
      "Orientação a Objetos",
    ],
  },
  { grupo: "Dados", itens: ["PostgreSQL", "MySQL", "Flyway"] },
  {
    grupo: "DevOps",
    itens: ["Docker", "Docker Compose", "GitHub Actions", "Git", "Render", "Netlify", "Vercel"],
  },
  {
    grupo: "Frontend",
    itens: ["React", "TypeScript", "JavaScript (ES6+)", "Vite", "HTML5", "CSS3"],
  },
  { grupo: "Testes", itens: ["JUnit 5", "Mockito"] },
] as const;

export type Marco = {
  periodo: string;
  cargo: string;
  organizacao: string;
  atual?: boolean;
  descricao: string;
  pontos?: string[];
  tags?: string[];
};

export const experiencia: Marco[] = [
  {
    periodo: "ago/2026 — atual",
    cargo: "Estagiário em Sistemas Embarcados",
    organizacao: "Sanesoluti",
    atual: true,
    descricao:
      "Acompanhamento de projetos de dispositivos embarcados: leitura de esquemáticos, análise de circuitos e detecção de falhas em bancada.",
    tags: ["Embarcados", "C", "Eletrônica", "Depuração de hardware"],
  },
  {
    periodo: "mai/2026 — ago/2026",
    cargo: "Estagiário de Desenvolvimento de Software",
    organizacao:
      "SVSA — Sistema de Vigilância SocioAssistencial (IFSP Salto / SASC — Prefeitura de Salto-SP)",
    descricao:
      "Sistema web em produção desde 2019, usado pela Secretaria de Assistência Social de Salto-SP e reconhecido pelo Ministério da Cidadania. Legado de verdade: 500+ classes Java, 170 telas, 97 tabelas.",
    pontos: [
      "Onze cards em três meses: comecei em features de busca e terminei liderando duas investigações de bug em produção.",
      "Implementei regras de negócio e melhorias nas telas de pesquisa e nos componentes reutilizáveis de seleção de pessoa (managed beans JSF e páginas XHTML).",
      "Resolvi um hotfix de produção que derrubava a tela de edição de usuário para qualquer perfil.",
      "Fiz peer review de um PR de 32 arquivos (+151/−78) e apontei três bloqueadores antes do merge.",
    ],
    tags: ["Java 17", "JSF/Mojarra", "PrimeFaces", "CDI", "Hibernate", "MySQL", "Git Flow"],
  },
  {
    periodo: "mar/2022 — dez/2022",
    cargo: "Estagiário de Suporte Administrativo e Tecnológico",
    organizacao: "Cartório Eleitoral de Barueri",
    descricao:
      "Atendimento ao público e automação de controles internos em planilhas, reduzindo o tempo de consulta e o erro nos relatórios da equipe.",
    tags: ["Atendimento", "Excel", "Processos"],
  },
];

export const formacao: Marco[] = [
  {
    periodo: "2024 — atual",
    cargo: "Bacharelado em Ciência da Computação",
    organizacao: "Instituto Federal de São Paulo (IFSP)",
    atual: true,
    descricao: "Em curso, com Iniciação Científica ativa pelo PIBIFSP desde jun/2026.",
  },
  {
    periodo: "2021 — 2022",
    cargo: "Técnico em Manutenção e Suporte em Informática",
    organizacao: "Instituto Tecnológico de Barueri",
    descricao: "Formação técnica concluída.",
  },
];

export const idiomas = [
  { idioma: "Português", nivel: "nativo" },
  { idioma: "Inglês", nivel: "intermediário" },
] as const;

export const secoes = [
  { id: "sobre", numero: "01", titulo: "Sobre" },
  { id: "projetos", numero: "02", titulo: "Projetos" },
  { id: "stack", numero: "03", titulo: "Stack" },
  { id: "trajetoria", numero: "04", titulo: "Trajetória" },
  { id: "contato", numero: "05", titulo: "Contato" },
] as const;
