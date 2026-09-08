# BloodCrown — prints

Capturados em **30/08/2026**, do ambiente local (`localhost:5173`) com o seed da campanha aplicado.
Viewport **1920×895**, PNG, escala CSS.

> **Conjunto recapturado por inteiro em 30/08**, depois das três correções (enquadramento do mapa, toast da rolagem e acentuação). Nenhum print é da rodada anterior. O seed foi rodado de novo junto, então os IDs de mesa e de ficha mudaram — a mesa agora tem o código **C9D874**.

## Contas usadas

O BloodCrown **não tem acesso rápido de dev** na tela de login — ao contrário dos outros três projetos. As contas saem do seed, em `scripts/seed/personas.mjs`:

| Conta | Papel | Usada em |
|---|---|---|
| `mestre.bloodcrown` | mestre · dono da mesa | 02 a 14 |
| `jog.lucas` | jogador | 15 |

Senha padrão de todas: `Senha@2026`. Os outros jogadores são `jog.mariana` e `jog.diego`.

> O seed é determinístico de propósito — o comentário no arquivo diz que rodar duas vezes produz a mesma campanha, "senão um print de hoje não bateria com o de amanhã". Ou seja: dá para recapturar qualquer print destes a qualquer momento.

## Os arquivos

### Acervo

| # | Arquivo | Tela | Por que vale |
|---|---|---|---|
| 01 | `01-login.png` | Acesso | Identidade visual: coroa, serifa, "R · P · G · M · A · N · A · G · E · R" |
| 02 | `02-dashboard.png` | Dashboard | Personagens e mesas em abas, pastas na lateral, cards com vida e nível |
| 14 | `14-temas.png` | Seletor de temas | Seis temas nomeados (Realeza Sangrenta, Sylvie, Shitonama, Sozoku, Ryusei, Nozomu) |

### Ficha de personagem

| # | Arquivo | Tela | Por que vale |
|---|---|---|---|
| 03 | `03-ficha-topo.png` | Ficha · topo | Atributos em medalhões, status, defesa, e o painel de ataques |
| 04 | `04-ficha-pericias.png` | Ficha · perícias | 24 perícias fixas ligadas ao atributo + perícias **personalizadas** criadas pelo jogador (Heráldica dos Reis, Rito da Coroa) |
| 05 | `05-ficha-inventario.png` | **Ficha · inventário** | ⭐⭐ **A imagem principal.** Os três itens equipados com os bônus que concedem — e o atributo CAR **9, com anel aceso**, do lado esquerdo da mesma tela |
| 06 | `06-acoes-do-turno.png` | Ações do turno | Economia de ação: Padrão 2/2 · Bônus 3/3 · Movimento 1/1 · Reação 3/3, com "Próximo turno" |
| 07 | `07-calculadora-dano.png` | Calculadora de dano | 30 de dano físico ÷2, descontando a resistência do personagem antes de dividir |
| 13 | `13-rolagem.png` | **Rolagem de dados** | ⭐ `3d8+5` → dados `[1, 4, 2]`, mod +5, **total 12**. Mostra os dados individuais, não só o resultado. O toast agora cabe inteiro na tela |

### Mesa em tempo real

| # | Arquivo | Tela | Por que vale |
|---|---|---|---|
| 08 | `08-mesas.png` | Lista de mesas | Código de convite (F38FBF) e campo para entrar na mesa de outro mestre |
| 09 | `09-mesa-tabuleiro.png` | **Tabuleiro** | ⭐⭐ Mapa real (planta de cripta), tokens com retrato, nome, barra de vida e CA/status. Selo **AO VIVO** no topo e três cenas em abas |
| 10 | `10-mesa-painel-mestre.png` | Painel do mestre | Mapa por URL ou upload, travar mapa, grid visível, **1 célula = 1,5 m = 48px**. Repare no canto: o botão virou **Enquadrar o mapa** e o zoom mostra a porcentagem real |
| 11 | `11-mesa-biblioteca.png` | Biblioteca | 9 tokens e 4 mapas em pastas (Heróis, Criaturas). "Token → entra no tabuleiro como peça" |
| 12 | `12-token-acoes.png` | Ações do token | Token selecionado com Nome · Status · **Ficha** · Apagar |
| 15 | `15-mesa-visao-jogador.png` | **A mesma mesa, como jogador** | ⭐ Compare com a 09: sumiram o botão **Mestre** e a barra de **Cenas** inteira |

## Onde usar cada uma

| Destino | Prints |
|---|---|
| **LinkedIn** — mídia do projeto | 09, 05, 13 (nessa ordem) |
| **WebPortfolio** — capa | 09 |
| **WebPortfolio** — galeria | 09, 05, 13, 11, 04, 07, 14 |
| **README do repositório** | 09 e 05 |
| **Par de autorização** | 09 + 15 lado a lado |

