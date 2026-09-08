// Forma do conteúdo do portfólio, separada do texto em si.
//
// A copy vive num arquivo por idioma: `pt.ts` é a versão canônica e `en.ts` a tradução. Ambos
// satisfazem `Conteudo`, então o TypeScript aponta qualquer campo que falte de um lado — é o que
// garante a regra do brief: nada de metade traduzida.

import type { StaticImageData } from "next/image";

export type Locale = "pt" | "en";

/** Uma imagem de tela do projeto, com a legenda que diz o que se deve olhar nela. */
export type Print = {
  imagem: StaticImageData;
  /** Descrição para leitor de tela. Diz o que a tela mostra, não "captura de tela de...". */
  alt: string;
  /** Legenda visível abaixo do print. Aponta a prova, não descreve o layout. */
  legenda: string;
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
  /** O carro-chefe ganha estudo de caso, mais espaço e mais telas. */
  carroChefe?: boolean;
  /** Tom dominante dos prints — decide a moldura para que o claro e o escuro não briguem. */
  tom: "claro" | "escuro";
  /** A frase de problema. Nunca uma frase de feature. */
  problema: string;
  /** Só no carro-chefe: pergunta de pesquisa → decisão → resultado. */
  estudoDeCaso?: { rotulo: string; texto: string }[];
  /** Fatos defensáveis numa entrevista. Cada um deve poder ser conferido na tela ou no código. */
  fatos: { titulo: string; texto: string }[];
  /**
   * Os mesmos três números em todos os projetos, na mesma ordem: superfície da API, camada de
   * aplicação, domínio persistido. Padronizar é o que torna os quatro comparáveis de relance —
   * número exclusivo de um projeto vira frase em `fatos`, não uma quarta linha só aqui.
   *
   * Contados no repositório, com regra reproduzível (medido em 08/09/2026):
   *   endpoints  = @Get/@Post/@Put/@Delete/@PatchMapping dentro de `**\/controller/`
   *   casos de uso = arquivos `*UseCase.java` em `application/**\/usecase/`
   *   entidades  = arquivos com `@Entity` em coluna 1
   * Ao mexer num projeto, recontar — os valores anteriores tinham envelhecido em silêncio.
   */
  numeros: { valor: string; rotulo: string }[];
  stack: string[];
  /**
   * Telas em paisagem, todas na mesma proporção (2,34:1). A primeira abre a galeria em largura
   * cheia e as demais caem numa grade de duas colunas — com um número ímpar, a última ocupa a
   * linha inteira. É a regra única de layout: nenhuma exceção por projeto.
   */
  prints: Print[];
  /**
   * Telas de celular, em retrato. Ficam numa faixa só delas, nunca dividindo linha com uma
   * paisagem: misturar 2,34:1 com 1:1,93 na mesma grade é o que quebrava o ritmo da página.
   */
  mobile?: Print[];
  repo: string;
  demo: Demo;
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
    /**
     * Rótulo acessível do seletor de idioma, escrito no idioma da página que o exibe: na página
     * em português ele diz "ver em inglês". O texto curto do botão ("EN", "PT") não vem daqui —
     * é o mesmo nos dois idiomas e mora em `index.ts`.
     */
    trocarIdioma: string;
    /** Legendas do visualizador de imagem em tela cheia. */
    ampliar: string;
    fecharImagem: string;
    imagemAnterior: string;
    proximaImagem: string;
    telasDoCelular: string;
  };
  sobre: {
    paragrafos: string[];
    destaques: { valor: string; rotulo: string }[];
  };
  projetos: {
    intro: string;
    lista: Projeto[];
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
