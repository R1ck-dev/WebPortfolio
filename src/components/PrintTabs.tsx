"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import type { Print } from "@/content";
import { LARGURA_CONTEUDO } from "./Print";

/**
 * Par de prints alternável — usado quando trocar de aba é a própria prova.
 *
 * No BloodCrown são a mesma mesa vista pelo mestre e pelo jogador: o que desaparece entre
 * as duas é a autorização por papel. Por isso as imagens ficam empilhadas e cruzam em
 * opacidade em vez de trocar: o olho compara o que sumiu, que é o argumento.
 */
export default function PrintTabs({ prints, tom }: { prints: Print[]; tom: "claro" | "escuro" }) {
  const [ativo, setAtivo] = useState(0);
  const base = useId();
  const abas = useRef<(HTMLButtonElement | null)[]>([]);

  function aoTeclar(evento: React.KeyboardEvent) {
    const passo = evento.key === "ArrowRight" ? 1 : evento.key === "ArrowLeft" ? -1 : 0;
    if (!passo) return;
    evento.preventDefault();
    const proximo = (ativo + passo + prints.length) % prints.length;
    setAtivo(proximo);
    abas.current[proximo]?.focus();
  }

  const { width, height } = prints[0].imagem;

  return (
    <div className="group/print">
      <div
        role="tablist"
        aria-label="Escolher o ponto de vista da mesa"
        onKeyDown={aoTeclar}
        className="mb-3 inline-flex gap-px overflow-hidden rounded-full border border-rule bg-rule"
      >
        {prints.map((print, i) => (
          <button
            key={print.aba}
            ref={(el) => {
              abas.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${base}-aba-${i}`}
            aria-selected={ativo === i}
            aria-controls={`${base}-painel`}
            tabIndex={ativo === i ? 0 : -1}
            onClick={() => setAtivo(i)}
            className={`px-4 py-1.5 font-mono text-[0.7rem] tracking-[0.12em] uppercase transition-colors duration-200 ${
              ativo === i
                ? "bg-ink text-paper"
                : "bg-paper text-ink-faint hover:bg-paper-raised hover:text-ink"
            }`}
          >
            {print.aba}
          </button>
        ))}
      </div>

      <figure>
        <div
          id={`${base}-painel`}
          role="tabpanel"
          aria-labelledby={`${base}-aba-${ativo}`}
          className={`relative overflow-hidden rounded-sm border p-1 transition-colors duration-300 group-hover/print:border-accent/50 ${
            tom === "escuro" ? "moldura-escuro" : "moldura-claro"
          }`}
          style={{ aspectRatio: `${width} / ${height}` }}
        >
          {prints.map((print, i) => (
            <Image
              key={print.aba}
              src={print.imagem}
              alt={print.alt}
              sizes={LARGURA_CONTEUDO}
              placeholder="blur"
              aria-hidden={ativo !== i}
              className={`absolute inset-1 h-auto w-[calc(100%-0.5rem)] rounded-[2px] transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                ativo === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <figcaption
          aria-live="polite"
          className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-faint text-pretty"
        >
          {prints[ativo].legenda}
        </figcaption>
      </figure>
    </div>
  );
}
