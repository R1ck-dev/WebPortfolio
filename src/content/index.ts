// Registro de idiomas do portfólio.
//
// O texto de cada idioma vive num arquivo só dele; `tipos.ts` guarda a forma e o TypeScript
// acusa qualquer campo que falte de um lado. As rotas ficam em `rotas.ts`, sem conteúdo junto,
// para que o seletor de idioma no cliente não arraste os dois idiomas para o bundle.
//
// Para acrescentar um idioma: crie o arquivo de conteúdo, registre em `idiomas` aqui e em
// `rotas`, e acrescente o segmento em `generateStaticParams` do layout.

import en from "./en";
import pt from "./pt";
import type { Conteudo } from "./tipos";
import { LOCALE_PADRAO, localeValido } from "./rotas";

export const idiomas: Record<string, Conteudo> = { pt, en };

/** O conteúdo de um segmento de rota, caindo no padrão quando o segmento não existe. */
export function conteudoDe(valor: string | undefined): Conteudo {
  return idiomas[localeValido(valor) ? valor : LOCALE_PADRAO];
}

export {
  LOCALE_PADRAO,
  localeValido,
  localesDisponiveis,
  outroLocale,
  rotas,
  temAlternador,
} from "./rotas";

export type { Conteudo, Demo, Locale, Marco, Print, Projeto, Secao } from "./tipos";
