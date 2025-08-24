'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/[0.1] via-gray-600/[0.06] to-gray-800/[0.1] rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative bg-white/[0.08] backdrop-blur-sm rounded-2xl border border-white/[0.15] overflow-hidden">
        <button 
          className="w-full px-8 py-6 text-left font-medium text-lg text-white flex justify-between items-center hover:bg-white/[0.05] transition-colors duration-300"
          onClick={onClick}
        >
          <span>{question}</span>
          <span className={`text-2xl transition-transform duration-300 text-gray-300 ${isOpen ? 'rotate-45' : ''}`}>
            +
          </span>
        </button>
        <div className={`transition-all duration-400 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'} overflow-hidden`}>
          <div className="px-8 bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.06] backdrop-blur-sm border border-white/[0.2]">
            <div dangerouslySetInnerHTML={{ __html: answer }} className="text-gray-100 leading-relaxed" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CreationSiteWebPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqItems = [
    {
      question: "Combien de temps faut-il pour créer un site web avocats ?",
      answer: `En moyenne, il faut compter <strong>4 à 6 semaines</strong> pour la création complète de votre site web juridique. Cette fourchette peut varier selon la complexité de vos besoins spécifiques.<br/><br/>Notre processus optimisé inclut : diagnostic stratégique (45min), livrable complet (1-2 semaines), maquette personnalisée (1-2 semaines), développement SEO (2-3 semaines) et formation utilisateur.<br/><br/>Nous proposons également un accompagnement à la rédaction des contenus juridiques pour maximiser l'impact de votre site.`
    },
    {
      question: "Mon site web sera-t-il bien référencé sur Google ?",
      answer: `Absolument ! Le <strong>SEO juridique spécialisé</strong> est intégré dès la conception de votre site. Nous optimisons chaque page pour qu'elle apparaisse en première page Google sur vos spécialités juridiques.<br/><br/>Notre approche technique inclut : optimisation des balises meta spécialisées, architecture SEO-friendly, contenu juridique optimisé, maillage interne stratégique et référencement local renforcé.<br/><br/>Résultats moyens constatés : <strong>+250% de trafic qualifié</strong> et positionnement Top 3 Google en 6 mois sur vos requêtes cibles.`
    },
    {
      question: "Puis-je modifier moi-même mon site après sa création ?",
      answer: `Bien sûr ! Vous aurez accès à une <strong>interface intuitive</strong> spécialement conçue pour les professionnels du droit. Pas besoin de compétences techniques.<br/><br/>Vous pourrez modifier : textes et contenus, ajout d'actualités juridiques, mise à jour des tarifs, gestion des formulaires de contact et publication d'articles de blog.<br/><br/>Inclus dans notre accompagnement : <strong>formation personnalisée</strong> (3h), guide utilisateur détaillé et support technique prioritaire pendant 3 mois.`
    },
    {
      question: "Quels sont les tarifs pour un site web d'avocat ?",
      answer: `Nos tarifs démarrent à <strong>750€ HT</strong> pour un site vitrine professionnel, jusqu'à <strong>4 500€ HT</strong> pour un site premium avec fonctionnalités avancées et stratégie SEO complète.<br/><br/>Le tarif final dépend de : nombre de pages souhaitées, fonctionnalités spécifiques (prise de RDV en ligne, espace client), niveau d'accompagnement SEO et besoins en contenu juridique.<br/><br/>Chaque projet est unique : <strong>devis personnalisé gratuit</strong> sous 24h avec présentation détaillée de votre site futur.`
    }
  ]

  return (
    <div className="bg-white">
      <Navbar currentPage="creation" />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50/20 to-white relative overflow-hidden pt-16 pb-8">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Animated shapes */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gray-400/[0.15] rounded-full animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-gray-500/[0.2] rounded-full animate-pulse" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-gray-600/[0.25] rounded-full animate-pulse" style={{animationDelay: '3s', animationDuration: '5s'}}></div>
          <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-gray-600/[0.25] rounded-full animate-pulse" style={{animationDelay: '4s', animationDuration: '5s'}}></div>
          
          {/* Premium grid pattern */}
          <div className="absolute inset-0 opacity-[0.012] animate-pulse" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)', 
            backgroundSize: '80px 80px',
            animationDuration: '12s'
          }}></div>
        </div>
        
        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-center text-center h-full">
            <div className="max-w-5xl mx-auto">
              
              {/* Simple Badge */}
              <div className="mb-8">
                <span className="inline-flex items-center text-gray-600 text-sm font-medium">
                  <span className="mr-2">⚖️</span>
                  Agence de création de site internet pour avocats et professions libérales
                </span>
              </div>
              
              {/* Clean Main Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-10 leading-[1.02] tracking-[-0.02em] text-black px-4 max-w-6xl mx-auto">
                <span className="relative inline-block animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  Un site qui 
                  <div className="absolute -bottom-2 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-gray-400/30 to-transparent blur-[1px] rounded-full animate-pulse" style={{animationDuration: '3s'}}></div>
                </span>
                <br className="hidden sm:block"/>
                <span className="relative inline-block mt-2 sm:mt-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <span className="relative z-10 font-black">
                    <span className="bg-black text-white px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg">attire</span>, un cabinet
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-6 bg-gradient-to-r from-gray-200/40 via-gray-300/60 to-gray-200/40 blur-sm rounded-full transform rotate-1 animate-bounce" style={{animationDuration: '4s'}}></div>
                </span>
                <br className="block sm:hidden"/>
                <span className="relative inline-block animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                  <span className="relative z-10">qui grandit</span>
                  {/* Effet de brillance qui passe */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shine"></div>
                </span>
              </h1>
              
              {/* Results KPIs Section */}
              <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                  {/* KPI 1: Augmentation des contacts */}
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500/8 via-green-300/12 to-green-500/8 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
                    <div className="relative bg-gradient-to-br from-white/85 via-white/80 to-white/75 backdrop-blur-sm rounded-xl border border-gray-200/40 p-4 lg:p-5 shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition-all duration-400 hover:-translate-y-0.5 text-center">
                      <div className="relative mb-2">
                        <div className="text-2xl lg:text-3xl font-black bg-gradient-to-br from-green-600 to-green-800 bg-clip-text text-transparent">+75%</div>
                        <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-12 h-[1.5px] bg-gradient-to-r from-green-500/30 to-green-600/30 rounded-full"></div>
                      </div>
                      <p className="text-xs lg:text-sm font-medium text-gray-600">d'augmentation des prises de contact après refonte</p>
                    </div>
                  </div>
                  
                  {/* KPI 2: Multiplication du trafic */}
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/8 via-blue-300/12 to-blue-500/8 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
                    <div className="relative bg-gradient-to-br from-white/85 via-white/80 to-white/75 backdrop-blur-sm rounded-xl border border-gray-200/40 p-4 lg:p-5 shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition-all duration-400 hover:-translate-y-0.5 text-center">
                      <div className="relative mb-2">
                        <div className="text-2xl lg:text-3xl font-black bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent">×3</div>
                        <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-12 h-[1.5px] bg-gradient-to-r from-blue-500/30 to-blue-600/30 rounded-full"></div>
                      </div>
                      <p className="text-xs lg:text-sm font-medium text-gray-600">trafic multiplié en moyenne en 6 mois</p>
                    </div>
                  </div>
                  
                  {/* KPI 3: Temps de livraison */}
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/8 via-purple-300/12 to-purple-500/8 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
                    <div className="relative bg-gradient-to-br from-white/85 via-white/80 to-white/75 backdrop-blur-sm rounded-xl border border-gray-200/40 p-4 lg:p-5 shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition-all duration-400 hover:-translate-y-0.5 text-center">
                      <div className="relative mb-2">
                        <div className="text-2xl lg:text-3xl font-black bg-gradient-to-br from-purple-600 to-purple-800 bg-clip-text text-transparent">6</div>
                        <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-12 h-[1.5px] bg-gradient-to-r from-purple-500/30 to-purple-600/30 rounded-full"></div>
                      </div>
                      <p className="text-xs lg:text-sm font-medium text-gray-600">semaines pour lancement et accompagnement</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTAs with Animation */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 sm:mb-20 px-4 animate-fade-in-up" style={{animationDelay: '1.4s'}}>
                {/* Primary CTA */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-black via-gray-800 to-black rounded-2xl blur opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                  <button className="relative w-full sm:w-auto bg-gradient-to-r from-black via-gray-900 to-black text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-0.5 text-base sm:text-lg group-hover:from-gray-900 group-hover:via-black group-hover:to-gray-900">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Je veux parler à un expert
                      <span className="text-xl group-hover:translate-x-1 transition-transform duration-500">→</span>
                    </span>
                  </button>
                </div>
                
                {/* Secondary CTA */}
                <div className="group relative">
                  <button className="relative w-full sm:w-auto bg-white/80 backdrop-blur-sm text-black border-2 border-gray-300/60 font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-xl hover:border-gray-600/80 hover:bg-white/95 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-0.5 text-base sm:text-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                    <span className="flex items-center justify-center gap-3">
                      Voir nos réalisations
                      <span className="text-xl group-hover:translate-x-1 transition-transform duration-500">→</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm mb-6">Ils nous font confiance</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="w-20 h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs text-gray-400">Cabinet A</span>
              </div>
              <div className="w-20 h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs text-gray-400">Cabinet B</span>
              </div>
              <div className="w-20 h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs text-gray-400">Cabinet C</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Website Section */}
      <section className="py-20 sm:py-28 lg:py-36 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.03]"></div>
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/[0.01] rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '20s'}}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
              Votre site web reflète-t-il vraiment votre <span className="bg-white text-black px-3 py-1 mx-1 rounded-sm transform rotate-1 inline-block shadow-lg animate-rock-wiggle">expertise</span> ?
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Un site professionnel est devenu la vitrine indispensable pour développer votre cabinet et inspirer confiance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Première impression</h3>
              <p className="text-gray-200 leading-relaxed">
                Votre site web est souvent le premier contact entre votre cabinet et vos futurs clients.
              </p>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Mobile d'abord</h3>
              <p className="text-gray-200 leading-relaxed">
                Plus de 60% des recherches se font sur mobile. Un site non adapté fait fuir vos prospects.
              </p>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Crédibilité professionnelle</h3>
              <p className="text-gray-200 leading-relaxed">
                Un site moderne et professionnel renforce immédiatement votre crédibilité et votre expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Ce qui fait qu'un site web avocat est <span className="bg-black text-white px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">performant</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quatre solutions clés qui garantissent le succès de votre site web professionnel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/8 via-gray-300/12 to-blue-500/8 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/[0.98] backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Design moderne et professionnel
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Un design personnalisé qui reflète votre expertise et inspire immédiatement confiance à vos prospects.
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl shadow-sm">
                  <span className="text-blue-600 font-medium text-sm">✓ Design sur mesure</span>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/8 via-gray-300/12 to-green-500/8 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/[0.98] backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  Responsive et optimisé mobile
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Votre site s'adapte parfaitement à tous les écrans pour une expérience utilisateur optimale.
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl shadow-sm">
                  <span className="text-green-600 font-medium text-sm">✓ Tous appareils</span>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/8 via-gray-300/12 to-purple-500/8 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/[0.98] backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  SEO juridique optimisé
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Optimisation spécialisée pour le référencement juridique et la visibilité sur Google.
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl shadow-sm">
                  <span className="text-purple-600 font-medium text-sm">✓ Visible sur Google</span>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/8 via-gray-300/12 to-orange-500/8 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/[0.98] backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  Performance et vitesse
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Site ultra-rapide avec temps de chargement optimisé pour une meilleure conversion.
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl shadow-sm">
                  <span className="text-orange-600 font-medium text-sm">✓ Chargement rapide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Offers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Nos <span className="bg-black text-white px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">offres</span> de création
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deux formules adaptées à vos besoins et à votre budget
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Offre Essentielle */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/8 via-gray-300/12 to-blue-500/8 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/[0.98] backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                {/* Badge "Populaire" */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                    ⚡ Livraison rapide
                  </div>
                </div>
                
                <div className="text-center mb-8 pt-4">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Site Web Essentiel</h4>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-gray-900">750€</span>
                    <span className="text-gray-600 ml-2">HT</span>
                  </div>
                  <p className="text-gray-600">Livré sous 21 jours</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Design moderne créé par notre équipe de graphistes</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Structure SEO optimisée</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">100% responsive (mobile/tablette)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Pages essentielles (accueil, services, contact, honoraires, blog)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Intégration Calendly, Lemcal, outils CNB, SECIB</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Option Maintenance, Hébergement et retouches illimitées 90€ HT/mois</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors duration-300 group-hover:scale-105 transform">
                  Choisir cette offre
                </button>
              </div>
            </div>

            {/* Offre Premium */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/8 via-gray-300/12 to-purple-500/8 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/[0.98] backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                {/* Badge "Premium" */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                    ✨ Accompagnement premium
                  </div>
                </div>
                
                <div className="text-center mb-8 pt-4">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Site Web Premium</h4>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-3xl font-bold text-gray-900">À partir de&nbsp;</span>
                    <span className="text-4xl font-bold text-gray-900">4 500€</span>
                    <span className="text-gray-600 ml-2">HT</span>
                  </div>
                  <p className="text-gray-600">Direction Artistique par Benjamin Caron (DA Senior)</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Audit compétitif et stratégie de positionnement</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Design 100% sur-mesure et identité visuelle complète</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Modules sur-mesure : espace clients, simulateur, calculateur</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Automatisation de tâches et intégrations avancées</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Stratégie SEO approfondie et rédaction de contenu</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Formation à l'administration du site</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-colors duration-300 group-hover:scale-105 transform">
                  Demander un devis
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Comment ça marche chez <span className="bg-black text-white px-3 py-1 mx-1 rounded-sm transform rotate-1 inline-block shadow-lg animate-rock-wiggle">BL NK</span> ?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Découvrez la procédure de création de sites web, juste ici. 👇
            </p>
          </div>
          
          {/* Process Zigzag Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-green-500 via-purple-500 via-indigo-500 to-orange-500"></div>
            
            {/* Step 1 - Left */}
            <div className="relative flex items-start mb-4 group">
              <div className="flex-1 md:pr-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300 ml-10 md:ml-0 md:mr-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 leading-tight pr-2">
                          Diagnostic gratuit et préconisations stratégiques
                        </h3>
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full flex-shrink-0">45 min</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        Échange approfondi pour comprendre vos objectifs professionnels et définir la stratégie optimale pour votre cabinet.
                      </p>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                        <span>• Audit concurrentiel</span>
                        <span>• Analyse mots-clés</span>
                        <span>• Brief personnalisé</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg transform md:-translate-x-1/2 z-10 top-8"></div>
              <div className="flex-1 md:pl-8 hidden md:block"></div>
            </div>
            
            {/* Step 2 - Right */}
            <div className="relative flex items-start mb-4 group" style={{marginTop: '-1rem'}}>
              <div className="flex-1 md:pr-8 hidden md:block"></div>
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg transform md:-translate-x-1/2 z-10 top-8"></div>
              <div className="flex-1 md:pl-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300 ml-10 md:ml-8 md:mr-0">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 leading-tight pr-2">
                          Livrable stratégique complet
                        </h3>
                        <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full flex-shrink-0">1-2 sem</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        Document exhaustif avec architecture, stratégie contenu et plan SEO personnalisé pour votre spécialité juridique.
                      </p>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                        <span>• Architecture site</span>
                        <span>• Stratégie contenu</span>
                        <span>• Plan SEO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3 - Left */}
            <div className="relative flex items-start mb-4 group" style={{marginTop: '-1rem'}}>
              <div className="flex-1 md:pr-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300 ml-10 md:ml-0 md:mr-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 leading-tight pr-2">
                          Maquette sur mesure
                        </h3>
                        <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full flex-shrink-0">1-2 sem</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        Design personnalisé qui reflète votre identité professionnelle et inspire confiance à vos futurs clients.
                      </p>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                        <span>• Design responsive</span>
                        <span>• Charte graphique</span>
                        <span>• Prototypage</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow-lg transform md:-translate-x-1/2 z-10 top-8"></div>
              <div className="flex-1 md:pl-8 hidden md:block"></div>
            </div>
            
            {/* Step 4 - Right */}
            <div className="relative flex items-start mb-4 group" style={{marginTop: '-1rem'}}>
              <div className="flex-1 md:pr-8 hidden md:block"></div>
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-indigo-500 rounded-full border-2 border-white shadow-lg transform md:-translate-x-1/2 z-10 top-8"></div>
              <div className="flex-1 md:pl-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300 ml-10 md:ml-8 md:mr-0">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 leading-tight pr-2">
                          Développement et SEO
                        </h3>
                        <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full flex-shrink-0">2-3 sem</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        Développement technique avec SEO spécialisé juridique et optimisation pour les requêtes locales.
                      </p>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                        <span>• Dev responsive</span>
                        <span>• SEO technique</span>
                        <span>• Tests qualité</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 5 - Left */}
            <div className="relative flex items-start group" style={{marginTop: '-1rem'}}>
              <div className="flex-1 md:pr-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200/50 hover:shadow-lg transition-all duration-300 ml-10 md:ml-0 md:mr-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                      <span className="text-white font-bold text-sm">5</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 leading-tight pr-2">
                          Lancement et accompagnement
                        </h3>
                        <span className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full flex-shrink-0">3 mois</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        Mise en ligne sécurisée avec formation personnalisée et support technique prioritaire inclus.
                      </p>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                        <span>• Mise en ligne</span>
                        <span>• Formation</span>
                        <span>• Support premium</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-lg transform md:-translate-x-1/2 z-10 top-8"></div>
              <div className="flex-1 md:pl-8 hidden md:block"></div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-black text-white font-semibold py-4 px-8 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Discutons de votre projet
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose BL NK Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Pourquoi choisir <span className="bg-black text-white px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">BL NK</span> pour créer votre site avocat ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expertise unique qui combine développement web et connaissance approfondie du secteur juridique
            </p>
          </div>
          
          {/* Benefits in Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {/* Large feature - spans 2 columns */}
            <div className="md:col-span-2 group relative">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-blue-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 h-full">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      Expertise juridique exclusive
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Spécialisés uniquement dans le secteur juridique. Nous maîtrisons les règles déontologiques et les spécificités de votre profession.
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold shadow-lg group-hover:bg-blue-700 transition-colors duration-300">
                      ✓ 100% conforme
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Square feature */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-3xl border border-green-200/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 mb-4">
                  <span className="text-xl">👨‍💻</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  Équipe pluridisciplinaire
                </h3>
                <p className="text-gray-700 leading-relaxed flex-1 mb-4">
                  Juristes, développeurs seniors et designers collaborent.
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Équipe dédiée
                </div>
              </div>
            </div>
            
            {/* Square feature */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-3xl border border-purple-200/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 mb-4">
                  <span className="text-xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  SEO juridique intégré
                </h3>
                <p className="text-gray-700 leading-relaxed flex-1 mb-4">
                  Stratégie SEO spécialisée pour le secteur juridique.
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Visible sur Google
                </div>
              </div>
            </div>
            
            {/* Large feature - spans 2 columns */}
            <div className="md:col-span-2 group relative">
              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl border border-orange-200/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 h-full">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                      Accompagnement sur le long terme
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Support technique, maintenance et évolutions de votre site. Une relation de confiance qui dure dans le temps.
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-semibold shadow-lg group-hover:bg-orange-700 transition-colors duration-300">
                      ✓ Support continu
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-20 mb-16">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                L'équipe <span className="bg-black text-white px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">création</span> dédiée
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des experts spécialisés dans la création de sites web juridiques pour garantir votre succès
              </p>
              <div className="flex justify-center items-center gap-6 text-sm text-gray-500 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span>Double expertise Droit + Web</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>10+ ans d'expérience minimum</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span>Secteur juridique uniquement</span>
                </div>
              </div>
            </div>
            
            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-purple-50/30 rounded-3xl -z-10"></div>
              
              {/* Team Member 1: Benjamin Caron */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-purple-400/10 to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-3 text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full mx-auto overflow-hidden border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-purple-600 to-gray-800">
                      <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">BC</div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">★</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">Benjamin Caron</h4>
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full mb-4">
                    <span className="text-purple-700 font-medium text-sm">Directeur Artistique Senior</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    DA senior spécialisé dans l'identité visuelle juridique. 15+ ans d'expérience en branding et web design.
                  </p>
                  <div className="flex justify-center gap-2">
                    <span className="px-2 py-1 bg-purple-50 text-purple-600 rounded text-xs font-medium">Branding</span>
                    <span className="px-2 py-1 bg-purple-50 text-purple-600 rounded text-xs font-medium">UX/UI Design</span>
                  </div>
                </div>
              </div>
              
              {/* Team Member 2: Pierre Colliot */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-green-400/10 to-green-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-3 text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full mx-auto overflow-hidden border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-green-600 to-gray-800">
                      <img src="https://api.bl-nk.fr/wp-content/uploads/2025/08/DSCF9812-scaled.jpg" alt="Pierre Colliot" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex' }} />
                      <div className="w-full h-full items-center justify-center text-white text-2xl font-bold" style={{display: 'none'}}>PC</div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">★</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">Pierre Colliot</h4>
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-100 to-green-200 rounded-full mb-4">
                    <span className="text-green-700 font-medium text-sm">Expert Web 10+ans</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Expert web depuis + de 10 ans, spécialiste du secteur juridique et des professions réglementées.
                  </p>
                  <div className="flex justify-center gap-2">
                    <span className="px-2 py-1 bg-green-50 text-green-600 rounded text-xs font-medium">Web juridique</span>
                    <span className="px-2 py-1 bg-green-50 text-green-600 rounded text-xs font-medium">Fondateur</span>
                  </div>
                </div>
              </div>
              
              {/* Team Member 3: Julie Kunzli */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-blue-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-3 text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full mx-auto overflow-hidden border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-blue-600 to-gray-800">
                      <img src="https://api.bl-nk.fr/wp-content/uploads/2025/08/Julie-Kunzli-LinkedIn.jpeg" alt="Julie Kunzli" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex' }} />
                      <div className="w-full h-full items-center justify-center text-white text-2xl font-bold" style={{display: 'none'}}>JK</div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">★</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Julie Kunzli</h4>
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full mb-4">
                    <span className="text-blue-700 font-medium text-sm">Juriste M2 | Major</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Spécialisée en Droit des Affaires et Droit Pénal. Experte en rédaction web juridique depuis plus de 10 ans.
                  </p>
                  <div className="flex justify-center gap-2">
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-medium">Droit des affaires</span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-medium">Rédaction web</span>
                  </div>
                </div>
              </div>
              
              {/* Team Member 4: Jeremy Geuil */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-blue-500/10 to-blue-600/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-3 text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full mx-auto overflow-hidden border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-blue-700 to-gray-900">
                      <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">JG</div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">★</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Jeremy Geuil</h4>
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full mb-4">
                    <span className="text-blue-700 font-medium text-sm">Développeur Expert</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Développeur spécialiste WordPress, Webflow, et technologies modernes pour la création de sites juridiques.
                  </p>
                  <div className="flex justify-center gap-2">
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-medium">WordPress</span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-medium">React/NextJS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-black text-white font-semibold py-4 px-8 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Rencontrer notre équipe
            </button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">        
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              <span className="bg-white text-black px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">Résultats</span> clients
            </h2>
            <p className="text-xl text-gray-100 leading-relaxed">
              Des chiffres qui parlent. Des cabinets qui grandissent.
            </p>
          </div>
          
          {/* Results Grid */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Result Card 1 */}
            <div className="group relative">
              {/* Multi-layer glow effects */}
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/[0.08] via-green-400/[0.04] to-blue-500/[0.08] rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/[0.12] via-green-400/[0.08] to-blue-500/[0.12] rounded-3xl blur-lg opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>
              
              {/* Glass card */}
              <div className="relative bg-gradient-to-br from-white/[0.08] via-white/[0.06] to-white/[0.04] backdrop-blur-md rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/[0.15] shadow-[0_12px_40px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_24px_80px_rgba(0,0,0,0.5),0_8px_32px_rgba(59,130,246,0.15)] transition-all duration-700 h-full hover:-translate-y-3 group-hover:border-blue-400/30">
                {/* Client header */}
                <div className="flex items-center gap-6 mb-10">
                  <div className="relative group/logo">
                    <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-green-600/15 rounded-2xl blur group-hover/logo:from-blue-400/25 group-hover/logo:to-green-500/20 transition-colors duration-500"></div>
                    <div className="relative w-18 h-18 bg-gradient-to-br from-white via-gray-100 to-white text-black rounded-xl flex items-center justify-center font-black text-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] border border-gray-200/20 group-hover/logo:scale-110 transition-transform duration-300">
                      A
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-blue-50 transition-colors duration-300">Atlantes Avocats</h3>
                    <p className="text-gray-100 text-lg font-medium group-hover:text-gray-200 transition-colors duration-300">Cabinet engagé aux côtés des salariés et des syndicats</p>
                  </div>
                </div>
            
                {/* Metrics display */}
                <div className="relative group/metrics mb-8">
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-500/10 via-blue-400/8 to-green-500/10 rounded-2xl blur opacity-50 group-hover/metrics:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.06] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/[0.2] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-bold text-gray-100 tracking-wider uppercase">Nouveaux clients</span>
                      <div className="px-3 py-1 bg-green-500/20 text-green-200 text-xs font-bold rounded-full border border-green-400/30">+350%</div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-3xl sm:text-4xl font-black text-white">3 → 15</div>
                      <div className="text-sm text-gray-200 font-medium">par mois</div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-100 leading-relaxed text-lg font-light mb-8 group-hover:text-gray-200 transition-colors duration-300">
                  DA poussée dans les codes Pop culture des syndicats. Multiplication par 5 des nouveaux clients grâce à une stratégie de création de site web et SEO juridique adaptée.
                </p>
                
                {/* CTA */}
                <div className="relative group/cta">
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-blue-400/20 rounded-xl blur opacity-60 group-hover/cta:opacity-100 transition-opacity duration-500"></div>
                  <button className="relative w-full bg-gradient-to-r from-white/[0.1] via-white/[0.15] to-white/[0.1] text-white border border-white/[0.3] font-bold py-4 px-8 rounded-xl hover:border-white/[0.4] hover:bg-white/[0.2] transition-all duration-300 hover:scale-[1.02] text-lg shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                    <span className="flex items-center justify-center gap-3">
                      Voir l'étude de cas
                      <span className="text-xl group-hover/cta:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Result Card 2 */}
            <div className="group relative">
              {/* Multi-layer glow effects */}
              <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/[0.08] via-blue-400/[0.04] to-purple-500/[0.08] rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/[0.12] via-blue-400/[0.08] to-purple-500/[0.12] rounded-3xl blur-lg opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>
              
              {/* Glass card */}
              <div className="relative bg-gradient-to-br from-white/[0.08] via-white/[0.06] to-white/[0.04] backdrop-blur-md rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/[0.15] shadow-[0_12px_40px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_24px_80px_rgba(0,0,0,0.5),0_8px_32px_rgba(147,51,234,0.15)] transition-all duration-700 h-full hover:-translate-y-3 group-hover:border-purple-400/30">
                {/* Client header */}
                <div className="flex items-center gap-6 mb-10">
                  <div className="relative group/logo">
                    <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/20 to-blue-600/15 rounded-2xl blur group-hover/logo:from-purple-400/25 group-hover/logo:to-blue-500/20 transition-colors duration-500"></div>
                    <div className="relative w-18 h-18 bg-gradient-to-br from-white via-gray-100 to-white text-black rounded-xl flex items-center justify-center font-black text-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] border border-gray-200/20 group-hover/logo:scale-110 transition-transform duration-300">
                      D
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-purple-50 transition-colors duration-300">Alter Avocats</h3>
                    <p className="text-gray-100 text-lg font-medium group-hover:text-gray-200 transition-colors duration-300">Droit Pénal et Droit de la Famille</p>
                  </div>
                </div>
            
                {/* Metrics display */}
                <div className="relative group/metrics mb-8">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/10 via-blue-400/8 to-purple-500/10 rounded-2xl blur opacity-50 group-hover/metrics:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.06] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/[0.2] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-bold text-gray-100 tracking-wider uppercase">Visiteurs mensuels</span>
                      <div className="px-3 py-1 bg-purple-500/20 text-purple-200 text-xs font-bold rounded-full border border-purple-400/30">+400%</div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-3xl sm:text-4xl font-black text-white">10 000+</div>
                      <div className="text-sm text-gray-200 font-medium">par mois</div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-100 leading-relaxed text-lg font-light mb-8 group-hover:text-gray-200 transition-colors duration-300">
                  Plus de 10 000 visiteurs mensuels grâce à un site web optimisé et une stratégie SEO ciblée en Droit Pénal et Droit de la Famille.
                </p>
                
                {/* CTA */}
                <div className="relative group/cta">
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-purple-400/20 rounded-xl blur opacity-60 group-hover/cta:opacity-100 transition-opacity duration-500"></div>
                  <button className="relative w-full bg-gradient-to-r from-white/[0.1] via-white/[0.15] to-white/[0.1] text-white border border-white/[0.3] font-bold py-4 px-8 rounded-xl hover:border-white/[0.4] hover:bg-white/[0.2] transition-all duration-300 hover:scale-[1.02] text-lg shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                    <span className="flex items-center justify-center gap-3">
                      Voir l'étude de cas
                      <span className="text-xl group-hover/cta:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              Les projets <span className="bg-white text-black px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">BL NK</span> 😉💥
            </h2>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700 text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🎨</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Portfolio de nos réalisations
            </h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              Découvrez nos créations de sites web pour cabinets d'avocats et professions libérales. 
              Chaque projet reflète notre expertise et notre engagement envers l'excellence.
            </p>
            <button className="bg-white text-gray-900 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Voir le portfolio complet
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Nos services de <span className="bg-black text-white px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">création</span> de site web
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pour avocats et professions libérales
            </p>
          </div>
          
          {/* Services Grid - Flip Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="flip-card group h-80">
              <div className="flip-card-inner relative w-full h-full">
                {/* Front */}
                <div className="flip-card-front absolute w-full h-full bg-white border border-gray-200 rounded-2xl p-8 text-center flex flex-col justify-center shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Conception & développement
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sites web modernes, performants et sur mesure.
                  </p>
                  <div className="mt-4 md:hidden">
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                      Voir les détails →
                    </button>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back absolute w-full h-full bg-gradient-to-br from-blue-600 to-gray-800 rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg">
                  <div>
                    <h4 className="text-xl font-bold mb-6">Ce qui est inclus :</h4>
                    <ul className="text-left space-y-3 text-sm">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-200 mt-1">•</span>
                        <span>Design sur mesure et moderne</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-200 mt-1">•</span>
                        <span>Développement responsive</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-200 mt-1">•</span>
                        <span>Optimisation des performances</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-200 mt-1">•</span>
                        <span>Formation à la prise en main</span>
                      </li>
                    </ul>
                  </div>
                  <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-xl hover:bg-blue-50 transition-colors duration-300 mt-6">
                    Découvrir cette offre
                  </button>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flip-card group h-80">
              <div className="flip-card-inner relative w-full h-full">
                {/* Front */}
                <div className="flip-card-front absolute w-full h-full bg-white border border-gray-200 rounded-2xl p-8 text-center flex flex-col justify-center shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Charte Graphique personnalisée
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Identité visuelle forte et professionnelle.
                  </p>
                  <div className="mt-4 md:hidden">
                    <button className="text-green-600 text-sm font-medium hover:text-green-700 transition-colors">
                      Voir les détails →
                    </button>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back absolute w-full h-full bg-gradient-to-br from-green-600 to-gray-800 rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg">
                  <div>
                    <h4 className="text-xl font-bold mb-6">Ce qui est inclus :</h4>
                    <ul className="text-left space-y-3 text-sm">
                      <li className="flex items-start space-x-2">
                        <span className="text-green-200 mt-1">•</span>
                        <span>Logo professionnel unique</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-200 mt-1">•</span>
                        <span>Palette de couleurs personnalisée</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-200 mt-1">•</span>
                        <span>Typographies harmonieuses</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-200 mt-1">•</span>
                        <span>Guide d'utilisation complet</span>
                      </li>
                    </ul>
                  </div>
                  <button className="w-full bg-white text-green-600 font-semibold py-3 rounded-xl hover:bg-green-50 transition-colors duration-300 mt-6">
                    Découvrir cette offre
                  </button>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flip-card group h-80">
              <div className="flip-card-inner relative w-full h-full">
                {/* Front */}
                <div className="flip-card-front absolute w-full h-full bg-white border border-gray-200 rounded-2xl p-8 text-center flex flex-col justify-center shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-2xl">✍️</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Rédaction de contenu juridique
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Contenus optimisés et conformes à la déontologie.
                  </p>
                  <div className="mt-4 md:hidden">
                    <button className="text-purple-600 text-sm font-medium hover:text-purple-700 transition-colors">
                      Voir les détails →
                    </button>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back absolute w-full h-full bg-gradient-to-br from-purple-600 to-gray-800 rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg">
                  <div>
                    <h4 className="text-xl font-bold mb-6">Ce qui est inclus :</h4>
                    <ul className="text-left space-y-3 text-sm">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-200 mt-1">•</span>
                        <span>Rédaction SEO spécialisée</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-200 mt-1">•</span>
                        <span>Respect de la déontologie</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-200 mt-1">•</span>
                        <span>Fiches pratiques détaillées</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-200 mt-1">•</span>
                        <span>Optimisation des mots-clés</span>
                      </li>
                    </ul>
                  </div>
                  <button className="w-full bg-white text-purple-600 font-semibold py-3 rounded-xl hover:bg-purple-50 transition-colors duration-300 mt-6">
                    Découvrir cette offre
                  </button>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="flip-card group h-80">
              <div className="flip-card-inner relative w-full h-full">
                {/* Front */}
                <div className="flip-card-front absolute w-full h-full bg-white border border-gray-200 rounded-2xl p-8 text-center flex flex-col justify-center shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Référencement naturel (SEO)
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Première page Google garantie.
                  </p>
                  <div className="mt-4 md:hidden">
                    <button className="text-orange-600 text-sm font-medium hover:text-orange-700 transition-colors">
                      Voir les détails →
                    </button>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back absolute w-full h-full bg-gradient-to-br from-orange-600 to-gray-800 rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg">
                  <div>
                    <h4 className="text-xl font-bold mb-6">Ce qui est inclus :</h4>
                    <ul className="text-left space-y-3 text-sm">
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-200 mt-1">•</span>
                        <span>Audit SEO complet</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-200 mt-1">•</span>
                        <span>Optimisation technique avancée</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-200 mt-1">•</span>
                        <span>Référencement local renforcé</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-200 mt-1">•</span>
                        <span>Suivi des performances mensuel</span>
                      </li>
                    </ul>
                  </div>
                  <button className="w-full bg-white text-orange-600 font-semibold py-3 rounded-xl hover:bg-orange-50 transition-colors duration-300 mt-6">
                    Découvrir cette offre
                  </button>
                </div>
              </div>
            </div>

            {/* Service 5 */}
            <div className="flip-card group h-80">
              <div className="flip-card-inner relative w-full h-full">
                {/* Front */}
                <div className="flip-card-front absolute w-full h-full bg-white border border-gray-200 rounded-2xl p-8 text-center flex flex-col justify-center shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Sécurité & maintenance
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Protection et performance continues.
                  </p>
                  <div className="mt-4 md:hidden">
                    <button className="text-red-600 text-sm font-medium hover:text-red-700 transition-colors">
                      Voir les détails →
                    </button>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back absolute w-full h-full bg-gradient-to-br from-red-600 to-gray-800 rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg">
                  <div>
                    <h4 className="text-xl font-bold mb-6">Ce qui est inclus :</h4>
                    <ul className="text-left space-y-3 text-sm">
                      <li className="flex items-start space-x-2">
                        <span className="text-red-200 mt-1">•</span>
                        <span>Sécurisation SSL avancée</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-200 mt-1">•</span>
                        <span>Sauvegardes automatiques</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-200 mt-1">•</span>
                        <span>Monitoring 24/7</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-200 mt-1">•</span>
                        <span>Mises à jour régulières</span>
                      </li>
                    </ul>
                  </div>
                  <button className="w-full bg-white text-red-600 font-semibold py-3 rounded-xl hover:bg-red-50 transition-colors duration-300 mt-6">
                    Découvrir cette offre
                  </button>
                </div>
              </div>
            </div>

            {/* Service 6 */}
            <div className="flip-card group h-80">
              <div className="flip-card-inner relative w-full h-full">
                {/* Front */}
                <div className="flip-card-front absolute w-full h-full bg-white border border-gray-200 rounded-2xl p-8 text-center flex flex-col justify-center shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Responsive design
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Parfait sur tous les supports.
                  </p>
                  <div className="mt-4 md:hidden">
                    <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700 transition-colors">
                      Voir les détails →
                    </button>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back absolute w-full h-full bg-gradient-to-br from-indigo-600 to-gray-800 rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg">
                  <div>
                    <h4 className="text-xl font-bold mb-6">Ce qui est inclus :</h4>
                    <ul className="text-left space-y-3 text-sm">
                      <li className="flex items-start space-x-2">
                        <span className="text-indigo-200 mt-1">•</span>
                        <span>Adaptation mobile parfaite</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-indigo-200 mt-1">•</span>
                        <span>Tests multi-appareils</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-indigo-200 mt-1">•</span>
                        <span>Interface tactile optimisée</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-indigo-200 mt-1">•</span>
                        <span>Temps de chargement rapide</span>
                      </li>
                    </ul>
                  </div>
                  <button className="w-full bg-white text-indigo-600 font-semibold py-3 rounded-xl hover:bg-indigo-50 transition-colors duration-300 mt-6">
                    Découvrir cette offre
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-black text-white font-semibold py-4 px-8 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Contactez un expert
            </button>
          </div>
        </div>
      </section>

      {/* SEO Tips Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Comment optimiser la visibilité d'un site internet d'<span className="bg-black text-white px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">avocat</span> ?
            </h2>
          </div>
          
          {/* SEO Content */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                Pour optimiser la visibilité d'un site internet d'avocat, il faut combiner <strong>SEO et SEA</strong>. Le référencement naturel repose sur une structure claire, des contenus juridiques de qualité intégrant des mots-clés stratégiques, une optimisation technique (balises, vitesse, mobile) et un travail régulier de publication (articles, actualités, FAQ).
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg mt-6">
                En parallèle, une campagne <strong>Google Ads</strong> bien ciblée permet de se positionner immédiatement sur des requêtes précises comme « avocat divorce Paris » ou « avocat droit du travail Bordeaux », générant des contacts qualifiés dès les premiers jours.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg mt-6">
                L'idéal est de coupler ces deux leviers : le <strong>SEO construit une visibilité durable</strong>, tandis que <strong>Google Ads apporte une notoriété immédiate et mesurable</strong>.
              </p>
              
              {/* Key points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">SEO</span>
                    Référencement naturel
                  </h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Structure technique optimisée</li>
                    <li>• Contenu juridique de qualité</li>
                    <li>• Mots-clés stratégiques</li>
                    <li>• Publication régulière</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">SEA</span>
                    Google Ads
                  </h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Positionnement immédiat</li>
                    <li>• Ciblage géographique précis</li>
                    <li>• Contacts qualifiés</li>
                    <li>• Résultats mesurables</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CMS Comparison Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              CMS pour Avocat : <span className="bg-black text-white px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">lequel</span> choisir ?
            </h2>
          </div>
          
          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
              <div className="p-4 font-semibold">CMS</div>
              <div className="p-4 font-semibold">Points forts</div>
              <div className="p-4 font-semibold">Limites</div>
              <div className="p-4 font-semibold">Budget & maintenance</div>
            </div>
            
            {/* WordPress Row */}
            <div className="grid grid-cols-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
              <div className="p-4 font-bold text-gray-900">WordPress</div>
              <div className="p-4 text-gray-700 text-sm">
                • Le plus utilisé dans le monde<br/>
                • Large choix de thèmes et plugins<br/>
                • Adapté aux avocats souhaitant autonomie
              </div>
              <div className="p-4 text-gray-700 text-sm">
                • Peut devenir lourd et lent<br/>
                • Sécurité à surveiller (plugins)<br/>
                • Mise à jour technique régulière
              </div>
              <div className="p-4 text-gray-700 text-sm">
                Faible coût initial, mais prévoir budget mensuel pour maintenance et sécurité
              </div>
            </div>
            
            {/* Webflow Row */}
            <div className="grid grid-cols-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
              <div className="p-4 font-bold text-gray-900">Webflow</div>
              <div className="p-4 text-gray-700 text-sm">
                • Design moderne et personnalisable<br/>
                • Interface intuitive sans coder<br/>
                • Hébergement intégré
              </div>
              <div className="p-4 text-gray-700 text-sm">
                • Moins flexible que WordPress pour certaines fonctionnalités<br/>
                • Dépendance à l'écosystème Webflow
              </div>
              <div className="p-4 text-gray-700 text-sm">
                Abonnement mensuel à prévoir (hébergement inclus)
              </div>
            </div>
            
            {/* NextJS Row */}
            <div className="grid grid-cols-4 border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200 bg-blue-25">
              <div className="p-4 font-bold text-gray-900">
                NextJS*
                <span className="inline-block ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Recommandé</span>
              </div>
              <div className="p-4 text-gray-700 text-sm">
                • Performance optimale (SEO, vitesse)<br/>
                • Très sécurisé et scalable<br/>
                • Design sur mesure
              </div>
              <div className="p-4 text-gray-700 text-sm">
                • Développement plus technique<br/>
                • Pas de back-office grand public
              </div>
              <div className="p-4 text-gray-700 text-sm">
                <strong>Forfait 90€ HT/mois incluant hébergement, maintenance et modifications illimitées</strong>
              </div>
            </div>
            
            {/* Astro Row */}
            <div className="grid grid-cols-4 hover:bg-green-50 transition-colors duration-200 bg-green-25">
              <div className="p-4 font-bold text-gray-900">
                Astro*
                <span className="inline-block ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Innovation</span>
              </div>
              <div className="p-4 text-gray-700 text-sm">
                • Ultra rapide (technologie moderne)<br/>
                • Optimisé pour le référencement<br/>
                • Structure légère et durable
              </div>
              <div className="p-4 text-gray-700 text-sm">
                • Moins connu que WordPress ou Webflow<br/>
                • Requiert un accompagnement expert
              </div>
              <div className="p-4 text-gray-700 text-sm">
                <strong>Forfait 90€ HT/mois incluant hébergement, maintenance et modifications illimitées</strong>
              </div>
            </div>
          </div>
          
          {/* Footer note */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              * Technologies notamment utilisées par BL NK pour garantir des performances optimales
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 lg:py-36 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          {/* Complex gradient layers */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.06] via-transparent to-gray-100/[0.04]"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/[0.03] to-transparent"></div>
          
          {/* Dynamic geometric elements */}
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-white/[0.02] rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white/[0.04] rounded-full filter blur-2xl animate-pulse" style={{animationDuration: '24s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-white/[0.03] rounded-full filter blur-xl animate-pulse" style={{animationDuration: '18s'}}></div>
          
          {/* Floating particles constellation */}
          <div className="absolute top-1/5 right-1/5 w-2 h-2 bg-white/[0.08] rounded-full animate-pulse" style={{animationDelay: '0s', animationDuration: '10s'}}></div>
          <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 bg-white/[0.1] rounded-full animate-pulse" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
          <div className="absolute bottom-1/4 right-2/3 w-1 h-1 bg-white/[0.12] rounded-full animate-pulse" style={{animationDelay: '4s', animationDuration: '12s'}}></div>
          
          {/* Premium texture overlay */}
          <div className="absolute inset-0 opacity-[0.006] animate-pulse" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
            backgroundSize: '90px 90px',
            animationDuration: '22s'
          }}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Ultra-refined Header */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-4xl sm:text-5xl font-semibold text-white leading-tight mb-12 max-w-4xl mx-auto">
              <span className="bg-white text-black px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">FAQ</span> création de sites web
            </h2>
          </div>
            
          {/* FAQ */}
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openFAQ === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-white text-gray-900 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Discutons de votre projet dès maintenant !
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Prêt à <span className="bg-white text-black px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">transformer</span> votre présence en ligne ?
          </h2>
          <p className="text-xl text-gray-100 leading-relaxed mb-8">
            Contactez-nous dès aujourd'hui pour discuter de votre projet de création de site web
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Je veux parler à un expert
            </button>
            <button className="bg-transparent text-white border-2 border-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300">
              Obtenir un devis gratuit
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-4">
                <div className="h-12 w-auto filter invert text-white font-bold text-2xl">BL NK</div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Agence spécialisée dans la création de sites web pour avocats et professions libérales. 
                Nous vous accompagnons dans votre transformation digitale.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Création de sites web</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SEO juridique</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Maintenance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consultation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contact@bl-nk.fr</li>
                <li>+33 (0)1 23 45 67 89</li>
                <li>Paris, France</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BL NK. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}