# Escola de Idiomas — prints

Capturados em **30/08/2026**, do ambiente local (`localhost:5173`).
Conjunto **recapturado por inteiro** depois do seed novo — nenhum print é da primeira rodada.

PNG, escala CSS, em **duas larguras**:

| Telas | Viewport | Por quê |
|---|---|---|
| 01 a 13 (gestão e professor) | **1920×895** | layouts de desktop, com barra lateral |
| 14 a 18 (aluno) | **430×900** | a área do aluno é mobile-first, com navegação inferior |

## Contas usadas

| Conta | Papel | Usada em |
|---|---|---|
| **Gestor Padrão** | gestão | 02 a 08 |
| **Carla Dias** | professora · Alemão A1 com 6 alunos | 09 a 13 |
| **Joao Pereira** | aluno · Inglês B2 | 14 a 18 |

## Os arquivos

### Gestão

| # | Arquivo | Tela | Por que vale |
|---|---|---|---|
| 01 | `01-login.png` | Acesso | Split screen com o pitch. Mostra o acesso rápido de dev |
| 02 | `02-gestao-inicio.png` | **Início da gestão** | ⭐ Recebido R$ 90 · em aberto R$ 1.135 · em atraso R$ 219,60 · 2 inadimplentes, mais os blocos "precisa da sua atenção" nominais |
| 03 | `03-matriculas.png` | Matrículas | 16 matrículas com abas por situação: Aguardando · Lista de espera · Ativa · Trancada · Encerrada · Rejeitada |
| 04 | `04-matriculas-aguardando.png` | **Aprovação de matrícula** | ⭐ Decisão de três vias — Rejeitar · Lista de espera · Aprovar. Beatriz Lima traz badge **menor** com o responsável vinculado |
| 05 | `05-turmas.png` | Turmas | Ocupação, mensalidade, horário e link de inscrição por turma (**Copiar link** / **WhatsApp**) |
| 06 | `06-financeiro-atrasadas.png` | **Financeiro · atrasadas** | ⭐⭐ R$ 85,00 → **R$ 104,70**, "há 18 dias · inclui multa + mora", botão **Lembrar** no WhatsApp, e a regra escrita no rodapé |
| 07 | `07-despesas.png` | Despesas | Aluguel, luz, repasse a professor, material. Fecha o caixa dos dois lados |
| 08 | `08-professores.png` | Professores | Professores com idiomas e **Reenviar convite**. Fraca para vitrine, boa para explicar o onboarding por convite |

### Professor — turma cheia (Alemão A1, 6 alunos)

| # | Arquivo | Tela | Por que vale |
|---|---|---|---|
| 09 | `09-professor-turmas.png` | Minhas turmas | Três atalhos por turma: chamada · notas · boletins |
| 10 | `10-chamada.png` | Chamada | 6 alunos, 5 presentes e 1 falta. *"Todos começam presentes. Toque em quem faltou."* — e a data só anda pelos dias de aula (ter/qui) |
| 11 | `11-notas.png` | Lançar notas | A turma inteira: aprovados, um reprovado (55 e 62 → 58,5), um sem nota nenhuma e um com só a prova do meio — a média fica em `—` até as duas entrarem |
| 12 | `12-boletim-turma.png` | **Boletim da turma** | ⭐⭐ **A melhor tela do projeto para entrevista.** Os quatro estados na mesma imagem, e as **duas causas de reprovação separadas** |
| 13 | `13-boletim-aluno.png` | Boletim individual | A Júlia Costa: média 89,0 e mesmo assim reprovada, com a regra explicada em texto na própria tela |

### Aluno — mobile

| # | Arquivo | Tela | Por que vale |
|---|---|---|---|
| 14 | `14-aluno-inicio.png` | Início do aluno | Card escuro de mensalidades + desempenho, com navegação inferior |
| 15 | `15-aluno-financeiro.png` | **Minhas mensalidades** | ⭐ Os três estados de uma vez: agosto **em aberto** com Pagar/Emitir boleto, julho **atrasada** a R$ 397,20 ("com multa · original R$ 360,00") e junho **paga** |
| 16 | `16-aluno-boletim.png` | Meu boletim | A visão do aluno sobre as próprias notas |
| 17 | `17-aluno-turmas.png` | Minhas turmas | Turma, dias e horário |
| 18 | `18-aluno-pix.png` | **Pagamento por PIX** | ⭐ QR Code gerado, payload BR Code completo, copia-e-cola, recebedor e chave. O botão "Já paguei (simular confirmação)" está rotulado como só de desenvolvimento |

