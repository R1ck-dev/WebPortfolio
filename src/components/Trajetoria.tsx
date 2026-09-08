import type { Marco } from "@/content";
import { getConteudo, getSecao } from "@/content/servidor";
import Reveal from "./Reveal";
import { Secao, Tag } from "./ui";

function Item({ marco, indice, emCurso }: { marco: Marco; indice: number; emCurso: string }) {
  return (
    <Reveal as="li" delay={indice * 70} className="group relative block pb-12 pl-8 last:pb-0 md:pl-10">
      <>
        <span aria-hidden className="absolute top-2 left-0 h-full w-px bg-rule group-last:hidden" />
        <span
          aria-hidden
          className={`absolute top-1.5 left-0 size-2.5 -translate-x-1/2 rounded-full border ${
            marco.atual ? "border-accent bg-accent" : "border-rule bg-paper"
          }`}
        />

        <p className="font-mono text-xs tracking-wide text-ink-faint">
          {marco.periodo}
          {marco.atual && <span className="ml-3 text-accent">● {emCurso}</span>}
        </p>

        <h4 className="mt-2 font-display text-2xl leading-tight text-ink">{marco.cargo}</h4>
        <p className="mt-1 text-sm text-accent">{marco.organizacao}</p>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft text-pretty">
          {marco.descricao}
        </p>

        {marco.pontos && (
          <ul className="mt-4 max-w-2xl space-y-2.5">
            {marco.pontos.map((ponto, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent/70" />
                <span className="text-pretty">{ponto}</span>
              </li>
            ))}
          </ul>
        )}

        {marco.tags && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {marco.tags.map((tag) => (
              <li key={tag}>
                <Tag tone={marco.atual ? "acento" : "neutro"}>{tag}</Tag>
              </li>
            ))}
          </ul>
        )}
      </>
    </Reveal>
  );
}

export default async function Trajetoria() {
  const { trajetoria, ui } = await getConteudo();

  return (
    <Secao secao={await getSecao("trajetoria")}>
      <div className="space-y-16">
        {[
          { rotulo: trajetoria.rotuloExperiencia, marcos: trajetoria.experiencia },
          { rotulo: trajetoria.rotuloFormacao, marcos: trajetoria.formacao },
        ].map(({ rotulo, marcos }) => (
          <div key={rotulo}>
            <h3 className="font-mono text-xs tracking-[0.2em] text-ink-faint uppercase">{rotulo}</h3>
            <ol className="mt-8">
              {marcos.map((marco, i) => (
                <Item key={marco.organizacao} marco={marco} indice={i} emCurso={ui.emCurso} />
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Secao>
  );
}
