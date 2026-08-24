import { perfil } from "@/content/portfolio";
import { IconeEmail, IconeGitHub, IconeLinkedIn, Seta } from "./ui";

/** Camadas hexagonais — referência visual à arquitetura hexagonal do backend. */
function Hexagonos() {
  const camadas = [
    { escala: 1, opacidade: 0.9, largura: 1.1 },
    { escala: 0.74, opacidade: 0.65, largura: 1 },
    { escala: 0.48, opacidade: 0.45, largura: 1 },
  ];

  return (
    <svg
      viewBox="-130 -130 260 260"
      className="drift h-full w-full"
      role="img"
      aria-label="Três hexágonos concêntricos representando as camadas da arquitetura hexagonal"
    >
      {camadas.map((camada, i) => (
        <polygon
          key={camada.escala}
          points="0,-100 86.6,-50 86.6,50 0,100 -86.6,50 -86.6,-50"
          transform={`scale(${camada.escala})`}
          fill="none"
          stroke={i === 2 ? "var(--color-accent)" : "var(--color-ink)"}
          strokeOpacity={camada.opacidade * (i === 2 ? 1 : 0.35)}
          strokeWidth={camada.largura}
          pathLength={1}
          strokeDasharray={1}
          style={{ animation: `draw 1.8s ${0.35 + i * 0.28}s var(--ease-out-soft) both` }}
        />
      ))}
      <circle cx="0" cy="0" r="4" fill="var(--color-accent)" />
      {[0, 60, 120, 180, 240, 300].map((angulo) => (
        <circle
          key={angulo}
          cx={Math.cos((angulo * Math.PI) / 180) * 86.6}
          cy={Math.sin((angulo * Math.PI) / 180) * 86.6}
          r="3"
          fill="var(--color-ink)"
          fillOpacity="0.5"
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div aria-hidden className="blueprint pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-16 pb-20 sm:px-10 md:pt-24 md:pb-28">
        <div className="grid items-center gap-14 md:grid-cols-[1.35fr_1fr]">
          <div>
            <p
              className="rise font-mono text-xs tracking-[0.24em] text-accent uppercase"
              style={{ animationDelay: "0.05s" }}
            >
              {perfil.cargo} · {perfil.nivel}
            </p>

            <h1
              className="rise mt-5 font-display text-[clamp(2.75rem,8vw,5.25rem)] leading-[0.92] text-ink"
              style={{ animationDelay: "0.15s" }}
            >
              Henrique <span className="block text-accent">Marangoni</span>
            </h1>

            <p
              className="rise mt-7 max-w-xl text-lg leading-relaxed text-ink-soft text-pretty"
              style={{ animationDelay: "0.28s" }}
            >
              {perfil.tagline}
            </p>

            <div
              className="rise mt-8 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-mono text-xs tracking-wide text-paper transition-colors hover:bg-accent"
              >
                Ver projetos
                <Seta className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={`mailto:${perfil.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-rule px-5 py-2.5 font-mono text-xs tracking-wide text-ink-soft transition-colors hover:border-ink hover:text-ink"
              >
                <IconeEmail className="size-3.5" />
                Entrar em contato
              </a>
            </div>

            <ul
              className="rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-ink-faint"
              style={{ animationDelay: "0.52s" }}
            >
              <li>
                <a
                  href={perfil.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <IconeGitHub className="size-3.5" />
                  {perfil.githubLabel}
                </a>
              </li>
              <li>
                <a
                  href={perfil.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <IconeLinkedIn className="size-3.5" />
                  {perfil.linkedinLabel}
                </a>
              </li>
              <li className="hidden sm:block">{perfil.formacaoCurta}</li>
            </ul>
          </div>

          <div
            className="rise relative mx-auto hidden aspect-square w-full max-w-sm md:block"
            style={{ animationDelay: "0.32s" }}
          >
            <Hexagonos />
            <div className="absolute inset-x-0 -bottom-2 text-center font-mono text-[0.65rem] tracking-[0.2em] text-ink-faint uppercase">
              domínio no centro
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
