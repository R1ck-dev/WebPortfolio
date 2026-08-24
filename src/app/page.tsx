import Contato from "@/components/Contato";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projetos from "@/components/Projetos";
import Sobre from "@/components/Sobre";
import Stack from "@/components/Stack";
import Trajetoria from "@/components/Trajetoria";

export default function Home() {
  return (
    <>
      <a
        href="#sobre"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-paper"
      >
        Pular para o conteúdo
      </a>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Sobre />
        <Projetos />
        <Stack />
        <Trajetoria />
        <Contato />
      </main>
    </>
  );
}
