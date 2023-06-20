/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'], // Eu preciso especificar qual dominio eu quero permitir carregar imagens.
  },
}

module.exports = nextConfig
