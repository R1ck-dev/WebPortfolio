# Brief do WebPortfolio — conteúdo, projetos e prints

Companheiro de [`referencias-portfolio.md`](referencias-portfolio.md), que tem o catálogo de referências visuais e os três arquétipos de layout. **Aquele arquivo é o "como parecer"; este é o "o que dizer".** Mande os dois juntos.

Levantado em **30 de agosto de 2026**. Todos os prints foram capturados nessa data, dos ambientes locais, com seed aplicado.

---

## Como usar este arquivo

1. Anexe **este arquivo** e o `referencias-portfolio.md`.
2. Anexe os prints marcados com ⭐ na seção **Prints** (são 10 imagens; a lista completa tem 56).
3. Cole o bloco **BRIEF** do fim como mensagem.

Os prints ficam em `docs/design/prints/`, uma pasta por projeto, cada uma com um `00-indice.md` explicando print a print. (A cópia original continua no Desktop, em `OneDrive/Desktop/Prints-Portfolio/`.)

> ⚠️ **Antes de anexar qualquer print:** todos têm um pequeno ícone circular no canto inferior direito. Não é da aplicação — é uma extensão do navegador injetando na página (aparece igual nos quatro projetos, que são stacks diferentes). Recorte o canto ou recapture em janela anônima.

---

## Quem eu sou (para o texto do site)

Estudante de Ciência da Computação no IFSP, 6º semestre em 2026.2, formatura prevista para **dez/2027** — *dado a confirmar no SUAP; o LinkedIn hoje diz mar/2028 e a diferença muda a elegibilidade a programas de trainee.*

Estagiário em **sistemas embarcados** na Sanesoluti desde 24/08/2026. Bolsista de **Iniciação Científica (PIBIFSP/IFSP)**, onde o CodeInsights é o objeto da pesquisa.

Alvo: vaga de desenvolvedor em big tech brasileira (Itaú, iFood, Nubank, Mercado Livre), remoto fora do horário matutino ou presencial na região de Campinas/Indaiatuba. Base em Salto/SP.

**O que eu construo, em uma frase (matéria-prima, não texto final):** sistemas de backend onde a regra de negócio é calculada e auditável — não digitada.

---

## Os quatro projetos

Ordem de aparição no site. O primeiro é o carro-chefe e ganha estudo de caso longo; os outros três ficam em ficha curta.

Base comum aos quatro: **Java 21 + Spring Boot 4 + React 19 + TypeScript**, arquitetura **hexagonal**. Isso é uma vantagem para contar (consistência de escolha, não sorte) e um risco visual (quatro cards com as mesmas tags). O design precisa diferenciar pelo **problema**, não pela stack.

---

### 1 · CodeInsights — carro-chefe

**Iniciação Científica (PIBIFSP/IFSP).** Java 21 · Spring Boot 4 · React 19 · TypeScript · PostgreSQL · hexagonal.

**A pergunta que originou o projeto:** um aluno que resolve um exercício hoje e outro daqui a três meses evoluiu — mas *quanto*, e *em quê*? E quando ele usa IA generativa para chegar à resposta, o que isso faz com a autonomia dele ao longo do tempo?

Isso não tem resposta sem dado. O CodeInsights existe para produzir o dado: o aluno registra desafios, submete resoluções, e a plataforma extrai indicadores objetivos de cada solução — complexidade de tempo e espaço, complexidade ciclomática de McCabe, nível declarado de autonomia frente à IA — montando a curva de amadurecimento dele.

**Por que este é o carro-chefe:** é o único que nasce de uma pergunta de pesquisa em vez de um enunciado. É a peça que nenhum outro portfólio de estudante tem.

**O que se defende numa entrevista:**
- A plataforma é ao mesmo tempo a **ferramenta e o instrumento empírico** da pesquisa. Ela produz o dado que ela mesma analisa.
- **Consentimento é parte da tese, não burocracia.** O painel de pesquisa mostra o recorte: 9 autorizaram, 2 recusaram, 2 sem resposta. Quem recusa sai da amostra — e isso aparece no número.
- O motor analisa **Java e C**; em outras linguagens as métricas não são calculadas. Limite conhecido e declarado, não bug.
- **Controle de acesso por papel** verificado: a conta de aluno é redirecionada ao tentar a área de pesquisa.

