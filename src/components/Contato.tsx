import { perfil } from "@/content/portfolio";
import Reveal from "./Reveal";
import { IconeDocumento, IconeEmail, IconeGitHub, IconeLinkedIn, Seta } from "./ui";

const canais = [
  {
    rotulo: "E-mail",
    valor: perfil.email,
    href: `mailto:${perfil.email}`,
    Icone: IconeEmail,
    externo: false,
  },
  {
    rotulo: "LinkedIn",
    valor: perfil.linkedinLabel,
    href: perfil.linkedin,
    Icone: IconeLinkedIn,
    externo: true,
  },
  {
    rotulo: "GitHub",
    valor: perfil.githubLabel,
    href: perfil.github,
    Icone: IconeGitHub,
    externo: true,
  },
  {
    rotulo: "Currículo",
    valor: "baixar em PDF",
    href: perfil.curriculoPdf,
    Icone: IconeDocumento,
    externo: false,
  },
];

export default function Contato() {
  return (
    <section id="contato" className="relative overflow-hidden border-t border-rule/70 bg-ink text-paper">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-[9rem_1fr] md:gap-14">
          <header>
            <p className="font-mono text-xs tracking-[0.2em] text-accent-soft uppercase">05</p>
            <h2 className="mt-2 font-display text-3xl leading-none md:text-4xl">Contato</h2>
          </header>

          <div>
            <Reveal>
              <p className="max-w-2xl font-display text-3xl leading-tight text-balance md:text-[2.75rem]">
                Se você está contratando para backend Java, eu quero conversar.
              </p>
            </Reveal>

            <Reveal delay={90}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/70 text-pretty">
                Respondo e-mail no mesmo dia. Se preferir, o currículo completo em PDF está a um clique
                — e todo o código dos projetos está aberto no GitHub.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-paper/15 bg-paper/15 sm:grid-cols-2">
                {canais.map(({ rotulo, valor, href, Icone, externo }) => (
                  <li key={rotulo} className="bg-ink">
                    <a
                      href={href}
                      {...(externo
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : rotulo === "Currículo"
                          ? { download: true }
                          : {})}
                      className="group flex items-center justify-between gap-4 px-6 py-6 transition-colors hover:bg-paper/5"
                    >
                      <span className="flex items-center gap-4">
                        <Icone className="size-4 text-accent-soft" />
                        <span>
                          <span className="block font-mono text-[0.7rem] tracking-[0.16em] text-paper/50 uppercase">
                            {rotulo}
                          </span>
                          <span className="mt-1 block text-sm text-paper/90 transition-colors group-hover:text-accent-soft">
                            {valor}
                          </span>
                        </span>
                      </span>
                      <Seta className="size-3.5 text-paper/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-soft" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>

      <footer className="border-t border-paper/10">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-6 font-mono text-[0.7rem] text-paper/45 sm:px-10">
          <p>© {new Date().getFullYear()} {perfil.nome}</p>
          <p>{perfil.local} · Next.js e Tailwind CSS</p>
        </div>
      </footer>
    </section>
  );
}
