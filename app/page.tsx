'use client'

import { useState } from 'react'
import { ChevronDownIcon, CheckIcon, TrophyIcon, ChartBarIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const clients = [
    "Capstan", "Peyronnet", "Alter Avocats", "Nolwenn News", "CM&A", "Atlantes", "DJS"
  ]

  const benefits = [
    {
      number: "1",
      title: "Une visibilité optimale",
      description: "Soyez la réponse immédiate au moment précis où vos futurs clients se posent leurs premières questions juridiques."
    },
    {
      number: "2", 
      title: "Une image de confiance renforcée",
      description: "Devenez l'avocat dont vos prospects ont besoin. Les utilisateurs associent naturellement la qualité de votre référence à votre compétence juridique."
    },
    {
      number: "3",
      title: "Des prospects plus qualifiés", 
      description: "Attirez naturellement des visiteurs réellement concernés par vos spécialisations et prêts à vous contacter."
    },
    {
      number: "4",
      title: "Un investissement long terme et rentable",
      description: "Misez sur l'efficacité du référencement naturel avocat. Tandis que le retour sur investissement des publicités payantes cesse dès que vous n'injectez plus de budget, une stratégie SEO efficiente continue de vous apporter des visiteurs et des demandes de rendez-vous sur le long terme."
    }
  ]

  const services = [
    {
      title: "Audit SEO et amélioration technique",
      items: ["Diagnostic exhaustif de votre site", "Optimisation de sa vitesse", "Amélioration de l'expérience utilisateur", "Livraison d'un plan d'actions pour des gains rapides"]
    },
    {
      title: "Stratégie de contenu juridique",
      items: ["Rédaction d'articles juridiques optimisés SEO (rédigés par des juristes et d'anciens avocats !)", "Structuration stratégique du contenu", "Création de cocons sémantiques"]
    },
    {
      title: "Référencement local et gestion Google My Business",
      items: ["Optimisation ciblée de votre fiche Google My Business", "Mise en place d'une stratégie destinée à encourager la publication d'avis positifs"]
    },
    {
      title: "Acquisition de backlinks de qualité",
      items: ["Création d'une stratégie de netlinking", "Collaboration avec des partenaires influents"]
    },
    {
      title: "Suivi transparent et amélioration continue",
      items: ["Mesure précise de vos performances", "Ajustements réguliers, proactifs et documentés"]
    }
  ]

  const results = [
    {
      title: "Alter Avocats",
      subtitle: "De 2 000 à 8 000 visiteurs mensuels en 16 mois",
      description: "Cabinet positionné sur les domaines du droit pénal et du divorce par consentement mutuel. Nous avons massifié le trafic, ce qui a conduit à une augmentation significative des prises de rendez-vous."
    },
    {
      title: "Clément Poirier Avocat",
      subtitle: "Top 3 sur Google pour la requête « Avocat Droit Immobilier » en 6 mois",
      description: ""
    }
  ]

  const faqData = [
    {
      question: "Combien de temps avant d'obtenir des résultats SEO visibles ?",
      answer: "Généralement, les premiers résultats apparaissent après une période de 3 à 6 mois. Cependant, le SEO est avant tout une stratégie à moyen terme : comptez une année pleine pour obtenir des résultats durables."
    },
    {
      question: "Mon cabinet est-il trop petit pour investir dans une stratégie SEO ?",
      answer: "Absolument pas ! Que vous exerciez seul, en petite équipe ou dans un grand cabinet, le SEO est adaptable (et efficace !) à tout volume d'activité juridique."
    },
    {
      question: "Mon contenu juridique joue-t-il un rôle majeur dans mon référencement ?",
      answer: "Tout à fait. Google favorise les sites qui répondent précisément aux intentions des utilisateurs. Des contenus riches, précis, originaux et pratiques sont essentiels pour votre positionnement."
    },
    {
      question: "Quelles erreurs dois-je éviter en SEO ?",
      answer: "1. Ignorer l'optimisation pour smartphones et mobiles. 2. Publier du contenu générique, redondant ou copié. 3. Négliger les avis clients et le référencement local."
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Agence SEO avocats et professions libérales
              </h1>
              <div className="flex items-center justify-center gap-3 mb-8">
                <h2 className="text-2xl lg:text-3xl font-semibold">
                  Soyez celui que Google recommande en premier
                </h2>
                <TrophyIcon className="w-8 h-8 text-gold-400 animate-bounce-in" />
              </div>
            </div>
            
            <div className="animate-slide-up">
              <p className="text-xl lg:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto opacity-90">
                Le métier d'avocat repose sur deux piliers fondamentaux : la confiance et la visibilité. 
                Aujourd'hui, vos futurs clients vous cherchent d'abord sur Google avant de prendre leur décision. 
                Êtes-vous visible quand ils ont besoin de vous ?
              </p>
              
              <button className="btn-primary text-lg animate-bounce-in">
                Échangez avec un expert
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-white opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse delay-300"></div>
      </section>

      {/* Clients Logos */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-gray-600 font-medium">Ils nous font confiance</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="text-2xl font-bold text-gray-400 hover:text-primary-600 transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SEO Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
              Pourquoi le SEO est-il important pour votre cabinet d'avocat ou votre profession libérale ?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Internet est devenu le premier réflexe pour trouver un avocat. Si votre site web n'apparaît pas parmi les premières positions des résultats Google, vous perdez des opportunités. Le référencement naturel (SEO) est la clé pour positionner durablement votre cabinet et instaurer une confiance immédiate. 🔑
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
              Quels bénéfices réels le SEO peut-il apporter à votre activité d'avocat ?
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {benefit.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-primary">
              Obtenir un pré-audit de ma situation
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <ChartBarIcon className="w-12 h-12 text-gold-400" />
              <h3 className="text-3xl lg:text-4xl font-bold">
                Saviez-vous que 75 % des internautes ne cliquent jamais au-delà de la première page Google ?
              </h3>
            </div>
            <p className="text-xl font-semibold">
              Un bon SEO n'est donc plus optionnel : il est indispensable !
            </p>
          </div>
        </div>
      </section>

      {/* Choosing Agency Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
                Choisir la bonne agence SEO pour avocat — Comment s'y prendre ? 🤔
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Toutes les agences marketing n'ont pas forcément une compréhension fine du milieu juridique. 
                Votre métier possède des particularités uniques : il est donc primordial de s'appuyer sur une 
                agence SEO spécialisée capable de comprendre votre quotidien, les subtilités de votre langage 
                professionnel et, surtout, les attentes précises de votre clientèle.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-primary-600">
                  L'agence SEO possède-t-elle une véritable expertise juridique ?
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Dispose-t-elle d'une parfaite maîtrise des obligations déontologiques et réglementaires propres à votre profession ?</li>
                  <li>• Est-elle capable de produire et de diffuser un contenu juridique pertinent qui valorise votre cabinet d'avocats ?</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-primary-600">
                  Adopte-t-elle une approche sur mesure et personnalisée ?
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Construit-elle une stratégie SEO spécifiquement pensée pour votre domaine d'expertise, adaptée à votre clientèle cible ainsi qu'à votre localisation géographique ?</li>
                  <li>• Va-t-elle vous transmettre des recommandations stratégiques ciblées et pertinentes pour maximiser votre visibilité auprès des bonnes personnes ?</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-primary-600">
                  L'agence SEO pour avocats est-elle au fait des techniques SEO modernes, pérennes et adaptées aux algorithmes d'IA ?
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Met-elle en place des audits approfondis qui permettent une optimisation technique poussée (rapidité, ergonomie, expérience utilisateur).</li>
                  <li>• L'agence élabore-t-elle une stratégie éditoriale spécifique, telle qu'une stratégie de cocons sémantiques couplée à l'acquisition de backlinks de qualité ?</li>
                  <li>• L'optimisation de votre référencement local est-elle à l'ordre du jour, notamment grâce à l'intégration de bonnes pratiques Google My Business ?</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-primary-600">
                  La transparence et le suivi régulier font-ils partie de son mode de fonctionnement ?
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Allez-vous recevoir des rapports détaillant les résultats obtenus et identifiant les axes d'amélioration ?</li>
                  <li>• L'agence échange-t-elle régulièrement avec sa clientèle d'avocats afin d'évaluer l'impact des actions menées, puis d'ajuster la stratégie SEO si nécessaire ?</li>
                  <li>• Est-elle assez disponible pour répondre à vos interrogations et pour vous accompagner sur le long terme ?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
              Quels services SEO notre agence spécialisée propose-t-elle aux avocats ?
            </h2>
          </div>
          
          <div className="space-y-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">
                      {service.title}
                    </h3>
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-gray-600">
                          <CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Exemples concrets de nos résultats SEO 🔥👇
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {results.map((result, index) => (
              <div 
                key={index}
                className="bg-white text-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary-600">
                  {result.title}
                </h3>
                <h4 className="text-xl font-semibold mb-4">
                  {result.subtitle}
                </h4>
                {result.description && (
                  <p className="text-gray-600 mb-6">
                    {result.description}
                  </p>
                )}
                <button className="btn-secondary">
                  Découvrir ce use case
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO vs SEA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
                SEO ou SEA : quelle stratégie choisir pour votre cabinet d'avocat ?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      SEO (référencement naturel)
                    </h3>
                    <p className="text-gray-600">
                      idéal pour un résultat durable, stable et économique sur le long terme.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      SEA (publicité payante sur Google)
                    </h3>
                    <p className="text-gray-600">
                      parfait pour une visibilité rapide et précise via annonces payantes, mais nécessite un budget récurrent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-600">
                Notre recommandation ➡️
              </h3>
              <p className="text-xl text-gray-700 mb-6">
                Optez pour une combinaison équilibrée de SEO et de SEA.
              </p>
              <p className="text-gray-600">
                L'intérêt ? Vous renforcez à la fois votre image de marque sur le long terme et attirez immédiatement de nouveaux clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Measuring Success Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
                Comment mesurer le succès d'une stratégie SEO ?
              </h2>
              <p className="text-xl text-gray-600">
                Voici les principaux indicateurs clés que nous surveillons et qui guident nos ajustements stratégiques :
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-700">• le positionnement de votre site sur les mots-clés pertinents ;</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-700">• l'évolution du trafic qualifié sur votre site web ;</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-700">• le nombre et la qualité des conversions (appels, rendez-vous, demandes de contact, etc.) ;</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-700">• l'engagement des visiteurs (temps passé sur le site, faible taux de rebond, etc.).</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-700">
                Nos outils d'analyse : Google Analytics, Google Search Console, Ahrefs, SEMrush et nos outils « secrets ». 👀🤐
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
              Nos clients parlent de nous ! 😎 — Agence BL NK
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <p className="text-lg italic mb-6 text-gray-700">
                "Notre cabinet a gagné en visibilité grâce à notre nouveau site ! Un grand merci."
              </p>
              <p className="font-semibold text-primary-600">
                Me. Dupont, avocat en droit des affaires
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <p className="text-lg italic mb-6 text-gray-700">
                "Une refonte complète de notre site qui a boosté nos prises de rendez-vous."
              </p>
              <p className="font-semibold text-primary-600">
                Me. Martin, spécialisé en droit immobilier
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-primary">
              Découvrez nos réalisations
            </button>
          </div>
        </div>
      </section>

      {/* Semantic Cocoon Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Le cocon sémantique : une stratégie puissante pour le SEO avocat
              </h2>
              <p className="text-xl opacity-90">
                Une architecture web intelligente qui transforme votre expertise juridique en autorité SEO
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold mb-4">Imaginez votre site comme une bibliothèque juridique d'exception</h3>
              </div>
              
              <div className="text-center">
                <div className="text-6xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold mb-2">Au centre : Vos piliers d'expertise</h3>
                <p className="opacity-90">Droit de la famille, Droit commercial, Droit pénal... Vos pages principales rayonnent d'autorité.</p>
              </div>
              
              <div className="text-center">
                <div className="text-6xl mb-4">🕷️</div>
                <h3 className="text-xl font-bold mb-2">Autour : Une toile stratégique</h3>
                <p className="opacity-90">Articles spécialisés, guides détaillés, FAQ ciblées... reliés par des liens internes pensés.</p>
              </div>
            </div>
            
            <div className="text-center bg-white text-gray-900 p-8 rounded-2xl">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">Résultat : Google comprend votre expertise</h3>
              <p className="text-lg">Chaque page renforce les autres, créant une autorité thématique puissante</p>
            </div>
          </div>
        </div>
      </section>

      {/* Semantic Cocoon Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
              Les Avantages d'un cocon sémantique pour les avocats
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Meilleure compréhension par les moteurs de recherche
              </h3>
              <p className="text-gray-600">
                Une hiérarchie claire permet aux moteurs de recherche de mieux saisir l'architecture de votre site et l'autorité de votre contenu juridique.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Amélioration du classement SEO
              </h3>
              <p className="text-gray-600">
                Le cocon sémantique renforce les mots-clés et les sujets connexes dans un domaine spécifique, ce qui peut augmenter le rang de votre site dans les résultats de recherche.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Expérience utilisateur optimisée
              </h3>
              <p className="text-gray-600">
                Les visiteurs trouvent facilement des informations complémentaires, ce qui les encourage à rester plus longtemps sur votre site — un facteur considéré favorablement par les algorithmes de classement.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">👑</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Renforcement de l'autorité de domaine
              </h3>
              <p className="text-gray-600">
                En devenant une référence sur des sujets juridiques précis, vous construisez une réputation solide qui peut capter et convertir un trafic ciblé en clients potentiels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
                FAQ
              </h2>
            </div>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full px-8 py-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    <ChevronDownIcon 
                      className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-8 py-6 bg-white">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Prêt à dominer Google dans votre domaine juridique ?
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Commencez dès aujourd'hui avec un audit SEO gratuit de votre site web
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary text-lg">
                Obtenir mon audit gratuit
              </button>
              <button className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-900">
                Découvrir nos services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">BL NK</h3>
            <p className="text-gray-400 mb-6">
              Agence SEO spécialisée pour les avocats et professions libérales
            </p>
            <p className="text-gray-500">
              © 2024 BL NK. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}