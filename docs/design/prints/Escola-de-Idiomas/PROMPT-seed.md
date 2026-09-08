# Prompt para ajustar o seed — Escola de Idiomas

Cole isto numa sessão do Claude Code **aberta na raiz do repositório `EscolaIdiomas`**.
Objetivo: deixar o ambiente local pronto para print de portfólio, sem mudar regra de negócio.

---

O ambiente local está sendo usado para tirar prints de portfólio. O seed atual deixa três telas fracas ou impossíveis de capturar. Ajuste **só o seed e os atalhos de acesso rápido de desenvolvimento** — não mude regra de negócio, cálculo, schema nem componente de UI.

Antes de editar, encontre o arquivo de seed e o componente do "Acesso rápido · ambiente de teste" da tela de login, e me diga onde estão.

**1 — Aluno com mensalidade em aberto (destrava o pagamento por PIX)**

Hoje o botão de acesso rápido "Aluno" entra como **Joao Pereira**, e todas as mensalidades dele estão pagas. Por isso `/aluno/financeiro` mostra só "Paga" e o fluxo de pagamento por PIX não aparece em lugar nenhum.

Deixe o Joao Pereira com **três** mensalidades em situações diferentes, para a tela mostrar os três estados de uma vez:
- julho/2026 — **paga**
- agosto/2026 — **em aberto**, vencimento futuro
- uma anterior — **atrasada** há uns 20 dias, para o valor atualizado aparecer com multa e mora

**2 — Turma cheia para o professor do acesso rápido**

O botão "Professor" entra como **Ana Souza**, cujas turmas têm 0, 1 e 2 alunos. A chamada e o lançamento de notas ficam com duas linhas.

Resolva de um dos dois jeitos, o que for menos invasivo no seed — me diga qual escolheu:
- matricular mais alunos em `Ingles B2 - Manha` até uns **8**; ou
- apontar o acesso rápido "Professor" para a **Carla Dias**, que já tem a turma `Alemao A1 - Manha` cheia.

Nos alunos dessa turma, varie os dados para as telas não ficarem repetitivas:
- notas já lançadas em parte deles, com **pelo menos um reprovado por média** e **um reprovado por falta** (acima de 25%), além dos aprovados
- alguns com as duas notas ainda em branco, para aparecer *Em andamento*
- faltas diferentes entre os alunos, não todos zerados

**3 — Acentuação no seed**

O seed está todo sem acento: "Ingles", "Alemao", "Frances", "Manha", "Gestor Padrao", "Joao Pereira", "Material de escritorio". Isso aparece em **todas** as telas do sistema. Corrija a acentuação em nomes de turma, de pessoa, de idioma e de despesa. Se houver problema de encoding no arquivo (não é só texto sem acento), me avise em vez de sair trocando.

**4 — Ao terminar**

Rode o seed do zero, suba a aplicação e me diga:
- as credenciais que cada botão de acesso rápido usa agora
- o que mudou em cada um dos três pontos
- se algum teste quebrou

---

## Depois que ele terminar

Volte aqui e diga "seed novo aplicado". Vou recapturar:

| Print | O que muda |
|---|---|
| `15-aluno-financeiro.png` | passa a mostrar em aberto, atrasada e paga — e o botão de pagar por PIX |
| **novo** `18-aluno-pix.png` | a tela de pagamento em si |
| `10-chamada.png` | chamada com ~8 alunos em vez de 2 |
| `11-notas.png` | notas com a turma inteira |
| `12-boletim-turma.png` | boletim com aprovado, reprovado por média, reprovado por falta e em andamento na mesma tela |
| todos os outros | sem "Ingles"/"Manha" sem acento |
