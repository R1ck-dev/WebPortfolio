"use client";

import { useSyncExternalStore } from "react";
import { conteudo } from "@/content";
import { IconeLua, IconeSol } from "./ui";

const { ui } = conteudo;

/* O tema mora na classe do <html>, aplicada pelo script inline do layout antes da primeira
   pintura. Ele é, para o React, um sistema externo: lemos por assinatura em vez de espelhar
   em estado, o que evita renderização em cascata e mantém o botão correto mesmo se a classe
   for trocada por fora (o próprio script, ou o devtools). */
function assinar(aoMudar: () => void) {
  const observer = new MutationObserver(aoMudar);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

const lerNoCliente = () => document.documentElement.classList.contains("dark");

// No servidor não há classe para ler. O valor só decide o rótulo acessível, nunca o que se vê:
// os ícones são resolvidos por CSS, então não há piscada entre o HTML e a hidratação.
const lerNoServidor = () => false;

export default function TemaToggle() {
  const escuro = useSyncExternalStore(assinar, lerNoCliente, lerNoServidor);

  function alternar() {
    const raiz = document.documentElement;
    const proximo = !raiz.classList.contains("dark");

    // A transição é ligada só durante a troca. Deixá-la sempre ativa faria cada hover
    // de cor arrastar; sem ela, a troca é um corte seco.
    raiz.classList.add("trocando-tema");
    raiz.classList.toggle("dark", proximo);

    try {
      localStorage.setItem("tema", proximo ? "escuro" : "claro");
    } catch {
      // Navegação privada ou storage bloqueado: o tema vale para esta visita e pronto.
    }

    window.setTimeout(() => raiz.classList.remove("trocando-tema"), 360);
  }

  const rotulo = escuro ? ui.temaClaro : ui.temaEscuro;

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={rotulo}
      title={rotulo}
      className="inline-flex size-9 items-center justify-center rounded-full border border-rule text-ink-soft transition-colors hover:border-ink hover:text-ink"
    >
      <IconeSol className="size-4 dark:hidden" />
      <IconeLua className="hidden size-4 dark:block" />
    </button>
  );
}
