# Handoff para o Claude Design — WebPortfolio

Documento de passagem: tudo o que o Claude Design precisa saber para redesenhar este portfólio **do
zero**, e tudo o que precisa voltar de lá para virar código.

- **Data:** 24/08/2026
- **Estado do código:** V1 implementado e funcionando (commit `7cf7b17`), Next.js 16 + Tailwind v4
- **O que se espera do Claude Design:** uma direção visual nova, sem compromisso com a atual
- **O prompt pronto para colar está na [seção 7](#7-prompt-para-colar-no-claude-design)**

---

## 1. O produto em uma frase

Um portfólio web de página única que acompanha o currículo de Henrique Marangoni em processos
seletivos — para que quem recebe o PDF consiga, em três minutos, entender quem ele é, o que já
construiu e como falar com ele.

**Não é** um blog, uma agência, um SaaS ou um cartão de visitas animado. É um argumento profissional.

### Quem lê

| Perfil | O que procura | Quanto tempo dá |
|---|---|---|
| **Recrutador / RH** | Bate com a vaga? É júnior mesmo? Dá para contatar? | ~40 segundos, provavelmente no celular |
| **Tech lead / dev sênior** | As decisões de arquitetura se sustentam? O código está aberto? | 3–5 minutos, no desktop, vai clicar no GitHub |

O design precisa servir aos dois: escaneável para o primeiro, com profundidade disponível para o
segundo — sem obrigar o primeiro a atravessar a profundidade.

### Decisões já tomadas (não reabrir)

| Decisão | Valor | Por quê |
|---|---|---|
| Posicionamento | **Desenvolvedor Backend Java · Júnior** | É o alvo das candidaturas. O emprego atual é em embarcados, mas isso não é o foco. |
| Idioma | **PT-BR apenas** | Mercado brasileiro. Existe currículo em inglês, mas não é o alvo agora. |
| Tom | **Equilibrado** | Base sóbria e legível, com um ou dois momentos de destaque. Nem corporativo morno, nem festival de animação. |
| Formato | **Página única** | O conteúdo cabe. Navegação por âncoras. |
| Seções | Hero · Sobre · Projetos · Stack · Trajetória · Contato | Nessa ordem. |

---

## 2. Conteúdo real (fonte da verdade)

Todo o texto abaixo é verdadeiro e já revisado. **Nada aqui pode ser inventado, arredondado ou
"melhorado" com número que não existe.** Se faltar conteúdo para um layout, o layout muda — o
conteúdo não.

No código, isso tudo vive em um único arquivo: [`src/content/portfolio.ts`](../src/content/portfolio.ts).

### 2.1 Identidade e contato

```
Nome            Henrique de Almeida Marangoni Inacio  ("Henrique Marangoni" no hero)
Cargo           Desenvolvedor Backend Java · Júnior
Local           São Paulo, Brasil
Formação        Bacharelado em Ciência da Computação · IFSP
E-mail          henriquemarangoni.inacio1108@gmail.com
LinkedIn        linkedin.com/in/henriquemarangoni
GitHub          github.com/R1ck-dev
Currículo       /curriculo.pdf  (botão de download)
```

> **Telefone fica de fora do site**, por decisão consciente (spam). Ele existe no currículo em PDF.

**Frase de posicionamento (hero):**

> Construo APIs REST em Spring Boot que aguentam gente de verdade do outro lado — com arquitetura
> hexagonal, autenticação stateless e deploy em produção.

### 2.2 Sobre (3 parágrafos)

1. Sou desenvolvedor backend Java. O que me interessa não é a tecnologia pela tecnologia: é o que
   acontece quando um sistema trava e alguém do outro lado não consegue trabalhar naquele dia. Foi
   assim que aprendi a depurar — começando pela pessoa, não pelo stack trace.
2. No dia a dia isso vira Spring Boot com Spring Security e JWT, JPA/Hibernate sobre PostgreSQL e
   MySQL, schema versionado com Flyway e uma separação séria entre domínio e infraestrutura:
   arquitetura hexagonal, Clean Architecture e DDD. Também levo o produto até o fim — React com
   TypeScript no front, Docker para empacotar e deploy em nuvem.
3. Passei os últimos meses dentro de um sistema público em produção, mantido desde 2019 e usado por
   assistentes sociais de uma prefeitura inteira. Legado de verdade: 500+ classes e 97 tabelas. Em
   paralelo, conduzo uma Iniciação Científica no IFSP investigando o impacto da IA generativa na
   autonomia de quem está aprendendo a programar.

**Três números de apoio:** `11` cards entregues em 3 meses num legado em produção · `3` aplicações
full stack construídas da concepção ao deploy · `1` Iniciação Científica em andamento (PIBIFSP).

### 2.3 Projetos (três, nesta ordem)

Cada projeto tem a mesma anatomia: **problema → o que construí → números → stack → links**.

#### IFConecta — Plataforma de comunicação acadêmica
- **Quando / contexto:** abr/2026 — atual · Projeto acadêmico full stack · IFSP
- **Problema:** Comunicado de instituto se perde entre mural, grupo de WhatsApp e e-mail — e ninguém
  sabe ao certo quem pode avisar o quê, para quem.
- **O que construí:**
  - Arquitetura hexagonal (ports & adapters) organizada por feature, com domínio puro separado das
    entidades JPA por mappers manuais, em 5 módulos.
  - Autenticação stateless com JWT e Spring Security (filtro customizado, BCrypt, sessão STATELESS) e
    autorização por papel: admin, institucional, professor e aluno.
  - Uma matriz de permissão de negócio que decide quem pode enviar cada tipo de comunicado, validada
    no domínio e não no controller.
  - Cadastro com ativação por e-mail, convite de professores e redefinição de senha com tokens de
    verificação e Spring Mail.
  - Dockerfile multi-stage (Maven + JRE 21) e Docker Compose com PostgreSQL e MailHog; SPA em
    React 18 + Vite consumindo a API via Axios.
- **Números:** 44 endpoints REST · 44 use cases · 9 migrations Flyway · 4 papéis de acesso
- **Stack:** Java 21, Spring Boot 4, Spring Security, JWT, PostgreSQL, Flyway, Docker Compose,
  React 18, Vite
- **Links:** Código no GitHub → `https://github.com/R1ck-dev/ifconecta` *(a confirmar)*

#### BloodCrown — Mesa de RPG colaborativa em tempo real
- **Quando / contexto:** dez/2025 — jan/2026 · Projeto pessoal full stack · **em produção**
- **Problema:** Ficha de RPG em papel não acompanha uma mesa que joga junto: cada mudança precisa
  aparecer para todo mundo, na hora.
- **O que construí:**
  - Backend Java 21 / Spring Boot 4 com arquitetura hexagonal e Clean Architecture; frontend React 19
    + TypeScript com tabuleiro interativo em canvas (Konva).
  - Mesa em tempo real com WebSocket + STOMP, reaproveitando o token JWT no handshake e autorizando
    assinatura e envio por mesa.
  - Spring Security com JWT, Flyway e cache de leitura com Caffeine sobre MySQL 8.
  - Docker multi-stage e Compose (MySQL + backend + frontend); API no Render, front no Netlify,
    keepalive por GitHub Actions.
- **Números:** 75 endpoints REST · 14 entidades JPA · tempo real (WebSocket + STOMP)
- **Stack:** Java 21, Spring Boot 4, WebSocket/STOMP, MySQL 8, Caffeine, React 19, TypeScript, Konva,
  Render, Netlify
- **Links:** **Ver no ar → https://bloodcrown.netlify.app** (link de destaque) · Código no GitHub →
  `https://github.com/R1ck-dev/BloodCrown-CharacterSheet` *(a confirmar)*

> Este é o único projeto com demo pública. O design deve dar peso visual a esse link — é a prova mais
> forte da página.

#### CodeInsights — Métricas de aprendizado em programação
- **Quando / contexto:** jun/2026 — atual · Iniciação Científica PIBIFSP · IFSP
- **Problema:** A IA generativa entrou na sala de aula antes de existir uma forma de medir o que ela
  faz com a autonomia de quem está aprendendo a programar.
- **O que construí:**
  - Plataforma que é, ao mesmo tempo, ferramenta de portfólio de código para o aluno e instrumento
    empírico da pesquisa.
  - Backend Spring Boot 4 (Java 21) com hexagonal e Clean Architecture: domínio puro isolado, casos de
    uso e mapeamento manual entre domínio e JPA.
  - Contextos de identidade (usuários, perfis, ativação por e-mail) e de conhecimento (desafios,
    resoluções, snippets categorizados), com o Índice de Autonomia IA validado como invariante de
    domínio.
  - Módulo de métricas modular: estimativa de Big O e de complexidade de espaço via AST, e
    complexidade ciclomática de McCabe.
  - Metodologia científica com dados anonimizados e submissão ao Comitê de Ética do IFSP.
- **Números:** escala 1–5 do Índice de Autonomia IA · 3 motores de métricas · análise estática (AST)
- **Stack:** Java 21, Spring Boot 4, Clean Architecture, PostgreSQL, Flyway, OpenAPI/Swagger, JWT,
  Python
- **Links:** Código no GitHub → `https://github.com/R1ck-dev/CodeInsights` *(a confirmar)*

### 2.4 Stack (agrupada por camada)

| Grupo | Itens |
|---|---|
| **Backend** | Java 21, Spring Boot, Spring Security, Spring Mail, JWT, BCrypt, APIs REST, OpenAPI/Swagger, WebSocket/STOMP, JPA, Hibernate, Bean Validation, JSF, PrimeFaces, CDI, Maven, Tomcat, Caffeine, Python |
| **Arquitetura** | Arquitetura Hexagonal, Clean Architecture, DDD, Design Patterns, Orientação a Objetos |
| **Dados** | PostgreSQL, MySQL, Flyway |
| **DevOps** | Docker, Docker Compose, GitHub Actions, Git, Render, Netlify, Vercel |
| **Frontend** | React, TypeScript, JavaScript (ES6+), Vite, HTML5, CSS3 |
| **Testes** | JUnit 5, Mockito |

**Idiomas:** Português — nativo · Inglês — intermediário

> O grupo **Backend** é longo de propósito (19 itens) e o de **Testes** tem 2. Qualquer layout de
> grade precisa aguentar essa assimetria sem ficar torto.

### 2.5 Trajetória

**Experiência**

1. **ago/2026 — atual · em curso** — Estagiário em Sistemas Embarcados, **Sanesoluti**
   Acompanhamento de projetos de dispositivos embarcados: leitura de esquemáticos, análise de
   circuitos e detecção de falhas em bancada.
   *Tags:* Embarcados, C, Eletrônica, Depuração de hardware
2. **mai/2026 — ago/2026** — Estagiário de Desenvolvimento de Software, **SVSA — Sistema de
   Vigilância SocioAssistencial (IFSP Salto / SASC — Prefeitura de Salto-SP)**
   Sistema web em produção desde 2019, usado pela Secretaria de Assistência Social de Salto-SP e
   reconhecido pelo Ministério da Cidadania. Legado de verdade: 500+ classes Java, 170 telas, 97
   tabelas.
   - Onze cards em três meses: comecei em features de busca e terminei liderando duas investigações
     de bug em produção.
   - Implementei regras de negócio e melhorias nas telas de pesquisa e nos componentes reutilizáveis
     de seleção de pessoa (managed beans JSF e páginas XHTML).
   - Resolvi um hotfix de produção que derrubava a tela de edição de usuário para qualquer perfil.
   - Fiz peer review de um PR de 32 arquivos (+151/−78) e apontei três bloqueadores antes do merge.
   *Tags:* Java 17, JSF/Mojarra, PrimeFaces, CDI, Hibernate, MySQL, Git Flow
3. **mar/2022 — dez/2022** — Estagiário de Suporte Administrativo e Tecnológico, **Cartório Eleitoral
   de Barueri**
   Atendimento ao público e automação de controles internos em planilhas, reduzindo o tempo de
   consulta e o erro nos relatórios da equipe.
   *Tags:* Atendimento, Excel, Processos

**Formação**

1. **2024 — atual · em curso** — Bacharelado em Ciência da Computação, **Instituto Federal de São
   Paulo (IFSP)** — em curso, com Iniciação Científica ativa pelo PIBIFSP desde jun/2026.
2. **2021 — 2022** — Técnico em Manutenção e Suporte em Informática, **Instituto Tecnológico de
   Barueri** — formação técnica concluída.

> O item mais recente é de **embarcados**, enquanto o posicionamento é **backend**. Não esconder e não
> destacar: é a cronologia honesta. O peso visual da seção fica no SVSA, que é a experiência de
> software.

### 2.6 Contato

Chamada: **"Se você está contratando para backend Java, eu quero conversar."**
Apoio: "Respondo e-mail no mesmo dia. Se preferir, o currículo completo em PDF está a um clique — e
todo o código dos projetos está aberto no GitHub."

Quatro canais, com peso igual: E-mail · LinkedIn · GitHub · Currículo (baixar em PDF).

---

## 3. Restrições que o design precisa respeitar

**De conteúdo**
1. Nenhum número, cliente, prêmio ou depoimento inventado. Não há logos de empresas para exibir, não
   há "trusted by", não há métricas de tráfego.
2. Não existe foto do Henrique aprovada para o site. Se o layout pedir retrato, ele precisa funcionar
   **sem** — ou o handoff de volta precisa dizer explicitamente que uma foto passou a ser necessária.
3. Não há screenshots dos projetos disponíveis hoje. Um layout que dependa de mockup de tela precisa
   sinalizar isso como dependência nova.
4. Texto em PT-BR, com acentuação. Palavras longas e compostas ("SocioAssistencial",
   "henriquemarangoni.inacio1108@gmail.com") não podem estourar container.

**De comportamento**
5. Uma página, navegação por âncoras, sem rota nova — **exceto** a página de detalhe de projeto, que é
   escopo novo em avaliação (ver seção 5).
6. Sem formulário de contato: não há backend. Contato é `mailto:`, link externo e download de PDF.
7. Nenhum recurso que dependa de servidor: sem busca, sem CMS, sem comentários, sem analytics de
   terceiros.

**De qualidade**
8. Acessibilidade real: contraste AA, foco visível, ordem de leitura correta, alvos de toque
   confortáveis, `prefers-reduced-motion` respeitado.
9. Performance: o site é estático e precisa continuar leve. No máximo duas famílias tipográficas
   (mais uma monoespaçada, se a direção pedir), sem imagem pesada, sem biblioteca 3D.
10. O currículo em PDF e o link do BloodCrown no ar são as duas ações mais valiosas da página.
    Precisam estar alcançáveis sem rolagem longa.

---

## 4. O que existe hoje (contexto, não modelo)

A V1 implementada usa uma direção chamada **"papel & tinta"**: fundo bege quente (`#f3efe6`), tinta
quase-preta (`#171512`), acento terracota (`#a8401d`), display em **Instrument Serif**, texto em
**IBM Plex Sans**, rótulos técnicos em **IBM Plex Mono**. Grid assimétrico com um rail de rótulos
numerados à esquerda (`01 Sobre`, `02 Projetos`…), textura de grão sobre a página, hexágonos
concêntricos no hero como referência à arquitetura hexagonal, e revelação suave no scroll.

**Isso é o ponto de partida a ser superado, não a restrição.** O Claude Design tem liberdade total de
direção visual — inclusive para propor algo que contrarie tudo acima. O que não muda é o conteúdo da
seção 2 e as restrições da seção 3.

O que vale a pena manter como *ideia*, se a nova direção comportar:
- Um mesmo esqueleto repetido nos três projetos (problema → construção → números → stack → links), que
  torna a comparação entre eles imediata.
- Os números tratados como elemento gráfico, não como texto corrido.
- A seção de contato como bloco de contraste, fechando a página.

---

## 5. Telas pedidas

| # | Artboard | Observação |
|---|---|---|
| 1 | **Home — desktop** (≥1280px) | A página inteira, todas as seções, estado de topo |
| 2 | **Home — mobile** (390px) | Mesma página; decidir empilhamento, navegação e o que colapsa |
| 3 | **Detalhe de projeto — desktop** | **Escopo novo.** Estudo de caso de um projeto (usar o IFConecta) com mais profundidade que o card |
| 4 | **Home — dark mode** (desktop) | **Escopo novo.** Hoje o site é claro por decisão; esta variante avalia se vale ter os dois |

> As telas 3 e 4 não existem no código. Se aprovadas, viram trabalho novo: a 3 exige uma rota
> `/projetos/[slug]` no Next e conteúdo mais longo por projeto (que ainda precisa ser escrito); a 4
> exige uma segunda paleta e um seletor de tema.

---

## 6. Como o resultado volta para o código

O que precisa vir do Claude Design para a implementação ser fiel:

1. **Tokens de cor** — hex ou oklch, com papel semântico (fundo, superfície elevada, texto primário,
   texto secundário, borda, acento, e os equivalentes do dark). Vão para o bloco `@theme` de
   [`src/app/globals.css`](../src/app/globals.css).
2. **Tipografia** — famílias (disponíveis no Google Fonts, de preferência), pesos usados, e a escala
   de tamanhos por papel (display, título de seção, corpo, rótulo). Vão para `next/font/google` em
   [`src/app/layout.tsx`](../src/app/layout.tsx) e para o `@theme`.
3. **Escala de espaçamento e larguras** — largura máxima do conteúdo, respiro entre seções, gutters.
4. **Especificação dos componentes repetidos** — card de projeto, item de timeline, etiqueta de
   tecnologia, bloco de número, botão primário/secundário: estados normal, hover e foco.
5. **Regras de movimento** — o que anima, com que duração e em que gatilho; e o que acontece com
   `prefers-reduced-motion`.
6. **Decisões de mobile** — o que empilha, o que vira scroll horizontal, o que some.

Com isso, a reimplementação mexe em: `globals.css` (tokens), `layout.tsx` (fontes e metadados) e os
componentes em `src/components/`. **O conteúdo em `src/content/portfolio.ts` não muda** — é o
contrato entre design e código.

---

## 7. Prompt para colar no Claude Design

Copie o bloco inteiro abaixo.

---

````text
Preciso do design de um portfólio web pessoal. Você tem liberdade total de direção visual — quero uma
proposta autoral, não uma variação do que já existe. O que é fixo é o conteúdo e as restrições.

## Quem é e para que serve

Henrique Marangoni, desenvolvedor backend Java júnior, brasileiro. O site é uma página única em
português que acompanha o currículo dele em processos seletivos. Não é blog, não é agência, não é
SaaS: é um argumento profissional.

Dois públicos, ao mesmo tempo:
- Recrutador/RH: ~40 segundos, provavelmente no celular. Precisa entender o perfil, ver que é júnior
  e achar o contato.
- Tech lead: 3–5 minutos no desktop. Vai ler as decisões de arquitetura e clicar no GitHub.

O design tem que ser escaneável para o primeiro sem esconder a profundidade do segundo.

Tom: equilibrado — base sóbria e legível, com um ou dois momentos de destaque. Nem corporativo morno,
nem festival de animação. O que precisa ficar na memória é a impressão de rigor: alguém que constrói
sistemas que funcionam.

## Telas que preciso

1. Home desktop (≥1280px) — a página inteira
2. Home mobile (390px) — mesma página
3. Detalhe de projeto, desktop — estudo de caso do IFConecta, mais profundo que o card da home
4. Home desktop em dark mode — para avaliar se vale ter os dois temas

## Estrutura da home

Hero · Sobre · Projetos · Stack · Trajetória · Contato — nessa ordem, com navegação por âncoras.

## Conteúdo (é real e não pode ser alterado nem inventado)

HERO
Henrique Marangoni — Desenvolvedor Backend Java · Júnior
"Construo APIs REST em Spring Boot que aguentam gente de verdade do outro lado — com arquitetura
hexagonal, autenticação stateless e deploy em produção."
Ações: ver projetos · entrar em contato · baixar currículo em PDF
Links: github.com/R1ck-dev · linkedin.com/in/henriquemarangoni
Bacharelado em Ciência da Computação · IFSP · São Paulo, Brasil

SOBRE (3 parágrafos)
1. "Sou desenvolvedor backend Java. O que me interessa não é a tecnologia pela tecnologia: é o que
acontece quando um sistema trava e alguém do outro lado não consegue trabalhar naquele dia. Foi assim
que aprendi a depurar — começando pela pessoa, não pelo stack trace."
2. "No dia a dia isso vira Spring Boot com Spring Security e JWT, JPA/Hibernate sobre PostgreSQL e
MySQL, schema versionado com Flyway e uma separação séria entre domínio e infraestrutura: arquitetura
hexagonal, Clean Architecture e DDD. Também levo o produto até o fim — React com TypeScript no front,
Docker para empacotar e deploy em nuvem."
3. "Passei os últimos meses dentro de um sistema público em produção, mantido desde 2019 e usado por
assistentes sociais de uma prefeitura inteira. Legado de verdade: 500+ classes e 97 tabelas. Em
paralelo, conduzo uma Iniciação Científica no IFSP investigando o impacto da IA generativa na
autonomia de quem está aprendendo a programar."
Três números: 11 cards entregues em 3 meses num legado em produção · 3 aplicações full stack da
concepção ao deploy · 1 Iniciação Científica em andamento (PIBIFSP)

PROJETOS — três, com a mesma anatomia: problema → o que construí → números → stack → links

[1] IFConecta — Plataforma de comunicação acadêmica · abr/2026–atual · projeto acadêmico IFSP
Problema: "Comunicado de instituto se perde entre mural, grupo de WhatsApp e e-mail — e ninguém sabe
ao certo quem pode avisar o quê, para quem."
Construí: arquitetura hexagonal por feature com domínio puro separado do JPA, em 5 módulos; JWT +
Spring Security com 4 papéis (admin, institucional, professor, aluno); matriz de permissão de negócio
validada no domínio; cadastro com ativação por e-mail, convite de professores e reset de senha;
Docker multi-stage + Compose com PostgreSQL e MailHog; SPA React 18 + Vite.
Números: 44 endpoints REST · 44 use cases · 9 migrations Flyway · 4 papéis de acesso
Stack: Java 21, Spring Boot 4, Spring Security, JWT, PostgreSQL, Flyway, Docker Compose, React 18, Vite
Link: código no GitHub

[2] BloodCrown — Mesa de RPG colaborativa em tempo real · dez/2025–jan/2026 · pessoal · EM PRODUÇÃO
Problema: "Ficha de RPG em papel não acompanha uma mesa que joga junto: cada mudança precisa aparecer
para todo mundo, na hora."
Construí: Java 21 / Spring Boot 4 hexagonal + React 19 e TypeScript com tabuleiro em canvas (Konva);
tempo real com WebSocket + STOMP reaproveitando o JWT no handshake; Flyway e cache Caffeine sobre
MySQL 8; Docker Compose, API no Render, front no Netlify, keepalive por GitHub Actions.
Números: 75 endpoints REST · 14 entidades JPA · tempo real (WebSocket + STOMP)
Stack: Java 21, Spring Boot 4, WebSocket/STOMP, MySQL 8, Caffeine, React 19, TypeScript, Konva,
Render, Netlify
Links: VER NO AR (bloodcrown.netlify.app) — este é o link mais valioso da página inteira, é a única
demo pública; e código no GitHub

[3] CodeInsights — Métricas de aprendizado em programação · jun/2026–atual · Iniciação Científica IFSP
Problema: "A IA generativa entrou na sala de aula antes de existir uma forma de medir o que ela faz
com a autonomia de quem está aprendendo a programar."
Construí: plataforma que é ferramenta para o aluno e instrumento empírico da pesquisa; Spring Boot 4
hexagonal com domínio puro; contextos de identidade e de conhecimento, com Índice de Autonomia IA
como invariante de domínio; módulo de métricas com estimativa de Big O via AST e complexidade
ciclomática de McCabe; dados anonimizados e submissão ao Comitê de Ética do IFSP.
Números: escala 1–5 do Índice de Autonomia IA · 3 motores de métricas · análise estática (AST)
Stack: Java 21, Spring Boot 4, Clean Architecture, PostgreSQL, Flyway, OpenAPI/Swagger, JWT, Python
Link: código no GitHub

STACK — agrupada por camada, com tamanhos bem desiguais (o layout precisa aguentar isso)
Backend (19 itens): Java 21, Spring Boot, Spring Security, Spring Mail, JWT, BCrypt, APIs REST,
OpenAPI/Swagger, WebSocket/STOMP, JPA, Hibernate, Bean Validation, JSF, PrimeFaces, CDI, Maven,
Tomcat, Caffeine, Python
Arquitetura: Arquitetura Hexagonal, Clean Architecture, DDD, Design Patterns, Orientação a Objetos
Dados: PostgreSQL, MySQL, Flyway
DevOps: Docker, Docker Compose, GitHub Actions, Git, Render, Netlify, Vercel
Frontend: React, TypeScript, JavaScript (ES6+), Vite, HTML5, CSS3
Testes: JUnit 5, Mockito
Idiomas: Português nativo · Inglês intermediário

TRAJETÓRIA
Experiência:
- ago/2026–atual (em curso) · Estagiário em Sistemas Embarcados · Sanesoluti — acompanhamento de
  projetos de dispositivos embarcados: leitura de esquemáticos, análise de circuitos e detecção de
  falhas em bancada. Tags: Embarcados, C, Eletrônica, Depuração de hardware
- mai/2026–ago/2026 · Estagiário de Desenvolvimento de Software · SVSA — Sistema de Vigilância
  SocioAssistencial (IFSP Salto / SASC — Prefeitura de Salto-SP). Sistema web em produção desde 2019,
  usado pela Secretaria de Assistência Social de Salto-SP e reconhecido pelo Ministério da Cidadania:
  500+ classes Java, 170 telas, 97 tabelas. Onze cards em três meses, começando em features de busca
  e terminando em duas investigações de bug em produção; hotfix que derrubava a edição de usuário para
  qualquer perfil; peer review de um PR de 32 arquivos (+151/−78) com três bloqueadores apontados.
  Tags: Java 17, JSF/Mojarra, PrimeFaces, CDI, Hibernate, MySQL, Git Flow
- mar/2022–dez/2022 · Estagiário de Suporte Administrativo e Tecnológico · Cartório Eleitoral de
  Barueri — atendimento ao público e automação de controles em planilhas. Tags: Atendimento, Excel,
  Processos
Formação:
- 2024–atual (em curso) · Bacharelado em Ciência da Computação · IFSP
- 2021–2022 · Técnico em Manutenção e Suporte em Informática · Instituto Tecnológico de Barueri

Observação: o emprego mais recente é em embarcados, mas o posicionamento do site é backend. Não
esconder e não destacar — é a cronologia honesta. O peso da seção fica no SVSA.

CONTATO
Chamada: "Se você está contratando para backend Java, eu quero conversar."
Apoio: "Respondo e-mail no mesmo dia. Se preferir, o currículo completo em PDF está a um clique — e
todo o código dos projetos está aberto no GitHub."
Quatro canais com peso igual: e-mail (henriquemarangoni.inacio1108@gmail.com), LinkedIn
(linkedin.com/in/henriquemarangoni), GitHub (github.com/R1ck-dev), currículo em PDF (download).

## Restrições

- Não invente nada: nenhum número, cliente, logo, prêmio, depoimento ou métrica além do que está
  acima. Não há "trusted by", não há clientes.
- Não há foto do Henrique disponível. O layout precisa funcionar sem retrato. Se a sua direção exigir
  uma foto, diga isso explicitamente em vez de desenhar um placeholder.
- Não há screenshots dos projetos. Se o layout depender de mockup de tela, sinalize como dependência.
- Sem formulário de contato: não há backend. Contato é mailto, link externo e download de PDF.
- Texto em português com acentos; palavras longas ("SocioAssistencial", o e-mail completo) não podem
  estourar container.
- Acessibilidade: contraste AA, foco visível, ordem de leitura correta, alvos de toque confortáveis,
  animação respeitando prefers-reduced-motion.
- Vai ser implementado em Next.js com Tailwind CSS v4, estático, e precisa continuar leve: no máximo
  duas famílias tipográficas (mais uma monoespaçada, se fizer sentido), sem imagem pesada, sem 3D.
- As duas ações mais valiosas são o download do currículo e o link do BloodCrown no ar; precisam ser
  alcançáveis cedo.

## O que quero de volta, junto das telas

- Tokens de cor com papel semântico (fundo, superfície, texto primário, texto secundário, borda,
  acento) para o tema claro e para o escuro.
- Famílias tipográficas (de preferência disponíveis no Google Fonts), pesos e a escala de tamanhos
  por papel: display, título de seção, corpo, rótulo.
- Escala de espaçamento, largura máxima do conteúdo e respiro entre seções.
- Especificação dos componentes repetidos — card de projeto, item de timeline, etiqueta de
  tecnologia, bloco de número, botão primário e secundário — nos estados normal, hover e foco.
- Regras de movimento: o que anima, quando e por quanto tempo.
- As decisões de mobile: o que empilha, o que colapsa, como fica a navegação.

Comece me propondo a direção visual em poucas linhas (conceito, paleta, tipografia e o "momento
memorável" da página) antes de desenhar as telas.
````

---

## 8. Pendências que afetam o design

| Pendência | Impacto |
|---|---|
| `public/curriculo.pdf` é o PDF antigo do `CurriculoVsCode/` | O botão de download entrega conteúdo desatualizado. Gerar novo com Ctrl+P a partir de `curriculo.html`. |
| URLs dos repositórios não confirmadas (`ifconecta`, `BloodCrown-CharacterSheet`, `CodeInsights`) | Se algum for privado, o card perde o link de código — e o layout precisa aguentar um card sem link. |
| Currículo ainda diz que o SVSA está em curso | Divergência entre o site e o PDF que o recrutador baixa. |
| Mês de início do SVSA: mai/2026 (currículo) × 06/2026 (vault) | Um dos dois está errado; o site usa mai/2026. |
| Não há foto nem screenshots | Limita as direções visuais possíveis (ver seção 3). |

## 9. Referência rápida do repositório

```
src/content/portfolio.ts     todo o conteúdo (contrato entre design e código)
src/app/globals.css          tokens de cor, fontes, textura, animações (@theme do Tailwind v4)
src/app/layout.tsx           fontes do Google, metadados e Open Graph
src/app/page.tsx             ordem das seções
src/components/              Nav, Hero, Sobre, Projetos, Stack, Trajetoria, Contato, Reveal, ui
public/curriculo.pdf         currículo oferecido no site
```

Comandos: `npm run dev` · `npm run build` · `npm run start` · `npm run lint`
