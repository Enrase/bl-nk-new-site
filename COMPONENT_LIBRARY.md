# Bibliothèque de Composants UI - BL NK

Cette bibliothèque contient des composants réutilisables pour accélérer le développement de landing pages. Tous les composants sont construits avec Next.js 15, TypeScript et Tailwind CSS.

## 📁 Structure

```
src/components/ui/
├── HeroSection.tsx        # Section hero avec CTA et stats
├── GoogleReviews.tsx      # Affichage des avis Google
├── CallToAction.tsx       # Sections d'appel à l'action
├── FeatureCards.tsx       # Grilles de fonctionnalités
├── ProcessSteps.tsx       # Étapes de processus/workflow
├── TeamGrid.tsx           # Présentation d'équipe
├── LogoCarousel.tsx       # Carousel de logos partenaires
├── PremiumStats.tsx       # Statistiques avec effets premium
└── TestimonialsSection.tsx # Section témoignages clients
```

## 🎨 Styles Disponibles

### Styles Globaux
- **basic**: Style simple et propre
- **premium**: Effets glassmorphism et animations avancées
- **glassmorphism**: Transparence et flou d'arrière-plan
- **minimal**: Design épuré

### Couleurs
- **blue**: Bleu principal
- **green**: Vert
- **purple**: Violet
- **orange**: Orange

### Arrière-plans
- **white**: Fond blanc
- **gray**: Fond gris clair
- **dark**: Dégradé sombre

## 📋 Composants

### 1. HeroSection
Section d'accueil avec titre, sous-titre, CTA et statistiques optionnelles.

```tsx
<HeroSection
  title="Votre titre ici"
  highlightedWord="mot-clé"
  subtitle="Description du service"
  backgroundType="dark"
  stats={[
    { value: "150+", label: "Clients", icon: "👥" }
  ]}
  primaryCTA={{
    text: "Commencer",
    href: "/contact"
  }}
  secondaryCTA={{
    text: "En savoir plus",
    href: "/about"
  }}
/>
```

### 2. GoogleReviews
Affichage d'avis Google avec note globale et avis individuels.

```tsx
<GoogleReviews
  title="Avis Google"
  overallRating={4.9}
  totalReviews={12}
  businessName="BL NK - Agence SEO"
  reviews={[
    {
      name: "John Doe",
      initials: "JD",
      rating: 5,
      reviewCount: 2,
      timeAgo: "il y a 2 mois",
      content: "Service excellent..."
    }
  ]}
/>
```

### 3. CallToAction
Section d'appel à l'action avec boutons et avantages.

```tsx
<CallToAction
  title="Prêt à commencer ?"
  highlightedWord="commencer"
  description="Rejoignez nos clients satisfaits"
  primaryButton={{
    text: "Démarrer maintenant",
    onClick: () => {}
  }}
  benefits={["Gratuit", "Sans engagement", "Support 24/7"]}
  backgroundType="gradient"
/>
```

### 4. FeatureCards
Grille de fonctionnalités avec icônes et descriptions.

```tsx
<FeatureCards
  title="Nos Services"
  highlightedWord="Services"
  features={[
    {
      icon: "🚀",
      title: "SEO Technique",
      description: "Optimisation technique complète",
      color: "blue",
      stats: "+150% de trafic"
    }
  ]}
  cardStyle="premium"
  columns={3}
/>
```

### 5. ProcessSteps
Visualisation d'étapes de processus ou workflow.

```tsx
<ProcessSteps
  title="Notre Processus"
  highlightedWord="Processus"
  steps={[
    {
      number: 1,
      title: "Analyse",
      description: "Audit complet de votre site",
      color: "blue"
    }
  ]}
  layout="horizontal"
  style="premium"
/>
```

### 6. TeamGrid
Présentation d'équipe avec photos et descriptions.

```tsx
<TeamGrid
  title="Notre Équipe"
  highlightedWord="Équipe"
  members={[
    {
      name: "Pierre Colliot",
      role: "Fondateur",
      description: "Expert SEO avec 10+ ans d'expérience",
      initials: "PC",
      color: "blue",
      skills: ["SEO", "Droit", "Marketing"]
    }
  ]}
  style="premium"
  columns={3}
/>
```

### 7. LogoCarousel
Carousel de logos partenaires avec défilement automatique.

```tsx
<LogoCarousel
  title="Ils nous font confiance"
  logos={[
    {
      name: "Client 1",
      image: "/logos/client1.png",
      alt: "Client 1"
    }
  ]}
  carouselStyle="premium"
  speed="normal"
/>
```

### 8. PremiumStats
Affichage de statistiques avec effets visuels.

```tsx
<PremiumStats
  title="Nos Résultats"
  stats={[
    {
      value: "150+",
      label: "Clients Satisfaits",
      suffix: "",
      color: "blue",
      icon: "👥"
    }
  ]}
  style="premium"
  layout="grid"
  columns={4}
/>
```

### 9. TestimonialsSection
Section témoignages avec notes et citations.

```tsx
<TestimonialsSection
  title="Témoignages Clients"
  highlightedWord="Clients"
  testimonials={[
    {
      quote: "Service exceptionnel, résultats au rendez-vous !",
      author: "Marie Dubois",
      role: "Avocate",
      company: "Cabinet Dubois",
      initials: "MD",
      rating: 5,
      color: "green"
    }
  ]}
  style="premium"
  columns={3}
/>
```

## 🔧 Utilisation

### Import
```tsx
import HeroSection from '@/components/ui/HeroSection'
import GoogleReviews from '@/components/ui/GoogleReviews'
// ... autres imports
```

### Animations CSS Requises
Assurez-vous d'avoir ces animations dans votre Tailwind config :

```css
@keyframes rock-wiggle {
  0%, 100% { transform: rotate(-1deg); }
  50% { transform: rotate(1deg); }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scroll-logos {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.animate-rock-wiggle {
  animation: rock-wiggle 0.5s ease-in-out infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}

.animate-scroll-logos {
  animation: scroll-logos 30s linear infinite;
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s ease-out;
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
```

## 💡 Conseils d'Utilisation

1. **Cohérence**: Utilisez les mêmes couleurs et styles sur toute votre page
2. **Performance**: Les composants premium utilisent plus d'effets, à utiliser avec modération
3. **Responsive**: Tous les composants sont optimisés pour mobile
4. **Accessibilité**: Images alt et structure sémantique incluses
5. **SEO**: Utilisez les balises de titre appropriées (h1, h2, h3)

## 🎯 Exemple de Page Complète

```tsx
export default function LandingPage() {
  return (
    <>
      <HeroSection {...heroProps} />
      <LogoCarousel {...logoProps} />
      <FeatureCards {...featureProps} />
      <ProcessSteps {...processProps} />
      <TeamGrid {...teamProps} />
      <TestimonialsSection {...testimonialProps} />
      <PremiumStats {...statsProps} />
      <GoogleReviews {...reviewProps} />
      <CallToAction {...ctaProps} />
    </>
  )
}
```

## 🔄 Évolutions Futures

- Ajout de variants de couleurs personnalisées
- Intégration d'animations Framer Motion
- Support des thèmes sombre/clair
- Composants de formulaires avancés
- Intégrations API (Google Reviews, etc.)