**Estudo de caso (a estrutura problema → decisão → resultado):**
Problema: medir aprendizado de programação sem depender da percepção do aluno. Decisão: extrair métrica estática do código submetido (Big O, McCabe) e cruzar com a autonomia declarada. Resultado: um heatmap autonomia × complexidade que mostra a distribuição de uma coorte real de 9 participantes e 86 resoluções, 100% com métrica.

---

### 2 · Escola de Idiomas

**Simulação de software house.** Java 21 · Spring Boot 4 · React 19 · TypeScript · PostgreSQL · hexagonal.

**O que é de verdade:** não nasceu de um enunciado técnico. Nasceu de um **levantamento de requisitos com um cliente fictício** — um agente de IA no papel de dono de escola, leigo em tecnologia, que só sabe descrever as próprias dores. O exercício é treinar a parte que fica de fora dos projetos de portfólio: extrair a dor real por trás do pedido.

> Exemplo que vale citar no site: o cliente não pediu "um CRUD de matrícula". Ele disse que perde aluno porque a turma lota e ninguém avisa. **Daí nasceu a lista de espera.**

**O que se defende numa entrevista:**
- **Juros e multa calculados, não digitados.** R$ 85,00 vencidos há 18 dias viram R$ 104,70 = 85 + 2% de multa + R$ 1/dia de mora. E o **teto de 30 dias funciona**: uma mensalidade 51 dias vencida parou em R$ 397,20 = 360 + 7,20 + **30**, não + 51. Conferi as três contas.
- **Aprovação é uma conjunção, e a tela prova.** Uma aluna com média **89,0** — a segunda melhor da turma — está **reprovada**, por 37,5% de faltas. Outro está reprovado pelo motivo oposto: média 58,5 com faltas dentro do limite. Duas causas, mesmo rótulo, na mesma tela.
- **"Em andamento" não é "reprovado".** Sem as duas notas, o sistema se recusa a concluir.
- **Matrícula tem três saídas**, não duas: aprovar, rejeitar ou lista de espera — porque a turma tem capacidade real.
- **Menor de idade exige responsável**, e isso aparece na tela de aprovação.
- **Três interfaces, não três permissões.** Gestão e professor em desktop com barra lateral; o aluno em **mobile-first com navegação inferior**. Quem paga e quem dá aula usa computador; quem estuda usa celular.
- Boleto no padrão **FEBRABAN** e **PIX dinâmico** com BR Code de verdade.

---

### 3 · BloodCrown

**RPG de mesa em tempo real.** Java 21 · Spring Boot 4 · React 19 · TypeScript · **WebSocket/STOMP** · Konva (canvas) · MySQL 8 · Docker · deploy na Netlify.

**Único dos quatro com deploy no ar e usuários de verdade:** https://bloodcrown.netlify.app — é usado em mesas entre amigos, para um sistema de RPG autoral.

**O que se defende numa entrevista:**
- **Estado derivado com procedência visível.** O Cetro Coroado dá +2 Carisma e o atributo aparece como **9**, com o rótulo acessível dizendo *"valor 9 (base 7 + buff 2)"*. Desequipar desfaz. Não é número gravado.
- **Posse validada no backend, não na tela.** O caso de uso de vincular ficha a token só aceita a ficha de **quem chamou**. Por isso até o seed faz cada jogador entrar na mesa, colocar o próprio token e vincular a própria ficha — igual a uma sessão real. *É o melhor argumento de segurança do projeto e não aparece em nenhum print: tem que ser dito.*
- **Autorização por papel muda a interface.** O jogador não vê o painel do mestre nem a barra de cenas — a barra some, não é botão escondido por CSS.
- **A rolagem mostra os dados individuais**, não só o total: `[6, 7, 8]` + 5 = 26. Quem joga confere dado por dado.
- **Escala declarada:** 1 célula = 1,5 m = 48 px. A régua mede em metros.
- **Seed determinístico de propósito** — o comentário no código diz que rodar duas vezes produz a mesma campanha, "senão um print de hoje não bateria com o de amanhã".

---

### 4 · IFConecta

**Rede acadêmica do IFSP Campus Salto.** Java 21 · Spring Boot 4 · hexagonal · PostgreSQL · React 18 + Vite. Monorepo.

