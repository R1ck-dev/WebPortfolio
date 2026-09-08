import Coluna from "@/components/Coluna";
import Contato from "@/components/Contato";
import Projetos from "@/components/Projetos";
import Regra from "@/components/Regra";
import Sobre from "@/components/Sobre";
import Stack from "@/components/Stack";
import Trajetoria from "@/components/Trajetoria";
import { conteudo } from "@/content";

export default function Home() {
  return (
    <>
      <a
        href="#sobre"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-paper"
      >
        {conteudo.ui.pularParaConteudo}
      </a>

      {/* Coluna de identidade parada à esquerda, conteúdo rolando à direita. Abaixo de lg
          o grid some e os dois viram uma coluna só, com a identidade fazendo o papel de hero. */}
      <div className="mx-auto grid w-full max-w-7xl gap-x-16 px-6 pt-16 sm:px-10 lg:grid-cols-[22rem_1fr] lg:items-start lg:gap-x-20 lg:pt-0">
        <Coluna />

        <main id="conteudo" className="min-w-0 lg:py-16">
          <Sobre />
          <Projetos />
          <Regra />
          <Stack />
          <Trajetoria />
          <Contato />
        </main>
      </div>
    </>
  );
}