> Se for usar só uma, use a **09** — é a que explica o que o produto é em um segundo. A **05** é a que explica que ele é um sistema, não um formulário.

## O que contar junto com os prints

- **A ficha tem estado derivado, e a tela mostra a origem.** Na 05, o Cetro Coroado dá +2 Carisma e o atributo CAR aparece como **9** com um anel aceso — o `aria-label` do botão diz literalmente *"valor 9 (base 7 + buff 2)"*. Mesma coisa com o Selo dos Reis Afogados (+2 Res. Mágica → 8, base 6) e o Manto (+4 Armadura → CA). Desequipar o item desfaz tudo. Isso é cálculo derivado com procedência, não um número gravado.
- **A rolagem mostra os dados, não só o total.** `[6, 7, 8]` + 5 = 26. Quem joga RPG confere dado por dado; quem escreveu isso sabia disso.
- **Autorização é por papel e aparece na interface.** A comparação 09 × 15 é a prova: o jogador não vê o painel do mestre nem a troca de cenas. Não é botão escondido por CSS — a barra some.
- **Tempo real de verdade.** O selo "AO VIVO" é status de WebSocket. O mestre move um token e todo mundo vê.
- **Posse é validada no backend, não na tela.** O comentário no seed explica por quê ele não cria tudo com a conta do mestre: o `VincularFichaTokenUseCase` só aceita vincular um token à ficha de **quem chamou**. Por isso o seed faz cada jogador entrar na mesa, colocar o próprio token e vincular a própria ficha — igual a uma sessão real. É o melhor argumento de segurança do projeto e não aparece em print nenhum; tem que ser dito.
- **Escala é declarada.** 1 célula = 1,5 m = 48 px (print 10). A régua mede em metros, não em quadrados.

## Observações para quem for reusar

- ~~Mapa não enquadrado no palco~~ — **corrigido.** O botão virou **"Enquadrar o mapa"**, o mapa entra já enquadrado ao abrir a cena e o indicador mostra o zoom real (77% na Cripta, 76% com os painéis laterais abertos — ou seja, ele reenquadra quando a área disponível muda). A faixa preta que sobra agora é **letterbox honesto**: o mapa é mais alto que largo e cabe inteiro.
- ~~Toast da rolagem cortado~~ — **corrigido.** Na 13 o balão cabe inteiro, com folga embaixo.
- ~~Tokens cortados na borda de baixo~~ — **corrigido junto com o enquadramento**, como previsto.
- ~~Falta de acentuação~~ — **corrigido.** Confirmei nas telas: Usuário, Não tem uma conta?, PERÍCIAS, Investigação, Percepção, Intuição, Sobrevivência, Intimidação, Lábia, NÍVEL, INVENTÁRIO, DESCRIÇÃO, Res. Mágica, Salão da Coroa, HERÓIS.
- **O toast dura ~3 segundos.** Se for recapturar a 13, dispare a rolagem e capture na sequência, sem passo no meio.
- **Achado novo: a tela de erro mostra JSON cru.** Ao abrir uma mesa que não existe (URL antiga depois de rodar o seed de novo), a página exibe literalmente `{"message":"Mesa nao encontrada."}` centralizado, sem layout e sem caminho de volta. Além do JSON aparecer para o usuário, a mensagem do backend está sem acento em "não". Não estava no prompt de ajustes.
- **Duplo clique num token dá zoom nele.** Descobri sem querer: dois cliques seguidos levaram o zoom a 486%, com o token ocupando a tela toda. Pode ser recurso proposital — mas se for, não está documentado em lugar nenhum da interface.
- **Devtools do TanStack Query visível** no canto inferior direito de todos os prints. Esse **é** do projeto (só em dev) — diferente do outro widget.
- **Widget circular no canto inferior direito**: o mesmo do CodeInsights, IFConecta e Escola de Idiomas. É **extensão do navegador**. Capture em janela anônima ou recorte.
- **Falta acento em partes da interface e do seed:** "Usuario", "Nao tem uma conta?", "PERICIAS", "Investigacao", "Percepcao", "Configuracoes de som", "Salao da Coroa", "Cenario", "Herois", "tema padrao", "dragao lendario". Nos outros projetos isso já foi corrigido; aqui não.
- **Tokens cortados na borda de baixo** nos prints do tabuleiro — mesma causa da falta de enquadramento acima, não é posição ruim dos tokens no seed. Com zoom-to-fit, eles entram no quadro sozinhos.
- **Um token foi movido e devolvido.** Ao tentar selecionar o **Nym Sussurro** no tabuleiro, arrastei ele sem querer para fora do mapa — e isso persiste, porque a mesa é ao vivo. Arrastei de volta para perto da posição original antes de fechar os prints, mas **não é exatamente a posição do seed**. Se quiser o estado limpo, rode o seed de novo; ele é determinístico.
- **Fora isso, nada foi salvo.** Rolei dados e mexi na calculadora de dano, mas não apliquei dano nem salvei ficha.
