import type { ReactNode, SVGProps } from "react";
import type { Secao as SecaoDados } from "@/content";

/* --- Estrutura de seção ---------------------------------------------------
   Cabeçalho editorial: o número monoespaçado, um fio fino atravessando o resto
   da largura, e o título embaixo. O fio é o mesmo gesto de régua que a navegação
   da coluna usa — é a repetição que dá identidade. */

export function Secao({
  secao: { id, numero, titulo },
  children,
  className = "",
}: {
  /** A entrada de `secoes` no conteúdo: número e título vêm de lá, nunca do componente. */
  secao: SecaoDados;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className={`scroll-mt-24 py-20 md:py-28 ${className}`}>
      <header className="mb-12">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">{numero}</span>
          <span aria-hidden className="h-px flex-1 bg-rule" />
        </div>
        <h2
          id={`${id}-titulo`}
          className="mt-4 font-display text-4xl leading-none text-ink md:text-5xl"
        >
          {titulo}
        </h2>
      </header>
      {children}
    </section>
  );
}

/* --- Etiquetas ------------------------------------------------------------- */

export function Tag({
  children,
  tone = "neutro",
}: {
  children: ReactNode;
  tone?: "neutro" | "acento";
}) {
  const cores =
    tone === "acento"
      ? "border-accent/35 bg-accent/10 text-accent"
      : "border-rule bg-paper-raised text-ink-soft";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[0.7rem] tracking-wide ${cores}`}
    >
      {children}
    </span>
  );
}

export function Numero({ valor, rotulo }: { valor: string; rotulo: string }) {
  return (
    <div>
      <p className="font-display text-3xl leading-none text-accent tabular-nums md:text-4xl">
        {valor}
      </p>
      <p className="mt-1.5 text-sm leading-snug text-ink-faint text-pretty">{rotulo}</p>
    </div>
  );
}

/* --- Links ----------------------------------------------------------------- */

export function LinkExterno({
  href,
  children,
  destaque = false,
}: {
  href: string;
  children: ReactNode;
  destaque?: boolean;
}) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs tracking-wide transition-colors duration-200";
  const cores = destaque
    ? "bg-ink text-paper hover:bg-accent"
    : "border border-rule text-ink-soft hover:border-ink hover:text-ink";

  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={`${base} ${cores}`}>
      {children}
      <Seta className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

/* --- Ícones ---------------------------------------------------------------- */

export function Seta(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden {...props}>
      <path d="M3 9 9 3M4.2 3H9v4.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconeGitHub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38l-.01-1.49C3.8 14.16 3.33 12.9 3.33 12.9c-.36-.92-.88-1.17-.88-1.17-.72-.49.05-.48.05-.48.8.06 1.22.82 1.22.82.71 1.21 1.86.86 2.31.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

/** Globo com meridianos — ícone do seletor de idioma. */
export function IconeIdioma(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.4} aria-hidden {...props}>
      <circle cx="8" cy="8" r="6.25" />
      <path d="M1.75 8h12.5M8 1.75c1.6 1.7 2.5 3.9 2.5 6.25S9.6 12.55 8 14.25C6.4 12.55 5.5 10.35 5.5 8S6.4 3.45 8 1.75Z" />
    </svg>
  );
}

export function IconeLinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden {...props}>
      <path d="M3.4 4.6a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8ZM2.2 5.8h2.4v8.2H2.2V5.8Zm4 0h2.3v1.12h.03c.32-.6 1.1-1.24 2.27-1.24 2.43 0 2.88 1.55 2.88 3.57v4.75h-2.4V9.73c0-.87-.02-2-1.24-2-1.24 0-1.43.94-1.43 1.93v4.34H6.2V5.8Z" />
    </svg>
  );
}

export function IconeEmail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.3} aria-hidden {...props}>
      <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" />
      <path d="m2 4.5 6 4.2 6-4.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconeDocumento(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.3} aria-hidden {...props}>
      <path
        d="M9 1.5H4.5A1.5 1.5 0 0 0 3 3v10a1.5 1.5 0 0 0 1.5 1.5h7A1.5 1.5 0 0 0 13 13V5.5L9 1.5Z"
        strokeLinejoin="round"
      />
      <path d="M9 1.5v4h4" strokeLinejoin="round" />
    </svg>
  );
}

/** Cadeado — marca o projeto que roda só localmente, sem demo pública. */
export function IconeCadeado(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.3} aria-hidden {...props}>
      <rect x="3.5" y="7" width="9" height="7" rx="1.5" />
      <path d="M5.75 7V4.75a2.25 2.25 0 0 1 4.5 0V7" strokeLinecap="round" />
    </svg>
  );
}

export function IconeSol(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.3} aria-hidden {...props}>
      <circle cx="8" cy="8" r="3.1" />
      <path
        d="M8 1.4v1.7M8 12.9v1.7M14.6 8h-1.7M3.1 8H1.4M12.67 3.33l-1.2 1.2M4.53 11.47l-1.2 1.2M12.67 12.67l-1.2-1.2M4.53 4.53l-1.2-1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconeLua(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.3} aria-hidden {...props}>
      <path d="M13.4 9.86A5.8 5.8 0 0 1 6.14 2.6a5.8 5.8 0 1 0 7.26 7.26Z" strokeLinejoin="round" />
    </svg>
  );
}
