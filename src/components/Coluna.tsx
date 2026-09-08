"use client";

import { useEffect, useState } from "react";
import { conteudo } from "@/content";
import TemaToggle from "./TemaToggle";
import { IconeDocumento, IconeEmail, IconeGitHub, IconeLinkedIn, Seta } from "./ui";

const { perfil, secoes, ui } = conteudo;

/** Linha de leitura: a altura da viewport onde se considera que a vista "está". */
const LINHA_DE_LEITURA = 0.3;

/**
 * Marca a seção que está sendo lida.
 *
 * Comparar `intersectionRatio` entre seções não serve aqui: a razão é sobre a altura do
 * próprio alvo, então Projetos (muito alta) fica sempre com uma fração minúscula e Contato
 * (curta) com 1 — a seção curta venceria mesmo fora da vista. O critério que funciona é
 * posicional: a última seção cujo topo já passou da linha de leitura.
 */
function useSecaoAtiva(ids: string[]) {
  const [ativa, setAtiva] = useState(ids[0]);

  useEffect(() => {
    let quadro = 0;

    const medir = () => {
      quadro = 0;
      const linha = window.innerHeight * LINHA_DE_LEITURA;

      let atual = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= linha) atual = id;
      }

      // No fim da página a última seção pode nunca alcançar a linha — sem isto, rolar até
      // o rodapé deixaria a penúltima marcada.
      const fim = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      setAtiva(fim ? ids[ids.length - 1] : atual);
    };

    const agendar = () => {
      if (!quadro) quadro = requestAnimationFrame(medir);
    };

    // Agendado, e não chamado direto: medir no corpo do efeito seria setState síncrono.
    agendar();
    window.addEventListener("scroll", agendar, { passive: true });
    window.addEventListener("resize", agendar);

    return () => {
      if (quadro) cancelAnimationFrame(quadro);
      window.removeEventListener("scroll", agendar);
      window.removeEventListener("resize", agendar);
    };
  }, [ids]);

  return ativa;
}

const IDS = secoes.map((s) => s.id);

export default function Coluna() {
  const ativa = useSecaoAtiva(IDS);

  return (
    <header className="relative lg:sticky lg:top-0 lg:flex lg:h-screen lg:max-h-screen lg:flex-col lg:justify-between lg:py-20">
      <div aria-hidden className="blueprint pointer-events-none absolute -inset-x-6 -top-10 bottom-0 -z-10" />

      <div>
        <p
          className="rise font-mono text-[0.68rem] tracking-[0.18em] text-accent uppercase"
          style={{ animationDelay: "0.05s" }}
        >
          {perfil.cargo} · {perfil.nivel}
        </p>

        <h1
          className="rise mt-5 font-display text-[clamp(2.75rem,7vw,4.5rem)] leading-[0.9] text-ink"
          style={{ animationDelay: "0.14s" }}
        >
          Henrique
          <span className="block text-accent">Marangoni</span>
        </h1>

        <p
          className="rise mt-6 max-w-md text-lg leading-relaxed text-ink-soft text-pretty lg:max-w-xs"
          style={{ animationDelay: "0.26s" }}
        >
          {perfil.tese}
        </p>

        {/* A navegação só aparece onde a coluna fica de fato parada. No celular ela seria
            uma lista de âncoras logo acima do conteúdo que elas apontam — ruído, não ajuda. */}
        <nav
          aria-label={ui.navegacaoPrincipal}
          className="rise mt-14 hidden lg:block"
          style={{ animationDelay: "0.38s" }}
        >
          <ul className="space-y-1">
            {secoes.map((secao) => {
              const atual = ativa === secao.id;
              return (
                <li key={secao.id}>
                  <a
                    href={`#${secao.id}`}
                    aria-current={atual ? "true" : undefined}
                    className="group flex items-center gap-4 py-2"
                  >
                    {/* O fio que cresce é a mesma régua do cabeçalho de seção. */}
                    <span
                      aria-hidden
                      className={`h-px transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        atual
                          ? "w-16 bg-accent"
                          : "w-6 bg-rule group-hover:w-16 group-hover:bg-ink-soft"
                      }`}
                    />
                    <span
                      className={`font-mono text-xs tracking-[0.14em] uppercase transition-colors duration-200 ${
                        atual ? "text-accent" : "text-ink-faint group-hover:text-ink"
                      }`}
                    >
                      {secao.titulo}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="rise mt-10 lg:mt-0" style={{ animationDelay: "0.5s" }}>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projetos"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-mono text-xs tracking-wide text-paper transition-colors hover:bg-accent lg:hidden"
          >
            {ui.verProjetos}
            <Seta className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={perfil.curriculoPdf}
            download
            className="inline-flex items-center gap-2 rounded-full border border-rule px-4 py-2 font-mono text-xs tracking-wide text-ink-soft transition-colors hover:border-ink hover:text-ink"
          >
            <IconeDocumento className="size-3.5" />
            {ui.curriculo}
          </a>
          <TemaToggle />
        </div>

        <ul className="mt-6 flex items-center gap-5">
          {[
            { href: perfil.github, Icone: IconeGitHub, rotulo: `GitHub — ${perfil.githubLabel}` },
            { href: perfil.linkedin, Icone: IconeLinkedIn, rotulo: `LinkedIn — ${perfil.linkedinLabel}` },
            { href: `mailto:${perfil.email}`, Icone: IconeEmail, rotulo: `E-mail — ${perfil.email}` },
          ].map(({ href, Icone, rotulo }) => (
            <li key={href}>
              <a
                href={href}
                {...(href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noreferrer noopener" })}
                aria-label={rotulo}
                title={rotulo}
                className="block text-ink-faint transition-all duration-200 hover:-translate-y-0.5 hover:text-accent"
              >
                <Icone className="size-[18px]" />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-6 font-mono text-[0.7rem] leading-relaxed text-ink-faint">
          {perfil.formacaoCurta}
          <span className="mx-2 text-rule">/</span>
          {perfil.local}
        </p>
      </div>
    </header>
  );
}
