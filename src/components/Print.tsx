import Image from "next/image";
import type { Print } from "@/content";

/** Largura útil da coluna de conteúdo: 80rem de página − 22rem de coluna fixa − 4rem de vão. */
export const LARGURA_CONTEUDO = "(min-width: 1024px) 54rem, 100vw";

/**
 * Moldura de print.
 *
 * Os prints são escuros (CodeInsights, BloodCrown) e claros (Escola, IFConecta) ao mesmo tempo.
 * A moldura acompanha o tom da imagem, não o da página: um print escuro sobre papel bege precisa
 * de uma borda que faça a transição, senão a imagem parece um buraco recortado na folha.
 */
export function Moldura({
  print,
  tom,
  sizes = LARGURA_CONTEUDO,
  className = "",
}: {
  print: Print;
  tom: "claro" | "escuro";
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={`group/print ${className}`}>
      <div
        className={`overflow-hidden rounded-sm border p-1 transition-colors duration-300 group-hover/print:border-accent/50 ${
          tom === "escuro" ? "moldura-escuro" : "moldura-claro"
        }`}
      >
        <Image
          src={print.imagem}
          alt={print.alt}
          sizes={sizes}
          placeholder="blur"
          className="w-full rounded-[2px] transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/print:scale-[1.012]"
        />
      </div>
      <figcaption className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-faint text-pretty">
        {print.legenda}
      </figcaption>
    </figure>
  );
}
