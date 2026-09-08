# CodeInsights — prints

Capturados em **30/08/2026**, do ambiente local com seed aplicado.
Viewport **1920×895**, PNG, escala CSS. Mesmo tamanho para todos os projetos.

## Contas usadas

O login tem acesso rápido de dev com três perfis. Os prints usam dois:

| Conta | Papel | Usada em |
|---|---|---|
| **Henrique Marangoni** | aluno · portfólio público completo | 02 a 08 |
| **Pesquisadora IC** | pesquisador · só a aba Pesquisa | 09 a 11 |

> A conta Pesquisadora tem **dashboard vazio por design** — não é falta de seed. Se precisar refazer, use Henrique Marangoni para as telas de aluno.

## Os arquivos

| # | Arquivo | Tela | Por que vale |
|---|---|---|---|
| 01 | `01-login.png` | Acesso | Mostra o acesso rápido de ambiente de teste — bom para explicar decisão de DX, ruim para vitrine |
| 02 | `02-dashboard.png` | **Dashboard** | ⭐ **A imagem principal.** Carta de resoluções (autonomia × complexidade), 10 desafios, 14 resoluções, autonomia 3,0. Painel de estrela selecionada populado: Fibonacci, tempo O(n), espaço O(1), ciclomática M=3, confiança alta |
| 03 | `03-desafios.png` | Meus desafios | Lista com os 10 desafios |
| 04 | `04-desafio-detalhe.png` | Detalhe do desafio | Enunciado e resoluções submetidas |
| 05 | `05-snippets.png` | Snippets | Trechos de código guardados |
| 06 | `06-explorar.png` | Explorar | Descoberta de portfólios públicos |
| 07 | `07-perfil.png` | Perfil | Dados da conta e link do portfólio público |
| 08 | `08-portfolio-publico.png` | Portfólio público | A visão que um terceiro tem, em `/u/<uuid>` |
| 09 | `09-pesquisa-qualidade.png` | **Qualidade dos dados** | ⭐ 9 participantes, 86 resoluções, 100% com métrica, e o recorte de consentimento (9 autorizaram, 2 recusaram, 2 sem resposta) |
| 10 | `10-pesquisa-cruzamento.png` | **Autonomia × complexidade** | ⭐ Heatmap de densidade + distribuição empilhada por nível, com filtros de confiança do motor e de participação mínima |
| 11 | `11-pesquisa-coorte.png` | Coorte (dado bruto) | A tabela por trás dos gráficos |

## Onde usar cada uma

| Destino | Prints |
|---|---|
| **LinkedIn** — mídia do projeto CodeInsights | 02, 10, 09 (nessa ordem) |
| **WebPortfolio** — capa do projeto | 02 |
| **WebPortfolio** — galeria | 02, 10, 09, 08, 04 |
| **README do repositório** | 02 e 10 |

> As três com ⭐ são as que sustentam o projeto sozinhas. Se for usar só uma, use a **02**.

## Observações para quem for reusar

- **Widget flutuante no canto inferior direito — resolvido em 30/08/2026: não é do CodeInsights.** O mesmo ícone circular, na mesma posição, aparece nos prints do **IFConecta**, que é outra aplicação. Logo é **extensão do navegador** injetando na página, não código seu. Para publicar, recapture em janela anônima (sem extensões) ou recorte o canto — mas não vá procurar isso no código.
- **Banner de consentimento** (*"Esta plataforma é objeto de uma pesquisa…"*) aparece nas telas 09 a 11, porque a conta Pesquisadora ainda não respondeu ao termo. Responder em `/app/consentimento` limpa o topo — mas o banner **é parte da tese**, então pode valer mantê-lo.
- **Controle de acesso por papel funciona:** a conta de aluno é redirecionada ao tentar `/app/pesquisa`. Verificado, não é bug.
- O motor de métricas analisa **Java e C**; em outras linguagens as métricas não são calculadas.
