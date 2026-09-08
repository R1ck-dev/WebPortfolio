"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import type { Conteudo, Print } from "@/content";

type Textos = Conteudo["ui"];

/**
 * Visualizador de imagem em tela cheia.
 *
 * Usa o <dialog> nativo em vez de uma div com z-index: `showModal()` já entrega prisão de foco,
 * fechamento no Esc, inertização do resto da página e uma camada de fundo (::backdrop) — quatro
 * coisas que uma reimplementação em React erra com facilidade.
 */
export default function Lightbox({
  prints,
  indice,
  aoFechar,
  aoTrocar,
  ui,
}: {
  prints: Print[];
  /** Índice aberto, ou null com o visualizador fechado. */
  indice: number | null;
  aoFechar: () => void;
  aoTrocar: (proximo: number) => void;
  ui: Textos;
}) {
  const dialogo = useRef<HTMLDialogElement>(null);
  const aberto = indice !== null;

  // O <dialog> é imperativo: abre e fecha por método, não por prop. Sincronizamos o elemento
  // com o estado em vez de espelhar o estado no elemento.
  useEffect(() => {
    const el = dialogo.current;
    if (!el) return;
    if (aberto && !el.open) el.showModal();
    if (!aberto && el.open) el.close();
  }, [aberto]);

  // Trava a rolagem de fundo: sem isso, rolar sobre a camada move a página atrás dela.
  //
  // Escreve e apaga a propriedade em vez de guardar o valor anterior: no StrictMode o efeito
  // roda duas vezes, e a segunda passada leria o "hidden" que a primeira acabou de escrever —
  // restaurando "hidden" no fim e deixando a página travada depois de fechar.
  useEffect(() => {
    if (!aberto) return;
    document.body.style.setProperty("overflow", "hidden");
    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [aberto]);

  const navegar = useCallback(
    (passo: number) => {
      if (indice === null) return;
      aoTrocar((indice + passo + prints.length) % prints.length);
    },
    [indice, prints.length, aoTrocar],
  );

  function aoTeclar(evento: React.KeyboardEvent<HTMLDialogElement>) {
    if (evento.key === "ArrowRight") {
      evento.preventDefault();
      navegar(1);
    } else if (evento.key === "ArrowLeft") {
      evento.preventDefault();
      navegar(-1);
    }
  }

  const varios = prints.length > 1;

  return (
    <dialog
      ref={dialogo}
      onClose={aoFechar}
      onKeyDown={aoTeclar}
      // Clique fora da figura fecha. O <dialog> recebe o clique do backdrop nele mesmo,
      // então basta conferir que o alvo é o próprio diálogo.
      onClick={(e) => {
        if (e.target === dialogo.current) aoFechar();
      }}
      aria-label={indice === null ? undefined : prints[indice].alt}
      className="max-h-none max-w-none bg-transparent p-0 backdrop:bg-overlay/92 backdrop:backdrop-blur-sm"
    >
      {indice !== null && (
        <div className="flex h-screen w-screen flex-col items-center justify-center gap-4 p-4 sm:p-8">
          <div className="flex w-full max-w-[1400px] items-center justify-between gap-4">
            <p className="font-mono text-xs text-overlay-ink/70 tabular-nums">
              {varios && `${indice + 1} / ${prints.length}`}
            </p>
            <button
              type="button"
              onClick={aoFechar}
              aria-label={ui.fecharImagem}
              className="inline-flex size-9 items-center justify-center rounded-full border border-overlay-ink/25 text-overlay-ink/80 transition-colors hover:border-overlay-ink hover:text-overlay-ink"
            >
              <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                <path d="m4 4 8 8M12 4l-8 8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="flex w-full min-h-0 max-w-[1400px] flex-1 items-center gap-3">
            {varios && (
              <BotaoNavegar rotulo={ui.imagemAnterior} onClick={() => navegar(-1)} sentido="anterior" />
            )}

            <figure className="flex min-h-0 flex-1 flex-col items-center gap-4">
              <Image
                key={prints[indice].imagem.src}
                src={prints[indice].imagem}
                alt={prints[indice].alt}
                sizes="92vw"
                placeholder="blur"
                className="animate-[surgir_0.32s_var(--ease-out-soft)_both] max-h-[70vh] w-auto rounded-sm object-contain"
              />
              <figcaption className="max-w-3xl text-center text-sm leading-relaxed text-overlay-ink/80 text-pretty">
                {prints[indice].legenda}
              </figcaption>
            </figure>

            {varios && (
              <BotaoNavegar rotulo={ui.proximaImagem} onClick={() => navegar(1)} sentido="proxima" />
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}

function BotaoNavegar({
  rotulo,
  onClick,
  sentido,
}: {
  rotulo: string;
  onClick: () => void;
  sentido: "anterior" | "proxima";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={rotulo}
      className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-overlay-ink/25 text-overlay-ink/80 transition-colors hover:border-overlay-ink hover:text-overlay-ink"
    >
      <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          d={sentido === "anterior" ? "M10 3 5 8l5 5" : "M6 3l5 5-5 5"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
