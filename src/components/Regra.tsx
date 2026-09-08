"use client";

import { useEffect, useRef, useState } from "react";
import { conteudo } from "@/content";
import { Secao } from "./ui";

const { regra } = conteudo;

/* A regra, exatamente como está escrita no rodapé da tela financeira da Escola de Idiomas:
   multa de 2% sobre o valor + mora de R$ 1,00 por dia, com a mora limitada a 30 dias. */
const MULTA = 0.02;
const MORA_POR_DIA = 1;
const TETO_DIAS = 30;
const MAX_DIAS = 60;

const dinheiro = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

function calcular(valor: number, dias: number) {
  const diasDeMora = Math.min(dias, TETO_DIAS);
  const multa = dias > 0 ? valor * MULTA : 0;
  const mora = diasDeMora * MORA_POR_DIA;
  return { multa, mora, diasDeMora, total: valor + multa + mora, noTeto: dias > TETO_DIAS };
}

/** Uma linha do recibo, com o valor e a fatia que ela ocupa na barra de composição. */
function Linha({
  operador,
  rotulo,
  detalhe,
  valor,
  destaque = false,
  selo,
}: {
  operador?: string;
  rotulo: string;
  detalhe?: string;
  valor: number;
  destaque?: boolean;
  selo?: string;
}) {
  return (
    <tr className={destaque ? "border-t border-ink/25" : undefined}>
      <td className="py-2 pr-4 align-baseline">
        <span aria-hidden className="mr-3 inline-block w-3 font-mono text-ink-faint">
          {operador ?? ""}
        </span>
        <span className={destaque ? "text-ink" : "text-ink-soft"}>{rotulo}</span>
        {detalhe && <span className="ml-2 font-mono text-xs text-ink-faint">{detalhe}</span>}
        {selo && (
          <span className="ml-2 inline-block rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[0.6rem] tracking-[0.14em] whitespace-nowrap text-accent uppercase">
            {selo}
          </span>
        )}
      </td>
      <td
        className={`py-2 text-right font-mono tabular-nums ${
          destaque ? "text-lg text-ink" : "text-ink-soft"
        }`}
      >
        {dinheiro.format(valor)}
      </td>
    </tr>
  );
}

