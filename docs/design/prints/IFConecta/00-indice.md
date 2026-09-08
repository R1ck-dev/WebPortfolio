# IFConecta — prints

Capturados em **30/08/2026**, do ambiente local (`localhost:5173`) com seed aplicado.
Viewport **1920×895**, PNG, escala CSS — mesmo padrão do CodeInsights.

## Contas usadas

O login tem acesso rápido de dev com três perfis. Os prints usam os três:

| Conta | Papel | Usada em |
|---|---|---|
| **Ana Ribeiro** | aluna · líder do Clube de Programação Competitiva | 02 a 09 |
| **Marcos Lima** | professor · leciona Estruturas de Dados | 10, 11 |
| **Júlia Neves** | servidora (institucional) | 12 |

> A conta de aluna é **líder de clube**, então as telas 04 e 05 mostram a aba **Solicitações** que um membro comum não veria. Isso é proposital: é a prova visual de que a permissão é por papel *dentro* do clube, não só por tipo de usuário.

## Os arquivos

| # | Arquivo | Tela | Por que vale |
|---|---|---|---|
| 01 | `01-login.png` | Acesso | Split screen com o pitch do produto à esquerda. Mostra o acesso rápido de dev — bom para explicar DX, ruim para vitrine |
| 02 | `02-timeline.png` | **Timeline** | ⭐ **A imagem principal.** Feed do campus com upvote, comentário e post anônimo. Conteúdo do seed é crível: Pix na cantina, carona pra Salto, elevador quebrado |
| 03 | `03-clubes.png` | Clubes | 7 clubes com badge público/privado, filtros (Todos · Meus · Públicos · Privados) e contagem de membros |
| 04 | `04-clube-detalhe.png` | Detalhe do clube | Abas Posts · Membros · Solicitações · Sobre, com badge **Líder** no cabeçalho |
| 05 | `05-clube-membros.png` | Membros do clube | Lista com papel (Líder / Aluno / Professor) e tempo de casa |
| 06 | `06-turmas.png` | Minhas turmas (aluna) | 3 turmas com código, semestre, docente, carga horária e matriculados |
| 07 | `07-cursos.png` | Cursos | Catálogo de cursos do campus |
| 08 | `08-perfil.png` | Perfil | Prontuário, curso, status ATIVO + os clubes de que participa |
| 09 | `09-notificacoes.png` | Notificações | 7 não lidas — prova que o feed de notificação existe de verdade |
| 10 | `10-comunicado.png` | **Enviar comunicado** | ⭐ **A segunda mais forte.** Modal com fundo desfocado, e o campo **Turma** que só aparece depois de escolher o alcance. Alcance: comunidade · curso · turma que leciona · clube que lidera |
| 11 | `11-professor-solicitacoes.png` | Aprovação de turma | Aluno sugere turma → professor aprova ou rejeita. Tela enxuta, mas é o fluxo de moderação inteiro |
| 12 | `12-timeline-dark.png` | Timeline no tema escuro | Mesma tela da 02 com o tema alternado — mostra que o dark mode é real, não é filtro |

## Onde usar cada uma

| Destino | Prints |
|---|---|
| **LinkedIn** — mídia do projeto IFConecta | 02, 10, 03 (nessa ordem) |
| **WebPortfolio** — capa do projeto | 02 |
| **WebPortfolio** — galeria | 02, 10, 03, 04, 08, 12 |
| **README do repositório** | 02 e 10 |

> Se for usar só uma, use a **02**. Se puder usar duas, a segunda é a **10** — ela é a única que mostra regra de negócio, e não só CRUD bonito.

## O que contar junto com os prints

O IFConecta não é "um Facebook do campus". O que ele tem de defensável numa entrevista:

- **Autorização por papel em duas camadas.** Tipo de usuário (aluno / professor / servidor) *e* papel dentro do clube (líder / membro). O botão **Comunicado** só existe para professor e servidor; a aba **Solicitações** do clube só para o líder. Está visível comparando a 02 com a 10.
- **Alcance de comunicado como regra de domínio.** Um professor só pode disparar para turma que **ele leciona** ou clube que **ele lidera** — o segundo `select` da tela 10 é populado a partir disso, não é uma lista fixa.
- **Fluxo de moderação.** Turma sugerida por aluno entra numa fila de aprovação (11), não vai direto ao ar.
- **Post anônimo.** A timeline tem "Estudante Anônimo" ao lado de posts identificados — decisão de produto com consequência técnica (o autor existe no banco, só não aparece).

## Observações para quem for reusar

- **O widget circular no canto inferior direito não é do IFConecta.** Ele aparece igual nos prints do CodeInsights, que é outra aplicação — ou seja, é **extensão do navegador** injetando na página, não código seu. Antes de publicar, capture em janela anônima (sem extensões) ou recorte o canto. Isso corrige a suspeita registrada no índice do CodeInsights.
- **Sobra de espaço à esquerda.** Em 1920 de largura o conteúdo fica centralizado e sobra uma faixa vazia grande entre a sidebar e o feed. Para vitrine, recapturar em ~1440 deixa a tela bem mais densa.
- **A busca global do topo (`⌘K`) não responde.** Digitar não abre resultado e o Enter não navega. Em toda tela aparece uma caixa de busca — um entrevistador vai clicar nela. Ou implemente, ou tire da UI antes de mostrar ao vivo.
- **Erro de português no seed/UI:** aparece "entrou há 4 **mêses**" na tela 05. Deve ser "meses". Corrija antes de publicar a 05 em qualquer lugar.
- **A 11 está quase vazia** (uma solicitação, turma com 0 matriculados). Se quiser usá-la em vitrine, semeie mais duas ou três solicitações antes de recapturar.
- **O comunicado da tela 10 não foi enviado** — cancelei o modal para não sujar o seed. Se quiser o print do resultado (o comunicado já publicado na timeline), é só enviar e recapturar a 02.
