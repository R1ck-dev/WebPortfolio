import type { Conteudo } from "@/content";
import { getConteudo, getSecao } from "@/content/servidor";
import Reveal from "./Reveal";
import { IconeDocumento, IconeEmail, IconeGitHub, IconeLinkedIn, Secao, Seta } from "./ui";

/** Cada canal do conteúdo diz só o seu tipo; o destino e o ícone saem daqui. */
function destinosDe(perfil: Conteudo["perfil"]) {
  return {
    email: { href: `mailto:${perfil.email}`, Icone: IconeEmail, externo: false, baixar: false },
    linkedin: { href: perfil.linkedin, Icone: IconeLinkedIn, externo: true, baixar: false },
    github: { href: perfil.github, Icone: IconeGitHub, externo: true, baixar: false },
    curriculo: { href: perfil.curriculoPdf, Icone: IconeDocumento, externo: false, baixar: true },
  } as const;
}

export default async function Contato() {
  const { contato, perfil } = await getConteudo();
  const destinos = destinosDe(perfil);

  return (
    <Secao secao={await getSecao("contato")}>
      <Reveal>
        <p className="max-w-3xl font-display text-3xl leading-tight text-ink text-balance md:text-[2.75rem]">
          {contato.chamada}
        </p>
      </Reveal>

      <Reveal delay={80}>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft text-pretty">
          {contato.texto}
        </p>
      </Reveal>

      <Reveal delay={140}>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-rule bg-rule sm:grid-cols-2">
          {contato.canais.map((canal) => {
            const { href, Icone, externo, baixar } = destinos[canal.tipo];
            return (
              <li key={canal.rotulo} className="bg-paper">
                <a
                  href={href}
                  {...(externo ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                  {...(baixar ? { download: true } : {})}
                  className="group flex items-center justify-between gap-4 px-6 py-6 transition-colors duration-200 hover:bg-paper-raised"
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <Icone className="size-4 shrink-0 text-accent" />
                    <span className="min-w-0">
                      <span className="block font-mono text-[0.7rem] tracking-[0.16em] text-ink-faint uppercase">
                        {canal.rotulo}
                      </span>
                      <span className="mt-1 block truncate text-sm text-ink transition-colors group-hover:text-accent">
                        {canal.valor}
                      </span>
                    </span>
                  </span>
                  <Seta className="size-3.5 shrink-0 text-ink-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </a>
              </li>
            );
          })}
        </ul>
      </Reveal>

      <footer className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-rule pt-6 font-mono text-[0.7rem] text-ink-faint">
        <p>
          © {new Date().getFullYear()} {perfil.nome}
        </p>
        <p>
          {perfil.local}
          <span className="mx-2 text-rule">/</span>
          {contato.creditos}
        </p>
      </footer>
    </Secao>
  );
}