## Onde usar cada uma

| Destino | Prints |
|---|---|
| **LinkedIn** — mídia do projeto | 12, 06, 18 (nessa ordem) |
| **WebPortfolio** — capa | 06 |
| **WebPortfolio** — galeria | 06, 12, 18, 04, 02, 15 |
| **README do repositório** | 06 e 12 |

> Se for usar só uma, use a **06**. Se puder usar três, feche com **12** e **18** — juntas elas contam que o sistema decide dinheiro, decide aprovação e fecha o ciclo de cobrança.

## O que contar junto com os prints

Este não é um CRUD de escola. O que dá para defender numa entrevista:

- **Juros e multa calculados, não digitados.** R$ 85,00 vencidos há 18 dias viram R$ 104,70 = 85 + 2% de multa (R$ 1,70) + R$ 1/dia de mora (R$ 18). E o **teto de 30 dias realmente funciona**: a mensalidade de julho do aluno está 51 dias vencida e o valor parou em R$ 397,20 = 360 + 7,20 + 30, não 360 + 7,20 + 51. Conferi as três contas.
- **Aprovação é uma conjunção, e a tela prova isso.** Na 12, a Júlia Costa tem média **89,0** — a segunda melhor da turma — e está **Reprovada**, por 37,5% de faltas. O Kaique está reprovado pelo motivo oposto: média 58,5 com faltas dentro do limite. Duas causas diferentes, mesmo rótulo, na mesma tela. É o tipo de coisa que só aparece se o seed for pensado.
- **"Em andamento" não é "reprovado".** Lara sem nota nenhuma e Miguel com só a prova do meio ficam *Em andamento* — o sistema distingue "não passou" de "ainda não dá para dizer".
- **O ciclo de cobrança fecha.** Da régua da secretaria (06, com o botão **Lembrar** no WhatsApp) até o aluno pagando por PIX no celular (18), com BR Code de verdade.
- **Matrícula tem três saídas, não duas.** Aprovar, rejeitar ou **lista de espera** — e a turma tem capacidade, então a lista de espera existe por causa de uma restrição real.
- **Menor de idade exige responsável.** Na 04 a Beatriz Lima tem o badge *menor* e o responsável vinculado; as outras duas não têm nenhum dos dois.
- **Três interfaces, não três permissões.** Gestão e professor usam desktop com barra lateral; o aluno tem interface **mobile-first com navegação inferior**. Quem paga e quem dá aula usa computador; quem estuda usa celular.

## Pendências antes de publicar

1. ~~Área do aluno na largura errada~~ — **resolvido.** Recapturada em 430×900.
2. ~~Fluxo de PIX não aparece~~ — **resolvido pelo seed novo.** Prints 15 e 18.
3. ~~Turma do professor quase vazia~~ — **resolvido.** O acesso rápido agora entra como Carla Dias, com 6 alunos e notas variadas.
4. ~~Seed sem acentuação~~ — **resolvido.** "Alemão", "Manhã", "Inglês", "Júlia Costa", "Gestor Padrão" agora corretos.
5. **Widget circular no canto inferior direito.** O mesmo do CodeInsights e do IFConecta: é **extensão do navegador**, não código seu. Capture em janela anônima ou recorte o canto antes de publicar.
6. **Separador decimal inconsistente.** Na 12 as médias usam vírgula (90,0) e os percentuais usam ponto (12.5%, 37.5%). Correção barata e visível — vale fazer antes de a 12 virar imagem de LinkedIn.
7. **Sobrou "Sab" sem acento** na linha de horário da turma Inglês Kids (print 09). Passou pela varredura de acentos.
8. **Nada foi salvo.** Não cliquei em "Salvar chamada", "Salvar notas" nem em "Já paguei" — o estado do banco é o do seed.
