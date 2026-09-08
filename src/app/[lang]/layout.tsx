import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Instrument_Serif } from "next/font/google";
import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import { conteudoDe, localeValido, rotas } from "@/content";
import "../globals.css";

const display = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

/** Os dois idiomas são gerados no build; não há rota dinâmica em produção. */
export function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "en" }];
}

export async function generateMetadata(): Promise<Metadata> {
  const atual = await lang();
  const { perfil, locale } = conteudoDe(atual);
  const descricao = `${perfil.cargo} ${perfil.nivel}. ${perfil.tese}`;
  const titulo = `${perfil.nomeCurto} — ${perfil.cargo}`;
  const emIngles = locale === "en";

  return {
    title: titulo,
    description: descricao,
    applicationName: emIngles ? `${perfil.nomeCurto} — portfolio` : `Portfólio de ${perfil.nomeCurto}`,
    authors: [{ name: perfil.nome, url: perfil.github }],
    keywords: emIngles
      ? ["Java Backend Developer", "Spring Boot", "REST APIs", "Hexagonal Architecture", "Junior Java", perfil.nomeCurto]
      : [
          "Desenvolvedor Backend Java",
          "Spring Boot",
          "APIs REST",
          "Arquitetura Hexagonal",
          "Java Júnior",
          perfil.nomeCurto,
        ],
    // O português mora em `/` (o `/pt` responde, mas por rewrite): sem canônica explícita as
    // duas URLs competiriam entre si na busca.
    alternates: {
      canonical: rotas[locale].caminho,
      languages: { "pt-BR": rotas.pt.caminho, en: rotas.en.caminho },
    },
    openGraph: {
      type: "profile",
      locale: emIngles ? "en_US" : "pt_BR",
      alternateLocale: emIngles ? "pt_BR" : "en_US",
      title: titulo,
      description: descricao,
      siteName: emIngles ? `${perfil.nomeCurto} — portfolio` : `Portfólio de ${perfil.nomeCurto}`,
    },
    twitter: { card: "summary_large_image", title: titulo, description: descricao },
  };
}

// Roda antes da primeira pintura, por isso é inline e síncrono:
// - marca que há JavaScript, para que as animações de revelação só escondam o que conseguem devolver;
// - aplica o tema salvo (ou o do sistema) sem o piscar de claro que um efeito no cliente causaria.
const antesDePintar = `
(function () {
  var d = document.documentElement;
  d.classList.add('js');
  try {
    var salvo = localStorage.getItem('tema');
    var escuro = salvo ? salvo === 'escuro' : matchMedia('(prefers-color-scheme: dark)').matches;
    if (escuro) d.classList.add('dark');
  } catch (e) {}
})();
`;

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const atual = await lang();

  // `[lang]` casa com qualquer segmento: sem isto, /qualquer-coisa serviria o português
  // com a URL errada em vez de dar 404.
  if (!localeValido(atual)) notFound();

  return (
    <html
      lang={conteudoDe(atual).htmlLang}
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: antesDePintar }} />
      </head>
      <body className="grain flex min-h-full flex-col">{children}</body>
    </html>
  );
}
