import { projetos, type Projeto } from "@/content/portfolio";
import Reveal from "./Reveal";
import { LinkExterno, Numero, Secao, Tag } from "./ui";

function Cartao({ projeto, indice }: { projeto: Projeto; indice: number }) {
  return (
    <Reveal delay={indice * 80}>
      <article className="group relative border-t border-rule pt-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <div>
            <h3 className="font-display text-3xl leading-none text-ink transition-colors group-hover:text-accent md:text-[2.5rem]">
              {projeto.nome}
            </h3>
            <p className="mt-2 text-base text-ink-soft">{projeto.subtitulo}</p>
          </div>
          <div className="text-right font-mono text-xs text-ink-faint">
            <p>{projeto.periodo}</p>
            <p className="mt-1">{projeto.contexto}</p>
          </div>
        </div>

        <div className="mt-7 grid gap-8 md:grid-cols-[1fr_15rem] md:gap-12">
          <div>
            <p className="border-l-2 border-accent/60 pl-4 text-base leading-relaxed text-ink text-pretty italic">
              {projeto.problema}
            </p>

            <ul className="mt-6 space-y-3">
              {projeto.construcao.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <span
                    aria-hidden
                    className="mt-2 size-1 shrink-0 rounded-full bg-accent/70"
                  />
                  <span className="text-pretty">{item}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-7 flex flex-wrap gap-2">
              {projeto.stack.map((tecnologia) => (
                <li key={tecnologia}>
                  <Tag>{tecnologia}</Tag>
                </li>
              ))}
            </ul>
          </div>

          <aside className="md:border-l md:border-rule md:pl-8">
            <dl className="grid grid-cols-2 gap-6 md:grid-cols-1 md:gap-7">
              {projeto.numeros.map((numero) => (
                <div key={numero.rotulo}>
                  <Numero valor={numero.valor} rotulo={numero.rotulo} />
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-2">
              {projeto.links.map((link) => (
                <LinkExterno key={link.href} href={link.href} destaque={link.destaque}>
                  {link.rotulo}
                </LinkExterno>
              ))}
            </div>
          </aside>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projetos() {
  return (
    <Secao id="projetos" numero="02" titulo="Projetos">
      <p className="max-w-2xl text-base leading-relaxed text-ink-soft text-pretty">
        Três sistemas construídos do zero — o problema que cada um resolve, as decisões de arquitetura
        que tomei e o que dá para conferir no código.
      </p>

      <div className="mt-14 space-y-16">
        {projetos.map((projeto, i) => (
          <Cartao key={projeto.slug} projeto={projeto} indice={i} />
        ))}
      </div>
    </Secao>
  );
}
