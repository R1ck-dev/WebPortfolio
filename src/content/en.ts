// English content — a translation of `pt.ts`, which stays the canonical version.
//
// Two rules held while translating:
//  1. Numbers, currency and on-screen strings are not converted. A caption points at a
//     screenshot; if the screen reads "R$ 104,70", the caption reads "R$ 104,70" too.
//  2. Brazilian institutions keep their names and get a short gloss, because a reader abroad
//     has no way to know what IFSP or SVSA is — and the gloss is what makes the fact land.

import type { Conteudo } from "./tipos";

import bloodcrownCalculadora from "@/assets/prints/bloodcrown/calculadora.webp";
import bloodcrownInventario from "@/assets/prints/bloodcrown/inventario.webp";
import bloodcrownJogador from "@/assets/prints/bloodcrown/jogador.webp";
import bloodcrownMestre from "@/assets/prints/bloodcrown/mestre.webp";
import codeinsightsCoorte from "@/assets/prints/codeinsights/coorte.webp";
import codeinsightsCruzamento from "@/assets/prints/codeinsights/cruzamento.webp";
import codeinsightsDashboard from "@/assets/prints/codeinsights/dashboard.webp";
import codeinsightsDesafio from "@/assets/prints/codeinsights/desafio.webp";
import codeinsightsPublico from "@/assets/prints/codeinsights/publico.webp";
import codeinsightsQualidade from "@/assets/prints/codeinsights/qualidade.webp";
import escolaAlunoFinanceiro from "@/assets/prints/escola/aluno-financeiro.webp";
import escolaAlunoInicio from "@/assets/prints/escola/aluno-inicio.webp";
import escolaAlunoPix from "@/assets/prints/escola/aluno-pix.webp";
import escolaBoletim from "@/assets/prints/escola/boletim.webp";
import escolaChamada from "@/assets/prints/escola/chamada.webp";
import escolaFinanceiro from "@/assets/prints/escola/financeiro.webp";
import escolaMatriculas from "@/assets/prints/escola/matriculas.webp";
import ifconectaClube from "@/assets/prints/ifconecta/clube.webp";
import ifconectaComunicado from "@/assets/prints/ifconecta/comunicado.webp";
import ifconectaModeracao from "@/assets/prints/ifconecta/moderacao.webp";
import ifconectaTimeline from "@/assets/prints/ifconecta/timeline.webp";

