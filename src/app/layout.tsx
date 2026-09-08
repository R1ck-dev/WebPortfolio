import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Instrument_Serif } from "next/font/google";
import { conteudo } from "@/content";
import "./globals.css";

const { perfil } = conteudo;

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

const descricao = `${perfil.cargo} ${perfil.nivel}. ${perfil.tese}`;

export const metadata: Metadata = {
  title: `${perfil.nomeCurto} — ${perfil.cargo}`,
  description: descricao,
  applicationName: `Portfólio de ${perfil.nomeCurto}`,
  authors: [{ name: perfil.nome, url: perfil.github }],
  keywords: [
    "Desenvolvedor Backend Java",
    "Spring Boot",
    "APIs REST",
    "Arquitetura Hexagonal",
    "Java Júnior",
    perfil.nomeCurto,
  ],
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    title: `${perfil.nomeCurto} — ${perfil.cargo}`,
    description: descricao,
    siteName: `Portfólio de ${perfil.nomeCurto}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${perfil.nomeCurto} — ${perfil.cargo}`,
    description: descricao,
  },
};

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={conteudo.htmlLang}
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
