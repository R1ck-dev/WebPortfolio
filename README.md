# WebPortfolio

Portfólio web pessoal de Henrique Marangoni — apoio ao currículo em processos seletivos.

Página única, estática, em português. Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4.

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Onde mexer

| Quero mudar | Arquivo |
|---|---|
| Texto, projetos, experiência, stack, links | [`src/content/portfolio.ts`](src/content/portfolio.ts) |
| Cores, fontes, textura, animações | [`src/app/globals.css`](src/app/globals.css) |
| Título, descrição e Open Graph | [`src/app/layout.tsx`](src/app/layout.tsx) |
| Uma seção específica | `src/components/` (`Hero`, `Sobre`, `Projetos`, `Stack`, `Trajetoria`, `Contato`) |
| Currículo em PDF oferecido no site | `public/curriculo.pdf` |

Todo o conteúdo vive em um único arquivo (`src/content/portfolio.ts`); os componentes só o
apresentam. Para atualizar o site depois de mexer no currículo, edite esse arquivo.

## Design

"Papel & tinta": fundo bege quente, tinta quase-preta, acento terracota. Display em Instrument Serif,
texto em IBM Plex Sans, rótulos técnicos em IBM Plex Mono. Grid assimétrico com rail de rótulos
numerados à esquerda, textura de grão sobre a página e revelação suave no scroll.

O tema é claro por decisão de design (`color-scheme: light`), não por falta de dark mode.

As animações de revelação são progressive enhancement: sem JavaScript, o conteúdo aparece normalmente.

## Deploy

Previsto para a Vercel (`npm run build` sem passos extras). Remote:
`https://github.com/R1ck-dev/WebPortfolio.git`.

## Pendências

- `public/curriculo.pdf` é o PDF antigo de `CurriculoVsCode/`. Gere um novo (`curriculo.html` → Ctrl+P
  → salvar como PDF) e substitua.
- Confirmar os links dos repositórios no GitHub (`ifconecta`, `BloodCrown-CharacterSheet`,
  `CodeInsights`) — se algum for privado, remover o link do card.
