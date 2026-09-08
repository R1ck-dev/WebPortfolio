// Onde cada idioma mora — deliberadamente separado de `index.ts`.
//
// O seletor de idioma roda no cliente. Se ele importasse de `index.ts`, arrastaria `pt.ts` e
// `en.ts` inteiros para o bundle do navegador só para descobrir que "/en" existe. Este arquivo
// não importa conteúdo nenhum, então o seletor custa algumas dezenas de bytes.

import type { Locale } from "./tipos";

export type { Locale };

export const LOCALE_PADRAO: Locale = "pt";

/**
 * `curto` e `nome` são iguais nos dois idiomas de propósito: um seletor que escreve "Inglês"
 * em português é inútil para quem não lê português — que é justamente quem precisa dele.
 *
 * O português mora em `/`; `/pt` também responde, e o rewrite em `next.config.ts` é o que faz
 * a raiz servi-lo. Por isso a canônica do português aponta para `/`.
 */
export const rotas: Record<Locale, { caminho: string; curto: string; nome: string; hrefLang: string }> = {
  pt: { caminho: "/", curto: "PT", nome: "Português", hrefLang: "pt-BR" },
  en: { caminho: "/en", curto: "EN", nome: "English", hrefLang: "en" },
};

export const localesDisponiveis = Object.keys(rotas) as Locale[];

export const temAlternador = localesDisponiveis.length > 1;

/** Verdadeiro para os segmentos de rota que existem. É o que faz `/xx` dar 404. */
export function localeValido(valor: string | undefined): valor is Locale {
  return valor !== undefined && valor in rotas;
}

/** O outro idioma — com dois, é para onde o seletor aponta. */
export function outroLocale(atual: Locale): Locale {
  return localesDisponiveis.find((l) => l !== atual) ?? atual;
}
