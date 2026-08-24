import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Instrument_Serif } from "next/font/google";
import { perfil } from "@/content/portfolio";
import "./globals.css";

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

const descricao = `${perfil.cargo} ${perfil.nivel}. ${perfil.tagline}`;

export const metadata: Metadata = {
  title: `${perfil.nomeCurto} — ${perfil.cargo}`,
  description: descricao,
  applicationName: "Portfólio de Henrique Marangoni",
  authors: [{ name: perfil.nome, url: perfil.github }],
  keywords: [
    "Desenvolvedor Backend Java",
    "Spring Boot",
    "APIs REST",
    "Arquitetura Hexagonal",
    "Java Júnior",
    "Henrique Marangoni",
  ],
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    title: `${perfil.nomeCurto} — ${perfil.cargo}`,
    description: descricao,
    siteName: "Portfólio de Henrique Marangoni",
  },
  twitter: {
    card: "summary_large_image",
    title: `${perfil.nomeCurto} — ${perfil.cargo}`,
    description: descricao,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col">
        {/* Marca que há JavaScript antes de o conteúdo pintar: as animações de revelação só
            escondem o que conseguem devolver. Sem JS, tudo continua legível. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {children}
      </body>
    </html>
  );
}
