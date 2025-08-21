import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BL NK - Agence SEO pour Avocats et Professions Libérales',
  description: 'Soyez celui que Google recommande en premier. Agence SEO spécialisée pour les avocats et professions libérales.',
  keywords: 'SEO avocat, référencement avocat, agence SEO juridique, marketing digital avocat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}