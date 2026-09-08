"use client";

import Image from "next/image";
import { useState } from "react";
import type { Conteudo, Print } from "@/content";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

type Textos = Conteudo["ui"];

/* Larguras de renderização, para o next/image não baixar 1600px onde cabem 400.
   Coluna de conteúdo = 80rem de página − 22rem de coluna fixa − 4rem de vão = 54rem. */
const LARGURA_CHEIA = "(min-width: 1024px) 54rem, 100vw";
const LARGURA_METADE = "(min-width: 1024px) 26rem, (min-width: 768px) 50vw, 100vw";
const LARGURA_CELULAR = "(min-width: 640px) 13rem, 30vw";

function Ampliar({ ui }: { ui: Textos }) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-ink/80 px-2.5 py-1.5 font-mono text-[0.65rem] tracking-wide text-paper opacity-0 backdrop-blur-sm transition-all duration-300 group-hover/print:translate-y-0 group-hover/print:opacity-100 group-focus-visible/print:opacity-100 translate-y-1"
    >
      <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
        <path d="M6.5 2.5h-4v4M9.5 13.5h4v-4M13.5 6.5v-4h-4M2.5 9.5v4h4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {ui.ampliar}
    </span>
  );
}

/** Uma tela da galeria: moldura no tom da imagem, legenda embaixo, clique para ampliar. */
function Tela({
  print,
  tom,
  sizes,
  aoAbrir,
  atraso,
  ui,
  celular = false,
  className = "",
}: {
  print: Print;
  tom: "claro" | "escuro";
  sizes: string;
  aoAbrir: () => void;
  atraso: number;
  ui: Textos;
  celular?: boolean;
  className?: string;
}) {
  return (
    <Reveal delay={atraso} className={className}>
      <figure className="group/print">
        <button
          type="button"
          onClick={aoAbrir}
          aria-label={`${ui.ampliar}: ${print.alt}`}
          className={`relative block w-full overflow-hidden border p-1 transition-colors duration-300 group-hover/print:border-accent/50 ${
            celular ? "rounded-xl" : "rounded-sm"
          } ${tom === "escuro" ? "moldura-escuro" : "moldura-claro"}`}
        >
          <Image
            src={print.imagem}
            alt={print.alt}
            sizes={sizes}
            placeholder="blur"
            className={`w-full transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/print:scale-[1.015] ${
              celular ? "rounded-lg" : "rounded-[2px]"
            }`}
          />
          <Ampliar ui={ui} />
        </button>
        {/* Na faixa de celular a legenda só entra a partir de sm: com três colunas num telefone,
            cada uma teria ~100px e viraria uma tira ilegível. O texto continua no alt da imagem
            e no visualizador em tela cheia, então nada se perde para quem toca ou usa leitor. */}
        <figcaption
          className={`mt-3 leading-relaxed text-ink-faint text-pretty ${
            celular ? "hidden text-xs sm:block" : "max-w-2xl text-sm"
          }`}
        >
          {print.legenda}
        </figcaption>
      </figure>
    </Reveal>
  );
}

/**
 * Galeria de telas de um projeto.
 *
 * Regra única de layout, sem exceção por projeto: a primeira tela abre em largura cheia e as
 * demais caem numa grade de duas colunas — se sobrar um número ímpar, a última ocupa a linha
 * inteira em vez de deixar um buraco. As telas de celular ficam numa faixa só delas: misturar
 * 2,34:1 com retrato na mesma grade é o que quebrava o ritmo da página.
 */
export default function Galeria({
  prints,
  mobile,
  tom,
  ui,
}: {
  prints: Print[];
  mobile?: Print[];
  tom: "claro" | "escuro";
  ui: Textos;
}) {
  const [aberta, setAberta] = useState<number | null>(null);

  // O visualizador percorre tudo do projeto, paisagem e retrato, numa sequência só.
  const todas = mobile ? [...prints, ...mobile] : prints;
  const [destaque, ...resto] = prints;

  return (
    <div className="space-y-8">
      <Tela
        print={destaque}
        tom={tom}
        sizes={LARGURA_CHEIA}
        aoAbrir={() => setAberta(0)}
        atraso={0}
        ui={ui}
      />

      {resto.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2">
          {resto.map((print, i) => {
            const sozinhaNaLinha = resto.length % 2 === 1 && i === resto.length - 1;
            return (
              <Tela
                key={print.imagem.src}
                print={print}
                tom={tom}
                sizes={sozinhaNaLinha ? LARGURA_CHEIA : LARGURA_METADE}
                aoAbrir={() => setAberta(i + 1)}
                atraso={(i % 2) * 70}
                ui={ui}
                className={sozinhaNaLinha ? "md:col-span-2" : undefined}
              />
            );
          })}
        </div>
      )}

      {mobile && mobile.length > 0 && (
        <div className="border-t border-rule pt-8">
          <p className="font-mono text-xs tracking-[0.18em] text-ink-faint uppercase">
            {ui.telasDoCelular}
          </p>
          <div className="mt-5 grid max-w-2xl grid-cols-3 gap-4 sm:gap-6">
            {mobile.map((print, i) => (
              <Tela
                key={print.imagem.src}
                print={print}
                tom={tom}
                sizes={LARGURA_CELULAR}
                aoAbrir={() => setAberta(prints.length + i)}
                atraso={i * 70}
                ui={ui}
                celular
              />
            ))}
          </div>
        </div>
      )}

      <Lightbox
        prints={todas}
        indice={aberta}
        aoFechar={() => setAberta(null)}
        aoTrocar={setAberta}
        ui={ui}
      />
    </div>
  );
}
