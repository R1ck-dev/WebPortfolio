import "server-only";

import { lang } from "next/root-params";
import { conteudoDe, type Conteudo, type Secao } from "./index";

/**
 * O conteúdo do idioma da rota atual, para Server Components.
 *
 * `lang` é um root param: como o segmento `[lang]` fica acima do layout raiz, qualquer Server
 * Component consegue lê-lo sem receber prop de ninguém. Isso é o que evita atravessar o idioma
 * por dez componentes até chegar numa legenda de imagem.
 *
 * Componentes de cliente não têm acesso a isto — recebem por prop só as strings que usam.
 */
export async function getConteudo(): Promise<Conteudo> {
  return conteudoDe(await lang());
}

/**
 * O cabeçalho de uma seção — número e título — pelo id da âncora.
 *
 * Busca pelo id em vez de índice: a ordem de `secoes` é a da navegação, e indexá-la faria
 * um reordenamento trocar os cabeçalhos em silêncio. Se o id não existir num idioma, o build
 * quebra em vez de renderizar uma seção sem título.
 */
export async function getSecao(id: string): Promise<Secao> {
  const { secoes } = await getConteudo();
  const secao = secoes.find((s) => s.id === id);
  if (!secao) throw new Error(`Seção "${id}" não existe em secoes — conteúdo fora de sincronia.`);
  return secao;
}
