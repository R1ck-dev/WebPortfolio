import { conteudo } from "@/content";
import Reveal from "./Reveal";
import { Numero, Secao } from "./ui";

const { sobre } = conteudo;

export default function Sobre() {
  return (
    <Secao id="sobre" numero="01" titulo="Sobre">
      <div className="max-w-2xl space-y-6">
        {sobre.paragrafos.map((paragrafo, i) => (
          <Reveal key={i} delay={i * 80}>
            <p
              className={
                i === 0
                  ? "font-display text-2xl leading-snug text-ink text-pretty md:text-[1.75rem]"
                  : "text-base leading-relaxed text-ink-soft text-pretty"
              }
            >
              {paragrafo}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <dl className="mt-14 grid gap-8 border-t border-rule pt-8 sm:grid-cols-3">
          {sobre.destaques.map((destaque) => (
            <div key={destaque.rotulo}>
              <Numero valor={destaque.valor} rotulo={destaque.rotulo} />
            </div>
          ))}
        </dl>
      </Reveal>
    </Secao>
  );
}
