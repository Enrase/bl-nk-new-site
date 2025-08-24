import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/ui/HeroSection'
import LogoCarousel from '@/components/ui/LogoCarousel'
import FeatureCards from '@/components/ui/FeatureCards'
import ProcessSteps from '@/components/ui/ProcessSteps'
import GoogleReviews from '@/components/ui/GoogleReviews'
import CallToAction from '@/components/ui/CallToAction'

export const metadata: Metadata = {
  title: 'Stratégie Marketing pour Avocats - BL NK',
  description: 'Développez votre cabinet avec notre expertise en stratégie marketing juridique. Positionnement, image de marque et croissance durable.',
  keywords: 'stratégie marketing avocats, positionnement juridique, image de marque cabinet, marketing stratégique',
}

export default function StrategieAvocatsPage() {
  return (
    <div className="bg-white">
      <Navbar currentPage="strategie" />
      
      <HeroSection
        title="Une stratégie sur mesure pour les avocats et les professions libérales"
        highlightedWord="stratégie"
        subtitle="Stratégie sur Mesure"
        description="Une stratégie commence toujours par une vision claire. Le succès d'un cabinet ne repose pas uniquement sur son expertise, mais sur une vision stratégique précise. Nous accompagnons les avocats dans la structuration de leur positionnement, l'optimisation de leur communication et l'accélération de leur développement."
        primaryCTA={{
          text: "Construisons votre stratégie",
          href: "#contact"
        }}
        stats={[
          { value: "150+", label: "Cabinets accompagnés", icon: "👥" },
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
        title="Pourquoi votre cabinet peine-t-il à se développer ?"
        highlightedWord="cabinet"
        subtitle="Une stratégie bien définie est essentielle pour votre cabinet"
        backgroundColor="gray"
        cardStyle="glassmorphism"
        columns={2}
        features={[
          {
            icon: "⚠️",
            title: "Un positionnement flou qui dilue votre expertise",
            description: "Quand votre discours manque de clarté, vos clients ne comprennent pas vraiment ce que vous faites — et pourquoi ils devraient vous choisir, vous. Résultat : votre valeur perçue baisse, vos efforts s'éparpillent, et votre savoir-faire se noie dans le bruit ambiant.",
            color: "blue"
          },
          {
            icon: "🎯",
            title: "Une absence de différenciation face à un marché concurrentiel",
            description: "À l'heure où les entreprises ne font plus l'impasse sur la communication, se démarquer ne relève plus du luxe, mais de la survie. Sans identité forte, vous devenez interchangeable et, donc, négociable.",
            color: "green"
          },
          {
            icon: "📈",
            title: "Une difficulté à structurer votre développement",
            description: "Vous avez l'expertise, les idées et l'ambition. Mais sans stratégie claire ni ciblage précis, vos actions ne s'accumulent pas. Parler à tout le monde, c'est ne convaincre personne.",
            color: "purple"
          },
          {
            icon: "💬",
            title: "Une communication qui nuit à votre image de marque",
            description: "Des supports inadaptés, des visuels sans lien, un ton qui fluctue... Et l'ensemble perd en force et en crédibilité. Une marque solide, c'est un positionnement assumé et, surtout, cohérent.",
            color: "purple"
          }
        ]}
      />

      <FeatureCards
        title="Nos solutions stratégiques"
        highlightedWord="solutions"
        subtitle="Un accompagnement complet pour structurer et accélérer le développement de votre cabinet"
        backgroundColor="white"
        cardStyle="premium"
        columns={3}
        features={[
          {
            icon: "💬",
            title: "Entretiens approfondis",
            description: "Comprendre votre vision et vos objectifs à travers des entretiens stratégiques personnalisés avec les associés.",
            color: "blue"
          },
          {
            icon: "📈",
            title: "Étude de marché rigoureuse",
            description: "Analyser les attentes des justiciables et des entreprises pour affiner votre positionnement différenciant.",
            color: "green"
          },
          {
            icon: "🎥",
            title: "Structuration du positionnement",
            description: "Définir votre territoire d'expertise unique avec un plan d'actions concret et mesurable.",
            color: "purple"
          },
          {
            icon: "⚙️",
            title: "Accompagnement organisationnel",
            description: "Optimiser votre gestion interne et vos processus pour davantage de performance et d'efficacité.",
            color: "purple"
          },
          {
            icon: "📊",
            title: "Planification stratégique",
            description: "Méthodologie de planification pour piloter votre croissance avec efficacité et mesurer vos résultats.",
            color: "blue"
          }
        ]}
      />

      <ProcessSteps
        title="Notre méthodologie pour les cabinets juridiques"
        highlightedWord="méthodologie"
        subtitle="Chez BL NK, on travaille comme ça. 👇"
        backgroundColor="gray"
        style="premium"
        layout="grid"
        steps={[
          {
            number: 1,
            title: "Interviews et diagnostic stratégique",
            description: "Entretiens avec les associés pour définir les axes différenciants, identifier les valeurs et mettre en évidence les points de différenciation.",
            icon: "🎤",
            color: "blue"
          },
          {
            number: 2,
            title: "Étude de marché et analyse concurrentielle",
            description: "Veille des tendances du marché juridique, étude des attentes des justiciables et benchmarking concurrentiel.",
            icon: "📈",
            color: "green"
          },
          {
            number: 3,
            title: "Structuration du positionnement",
            description: "Définition d'un positionnement différenciant, création d'un narratif de marque et construction d'un territoire d'expertise.",
            icon: "🏦",
            color: "purple"
          },
          {
            number: 4,
            title: "Stratégie de croissance",
            description: "Organisation interne, développement d'une stratégie d'expansion et planification de partenariats stratégiques.",
            icon: "📢",
            color: "orange"
          },
          {
            number: 5,
            title: "Stratégie de contenu",
            description: "Définition d'une ligne éditoriale forte, élaboration d'une stratégie de contenu et déploiement d'une communication cohérente.",
            icon: "🚀",
            color: "blue"
          }
        ]}
      />

      <GoogleReviews
        title="Ils nous font confiance"
        subtitle="Découvrez pourquoi plus de 150 cabinets d'avocats choisissent BL NK pour développer leur activité"
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
        title="Prêt à transformer votre cabinet ?"
        description="Construisons ensemble une stratégie sur mesure qui révélera le plein potentiel de votre expertise juridique."
        primaryButton={{
          text: "Démarrons votre stratégie",
          href: "#contact"
        }}
        backgroundType="dark"
        icon="🚀"
      />

      <Footer />
    </div>
  )
}