const en: Conteudo = {
  locale: "en",
  htmlLang: "en",

  perfil: {
    nome: "Henrique de Almeida Marangoni Inacio",
    nomeCurto: "Henrique Marangoni",
    cargo: "Java Backend Developer",
    nivel: "Junior",
    tese: "I build backend systems where the business rule is computed and auditable — not typed in by hand.",
    local: "Salto, São Paulo, Brazil",
    formacaoCurta: "Computer Science · IFSP",
    email: "henriquemarangoni.inacio1108@gmail.com",
    github: "https://github.com/R1ck-dev",
    githubLabel: "github.com/R1ck-dev",
    linkedin: "https://www.linkedin.com/in/henrique-marangoni-484845239/",
    linkedinLabel: "linkedin.com/in/henrique-marangoni-484845239",
    curriculoPdf: "/curriculo.pdf",
  },

  ui: {
    pularParaConteudo: "Skip to content",
    navegacaoPrincipal: "Main navigation",
    verProjetos: "See projects",
    entrarEmContato: "Get in touch",
    // O PDF existe só em português. Dizer isso no rótulo evita que alguém clique
    // esperando inglês e receba outro idioma.
    baixarCurriculo: "Download résumé (PDF, in Portuguese)",
    curriculo: "Résumé (PT-BR)",
    codigoNoGithub: "Code on GitHub",
    semDemo: "No public demo",
    carroChefe: "Flagship",
    emCurso: "current",
    temaClaro: "Light theme",
    temaEscuro: "Dark theme",
    alternarTema: "Toggle theme",
    trocarIdioma: "View this portfolio in Portuguese",
    ampliar: "Expand",
    fecharImagem: "Close image",
    imagemAnterior: "Previous image",
    proximaImagem: "Next image",
    telasDoCelular: "On mobile, the student",
  },

  sobre: {
    paragrafos: [
      "I study Computer Science at IFSP, Brazil's Federal Institute of São Paulo, and I'm in my sixth semester. Since August 2026 I've been an embedded systems intern at Sanesoluti — where software meets hardware and a logic error doesn't surface as an exception on a screen, it surfaces as a wrong reading on a meter out in the field.",
      "Before that I spent three months inside a public system that has been in production since 2019: 500+ Java classes, 170 screens, 97 tables, and the social workers of an entire city government on the other side of it. That is where I learned to change legacy code without breaking the people who depend on it — and to start debugging from the person, not from the stack trace.",
      "Alongside that, I hold an undergraduate research fellowship from PIBIFSP. CodeInsights, the first project below, is the object of that research: it does not illustrate the investigation, it produces its data.",
      "What the four projects below have in common is not the stack — it is that the business rule is computed by the system and checkable by whoever reads the screen, instead of being a number someone typed in that nobody can trace.",
    ],
    destaques: [
      { valor: "11", rotulo: "tickets shipped in 3 months on a production legacy system" },
      { valor: "4", rotulo: "full-stack systems built from scratch" },
      { valor: "1", rotulo: "undergraduate research project underway (PIBIFSP)" },
    ],
  },

  projetos: {
    intro:
      "Four systems, almost the same stack — Java 21, Spring Boot 4, React, hexagonal architecture. Repeating the choice is deliberate. What changes from one to the next is the problem, and that is where the reading should start. Every screen below is the system running on seed data; click any of them to expand.",
    lista: [
      {
        slug: "codeinsights",
        nome: "CodeInsights",
        subtitulo: "Learning metrics for programming students",
        contexto: "Undergraduate research, PIBIFSP · IFSP",
        periodo: "Jun 2026 — present",
        carroChefe: true,
        tom: "escuro",
        problema:
          "A student solves an exercise today and another one three months from now. They improved — but by how much, and at what? And when they use generative AI to get to the answer, what does that do to their autonomy over time?",
        estudoDeCaso: [
          {
            rotulo: "The question",
            texto:
              "Measure growth in programming without relying on the student's perception of their own learning — the most available instrument there is, and the least reliable.",
          },
          {
            rotulo: "The decision",
            texto:
              "Extract objective metrics from the submitted code — time and space complexity by AST analysis, McCabe cyclomatic complexity — and cross them against the level of autonomy the student declares in the face of AI. The platform becomes both things at once: the portfolio tool the student uses and the empirical instrument of the research. It produces the very data it analyses.",
          },
          {
            rotulo: "The result",
            texto:
              "A density heatmap of autonomy × complexity over a real cohort: 9 participants, 86 submissions, 100% of them with metrics computed, collected between March and August 2026. It is the growth curve coming out of data rather than out of impression.",
          },
        ],
        fatos: [
          {
            titulo: "Consent is part of the thesis, not paperwork",
            texto:
              "The panel puts the sample right up front: 9 authorised, 2 declined, 2 never answered — and 26 submissions fell outside the cohort because of it. The screen itself states that everything else on it describes only those who consented.",
          },
          {
            titulo: "The engine's limit is declared, not hidden",
            texto:
              "Static analysis covers Java and C, and the distribution says how much is each: 66 submissions in Java, 20 in C. Engine confidence enters as an axis of its own — 64 high, 22 medium — to separate what was measured from what was estimated.",
          },
          {
            titulo: "Role-based access control, verified",
            texto:
              "A student account is redirected when it tries to open the research area. The separation between who generates the data and who analyses it belongs to the domain, not to the menu.",
          },
        ],
        numeros: [
          { valor: "45", rotulo: "REST endpoints" },
          { valor: "47", rotulo: "use cases" },
          { valor: "7", rotulo: "JPA entities" },
        ],
        stack: ["Java 21", "Spring Boot 4", "Hexagonal", "PostgreSQL", "React 19", "TypeScript"],
        prints: [
          {
            imagem: codeinsightsDashboard,
            alt: "CodeInsights dashboard: a chart of submissions crossing autonomy and complexity, with the selected submission's panel showing O(n) time, O(1) space and cyclomatic M equal to 3.",
            legenda:
              "The submissions chart. On the right, the selected solution opens at O(n) time, O(1) space, cyclomatic M = 3 and declared autonomy 5/5 — all extracted from the code, none typed in.",
          },
          {
            imagem: codeinsightsCruzamento,
            alt: "CodeInsights research screen with a density heatmap crossing autonomy level and complexity, next to a stacked distribution by level.",
            legenda:
              "Autonomy × complexity, filtered by engine confidence. It is the figure the research needed — and the reason the platform exists.",
          },
          {
            imagem: codeinsightsQualidade,
            alt: "CodeInsights data quality screen: 9 participants, 86 submissions, 86 with metrics, and the consent breakdown with 9 authorisations, 2 refusals, 2 without an answer and 26 submissions outside the cohort.",
            legenda:
              "Data quality. Refused consent is a number shown next to granted consent, and the screen states that everything else describes only those who agreed.",
          },
          {
            imagem: codeinsightsDesafio,
            alt: "Detail of a challenge in CodeInsights, with the prompt and the submissions already made for it.",
            legenda:
              "A challenge from the inside: the prompt on one side, the submissions on the other. This is where every point on the chart comes from.",
          },
          {
            imagem: codeinsightsPublico,
            alt: "A student's public portfolio in CodeInsights, the view a third party gets when opening the profile link.",
            legenda:
              "The public portfolio: what an outsider sees when they open a student's link. This is the “tool” half of the platform.",
          },
          {
            imagem: codeinsightsCoorte,
            alt: "Raw cohort data table in CodeInsights, with each participant's submissions and metrics.",
            legenda:
              "The raw data behind the charts. Research needs a chart to read and a table to verify — the screen gives both.",
          },
        ],
        repo: "https://github.com/R1ck-dev/Code-Insights",
        demo: {
          situacao: "local",
          motivo:
            "Runs locally. It handles consented research data and is under review by IFSP's ethics committee, so there is no public instance.",
        },
      },

      {
        slug: "escola-de-idiomas",
        nome: "Escola de Idiomas",
        subtitulo: "Academic and financial management for a language school",
        contexto: "Software-house simulation · requirements gathered from a client",
        periodo: "2026",
        tom: "claro",
        problema:
          "The school loses students because a class fills up and nobody is told. And it chases overdue tuition by hand, student by student, in a spreadsheet — where a wrong interest figure goes unchecked.",
        fatos: [
          {
            titulo: "The requirement came from the pain, not from a brief",
            texto:
              "It did not start from a technical specification: it started from a requirements interview with a fictional client, an AI agent playing a non-technical school owner who could only describe their own problem. They never asked for “an enrolment CRUD” — they said they lost students when a class filled up. The waiting list came out of that, and enrolment ended up with three outcomes: approve, reject or wait.",
          },
          {
            titulo: "Interest and penalty computed, not typed in",
            texto:
              "R$ 85,00 overdue by 18 days becomes R$ 104,70 — 85 plus a 2% penalty plus R$ 1,00 per day of interest, with the rule written into the table's own footer. And the 30-day cap holds: a R$ 360,00 tuition that fell due in July shows up for the student at R$ 397,20, because interest counted 30 days and not 51.",
          },
          {
            titulo: "Passing is a conjunction, and the screen proves it",
            texto:
              "A student with an 89.0 average — second best in the class — shows as failed, on 37.5% absences. Another failed for the opposite reason: a 58.5 average with attendance in order. Two distinct causes, the same label, in the same table. And without both grades the system refuses to conclude: “in progress” is not “failed”.",
          },
          {
            titulo: "Three interfaces, not three permissions",
            texto:
              "Management and teachers on desktop with a sidebar; the student mobile-first with bottom navigation. Whoever pays and whoever teaches is at a computer; whoever studies is on a phone. Payment closes the loop with a FEBRABAN-standard bank slip and dynamic PIX carrying a real BR Code.",
          },
        ],
        numeros: [
          { valor: "53", rotulo: "REST endpoints" },
          { valor: "52", rotulo: "use cases" },
          { valor: "14", rotulo: "JPA entities" },
        ],
        stack: ["Java 21", "Spring Boot 4", "Hexagonal", "PostgreSQL", "React 19", "TypeScript"],
        prints: [
          {
            imagem: escolaFinanceiro,
            alt: "The school's finance screen listing overdue tuition, with R$ 85,00 updated to R$ 104,70 and the penalty and interest rule written in the table footer.",
            legenda:
              "The front office's yardstick. The updated amount sits next to the original, with “18 days ago · includes penalty + interest”, and the whole rule spelled out in the footer: 2% penalty + R$ 1/day of interest, capped at 30 days.",
          },
          {
            imagem: escolaBoletim,
            alt: "Class report card with four different outcomes side by side, including two students failed for distinct reasons: one on absences and one on average.",
            legenda:
              "All four states in one table — and the two causes of failure kept apart: one on absences despite a high average, one on average with attendance in order.",
          },
          {
            imagem: escolaMatriculas,
            alt: "Enrolment approval queue with three applicants, each with Reject, Waiting list and Approve buttons, and one applicant flagged as a minor with a guardian linked.",
            legenda:
              "The three-way decision that came out of the client conversation. Beatriz Lima carries the “minor” flag with a guardian linked — the system will not let her through without one.",
          },
          {
            imagem: escolaChamada,
            alt: "Attendance screen with six students, five present and one absent, and the instruction that everyone starts present.",
            legenda:
              "The attendance that feeds failure by absence. “Everyone starts present; tap whoever missed” — and the date only moves through days the class actually meets.",
          },
        ],
        mobile: [
          {
            imagem: escolaAlunoInicio,
            alt: "The student's home screen at phone width, with a tuition and performance card and bottom navigation.",
            legenda: "The student's home, with navigation at the bottom.",
          },
          {
            imagem: escolaAlunoFinanceiro,
            alt: "The student's tuition on mobile: August open at R$ 360,00, July overdue at R$ 397,20 with a note about the penalty over the original R$ 360,00, and June paid.",
            legenda:
              "Three states at once — and July at R$ 397,20 “with penalty · original R$ 360,00”: the 30-day cap seen by the person paying.",
          },
          {
            imagem: escolaAlunoPix,
            alt: "PIX payment on mobile, with a QR code, the full BR Code as text and a copy-code button.",
            legenda: "Dynamic PIX, with QR code and the full BR Code.",
          },
        ],
        repo: "https://github.com/R1ck-dev/Escola-Idiomas",
        demo: {
          situacao: "local",
          motivo: "Runs locally on a deterministic seed. Not deployed yet.",
        },
      },

      {
        slug: "bloodcrown",
        nome: "BloodCrown",
        subtitulo: "Real-time collaborative tabletop RPG",
        contexto: "Personal project · live, with real players",
        periodo: "Dec 2025 — Jan 2026",
        tom: "escuro",
        problema:
          "A paper character sheet cannot keep up with a table playing together: the buff that lands now has to show up for everyone now — and nobody should be able to touch anyone else's sheet.",
        fatos: [
          {
            titulo: "Derived state, with visible provenance",
            texto:
              "The Crowned Sceptre grants +2 Charisma and the attribute reads 9, with the ring lit and the accessible label saying “value 9 (base 7 + buff 2)”. Unequipping undoes it. It is not a number stored in the database: it is a calculation the system redoes and shows the origin of.",
          },
          {
            titulo: "The item's bonus comes back in the damage maths",
            texto:
              "The Black Velvet Cloak grants +4 Armour, and the calculator subtracts resistance before dividing: 30 physical damage with a divisor of 2 lands at −13, not −15. The same item that changes the attribute changes the damage, because both come from the same source.",
          },
          {
            titulo: "Ownership validated in the backend, not on screen",
            texto:
              "The use case that binds a sheet to a token only accepts the sheet of whoever called it. That is why even the seed makes each player join the table, place their own token and bind their own sheet — exactly like a real session, because the shortcut would not pass validation.",
          },
          {
            titulo: "Role-based authorisation changes the interface",
            texto:
              "The player sees neither the game master's panel nor the scene bar. The bar is gone from the document — it is not a button hidden by CSS that an element inspector would hand back.",
          },
          {
            titulo: "Dragging is ephemeral; dropping is what persists",
            texto:
              "A token in motion and the measuring ruler travel over STOMP and never touch the database — the ruler does not even exist once it is cleared. Only the drop persists the position, over REST. Every event carries who emitted it, so the client can ignore its own echo, and the table topic's subscription is validated at SUBSCRIBE, not on screen.",
          },
        ],
        numeros: [
          { valor: "57", rotulo: "REST endpoints" },
          { valor: "57", rotulo: "use cases" },
          { valor: "13", rotulo: "JPA entities" },
        ],
        stack: ["Java 21", "Spring Boot 4", "WebSocket/STOMP", "MySQL 8", "React 19", "Konva"],
        prints: [
          {
            imagem: bloodcrownInventario,
            alt: "A BloodCrown character sheet with the inventory open: three equipped items with the bonuses they grant, and the Charisma attribute reading 9 with a lit ring.",
            legenda:
              "The three equipped items with each one's bonus — and, on the other side of the same screen, Charisma at 9 with the ring lit. Origin and effect in one frame.",
          },
          {
            imagem: bloodcrownMestre,
            alt: "A BloodCrown table from the game master's view: a board with tokens over a crypt floor plan, the master's panel on the right and the scene bar below.",
            legenda:
              "The table as the game master sees it: master's panel on the right, scene bar at the bottom, LIVE badge up top.",
          },
          {
            imagem: bloodcrownJogador,
            alt: "The same BloodCrown table from the player's view: the board and tokens are still there, but the game master's panel and the scene bar are absent.",
            legenda:
              "The same table, as the player sees it. The master's panel and the scene bar are not hidden — they were never sent.",
          },
          {
            imagem: bloodcrownCalculadora,
            alt: "BloodCrown damage calculator with 30 physical damage, a divisor of 2 and a result of minus 13, next to the inventory with equipped items and their bonuses.",
            legenda:
              "30 physical damage, divisor 2, resistance subtracted before the division: −13. Next to it, the equipped items that produced that resistance.",
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
        subtitulo: "Academic network for IFSP Campus Salto",
        contexto: "Full-stack academic project · IFSP",
        periodo: "Apr 2026 — present",
        tom: "claro",
        problema:
          "An institute-wide announcement gets lost between a notice board, a WhatsApp group and email. And nobody is quite sure who is allowed to announce what, to whom.",
        fatos: [
          {
            titulo: "Authorisation in two layers",
            texto:
              "User type (student, teacher or staff) and role inside the club (leader or member), combined. The announcement button only exists for teachers and staff; the club's requests tab, only for whoever leads that club.",
          },
          {
            titulo: "Announcement reach is a domain rule",
            texto:
              "The form only reveals the Class field once the reach is chosen, and the list comes from what that teacher actually teaches or leads — community, course, a class they teach or a club they lead. It is not a fixed list filtered on screen afterwards.",
          },
          {
            titulo: "A moderation flow that actually moderates",
            texto:
              "A class suggested by a student enters an approval queue and only goes live once a teacher accepts it. The screen is spare, but it is the whole flow: suggest, review, approve or reject.",
          },
          {
            titulo: "Anonymous posts, with the author in the database",
            texto:
              "Anonymous posts live alongside identified ones in the same feed. It is a product decision with a technical consequence: the author still exists and is still accountable, they just do not show.",
          },
        ],
        numeros: [
          { valor: "44", rotulo: "REST endpoints" },
          { valor: "44", rotulo: "use cases" },
          { valor: "13", rotulo: "JPA entities" },
        ],
        stack: ["Java 21", "Spring Boot 4", "Hexagonal", "PostgreSQL", "React 18", "Vite"],
        prints: [
          {
            imagem: ifconectaTimeline,
            alt: "The IFConecta feed with campus posts, votes, comments and one anonymous post among the identified ones.",
            legenda:
              "The campus feed. An anonymous post among the identified ones, with voting and comments in the same place.",
          },
          {
            imagem: ifconectaComunicado,
            alt: "IFConecta announcement modal, with the reach selector and the class field that only appears once a reach is chosen.",
            legenda:
              "The announcement from the inside: the Class field only appears after the reach, and it is populated with what that teacher actually teaches.",
          },
          {
            imagem: ifconectaClube,
            alt: "Detail of a club in IFConecta, with Posts, Members, Requests and About tabs, and a Leader badge in the header.",
            legenda:
              "A club from the inside. The Requests tab and the “Leader” badge only exist for whoever leads that club.",
          },
          {
            imagem: ifconectaModeracao,
            alt: "Approval screen for a class suggested by a student, with approve or reject options for the teacher.",
            legenda:
              "The moderation queue: the class a student suggested waits for a teacher before it exists for the rest of the campus.",
          },
        ],
        repo: "https://github.com/R1ck-dev/IFConecta",
        demo: {
          situacao: "local",
          motivo: "Runs locally via Docker Compose. Not deployed yet.",
        },
      },
    ],
  },

  stack: {
    intro:
      "What I use day to day, grouped by layer. The order inside each group reflects real weight in practice, not the order on a résumé.",
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
          "REST APIs",
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
        grupo: "Architecture",
        itens: [
          "Hexagonal Architecture",
          "Clean Architecture",
          "DDD",
          "Design Patterns",
          "Object-Oriented Design",
        ],
      },
      { grupo: "Data", itens: ["PostgreSQL", "MySQL", "Flyway"] },
      {
        grupo: "DevOps",
        itens: ["Docker", "Docker Compose", "GitHub Actions", "Git", "Render", "Netlify", "Vercel"],
      },
      {
        grupo: "Frontend",
        itens: ["React", "TypeScript", "JavaScript (ES6+)", "Vite", "HTML5", "CSS3"],
      },
      { grupo: "Testing", itens: ["JUnit 5", "Mockito"] },
      { grupo: "Embedded", itens: ["C", "Schematic reading", "Bench debugging"] },
    ],
    idiomas: [
      { idioma: "Portuguese", nivel: "native" },
      { idioma: "English", nivel: "intermediate" },
    ],
  },

  trajetoria: {
    rotuloExperiencia: "Experience",
    rotuloFormacao: "Education",
    experiencia: [
      {
        periodo: "Aug 2026 — present",
        cargo: "Embedded Systems Intern",
        organizacao: "Sanesoluti",
        atual: true,
        descricao:
          "Following embedded device projects: reading schematics, analysing circuits and tracking down faults on the bench.",
        tags: ["Embedded", "C", "Electronics", "Hardware debugging"],
      },
      {
        periodo: "Jun 2026 — Aug 2026",
        cargo: "Software Development Intern",
        organizacao:
          "SVSA — Social Assistance Surveillance System (IFSP Salto / social services department of Salto-SP)",
        descricao:
          "A web system in production since 2019, used by the social services department of Salto-SP and recognised by Brazil's Ministry of Citizenship. Real legacy: 500+ Java classes, 170 screens, 97 tables.",
        pontos: [
          "Eleven tickets in three months: I started on search features and finished leading two production bug investigations.",
          "Implemented business rules and improvements on the search screens and on the reusable person-picker components (JSF managed beans and XHTML pages).",
          "Shipped a production hotfix for a bug that took down the user edit screen for every profile.",
          "Peer-reviewed a 32-file pull request (+151/−78) and flagged three blockers before the merge.",
        ],
        tags: ["Java 17", "JSF/Mojarra", "PrimeFaces", "CDI", "Hibernate", "MySQL", "Git Flow"],
      },
      {
        periodo: "Mar 2022 — Dec 2022",
        cargo: "Administrative and IT Support Intern",
        organizacao: "Barueri Electoral Registry Office",
        descricao:
          "Public-facing support and automation of internal spreadsheet controls, cutting lookup time and errors in the team's reports.",
        tags: ["Support", "Excel", "Processes"],
      },
    ],
    formacao: [
      {
        periodo: "2024 — present",
        cargo: "BSc in Computer Science",
        organizacao: "Federal Institute of São Paulo (IFSP)",
        atual: true,
        descricao:
          "Sixth semester. Undergraduate research fellow at PIBIFSP since June 2026, with CodeInsights as the object of the research.",
      },
      {
        periodo: "2021 — 2022",
        cargo: "Technical Diploma in IT Maintenance and Support",
        organizacao: "Instituto Tecnológico de Barueri",
        descricao: "Completed.",
      },
    ],
  },

  contato: {
    chamada: "If you are hiring for Java backend, I would like to talk.",
    texto:
      "I answer email the same day. The full résumé is one click away as a PDF — written in Portuguese — and the code for all four projects is open on GitHub, including the ones not yet deployed.",
    canais: [
      { rotulo: "Email", valor: "henriquemarangoni.inacio1108@gmail.com", tipo: "email" },
      { rotulo: "LinkedIn", valor: "linkedin.com/in/henrique-marangoni-484845239", tipo: "linkedin" },
      { rotulo: "GitHub", valor: "github.com/R1ck-dev", tipo: "github" },
      { rotulo: "Résumé", valor: "download PDF — in Portuguese", tipo: "curriculo" },
    ],
    creditos: "Next.js and Tailwind CSS",
  },

  secoes: [
    { id: "sobre", numero: "01", titulo: "About" },
    { id: "projetos", numero: "02", titulo: "Projects" },
    { id: "stack", numero: "03", titulo: "Stack" },
    { id: "trajetoria", numero: "04", titulo: "Background" },
    { id: "contato", numero: "05", titulo: "Contact" },
  ],
};

export default en;
