import { getConteudo, getSecao } from "@/content/servidor";
import Reveal from "./Reveal";
import { Secao } from "./ui";

export default async function Stack() {
  const { stack } = await getConteudo();

  return (
    <Secao secao={await getSecao("stack")}>
      <p className="max-w-2xl text-base leading-relaxed text-ink-soft text-pretty">{stack.intro}</p>

      <dl className="mt-12 space-y-px overflow-hidden rounded-sm border border-rule bg-rule">
        {stack.grupos.map((grupo, i) => (
          <Reveal key={grupo.grupo} delay={i * 50}>
            <div className="grid gap-3 bg-paper px-5 py-6 sm:grid-cols-[9rem_1fr] sm:gap-6 sm:px-7">
              <dt className="font-mono text-xs tracking-[0.16em] text-accent uppercase sm:pt-1">
                {grupo.grupo}
              </dt>
              <dd className="flex flex-wrap gap-x-3 gap-y-2">
                {grupo.itens.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-ink-soft after:ml-3 after:text-rule after:select-none after:content-['/'] last:after:content-['']"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>

      <Reveal delay={80}>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-ink-faint">
          {stack.idiomas.map((idioma) => (
            <p key={idioma.idioma}>
              {idioma.idioma}
              <span className="text-rule"> — </span>
              {idioma.nivel}
            </p>
          ))}
        </div>
      </Reveal>
    </Secao>
  );
}
