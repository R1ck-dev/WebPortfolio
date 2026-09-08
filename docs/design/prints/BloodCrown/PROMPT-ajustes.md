# Prompt de ajustes — BloodCrown

Cole numa sessão do Claude Code aberta na raiz de `BloodCrown-CharacterSheet`.
São três correções pequenas, achadas ao tirar prints para o portfólio. Nenhuma muda regra de domínio.

---

Achei três defeitos no BloodCrown ao capturar prints do ambiente local para o meu portfólio. Nenhum é de regra de negócio — são de apresentação, mas os três aparecem em qualquer uso normal, não só no print.

Antes de mexer, me diga onde está cada coisa: o componente do tabuleiro (Konva/stage da mesa), o componente do toast de rolagem, e onde ficam as strings da interface.

**1 — O mapa não é enquadrado no palco (o mais importante)**

Ao abrir uma mesa em 1920×895, o mapa aparece cortado: sobra uma faixa preta larga à direita e os tokens da parte de baixo saem da tela.

Medi antes de reportar, então o diagnóstico já está fechado:
- o `<canvas>` ocupa a largura inteira — stage **1920×842**, `scaleX = 1`, posição `(0, 0)`;
- quem não preenche é a **imagem do mapa**, desenhada no tamanho natural a partir do canto superior esquerdo. Ela tem cerca de 1250 px de largura (daí a faixa preta) e é **mais alta** que 842 (daí os tokens cortados embaixo);
- o botão **"Centralizar e resetar o zoom"** volta para `scale = 1` e `(0, 0)` — ou seja, ele *reseta*, mas não *enquadra*. Por isso clicar nele não muda nada.

O que eu quero:
- ao **abrir uma cena**, o mapa entra já enquadrado: escala = `min(largura do palco / largura do mapa, altura do palco / altura do mapa)`, centralizado nos dois eixos, sem cortar nada e sem esticar (mantendo proporção);
- o botão **"Centralizar e resetar o zoom"** passa a fazer esse mesmo enquadramento em vez de voltar para 100%. Se você achar que os dois comportamentos têm valor, me proponha antes — não saia criando dois botões por conta própria;
- o enquadramento tem que reagir a **troca de cena** e a **redimensionamento da janela**, porque cada cena tem um mapa de tamanho diferente;
- o indicador de zoom deve mostrar a porcentagem real depois do enquadramento (não fixar "100%").

Cuidado para não quebrar o pan e o zoom manual: depois de enquadrar, o usuário continua podendo arrastar e usar o scroll normalmente.

**2 — O toast de rolagem é cortado pela borda inferior**

Ao rolar um ataque (ex.: `3d8+5` do Cetro Coroado), o toast aparece no canto inferior direito e a palavra **TOTAL** fica cortada pela metade na borda de baixo da janela. O número grande do resultado também encosta na borda.

Ajuste o posicionamento/margem para o toast caber inteiro. Confira em uma janela baixa (altura ~700) além da normal — é onde o problema fica pior.

Aproveitando: o toast some em cerca de 3 segundos. Se for barato, me diga quanto tempo ele fica e onde isso é configurado — quero avaliar aumentar, porque em mesa de RPG as pessoas conferem dado por dado.

**3 — Falta acentuação em boa parte da interface e do seed**

Achei estes, e provavelmente há mais:

| Onde | Está | Deveria ser |
|---|---|---|
| Login | `Usuario` | Usuário |
| Login | `Nao tem uma conta?` | Não tem uma conta? |
| Ficha | `PERICIAS` | PERÍCIAS |
| Ficha · perícias | `Investigacao`, `Percepcao`, `Intuicao`, `Sobrevivencia`, `Intimidacao`, `Labia`, `Resistencia` | Investigação, Percepção, Intuição, Sobrevivência, Intimidação, Lábia, Resistência |
| Ficha · abas | `Inventario`, `Descricao` | Inventário, Descrição |
| Ficha · topo | `NIVEL`, `Configuracoes de som` | NÍVEL, Configurações de som |
| Ficha · ações | `PADRAO`, `BONUS`, `REACAO` | PADRÃO, BÔNUS, REAÇÃO |
| Seed · cenas | `Salao da Coroa` | Salão da Coroa |
| Seed · pastas | `Cenario`, `Herois` | Cenário, Heróis |
| Temas | `tema padrao`, `dragao lendario`, `donzela perola`, `arcano elfico` | tema padrão, dragão lendário, donzela pérola, arcano élfico |

Faça uma varredura pela interface inteira em vez de corrigir só esta lista — ela saiu de umas dez telas, não de todas. Se encontrar algo que **não** é falta de acento e sim problema de encoding no arquivo, pare e me avise em vez de sair trocando caractere.

Não mexa em identificador de código, chave de tradução, nome de rota nem valor gravado no banco que sirva de chave — só no texto que o usuário lê. Se algum desses textos for usado como chave em algum lugar, me diga antes.

**4 — Ao terminar**

Rode a aplicação e o seed e me diga:
- o que mudou em cada um dos três pontos, e onde;
- se o enquadramento do mapa quebrou algum teste de tabuleiro;
- qualquer texto sem acento que você tenha achado além da lista.

---

## Depois que ele terminar

Volte aqui e diga "ajustes do BloodCrown aplicados". Vou recapturar:

| Print | O que muda |
|---|---|
| `09-mesa-tabuleiro.png` | mapa enquadrado, sem faixa preta, com os tokens todos dentro do quadro |
| `12-token-acoes.png` | idem, com o token selecionado |
| `15-mesa-visao-jogador.png` | idem, na visão do jogador |
| `13-rolagem.png` | toast inteiro, com o TOTAL visível |
| `01`, `03`, `04`, `05`, `06`, `14` | acentuação corrigida |

Ou seja: praticamente o conjunto todo. Vale fazer as três correções antes de usar qualquer print em vitrine.

## O que **não** entra neste prompt

- **O widget circular no canto inferior direito** não é do projeto — é extensão do navegador. Aparece igual no CodeInsights, no IFConecta e na Escola de Idiomas. Não procure no código.
- **O botão do TanStack Query devtools** é do projeto, mas só em desenvolvimento. Não é defeito; é só recortar do print.
