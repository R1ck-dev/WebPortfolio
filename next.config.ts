import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * O português é o idioma canônico e mora na raiz.
   *
   * As rotas reais são `/pt` e `/en` — o segmento `[lang]` precisa existir para que o layout
   * consiga escrever o `lang` certo no <html>. Um rewrite (e não um redirect) serve o conteúdo
   * de `/pt` mantendo a URL em `/`: quem já tem o link do portfólio continua com ele válido,
   * e o currículo em PDF não passa a apontar para um endereço que redireciona.
   *
   * `/pt` continua respondendo; a tag canônica em `layout.tsx` manda a busca para `/`.
   */
  async rewrites() {
    return [{ source: "/", destination: "/pt" }];
  },
};

export default nextConfig;