export default function Regra() {
  const [valor, setValor] = useState(regra.presets[0].valor);
  const [dias, setDias] = useState(regra.presets[0].dias);
  const [travou, setTravou] = useState(false);

  const { multa, mora, diasDeMora, total, noTeto } = calcular(valor, dias);

  // O momento em que o teto entra é o ponto da demonstração inteira, então ele ganha um
  // gesto próprio em vez de o número apenas parar de subir sem ninguém reparar.
  const estavaNoTeto = useRef(noTeto);
  useEffect(() => {
    if (noTeto && !estavaNoTeto.current) {
      setTravou(true);
      const t = window.setTimeout(() => setTravou(false), 420);
      estavaNoTeto.current = noTeto;
      return () => window.clearTimeout(t);
    }
    estavaNoTeto.current = noTeto;
  }, [noTeto]);

  const fatia = (parte: number) => `${(parte / total) * 100}%`;

  return (
    <Secao id="regra" numero="03" titulo={regra.titulo}>
      <p className="max-w-2xl text-base leading-relaxed text-ink-soft text-pretty">{regra.intro}</p>

      <div className="mt-12 overflow-hidden rounded-sm border border-rule bg-paper-raised">
        <p className="border-b border-rule px-6 py-3 font-mono text-[0.7rem] tracking-[0.14em] text-ink-faint uppercase">
          {regra.origem}
        </p>

        <div className="grid gap-10 p-6 md:grid-cols-[1fr_1.15fr] md:gap-12 md:p-8">
          {/* --- Controles --- */}
          <div>
            <fieldset>
              <legend className="font-mono text-xs tracking-[0.16em] text-ink-faint uppercase">
                {regra.campoValor}
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {regra.presets.map((preset) => {
                  const ativo = valor === preset.valor && dias === preset.dias;
                  return (
                    <button
                      key={preset.valor}
                      type="button"
                      onClick={() => {
                        setValor(preset.valor);
                        setDias(preset.dias);
                      }}
                      aria-pressed={ativo}
                      className={`rounded-full border px-4 py-2 font-mono text-xs tracking-wide transition-colors duration-200 ${
                        ativo
                          ? "border-ink bg-ink text-paper"
                          : "border-rule text-ink-soft hover:border-ink hover:text-ink"
                      }`}
                    >
                      {preset.rotulo}
                    </button>
                  );
                })}
              </div>
              <p className="mt-3 h-8 text-sm text-ink-faint text-pretty">
                {regra.presets.find((p) => p.valor === valor && p.dias === dias)?.nota}
              </p>
            </fieldset>

            <div className="mt-6">
              <label
                htmlFor="dias-atraso"
                className="flex items-baseline justify-between font-mono text-xs tracking-[0.16em] text-ink-faint uppercase"
              >
                {regra.campoDias}
                <span className="font-mono text-2xl tracking-normal text-ink tabular-nums normal-case">
                  {dias}
                </span>
              </label>

              <input
                id="dias-atraso"
                type="range"
                min={0}
                max={MAX_DIAS}
                step={1}
                value={dias}
                onChange={(e) => setDias(Number(e.target.value))}
                aria-valuetext={`${dias} dias em atraso`}
                className="regua-slider mt-4"
              />

              {/* A marca do teto fica na própria régua: dá para mirar nela antes de arrastar. */}
              <div
                aria-hidden
                className="relative mt-2 h-8 font-mono text-[0.65rem] text-ink-faint"
              >
                <span className="absolute left-0">0</span>
                <span
                  className={`absolute -translate-x-1/2 text-center transition-colors duration-200 ${
                    noTeto ? "text-accent" : ""
                  }`}
                  style={{ left: `${(TETO_DIAS / MAX_DIAS) * 100}%` }}
                >
                  <span className="mx-auto block h-2 w-px bg-current" />
                  {TETO_DIAS}
                  <span className="block">{regra.teto}</span>
                </span>
                <span className="absolute right-0">{MAX_DIAS}</span>
              </div>
            </div>
          </div>

          {/* --- Recibo --- */}
          <div>
            {/* Composição do total. A fatia da mora para de crescer no teto, e a barra
                mostra isso antes de a pessoa ler o número. */}
            <div
              aria-hidden
              className="flex h-2 w-full overflow-hidden rounded-full bg-paper-deep"
            >
              <span
                className="bg-ink transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ width: fatia(valor) }}
              />
              <span
                className="bg-accent-soft transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ width: fatia(multa) }}
              />
              <span
                className="bg-accent transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ width: fatia(mora) }}
              />
            </div>

            <table className="mt-6 w-full text-sm">
              <caption className="sr-only">
                Composição do valor atualizado da mensalidade em atraso
              </caption>
              <tbody>
                <Linha rotulo={regra.linhas.base} valor={valor} />
                <Linha operador="+" rotulo={regra.linhas.multa} valor={multa} />
                <Linha
                  operador="+"
                  rotulo={regra.linhas.mora}
                  detalhe={`× ${diasDeMora}`}
                  valor={mora}
                  selo={noTeto ? regra.teto : undefined}
                />
              </tbody>
              <tfoot>
                <Linha operador="=" rotulo={regra.linhas.total} valor={total} destaque />
              </tfoot>
            </table>

            <p aria-live="polite" className="sr-only">
              {`${regra.linhas.total}: ${dinheiro.format(total)}`}
            </p>

            <p
              className={`mt-5 min-h-[3.5rem] border-l-2 pl-4 text-sm leading-relaxed text-pretty transition-colors duration-300 ${
                noTeto ? "border-accent text-ink" : "border-transparent text-ink-faint"
              } ${travou ? "travar" : ""}`}
            >
              {noTeto ? regra.tetoAtivo.replace("{dias}", String(dias)) : regra.rodape}
            </p>
          </div>
        </div>
      </div>
    </Secao>
  );
}
