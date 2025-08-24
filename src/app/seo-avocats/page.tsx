import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/ui/HeroSection'
import LogoCarousel from '@/components/ui/LogoCarousel'
import FeatureCards from '@/components/ui/FeatureCards'
import ProcessSteps from '@/components/ui/ProcessSteps'
import PremiumStats from '@/components/ui/PremiumStats'
import GoogleReviews from '@/components/ui/GoogleReviews'
import CallToAction from '@/components/ui/CallToAction'

export const metadata: Metadata = {
  title: 'SEO pour Avocats - Référencement Naturel Juridique | BL NK',
  description: 'Agence SEO spécialisée avocats. Référencement naturel pour cabinets juridiques. Première page Google garantie. +340% de visibilité moyenne.',
  keywords: 'SEO avocat, référencement naturel juridique, agence SEO cabinet avocat, première page Google avocat',
}

export default function SeoAvocatsPage() {
  return (
    <div className="bg-white">
      <Navbar currentPage="seo" />
      
      <HeroSection
        title="L'agence SEO qui place les avocats en première page Google"
        highlightedWord="SEO"
        subtitle="Référencement Naturel pour Avocats"
        description="Nous propulsons votre cabinet d'avocats en première page Google avec notre expertise SEO juridique. Résultats garantis et mesurables pour développer votre clientèle."
        primaryCTA={{
          text: "Audit SEO Gratuit",
          href: "#contact"
        }}
        secondaryCTA={{
          text: "Voir nos résultats",
          href: "#resultats"
        }}
        stats={[
          { value: "200+", label: "Cabinets accompagnés", icon: "⚖️" },
          { value: "+340%", label: "Visibilité moyenne", icon: "📈" },
          { value: "Top 3", label: "Positionnement Google", icon: "🏆" },
          { value: "4.9/5", label: "Satisfaction client", icon: "⭐" }
        ]}
        backgroundType="light"
      />

      <LogoCarousel
        title=""
        showTitleSection={false}
        backgroundColor="white"
        carouselStyle="premium"
        speed="normal"
        logos={[
          { name: "Client 1", image: "https://api.bl-nk.fr/wp-content/uploads/2025/08/Agence-SEO-Avocats-4.webp", alt: "Client logo", width: 120, height: 48 },
          { name: "Client 2", image: "https://api.bl-nk.fr/wp-content/uploads/2025/08/Agence-SEO-Avocats-5.webp", alt: "Client logo", width: 140, height: 48 },
          { name: "Client 3", image: "https://api.bl-nk.fr/wp-content/uploads/2025/08/Agence-SEO-Avocats-6.webp", alt: "Client logo", width: 130, height: 48 },
          { name: "Client 4", image: "https://api.bl-nk.fr/wp-content/uploads/2025/08/Agence-SEO-Avocats-7.webp", alt: "Client logo", width: 110, height: 48 },
          { name: "Client 5", image: "https://api.bl-nk.fr/wp-content/uploads/2025/08/Agence-SEO-Avocats-2.webp", alt: "Client logo", width: 125, height: 48 },
          { name: "Client 6", image: "https://api.bl-nk.fr/wp-content/uploads/2025/08/Agence-SEO-Avocats.webp", alt: "Client logo", width: 115, height: 48 }
        ]}
      />

      <FeatureCards
        title="Pourquoi le SEO est crucial pour votre cabinet ?"
        highlightedWord="SEO"
        subtitle="Dans un marché juridique de plus en plus concurrentiel, être visible sur Google n'est plus optionnel"
        backgroundColor="gray"
        cardStyle="glassmorphism"
        columns={2}
        features={[
          {
            icon: "🔍",
            title: "97% des clients cherchent un avocat en ligne",
            description: "Vos clients potentiels utilisent Google pour trouver un avocat. Sans référencement naturel, ils ne vous trouvent pas et choisissent vos concurrents.",
            color: "blue"
          },
          {
            icon: "💰",
            title: "Le SEO génère 3x plus de clients que la publicité",
            description: "Le référencement naturel apporte des clients qualifiés et durables, contrairement aux annonces payantes qui s'arrêtent dès que vous cessez de payer.",
            color: "green"
          },
          {
            icon: "⚖️",
            title: "Vos concurrents investissent déjà dans le SEO",
            description: "Les cabinets les plus performants ont compris l'enjeu. Chaque jour sans SEO, c'est du terrain perdu face à la concurrence.",
            color: "purple"
          },
          {
            icon: "🎯",
            title: "Ciblage précis par spécialité juridique",
            description: "Le SEO permet d'attirer exactement les clients qui ont besoin de votre expertise : droit pénal, immobilier, famille, etc.",
            color: "purple"
          }
        ]}
      />

      <FeatureCards
        title="Notre expertise SEO juridique"
        highlightedWord="expertise"
        subtitle="Une méthodologie éprouvée spécifiquement conçue pour les cabinets d'avocats"
        backgroundColor="white"
        cardStyle="premium"
        columns={3}
        features={[
          {
            icon: "🔍",
            title: "Audit SEO complet",
            description: "Analyse technique approfondie de votre site, étude de la concurrence et identification des opportunités de positionnement.",
            color: "blue"
          },
          {
            icon: "📝",
            title: "Contenu juridique optimisé",
            description: "Création de contenus experts qui démontrent votre autorité juridique tout en étant optimisés pour Google.",
            color: "green"
          },
          {
            icon: "🏢",
            title: "SEO local avocat",
            description: "Optimisation pour les recherches locales : 'avocat + votre ville' pour capter la clientèle de proximité.",
            color: "purple"
          },
          {
            icon: "🔗",
            title: "Netlinking juridique",
            description: "Construction d'une autorité web forte avec des liens de qualité provenant de sites juridiques reconnus.",
            color: "blue"
          },
          {
            icon: "📊",
            title: "Suivi des performances",
            description: "Reporting mensuel détaillé : positions Google, trafic qualifié, conversions et retour sur investissement.",
            color: "green"
          },
          {
            icon: "⚡",
            title: "Optimisation technique",
            description: "Site rapide, mobile-friendly et sécurisé pour une expérience utilisateur optimale et un meilleur référencement.",
            color: "purple"
          }
        ]}
      />

      <ProcessSteps
        title="Notre processus SEO pour avocats"
        highlightedWord="processus"
        subtitle="Une méthode structurée pour des résultats durables"
        backgroundColor="gray"
        style="premium"
        layout="grid"
        steps={[
          {
            number: 1,
            title: "Audit SEO gratuit",
            description: "Analyse complète de votre présence en ligne, audit technique du site et étude de la concurrence sur vos spécialités juridiques.",
            icon: "🔍",
            color: "blue"
          },
          {
            number: 2,
            title: "Stratégie personnalisée",
            description: "Définition des mots-clés prioritaires, planification du contenu et roadmap SEO adaptée à votre cabinet.",
            icon: "🎯",
            color: "green"
          },
          {
            number: 3,
            title: "Optimisation technique",
            description: "Amélioration des performances du site, structure des URLs, balises meta et optimisation mobile.",
            icon: "⚙️",
            color: "purple"
          },
          {
            number: 4,
            title: "Création de contenu",
            description: "Rédaction d'articles juridiques experts, fiches services optimisées et pages de destination ciblées.",
            icon: "✍️",
            color: "orange"
          },
          {
            number: 5,
            title: "Suivi et ajustements",
            description: "Monitoring des positions, analyse des performances et optimisations continues pour maintenir votre avance.",
            icon: "📈",
            color: "blue"
          }
        ]}
      />

      <PremiumStats
        title="Nos résultats SEO pour avocats"
        highlightedWord="résultats"
        subtitle="Des performances mesurables qui transforment votre cabinet"
        backgroundColor="dark"
        stats={[
          {
            value: "+340%",
            label: "Augmentation moyenne du trafic organique",
            description: "Nos clients voient leur visibilité en ligne exploser",
            icon: "📈"
          },
          {
            value: "Top 3",
            label: "Positionnement Google en moins de 6 mois",
            description: "Première page garantie sur vos mots-clés prioritaires",
            icon: "🏆"
          },
          {
            value: "200+",
            label: "Cabinets d'avocats accompagnés",
            description: "Une expertise reconnue dans le secteur juridique",
            icon: "⚖️"
          },
          {
            value: "4.9/5",
            label: "Satisfaction client moyenne",
            description: "La qualité de service au cœur de notre approche",
            icon: "⭐"
          }
        ]}
      />

      <GoogleReviews
        title="Ce que disent nos clients avocats"
        subtitle="Découvrez pourquoi plus de 200 cabinets nous font confiance pour leur référencement"
        overallRating={4.9}
        totalReviews={12}
        businessName="BL NK - Agence SEO spécialisée avocats"
        backgroundColor="gray"
        maxReviews={3}
        reviews={[
          {
            name: "Mamadou Waggeh",
            initials: "MW",
            rating: 5,
            reviewCount: 1,
            timeAgo: "Il y a 3 semaines",
            content: "Cela fait maintenant un an que je travaille avec l'agence BL NK, et je ne peux que la recommander. Leur expertise en SEO, acquisition en ligne et identité visuelle n'est plus à démontrer.",
            avatarColor: "bg-blue-600"
          },
          {
            name: "Antoine Skrzynski",
            initials: "AS",
            rating: 5,
            reviewCount: 1,
            timeAgo: "Il y a 4 semaines",
            content: "BL NK est une agence sérieuse et compétente qui m'accompagne efficacement. Pierre Colliot suit de près le développement du référencement du cabinet.",
            badges: ["Local Guide"],
            avatarColor: "bg-green-600"
          },
          {
            name: "Nathalie ATTIAS",
            initials: "NA",
            rating: 5,
            reviewCount: 1,
            timeAgo: "Il y a 4 semaines",
            content: "Je connais Alexis Déborde depuis plus de 10 ans, c'est un partenaire compétent et fiable, un entrepreneur incarné et hyperactif sans jamais perdre le sens des priorités.",
            avatarColor: "bg-purple-600"
          }
        ]}
      />

      <CallToAction
        title="Prêt à dominer Google ?"
        description="Obtenez votre audit SEO gratuit et découvrez comment placer votre cabinet en première page Google en moins de 6 mois."
        primaryButton={{
          text: "Audit SEO Gratuit",
          href: "#contact"
        }}
        secondaryButton={{
          text: "Voir nos tarifs",
          href: "#tarifs"
        }}
        benefits={[
          "Audit technique complet",
          "Analyse de la concurrence",
          "Stratégie personnalisée",
          "Devis sur mesure"
        ]}
        backgroundType="dark"
        icon="🚀"
      />

      <Footer />
    </div>
  )
}