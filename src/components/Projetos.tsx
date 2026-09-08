import { conteudo, type Projeto } from "@/content";
import { LARGURA_CONTEUDO, Moldura } from "./Print";
import PrintTabs from "./PrintTabs";
import Reveal from "./Reveal";
import { IconeCadeado, IconeGitHub, Numero, Secao, Seta } from "./ui";

const { projetos, ui } = conteudo;

/* --- Prints ---------------------------------------------------------------- */

function Prints({ projeto }: { projeto: Projeto }) {
  const { apresentacao, prints, tom } = projeto;

  if (apresentacao === "tabs") {
    return <PrintTabs prints={prints} tom={tom} />;
  }

  if (apresentacao === "duo") {
    // Desktop + celular: proporções incompatíveis para alternar, mas o par é o argumento —
    // a régua da secretaria e o aluno pagando são as duas pontas do mesmo ciclo.
    const [amplo, estreito] = prints;
    return (
      <div className="grid gap-6 md:grid-cols-[1.85fr_1fr] md:items-start">
        <Moldura print={amplo} tom={tom} sizes="(min-width: 1024px) 34rem, 100vw" />
        <Moldura print={estreito} tom={tom} sizes="(min-width: 1024px) 18rem, (min-width: 768px) 33vw, 100vw" />
      </div>
    );
  }

  if (apresentacao === "galeria") {
    const [capa, ...resto] = prints;
    return (
      <div className="space-y-6">
        <Moldura print={capa} tom={tom} />
        <div className="grid gap-6 md:grid-cols-2">
          {resto.map((print) => (
            <Moldura
              key={print.alt}
              print={print}
              tom={tom}
              sizes="(min-width: 1024px) 26rem, (min-width: 768px) 50vw, 100vw"
            />
          ))}
        </div>
      </div>
    );
  }

  return <Moldura print={prints[0]} tom={tom} sizes={LARGURA_CONTEUDO} />;
}

/* --- Links do projeto ------------------------------------------------------ */

function Acoes({ projeto }: { projeto: Projeto }) {
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

      {projeto.aprofundar && (
        <a
          href={projeto.aprofundar.href}
          className="group inline-flex items-center gap-2 font-mono text-xs tracking-wide text-accent transition-colors hover:text-ink"
        >
          {projeto.aprofundar.rotulo}
          <span aria-hidden className="transition-transform duration-200 group-hover:translate-y-0.5">
            ↓
          </span>
        </a>
      )}
    </div>
  );
}

/* --- Cartão ---------------------------------------------------------------- */

function Cartao({ projeto }: { projeto: Projeto }) {
  const { carroChefe } = projeto;

  return (
    <article className="border-t border-rule pt-10">
      <header>
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
          <div className="flex items-baseline gap-4">
            <h3
              className={`font-display leading-none text-ink ${
                carroChefe ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"
              }`}
            >
              {projeto.nome}
            </h3>
            {carroChefe && (
              <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[0.65rem] tracking-[0.16em] text-accent uppercase">
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
        <Prints projeto={projeto} />
      </div>

      {projeto.estudoDeCaso && (
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-rule bg-rule md:grid-cols-3">
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

      <div className="mt-12 grid gap-10 md:grid-cols-[1fr_14rem] md:gap-14">
        <dl className="space-y-6">
          {projeto.fatos.map((fato) => (
            <div key={fato.titulo} className="border-l border-rule pl-5">
              <dt className="text-base leading-snug font-medium text-ink text-pretty">
                {fato.titulo}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-soft text-pretty">{fato.texto}</dd>
            </div>
          ))}
        </dl>

        <aside className="md:border-l md:border-rule md:pl-8">
          <dl className="grid grid-cols-2 gap-6 md:grid-cols-1 md:gap-7">
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
        <Acoes projeto={projeto} />
      </div>
    </article>
  );
}

export default function Projetos() {
  return (
    <Secao id="projetos" numero="02" titulo="Projetos">
      <p className="max-w-2xl text-base leading-relaxed text-ink-soft text-pretty">
        {projetos.intro}
      </p>

      <div className="mt-16 space-y-24">
        {projetos.lista.map((projeto, i) => (
          <Reveal key={projeto.slug} delay={i === 0 ? 0 : 60}>
            <Cartao projeto={projeto} />
          </Reveal>
        ))}
      </div>
    </Secao>
  );
}
