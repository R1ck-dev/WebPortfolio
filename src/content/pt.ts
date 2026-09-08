// Conteúdo em português — a versão canônica.
//
// Fonte da verdade: CurriculoVsCode/curriculo.html, o vault Obsidian (05 - SVSA, 10 - Sanesoluti,
// 04 - IC - CodeInsights, 02 - Projetos) e docs/design/brief-webportfolio.md.
// Nada aqui é estimado: todo número tem origem numa tela, num repositório ou no currículo.

import type { Conteudo } from "./tipos";

import bloodcrownJogador from "@/assets/prints/bloodcrown/jogador.webp";
import bloodcrownMestre from "@/assets/prints/bloodcrown/mestre.webp";
import codeinsightsCruzamento from "@/assets/prints/codeinsights/cruzamento.webp";
import codeinsightsDashboard from "@/assets/prints/codeinsights/dashboard.webp";
import codeinsightsQualidade from "@/assets/prints/codeinsights/qualidade.webp";
import escolaFinanceiro from "@/assets/prints/escola/financeiro.webp";
import escolaPix from "@/assets/prints/escola/pix.webp";
import ifconectaTimeline from "@/assets/prints/ifconecta/timeline.webp";

const pt: Conteudo = {
  locale: "pt",
  htmlLang: "pt-BR",

  perfil: {
    nome: "Henrique de Almeida Marangoni Inacio",
    nomeCurto: "Henrique Marangoni",
    cargo: "Desenvolvedor Backend Java",
    nivel: "Júnior",
    tese: "Construo sistemas de backend onde a regra de negócio é calculada e auditável — não digitada.",
    local: "Salto, São Paulo",
    formacaoCurta: "Ciência da Computação · IFSP",
    email: "henriquemarangoni.inacio1108@gmail.com",
    github: "https://github.com/R1ck-dev",
    githubLabel: "github.com/R1ck-dev",
    linkedin: "https://linkedin.com/in/henriquemarangoni",
    linkedinLabel: "linkedin.com/in/henriquemarangoni",
    curriculoPdf: "/curriculo.pdf",
  },

  ui: {
    pularParaConteudo: "Pular para o conteúdo",
    navegacaoPrincipal: "Navegação principal",
    verProjetos: "Ver projetos",
    entrarEmContato: "Entrar em contato",
    baixarCurriculo: "Baixar currículo em PDF",
    curriculo: "Currículo",
    codigoNoGithub: "Código no GitHub",
    semDemo: "Sem demo pública",
    carroChefe: "Carro-chefe",
    emCurso: "em curso",
    temaClaro: "Tema claro",
    temaEscuro: "Tema escuro",
    alternarTema: "Alternar tema",
  },

  sobre: {
    paragrafos: [
      "Estudo Ciência da Computação no IFSP e estou no 6º semestre. Desde agosto de 2026 sou estagiário em sistemas embarcados na Sanesoluti — onde o software encosta no hardware e um erro de lógica não vira uma exceção na tela, vira um valor errado num medidor em campo.",
      "Antes disso passei três meses dentro de um sistema público em produção desde 2019: 500+ classes Java, 170 telas, 97 tabelas, e assistentes sociais de uma prefeitura inteira do outro lado. Foi ali que aprendi a mexer em legado sem quebrar quem depende dele — e a começar a depuração pela pessoa, não pelo stack trace.",
      "Em paralelo, sou bolsista de Iniciação Científica pelo PIBIFSP. O CodeInsights, o primeiro projeto aqui embaixo, é o objeto dessa pesquisa: ele não ilustra a investigação, ele produz o dado dela.",
      "O que os quatro projetos abaixo têm em comum não é a stack — é que a regra de negócio é calculada pelo sistema e conferível por quem lê a tela, em vez de ser um número que alguém digitou e ninguém sabe de onde veio.",
    ],
    destaques: [
      { valor: "11", rotulo: "cards entregues em 3 meses num legado em produção" },
      { valor: "4", rotulo: "sistemas full stack construídos do zero" },
      { valor: "1", rotulo: "Iniciação Científica em andamento (PIBIFSP)" },
    ],
  },

  projetos: {
    intro:
      "Quatro sistemas, quase a mesma stack — Java 21, Spring Boot 4, React, arquitetura hexagonal. A escolha repetida é de propósito. O que muda de um para o outro é o problema, e é por ele que vale começar a leitura.",
    lista: [
      {
        slug: "codeinsights",
        nome: "CodeInsights",
        subtitulo: "Métricas de aprendizado em programação",
        contexto: "Iniciação Científica PIBIFSP · IFSP",
        periodo: "jun/2026 — atual",
        carroChefe: true,
        tom: "escuro",
        problema:
          "Um aluno resolve um exercício hoje e outro daqui a três meses. Ele evoluiu — mas quanto, e em quê? E quando usa IA generativa para chegar na resposta, o que isso faz com a autonomia dele ao longo do tempo?",
        estudoDeCaso: [
          {
            rotulo: "A pergunta",
            texto:
              "Medir amadurecimento em programação sem depender da percepção que o aluno tem do próprio aprendizado — que é o instrumento mais disponível e o menos confiável que existe.",
          },
          {
            rotulo: "A decisão",
            texto:
              "Extrair métrica objetiva do código submetido — complexidade de tempo e de espaço por análise da AST, complexidade ciclomática de McCabe — e cruzar com o nível de autonomia que o próprio aluno declara frente à IA. A plataforma vira as duas coisas ao mesmo tempo: a ferramenta de portfólio que o aluno usa e o instrumento empírico da pesquisa. Ela produz o dado que ela mesma analisa.",
          },
          {
            rotulo: "O resultado",
            texto:
              "Um heatmap de densidade autonomia × complexidade sobre uma coorte real: 9 participantes, 86 resoluções, 100% delas com métrica calculada. É a curva de amadurecimento saindo de dado, e não de impressão.",
          },
        ],
        fatos: [
          {
            titulo: "Consentimento é parte da tese, não burocracia",
            texto:
              "O painel de pesquisa mostra o recorte na cara: 9 autorizaram, 2 recusaram, 2 não responderam. Quem recusa sai da amostra — e a recusa aparece no número em vez de sumir dele.",
          },
          {
            titulo: "O limite do motor é declarado, não escondido",
            texto:
              "A análise estática cobre Java e C. Em qualquer outra linguagem a métrica simplesmente não é calculada, e a tela diz isso. Um filtro de confiança do motor deixa separar o que foi medido com segurança do que foi estimado.",
          },
          {
            titulo: "Controle de acesso por papel, verificado",
            texto:
              "A conta de aluno é redirecionada ao tentar abrir a área de pesquisa. A separação entre quem gera o dado e quem analisa o dado é do domínio, não do menu.",
          },
        ],
        numeros: [
          { valor: "9", rotulo: "participantes na coorte" },
          { valor: "86", rotulo: "resoluções analisadas" },
          { valor: "100%", rotulo: "com métrica calculada" },
          { valor: "3", rotulo: "motores de métrica" },
        ],
        stack: ["Java 21", "Spring Boot 4", "Hexagonal", "PostgreSQL", "React 19", "TypeScript"],
        apresentacao: "galeria",
        prints: [
          {
            imagem: codeinsightsDashboard,
            alt: "Dashboard do CodeInsights: carta de resoluções cruzando autonomia e complexidade, com o painel da resolução selecionada mostrando tempo O(n), espaço O(1) e ciclomática M igual a 3.",
            legenda:
              "A carta de resoluções. À direita, a solução selecionada abre em tempo O(n), espaço O(1), ciclomática M = 3 e autonomia declarada 5/5 — todos extraídos do código, nenhum digitado.",
          },
          {
            imagem: codeinsightsCruzamento,
            alt: "Tela de pesquisa do CodeInsights com heatmap de densidade cruzando nível de autonomia e complexidade, ao lado de uma distribuição empilhada.",
            legenda:
              "O cruzamento autonomia × complexidade, com filtro de confiança do motor. É a figura que a pesquisa precisava e que motivou a plataforma existir.",
          },
          {
            imagem: codeinsightsQualidade,
            alt: "Tela de qualidade dos dados do CodeInsights: 9 participantes, 86 resoluções, 100% com métrica, e o recorte de consentimento com 9 autorizações, 2 recusas e 2 sem resposta.",
            legenda:
              "Qualidade dos dados. A recusa de consentimento é um número visível na tela, do lado da autorização.",
          },
        ],
        repo: "https://github.com/R1ck-dev/Code-Insights",
        demo: {
          situacao: "local",
          motivo: "Roda localmente. Envolve dado de pesquisa com consentimento e submissão ao Comitê de Ética do IFSP, então não há instância pública.",
        },
      },

      {
        slug: "escola-de-idiomas",
        nome: "Escola de Idiomas",
        subtitulo: "Gestão acadêmica e financeira de uma escola",
        contexto: "Simulação de software house · levantamento com cliente",
        periodo: "2026",
        tom: "claro",
        problema:
          "A escola perde aluno porque a turma lota e ninguém avisa. E cobra a mensalidade atrasada na mão, aluno por aluno, na planilha — onde juros errado ninguém confere.",
        fatos: [
          {
            titulo: "O requisito veio da dor, não do enunciado",
            texto:
              "Não nasceu de uma especificação técnica: nasceu de um levantamento com um cliente fictício, um agente de IA no papel de dono de escola, leigo, que só sabia descrever o próprio problema. Ele nunca pediu “um CRUD de matrícula” — disse que perdia aluno quando a turma enchia. Daí saiu a lista de espera, e a matrícula passou a ter três saídas: aprovar, rejeitar ou esperar.",
          },
          {
            titulo: "Juros e multa calculados, não digitados",
            texto:
              "R$ 85,00 vencidos há 18 dias viram R$ 104,70 — 85 + 2% de multa + R$ 1,00 por dia de mora. E o teto de 30 dias funciona: uma mensalidade 51 dias vencida para em R$ 397,20, porque a mora somou 30 e não 51.",
          },
          {
            titulo: "Aprovação é uma conjunção, e a tela prova",
            texto:
              "Uma aluna com média 89,0 — a segunda melhor da turma — aparece reprovada, por 37,5% de faltas. Outro reprovou pelo motivo oposto: média 58,5 com presença em dia. Duas causas distintas, o mesmo rótulo, na mesma tabela. E sem as duas notas o sistema se recusa a concluir: “em andamento” não é “reprovado”.",
          },
          {
            titulo: "Três interfaces, não três permissões",
            texto:
              "Gestão e professor em desktop com barra lateral; o aluno em mobile-first com navegação inferior. Quem paga e quem dá aula está no computador; quem estuda está no celular. O pagamento fecha o ciclo com boleto no padrão FEBRABAN e PIX dinâmico com BR Code de verdade.",
          },
        ],
        numeros: [
          { valor: "R$ 104,70", rotulo: "calculados a partir de R$ 85,00" },
          { valor: "30 d", rotulo: "teto da mora, mesmo aos 51 dias" },
          { valor: "3", rotulo: "interfaces desenhadas por papel" },
        ],
        stack: ["Java 21", "Spring Boot 4", "Hexagonal", "PostgreSQL", "React 19", "TypeScript"],
        apresentacao: "duo",
        prints: [
          {
            imagem: escolaFinanceiro,
            alt: "Tela financeira da gestão listando mensalidades atrasadas, com R$ 85,00 atualizados para R$ 104,70 e a regra de multa e mora escrita no rodapé da tabela.",
            legenda:
              "A régua da secretaria. O valor atualizado vem ao lado do original, com “há 18 dias · inclui multa + mora”, e a regra inteira escrita no rodapé da tabela.",
            aba: "Secretaria",
          },
          {
            imagem: escolaPix,
            alt: "Tela de pagamento por PIX na largura de um celular, com QR Code, o BR Code completo em texto e o botão de copiar código.",
            legenda:
              "O outro lado do mesmo ciclo, em largura de celular: QR Code e BR Code completo, na interface mobile-first do aluno.",
            aba: "Aluno",
          },
        ],
        repo: "https://github.com/R1ck-dev/Escola-Idiomas",
        demo: {
          situacao: "local",
          motivo: "Roda localmente, com seed determinístico. Deploy ainda não publicado.",
        },
        aprofundar: { href: "#regra", rotulo: "Mexer nessa regra" },
      },

      {
        slug: "bloodcrown",
        nome: "BloodCrown",
        subtitulo: "Mesa de RPG colaborativa em tempo real",
        contexto: "Projeto pessoal · no ar, com jogadores de verdade",
        periodo: "dez/2025 — jan/2026",
        tom: "escuro",
        problema:
          "Ficha de RPG em papel não acompanha uma mesa que joga junto: o buff que entra agora precisa aparecer para todo mundo agora — e ninguém deveria conseguir mexer na ficha do outro.",
        fatos: [
          {
            titulo: "Estado derivado, com procedência visível",
            texto:
              "O Cetro Coroado dá +2 de Carisma e o atributo aparece como 9, com o rótulo acessível dizendo “valor 9 (base 7 + buff 2)”. Desequipar desfaz. Não é um número gravado no banco: é uma conta que o sistema refaz e mostra de onde veio.",
          },
          {
            titulo: "Posse validada no backend, não na tela",
            texto:
              "O caso de uso que vincula ficha a token só aceita a ficha de quem chamou. Por isso até o seed faz cada jogador entrar na mesa, posicionar o próprio token e vincular a própria ficha — igual a uma sessão real, porque o atalho não passaria pela validação.",
          },
          {
            titulo: "Autorização por papel muda a interface",
            texto:
              "O jogador não vê o painel do mestre nem a barra de cenas. A barra some do documento — não é um botão escondido por CSS que um inspetor de elementos devolveria.",
          },
          {
            titulo: "A rolagem mostra os dados, não só o total",
            texto:
              "Sai [6, 7, 8] + 5 = 26, dado por dado, porque quem joga confere. E a escala do tabuleiro é declarada: 1 célula = 1,5 m = 48 px, com a régua medindo em metros.",
          },
        ],
        numeros: [
          { valor: "75", rotulo: "endpoints REST" },
          { valor: "14", rotulo: "entidades JPA" },
          { valor: "0 s", rotulo: "de espera entre jogadores" },
        ],
        stack: ["Java 21", "Spring Boot 4", "WebSocket/STOMP", "MySQL 8", "React 19", "Konva"],
        apresentacao: "tabs",
        prints: [
          {
            imagem: bloodcrownMestre,
            alt: "Mesa do BloodCrown na visão do mestre: tabuleiro com tokens, retratos com barras de vida, painel do mestre e barra de cenas visíveis.",
            legenda:
              "A mesma mesa, na visão do mestre: painel do mestre à direita e barra de cenas embaixo.",
            aba: "Mestre",
          },
          {
            imagem: bloodcrownJogador,
            alt: "A mesma mesa do BloodCrown na visão do jogador: o tabuleiro e os retratos continuam, mas o painel do mestre e a barra de cenas não aparecem.",
            legenda:
              "A mesma mesa, na visão do jogador. O painel do mestre e a barra de cenas não estão escondidos — não foram enviados.",
            aba: "Jogador",
          },
        ],
        repo: "https://github.com/R1ck-dev/BloodCrown-CharacterSheet",
        demo: {
          situacao: "no-ar",
          href: "https://bloodcrown.netlify.app",
          rotulo: "bloodcrown.netlify.app",
        },
      },

      {
        slug: "ifconecta",
        nome: "IFConecta",
        subtitulo: "Rede acadêmica do IFSP Campus Salto",
        contexto: "Projeto acadêmico full stack · IFSP",
        periodo: "abr/2026 — atual",
        tom: "claro",
        problema:
          "Comunicado de instituto se perde entre mural, grupo de WhatsApp e e-mail. E ninguém sabe ao certo quem pode avisar o quê, para quem.",
        fatos: [
          {
            titulo: "Autorização em duas camadas",
            texto:
              "Tipo de usuário (aluno, professor ou servidor) e papel dentro do clube (líder ou membro), combinados. O botão de comunicado só existe para professor e servidor; a aba de solicitações do clube, só para quem lidera aquele clube.",
          },
          {
            titulo: "Alcance de comunicado é regra de domínio",
            texto:
              "Um professor só dispara para turma que ele leciona ou clube que ele lidera. O segundo seletor do formulário é populado a partir disso — não é uma lista fixa filtrada na tela depois.",
          },
          {
            titulo: "Post anônimo, com autor no banco",
            texto:
              "Posts anônimos convivem com posts identificados no mesmo feed. É decisão de produto com consequência técnica: o autor continua existindo e sendo responsabilizável, só não aparece.",
          },
        ],
        numeros: [
          { valor: "44", rotulo: "endpoints REST" },
          { valor: "44", rotulo: "casos de uso" },
          { valor: "4", rotulo: "papéis de acesso" },
        ],
        stack: ["Java 21", "Spring Boot 4", "Hexagonal", "PostgreSQL", "React 18", "Vite"],
        apresentacao: "unico",
        prints: [
          {
            imagem: ifconectaTimeline,
            alt: "Feed do IFConecta com publicações do campus, votos, comentários e uma publicação anônima entre as identificadas.",
            legenda:
              "O feed do campus. Um post anônimo entre os identificados, com voto e comentário no mesmo lugar.",
          },
        ],
        repo: "https://github.com/R1ck-dev/IFConecta",
        demo: {
          situacao: "local",
          motivo: "Roda localmente via Docker Compose. Deploy ainda não publicado.",
        },
      },
    ],
  },

  regra: {
    titulo: "Uma regra de negócio, por dentro",
    intro:
      "É fácil escrever que a regra é calculada. Esta é a régua de cobrança da Escola de Idiomas, com a conta que roda no domínio — arraste os dias e veja o valor se refazer.",
    origem: "Regra do rodapé da tela financeira: multa de 2% + mora de R$ 1,00/dia, com teto de 30 dias.",
    campoValor: "Mensalidade",
    campoDias: "Dias em atraso",
    presets: [
      { rotulo: "R$ 85,00", valor: 85, dias: 18, nota: "o caso do print — 18 dias em atraso" },
      { rotulo: "R$ 360,00", valor: 360, dias: 51, nota: "o caso do teto — 51 dias em atraso" },
    ],
    linhas: {
      base: "mensalidade",
      multa: "multa de 2%",
      mora: "mora de R$ 1,00/dia",
      total: "valor atualizado",
    },
    teto: "teto de 30 dias",
    tetoAtivo: "A mora parou em 30 dias. São {dias} dias de atraso, mas o teto é regra — e a regra ganha.",
    rodape:
      "A mesma conta que a secretaria vê na listagem e o aluno vê no boleto. Nenhum dos dois digita o valor atualizado.",
  },

  stack: {
    intro:
      "O que uso no dia a dia, agrupado por camada. A ordem dentro de cada grupo é a do peso real na prática, não a do currículo.",
    grupos: [
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
      { grupo: "Embarcados", itens: ["C", "Leitura de esquemáticos", "Depuração em bancada"] },
    ],
    idiomas: [
      { idioma: "Português", nivel: "nativo" },
      { idioma: "Inglês", nivel: "intermediário" },
    ],
  },

  trajetoria: {
    rotuloExperiencia: "Experiência",
    rotuloFormacao: "Formação",
    experiencia: [
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
    ],
    formacao: [
      {
        periodo: "2024 — atual",
        cargo: "Bacharelado em Ciência da Computação",
        organizacao: "Instituto Federal de São Paulo (IFSP)",
        atual: true,
        descricao:
          "6º semestre. Bolsista de Iniciação Científica pelo PIBIFSP desde jun/2026, com o CodeInsights como objeto da pesquisa.",
      },
      {
        periodo: "2021 — 2022",
        cargo: "Técnico em Manutenção e Suporte em Informática",
        organizacao: "Instituto Tecnológico de Barueri",
        descricao: "Formação técnica concluída.",
      },
    ],
  },

  contato: {
    chamada: "Se você está contratando para backend Java, eu quero conversar.",
    texto:
      "Respondo e-mail no mesmo dia. O currículo completo em PDF está a um clique, e o código dos quatro projetos está aberto no GitHub — inclusive o que ainda não tem deploy.",
    canais: [
      { rotulo: "E-mail", valor: "henriquemarangoni.inacio1108@gmail.com", tipo: "email" },
      { rotulo: "LinkedIn", valor: "linkedin.com/in/henriquemarangoni", tipo: "linkedin" },
      { rotulo: "GitHub", valor: "github.com/R1ck-dev", tipo: "github" },
      { rotulo: "Currículo", valor: "baixar em PDF", tipo: "curriculo" },
    ],
    creditos: "Next.js e Tailwind CSS",
  },

  secoes: [
    { id: "sobre", numero: "01", titulo: "Sobre" },
    { id: "projetos", numero: "02", titulo: "Projetos" },
    { id: "regra", numero: "03", titulo: "A regra" },
    { id: "stack", numero: "04", titulo: "Stack" },
    { id: "trajetoria", numero: "05", titulo: "Trajetória" },
    { id: "contato", numero: "06", titulo: "Contato" },
  ],
};

export default pt;
