import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Publicité Google Ads pour Avocats - BL NK',
  description: 'Spécialistes de la publicité Google Ads pour cabinets d\'avocats. Générez des prospects qualifiés avec nos campagnes publicitaires ciblées.',
  keywords: 'Google Ads avocats, publicité juridique, marketing digital avocats, génération de leads',
}

export default function AdsAvocatsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}