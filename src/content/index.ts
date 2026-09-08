// Registro de idiomas do portfólio.
//
// Hoje só o português está registrado, e por isso não existe alternador na interface: um seletor
// com uma opção só é ruído. Para ligar o inglês:
//   1. crie `en.ts` exportando um `Conteudo` — o TypeScript acusa cada campo que faltar;
//   2. registre em `idiomas` aqui embaixo;
//   3. `temAlternador` passa a ser verdadeiro sozinho e o seletor aparece.

import pt from "./pt";
import type { Conteudo, Locale } from "./tipos";

export const idiomas: Partial<Record<Locale, Conteudo>> = { pt };

export const LOCALE_PADRAO: Locale = "pt";

export const conteudo = idiomas[LOCALE_PADRAO] as Conteudo;

export const localesDisponiveis = Object.keys(idiomas) as Locale[];

export const temAlternador = localesDisponiveis.length > 1;

export type { Conteudo, Demo, Locale, Marco, Print, Projeto, Secao } from "./tipos";
