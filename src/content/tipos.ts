// Forma do conteúdo do portfólio, separada do texto em si.
//
// A copy vive num arquivo por idioma (hoje só `pt.ts`). Para ligar o inglês, crie um `en.ts`
// que satisfaça `Conteudo` e registre em `index.ts` — o TypeScript aponta o que faltou traduzir,
// que é o jeito de garantir a regra do brief: nada de metade traduzida.

import type { StaticImageData } from "next/image";

export type Locale = "pt" | "en";

/** Uma imagem de tela do projeto, com a legenda que diz o que se deve olhar nela. */
export type Print = {
  imagem: StaticImageData;
  /** Descrição para leitor de tela. Diz o que a tela mostra, não "captura de tela de...". */
  alt: string;
  /** Legenda visível abaixo do print. Aponta a prova, não descreve o layout. */
  legenda: string;
  /** Rótulo curto usado quando o print faz parte de um par alternável. */
  aba?: string;
};

/** Estado do demo. Três dos quatro projetos ainda não têm deploy — isso é dito, não escondido. */
export type Demo =
  | { situacao: "no-ar"; href: string; rotulo: string }
  | { situacao: "local"; motivo: string };

export type Projeto = {
  slug: string;
  nome: string;
  subtitulo: string;
  contexto: string;
  periodo: string;
  /** O carro-chefe ganha estudo de caso e mais espaço na página. */
  carroChefe?: boolean;
  /** Tom dominante dos prints — decide a moldura para que o claro e o escuro não briguem. */
  tom: "claro" | "escuro";
  /** A frase de problema. Nunca uma frase de feature. */
  problema: string;
  /** Só no carro-chefe: pergunta de pesquisa → decisão → resultado. */
  estudoDeCaso?: { rotulo: string; texto: string }[];
  /** Fatos defensáveis numa entrevista. Cada um deve poder ser conferido na tela ou no código. */
  fatos: { titulo: string; texto: string }[];
  numeros: { valor: string; rotulo: string }[];
  stack: string[];
  /**
   * Como os prints se apresentam:
   * - `unico`    — uma imagem só;
   * - `tabs`     — duas imagens de mesma proporção onde alternar é a própria prova (mestre × jogador);
   * - `duo`      — um par desktop + celular lado a lado, que não alterna porque a proporção muda demais;
   * - `galeria`  — uma imagem grande e as demais menores embaixo, para o carro-chefe.
   */
  apresentacao: "unico" | "tabs" | "duo" | "galeria";
  prints: Print[];
  repo: string;
  demo: Demo;
  /** Âncora opcional para uma seção que aprofunda este projeto. */
  aprofundar?: { href: string; rotulo: string };
};

export type Marco = {
  periodo: string;
  cargo: string;
  organizacao: string;
  atual?: boolean;
  descricao: string;
  pontos?: string[];
  tags?: string[];
};

export type Secao = { id: string; numero: string; titulo: string };

export type Conteudo = {
  locale: Locale;
  /** Valor do atributo lang do <html>. */
  htmlLang: string;
  perfil: {
    nome: string;
    nomeCurto: string;
    cargo: string;
    nivel: string;
    /** A frase de valor. É a primeira coisa lida depois do nome. */
    tese: string;
    local: string;
    formacaoCurta: string;
    email: string;
    github: string;
    githubLabel: string;
    linkedin: string;
    linkedinLabel: string;
    curriculoPdf: string;
  };
  ui: {
    pularParaConteudo: string;
    navegacaoPrincipal: string;
    verProjetos: string;
    entrarEmContato: string;
    baixarCurriculo: string;
    curriculo: string;
    codigoNoGithub: string;
    semDemo: string;
    carroChefe: string;
    emCurso: string;
    temaClaro: string;
    temaEscuro: string;
    alternarTema: string;
  };
  sobre: {
    paragrafos: string[];
    destaques: { valor: string; rotulo: string }[];
  };
  projetos: {
    intro: string;
    lista: Projeto[];
  };
  /** A demonstração da tese: uma regra de negócio que o visitante move e vê recalcular. */
  regra: {
    titulo: string;
    intro: string;
    origem: string;
    campoValor: string;
    campoDias: string;
    /** Cada preset é um caso documentado: o valor e os dias que aparecem numa tela real. */
    presets: { rotulo: string; valor: number; dias: number; nota: string }[];
    linhas: { base: string; multa: string; mora: string; total: string };
    teto: string;
    tetoAtivo: string;
    rodape: string;
  };
  stack: {
    intro: string;
    grupos: { grupo: string; itens: string[] }[];
    idiomas: { idioma: string; nivel: string }[];
  };
  trajetoria: {
    experiencia: Marco[];
    formacao: Marco[];
    rotuloExperiencia: string;
    rotuloFormacao: string;
  };
  contato: {
    chamada: string;
    texto: string;
    canais: { rotulo: string; valor: string; tipo: "email" | "linkedin" | "github" | "curriculo" }[];
    creditos: string;
  };
  secoes: Secao[];
};
