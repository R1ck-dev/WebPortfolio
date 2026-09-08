import type { Conteudo, Projeto } from "@/content";
import { getConteudo, getSecao } from "@/content/servidor";
import Galeria from "./Galeria";
import Reveal from "./Reveal";
import { IconeCadeado, IconeGitHub, Numero, Secao, Seta } from "./ui";

type Textos = Conteudo["ui"];

function Acoes({ projeto, ui }: { projeto: Projeto; ui: Textos }) {
  const { demo, repo } = projeto;

  return (
    <div className="flex flex-wrap items-center gap-3">
      {demo.situacao === "no-ar" ? (
        <a
          href={demo.href}
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 font-mono text-xs tracking-wide text-paper transition-colors duration-200 hover:bg-ink"
        >
          <span aria-hidden className="size-1.5 rounded-full bg-paper/80" />
          {demo.rotulo}
          <Seta className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      ) : (
        // Estado honesto: três dos quatro ainda não têm deploy. Dizer por quê vale mais
        // do que esconder — e o motivo é a resposta que o entrevistador faria em seguida.
        <p className="inline-flex items-center gap-2 rounded-full border border-dashed border-rule px-4 py-2 font-mono text-xs text-ink-faint">
          <IconeCadeado className="size-3.5 shrink-0" />
          {ui.semDemo}
        </p>
      )}

      <a
        href={repo}
        target="_blank"
        rel="noreferrer noopener"
        className="group inline-flex items-center gap-2 rounded-full border border-rule px-4 py-2 font-mono text-xs tracking-wide text-ink-soft transition-colors duration-200 hover:border-ink hover:text-ink"
      >
        <IconeGitHub className="size-3.5" />
        {ui.codigoNoGithub}
        <Seta className="size-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  );
}

function Cartao({ projeto, ui }: { projeto: Projeto; ui: Textos }) {
  const { carroChefe } = projeto;

  return (
    <article className="border-t border-rule pt-10">
      <header>
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
          <div className="flex flex-wrap items-baseline gap-4">
            <h3
              className={`font-display leading-none text-ink ${
                carroChefe ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"
              }`}
            >
              {projeto.nome}
            </h3>
            {carroChefe && (
              <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[0.65rem] tracking-[0.16em] whitespace-nowrap text-accent uppercase">
                {ui.carroChefe}
              </span>
            )}
          </div>
          <p className="font-mono text-xs text-ink-faint">
            {projeto.periodo}
            <span className="mx-2 text-rule">/</span>
            {projeto.contexto}
          </p>
        </div>
        <p className="mt-3 text-base text-ink-soft">{projeto.subtitulo}</p>
      </header>

      {/* O problema domina o cartão. Com quatro projetos de stack quase idêntica, é a única
          coisa que diferencia um do outro numa leitura de trinta segundos. */}
      <p
        className={`mt-8 max-w-3xl border-l-2 border-accent pl-5 font-display leading-snug text-ink text-pretty ${
          carroChefe ? "text-2xl md:text-[2rem]" : "text-xl md:text-2xl"
        }`}
      >
        {projeto.problema}
      </p>

      <div className="mt-10">
        <Galeria prints={projeto.prints} mobile={projeto.mobile} tom={projeto.tom} ui={ui} />
      </div>

      {projeto.estudoDeCaso && (
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-rule bg-rule md:grid-cols-3">
          {projeto.estudoDeCaso.map((etapa) => (
            <div key={etapa.rotulo} className="bg-paper px-6 py-7">
              <p className="font-mono text-[0.7rem] tracking-[0.18em] text-accent uppercase">
                {etapa.rotulo}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft text-pretty">{etapa.texto}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-14 grid gap-10 md:grid-cols-[1fr_14rem] md:gap-14">
        <dl className="space-y-6">
          {projeto.fatos.map((fato) => (
            <div key={fato.titulo} className="border-l border-rule pl-5 transition-colors duration-300 hover:border-accent">
              <dt className="text-base leading-snug font-medium text-ink text-pretty">
                {fato.titulo}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-soft text-pretty">{fato.texto}</dd>
            </div>
          ))}
        </dl>

        {/* São sempre três, iguais nos quatro projetos. No celular viram uma faixa de três
            colunas — com duas, o terceiro ficava órfão numa linha só dele. */}
        <aside className="md:border-l md:border-rule md:pl-8">
          <dl className="grid grid-cols-3 gap-4 md:grid-cols-1 md:gap-7">
            {projeto.numeros.map((numero) => (
              <div key={numero.rotulo}>
                <Numero valor={numero.valor} rotulo={numero.rotulo} />
              </div>
            ))}
          </dl>
        </aside>
      </div>

      {/* A stack fica em segundo plano de propósito: os quatro projetos a compartilham, então
          ela não informa nada sobre qual deles estamos lendo. */}
      <p className="mt-10 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.7rem] text-ink-faint">
        {projeto.stack.map((tecnologia) => (
          <span
            key={tecnologia}
            className="after:ml-3 after:text-rule after:select-none after:content-['·'] last:after:content-['']"
          >
            {tecnologia}
          </span>
        ))}
      </p>

      <div className="mt-8">
        <Acoes projeto={projeto} ui={ui} />
      </div>
    </article>
  );
}

export default async function Projetos() {
  const { projetos, ui } = await getConteudo();

  return (
    <Secao secao={await getSecao("projetos")}>
      <p className="max-w-2xl text-base leading-relaxed text-ink-soft text-pretty">
        {projetos.intro}
      </p>

      <div className="mt-16 space-y-28">
        {projetos.lista.map((projeto) => (
          <Reveal key={projeto.slug}>
            <Cartao projeto={projeto} ui={ui} />
          </Reveal>
        ))}
      </div>
    </Secao>
  );
}
