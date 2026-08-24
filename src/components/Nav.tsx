import { perfil, secoes } from "@/content/portfolio";
import { IconeDocumento } from "./ui";

export default function Nav() {
  return (
    <header className="no-print sticky top-0 z-50 border-b border-rule/60 bg-paper/80 backdrop-blur-md">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-3.5 sm:px-10"
      >
        <a href="#topo" className="group flex items-baseline gap-2">
          <span className="font-display text-lg leading-none text-ink">HM</span>
          <span className="hidden font-mono text-[0.7rem] tracking-[0.18em] text-ink-faint uppercase transition-colors group-hover:text-accent sm:inline">
            backend java
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {secoes.map((secao) => (
            <li key={secao.id}>
              <a
                href={`#${secao.id}`}
                className="group flex items-baseline gap-1.5 font-mono text-xs tracking-wide text-ink-soft transition-colors hover:text-accent"
              >
                <span className="text-[0.65rem] text-ink-faint transition-colors group-hover:text-accent">
                  {secao.numero}
                </span>
                {secao.titulo}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={perfil.curriculoPdf}
          download
          className="inline-flex items-center gap-2 rounded-full border border-ink px-3.5 py-1.5 font-mono text-[0.7rem] tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          <IconeDocumento className="size-3.5" />
          Currículo
        </a>
      </nav>
    </header>
  );
}
