import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Création de Site Web pour Avocats - BL NK',
  description: 'Sites web professionnels pour cabinets d\'avocats. Design moderne, optimisé SEO et conforme aux réglementations juridiques.',
  keywords: 'site web avocats, création site juridique, design cabinet avocat, site professionnel',
}

export default function CreationSiteWebLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}