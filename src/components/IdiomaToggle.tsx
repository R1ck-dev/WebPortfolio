import Link from "next/link";
import { outroLocale, rotas, type Locale } from "@/content/rotas";
import { IconeIdioma } from "./ui";

/**
 * Seletor de idioma.
 *
 * É um <Link>, não um botão: a URL precisa mudar de verdade para que dê para mandar a versão
 * em inglês para alguém. O Next troca a página sem recarregar o navegador, então o clique
 * continua parecendo instantâneo.
 *
 * O texto visível é o nome do idioma de destino escrito nele mesmo ("English", "Português"):
 * quem precisa do seletor é justamente quem não lê a língua da página em que está, e reconhece
 * o próprio idioma pelo nome antes de reconhecer uma sigla.
 */
export default function IdiomaToggle({ atual, rotulo }: { atual: Locale; rotulo: string }) {
  const destino = rotas[outroLocale(atual)];

  return (
    <Link
      href={destino.caminho}
      hrefLang={destino.hrefLang}
      lang={destino.hrefLang}
      aria-label={rotulo}
      title={rotulo}
      className="inline-flex items-center gap-2 rounded-full border border-rule px-3.5 py-2 font-mono text-xs tracking-wide text-ink-soft transition-colors hover:border-ink hover:text-ink"
    >
      <IconeIdioma className="size-3.5" />
      {destino.nome}
    </Link>
  );
}