Alunos, professores e setores conversam em clubes, publicam posts, organizam turmas e recebem comunicados oficiais.

**O que se defende numa entrevista:**
- **Autorização em duas camadas:** tipo de usuário (aluno / professor / servidor) *e* papel dentro do clube (líder / membro). O botão de comunicado só existe para professor e servidor; a aba de solicitações do clube, só para o líder.
- **Alcance de comunicado é regra de domínio.** Um professor só dispara para turma que **ele leciona** ou clube que **ele lidera** — o segundo seletor do formulário é populado a partir disso, não é lista fixa.
- **Fluxo de moderação:** turma sugerida por aluno entra em fila de aprovação, não vai direto ao ar.
- **Post anônimo** ao lado de posts identificados — decisão de produto com consequência técnica: o autor existe no banco, só não aparece.

---

## Prints

56 imagens, todas 1920×895 (exceto as telas de aluno da Escola de Idiomas, que são mobile-first e estão em 430×900). Cada pasta tem `00-indice.md` explicando print a print, com o que mostrar e o que evitar.

### As 10 essenciais — anexe estas

| Projeto | Arquivo | O que mostra |
|---|---|---|
| CodeInsights | `CodeInsights/02-dashboard.png` ⭐ | Carta de resoluções autonomia × complexidade, painel de estrela selecionada populado (Fibonacci, O(n), O(1), M=3) |
| CodeInsights | `CodeInsights/10-pesquisa-cruzamento.png` ⭐ | Heatmap de densidade autonomia × complexidade, com filtros de confiança do motor |
| CodeInsights | `CodeInsights/09-pesquisa-qualidade.png` ⭐ | 9 participantes, 86 resoluções, 100% com métrica, recorte de consentimento |
| Escola de Idiomas | `Escola-de-Idiomas/06-financeiro-atrasadas.png` ⭐ | R$ 85,00 → R$ 104,70, "inclui multa + mora", regra escrita no rodapé |
| Escola de Idiomas | `Escola-de-Idiomas/12-boletim-turma.png` ⭐ | Os quatro estados e as **duas causas de reprovação** na mesma tabela |
| Escola de Idiomas | `Escola-de-Idiomas/18-aluno-pix.png` ⭐ | QR Code e BR Code completo, em largura de celular |
| BloodCrown | `BloodCrown/09-mesa-tabuleiro.png` ⭐ | Mapa com tokens, retratos, barras de vida e selo AO VIVO |
| BloodCrown | `BloodCrown/05-ficha-inventario.png` ⭐ | Itens equipados e o atributo buffado com anel aceso, no mesmo quadro |
| IFConecta | `IFConecta/02-timeline.png` ⭐ | Feed do campus com upvote, comentário e post anônimo |
| IFConecta | `IFConecta/10-comunicado.png` ⭐ | Modal de comunicado com alcance por turma que o professor leciona |

### Inventário completo

| Pasta | Qtd | Cobertura |
|---|---|---|
| `CodeInsights/` | 11 | login, dashboard, desafios, detalhe, snippets, explorar, perfil, portfólio público, 3 telas de pesquisa |
| `IFConecta/` | 12 | login, timeline, clubes, detalhe, membros, turmas, cursos, perfil, notificações, comunicado, moderação, tema escuro |
| `Escola-de-Idiomas/` | 18 | 8 de gestão, 5 de professor, 5 de aluno (mobile) — inclui o fluxo de PIX |
| `BloodCrown/` | 15 | login, dashboard, temas, 6 de ficha, 6 de mesa (incl. visão do jogador) |

> Há uma pasta vazia `Prints-Portfolio/Escola-Idiomas/` (sem o "de") sobrando de uma tentativa anterior. Pode apagar; a boa é `Escola-de-Idiomas/`.

### Pares que valem lado a lado no site

- **BloodCrown 09 + 15** — a mesma mesa como mestre e como jogador. Some o painel do mestre e a barra de cenas. É autorização visível.
- **Escola de Idiomas 06 + 18** — a régua de cobrança da secretaria e o aluno pagando no celular. O ciclo fechando.

---

## O que ainda não existe (e o design precisa saber)

