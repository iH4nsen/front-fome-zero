import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'static.todamateria.com.br', // Adicione o domínio da imagem que você está usando
      'encrypted-tbn0.gstatic.com', // Adicione outros domínios conforme necessário
      'www.patrocinioonline.com.br',
      'www.supermercadoslima.com.br',
      'bigshopping.com.br',
      'encrypted-tbn0.gstatic.com',
    ],
  },
  /* outras opções de configuração aqui, se necessário */
};

export default nextConfig;