1. **Só o BloodCrown tem demo ao vivo confirmado.** Os outros três rodam localmente. As referências são unânimes: projeto sem link funcionando conta quase nada. Ou o card precisa de um estado honesto para "sem deploy" (vídeo curto? print + repo?), ou eu subo os outros três antes de publicar.
2. **Nenhum estudo de caso está escrito** em prosa final — o que está aqui é matéria-prima.
3. **Data de formatura em conflito** (dez/2027 no vault × mar/2028 no LinkedIn). Se aparecer no site, tem que estar certa.
4. **Os quatro projetos têm quase a mesma stack.** Se o card mostrar só tags, os quatro parecem o mesmo projeto.
5. **Prints com o widget de extensão** no canto — recortar antes de publicar.

---

## BRIEF

```
CONTEXTO
Estudante de Ciencia da Computacao no IFSP, formatura prevista dez/2027,
estagio em sistemas embarcados e bolsa de Iniciacao Cientifica.
Alvo: vaga de dev em big tech brasileira (remoto ou regiao de Campinas).
O portfolio e a vitrine principal pra recrutador e pra entrevistador tecnico.

OBJETIVO DA PAGINA
Em 30 segundos, um recrutador precisa saber quem eu sou, o que eu construo e
conseguir abrir um projeto rodando. Em 5 minutos, um engenheiro precisa
conseguir ler minhas decisoes tecnicas.

IDIOMA
Portugues e ingles, com alternador visivel. O portugues e a versao canonica.
Toda copy precisa existir nos dois; nada de metade traduzida.

ESTRUTURA (nesta ordem)
1. Hero: nome, o que eu construo em uma frase, links (GitHub, LinkedIn, email).
2. Sobre: 3 a 4 linhas, com formacao, estagio e a IC.
3. Projetos: 4 fichas.
   - CodeInsights e o carro-chefe: card maior, estudo de caso longo,
     contado como pergunta de pesquisa -> decisao -> resultado.
   - Escola de Idiomas, BloodCrown e IFConecta em ficha curta.
4. Experiencia: timeline reversa com tags de stack em cada posicao.
5. Contato.

O PROBLEMA DE DESIGN MAIS IMPORTANTE
Os quatro projetos usam quase a mesma stack (Java 21, Spring Boot 4, React 19,
TypeScript, hexagonal). Se o card mostrar so as tags, os quatro parecem o mesmo
projeto. O card precisa ser dominado pelo PROBLEMA que cada um resolve, nao
pela tecnologia. A stack entra em segundo plano.

CADA CARD DE PROJETO PRECISA DE
- uma frase de problema (nao de feature)
- 1 print, escolhido da lista de essenciais
- 2 ou 3 fatos defensaveis, em texto curto
- stack, discreta
- link do repo, e link do demo QUANDO EXISTIR
- um estado honesto pra quando nao existir demo (hoje, 3 dos 4)

REFERENCIAS DE ESTRUTURA (copiar a arquitetura)
- brittanychiang.com  -> coluna fixa de identidade, conteudo rolando ao lado
- julianozen.com      -> projeto contado como problema / decisao / resultado
- paco.me             -> sobriedade, o texto como prova

REFERENCIAS DE OUSADIA (copiar um momento so)
- art-yakushev.com    -> transicao entre home e projeto
- emilkowal.ski       -> qualidade de easing: poucas animacoes e certeiras

DIRECAO VISUAL
Tema claro e escuro, os dois desenhados de verdade. Tipografia como
protagonista. Uma unica cor de destaque, usada com parcimonia. Movimento
contido: uma abertura orquestrada e micro-interacoes no hover, nada espalhado.
Os prints sao escuros (BloodCrown, CodeInsights) e claros (Escola, IFConecta)
ao mesmo tempo: o layout precisa emoldurar os dois sem brigar.

NAO FAZER
- Terminal falso, matrix, chuva de codigo binario.
- Barra de porcentagem de habilidade (React 85%).
- Carrossel de logos de tecnologia sem contexto.
- Card que mostra so tags de stack.
- Cena 3D pesada que trava no celular.
- Inventar metrica, premio ou usuario que eu nao tenho.

RESTRICOES
Carregar rapido em 4G e funcionar bem no celular. Navegavel por teclado.
Contraste que passe em WCAG AA.
```
