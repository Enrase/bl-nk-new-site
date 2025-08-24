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

export default function AdsAvocatsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqItems = [
    {
      question: "Quel budget pour mettre en place une campagne Ads ?",
      answer: `Nous réalisons des <strong>devis sur mesure</strong> selon le budget que vous souhaitez allouer aux campagnes publicitaires. Nos budgets commencent généralement à partir de 1 000€/mois pour des campagnes efficaces, avec une gestion experte incluse.`
    },
    {
      question: "Quels types de campagnes gérez-vous ?",
      answer: `Nous gérons des campagnes <strong>Google Ads, YouTube Ads, LinkedIn Ads, TikTok Ads et Meta</strong> (Facebook & Instagram Ads). Chaque plateforme est optimisée selon votre audience cible et vos objectifs business.`
    },
    {
      question: "Comment fonctionne le retargeting ?",
      answer: `Nous relançons les visiteurs ayant déjà interagi avec votre site ou vos annonces pour les inciter à passer à l'action. Cette stratégie permet d'atteindre <strong>jusqu'à 70% de conversions en plus</strong> sur vos prospects qualifiés.`
    },
    {
      question: "Puis-je tester une campagne avant de m'engager sur le long terme ?",
      answer: `Oui, nous proposons des <strong>campagnes tests</strong> avec ajustements pour optimiser vos résultats. Cette approche nous permet de valider les audiences et messages les plus performants avant de déployer votre budget sur le long terme.`
    },
    {
      question: "Comment suivez-vous les performances ?",
      answer: `Nous fournissons des <strong>rapports détaillés</strong> et des recommandations pour maximiser votre retour sur investissement. Suivi en temps réel, dashboards personnalisés et reporting mensuel avec analyses d'optimisation.`
    }
  ]
  return (
    <div className="bg-white">
      <Navbar currentPage="ads" />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50/20 to-white relative overflow-hidden pt-16 pb-8">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/30 via-transparent to-gray-200/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/[0.02] rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/[0.02] rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '25s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Simple Badge */}
            <div className="mb-8">
              <span className="inline-flex items-center text-gray-600 text-sm font-medium">
                <span className="mr-2">⚖️</span>
                Agence ads avocat et professions libérales
              </span>
            </div>
            
            {/* Clean Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-10 leading-[1.02] tracking-[-0.02em] text-black px-4 max-w-6xl mx-auto">
              <span className="relative inline-block animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Attirez plus de<br/>
                <div className="absolute -bottom-2 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-gray-400/30 to-transparent blur-[1px] rounded-full animate-pulse" style={{animationDuration: '3s'}}></div>
              </span>
              <span className="relative inline-block animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                clients grâce à la<br/>
                <div className="absolute -bottom-2 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent blur-[1px] rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
              </span>
              <span className="bg-black text-white px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle" style={{animationDelay: '0.6s'}}>publicité</span>
              <span className="relative inline-block animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                payante
              </span>
            </h1>
            
            {/* KPIs Cards */}
            <div className="animate-fade-in-up mb-16" style={{animationDelay: '1.2s'}}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
                {/* KPI 1: Coût d'acquisition */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/8 via-green-400/12 to-blue-500/8 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
                  <div className="relative bg-gradient-to-br from-white/85 via-white/80 to-white/75 backdrop-blur-sm rounded-xl border border-gray-200/40 p-4 lg:p-5 shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition-all duration-400 hover:-translate-y-0.5 text-center">
                    <div className="relative mb-2">
                      <div className="text-2xl lg:text-3xl font-black bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent">-30%</div>
                      <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-12 h-[1.5px] bg-gradient-to-r from-blue-500/30 to-blue-600/30 rounded-full"></div>
                    </div>
                    <p className="text-xs lg:text-sm font-medium text-gray-600">de coût d'acquisition grâce à une gestion experte des enchères</p>
                  </div>
                </div>
                
                {/* KPI 2: Conversions */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500/8 via-blue-400/12 to-green-500/8 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
                  <div className="relative bg-gradient-to-br from-white/85 via-white/80 to-white/75 backdrop-blur-sm rounded-xl border border-gray-200/40 p-4 lg:p-5 shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition-all duration-400 hover:-translate-y-0.5 text-center">
                    <div className="relative mb-2">
                      <div className="text-2xl lg:text-3xl font-black bg-gradient-to-br from-green-600 to-green-800 bg-clip-text text-transparent">+200%</div>
                      <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-12 h-[1.5px] bg-gradient-to-r from-green-500/30 to-green-600/30 rounded-full"></div>
                    </div>
                    <p className="text-xs lg:text-sm font-medium text-gray-600">de conversions avec des campagnes optimisées</p>
                  </div>
                </div>
                
                {/* KPI 3: ROI */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/8 via-purple-300/12 to-purple-500/8 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
                  <div className="relative bg-gradient-to-br from-white/85 via-white/80 to-white/75 backdrop-blur-sm rounded-xl border border-gray-200/40 p-4 lg:p-5 shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition-all duration-400 hover:-translate-y-0.5 text-center">
                    <div className="relative mb-2">
                      <div className="text-2xl lg:text-3xl font-black bg-gradient-to-br from-purple-600 to-purple-800 bg-clip-text text-transparent">×4</div>
                      <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-12 h-[1.5px] bg-gradient-to-r from-purple-500/30 to-purple-600/30 rounded-full"></div>
                    </div>
                    <p className="text-xs lg:text-sm font-medium text-gray-600">ROI moyen sur les campagnes ads bien optimisées</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 sm:mb-20 px-4 animate-fade-in-up" style={{animationDelay: '1.4s'}}>
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-black via-gray-800 to-black rounded-2xl blur opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                <button className="relative w-full sm:w-auto bg-gradient-to-r from-black via-gray-900 to-black text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.4)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-0.5 text-base sm:text-lg group-hover:from-gray-900 group-hover:via-black group-hover:to-gray-900">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Planifiez un audit gratuit de vos campagnes !
                    <span className="text-xl group-hover:translate-x-1 transition-transform duration-500">→</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden max-w-5xl mx-auto">
            <div className="flex animate-scroll-logos">
              {/* Logos répétés pour l'effet carousel infini */}
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex">
                  {/* Logo 1 */}
                  <div className="group flex-shrink-0 mx-4">
                    <div className="absolute -inset-3 bg-gradient-to-br from-gray-100/40 via-transparent to-gray-200/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                    <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200/40 shadow-[0_4px_20px_rgba(0,0,0,0.04)] group-hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-2 w-32 sm:w-40">
                      <img 
                        src="https://api.bl-nk.fr/wp-content/uploads/2025/08/Agence-SEO-Avocats-4.webp" 
                        alt="Client logo" 
                        className="h-12 sm:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105 rounded-lg mx-auto"
                      />
                    </div>
                  </div>
                  
                  {/* Logo 2 */}
                  <div className="group flex-shrink-0 mx-4">
                    <div className="absolute -inset-3 bg-gradient-to-br from-gray-100/40 via-transparent to-gray-200/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                    <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200/40 shadow-[0_4px_20px_rgba(0,0,0,0.04)] group-hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-2 w-32 sm:w-40">
                      <img 
                        src="https://api.bl-nk.fr/wp-content/uploads/2025/08/Agence-SEO-Avocats-5.webp" 
                        alt="Client logo" 
                        className="h-12 sm:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105 rounded-lg mx-auto"
                      />
                    </div>
                  </div>
                  
                  {/* Logo 3 */}
                  <div className="group flex-shrink-0 mx-4">
                    <div className="absolute -inset-3 bg-gradient-to-br from-gray-100/40 via-transparent to-gray-200/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                    <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200/40 shadow-[0_4px_20px_rgba(0,0,0,0.04)] group-hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-2 w-32 sm:w-40">
                      <img 
                        src="https://api.bl-nk.fr/wp-content/uploads/2025/08/Agence-SEO-Avocats-6.webp" 
                        alt="Client logo" 
                        className="h-12 sm:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105 rounded-lg mx-auto"
                      />
                    </div>
                  </div>
                  
                  {/* Logo 4 */}
                  <div className="group flex-shrink-0 mx-4">
                    <div className="absolute -inset-3 bg-gradient-to-br from-gray-100/40 via-transparent to-gray-200/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                    <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200/40 shadow-[0_4px_20px_rgba(0,0,0,0.04)] group-hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-2 w-32 sm:w-40">
                      <img 
                        src="https://api.bl-nk.fr/wp-content/uploads/2025/08/Agence-SEO-Avocats-7.webp" 
                        alt="Client logo" 
                        className="h-12 sm:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105 rounded-lg mx-auto"
                      />
                    </div>
                  </div>
                  
                  {/* Logo 5 */}
                  <div className="group flex-shrink-0 mx-4">
                    <div className="absolute -inset-3 bg-gradient-to-br from-gray-100/40 via-transparent to-gray-200/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                    <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200/40 shadow-[0_4px_20px_rgba(0,0,0,0.04)] group-hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-2 w-32 sm:w-40">
                      <img 
                        src="https://api.bl-nk.fr/wp-content/uploads/2025/08/Agence-SEO-Avocats-2.webp" 
                        alt="Client logo" 
                        className="h-12 sm:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105 rounded-lg mx-auto"
                      />
                    </div>
                  </div>
                  
                  {/* Logo 6 */}
                  <div className="group flex-shrink-0 mx-4">
                    <div className="absolute -inset-3 bg-gradient-to-br from-gray-100/40 via-transparent to-gray-200/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                    <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200/40 shadow-[0_4px_20px_rgba(0,0,0,0.04)] group-hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-2 w-32 sm:w-40">
                      <img 
                        src="https://api.bl-nk.fr/wp-content/uploads/2025/08/Agence-SEO-Avocats.webp" 
                        alt="Client logo" 
                        className="h-12 sm:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105 rounded-lg mx-auto"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi Investir */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.03]"></div>
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/[0.01] rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-white/[0.015] rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '25s'}}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Pourquoi votre cabinet doit-il investir dans la <span className="bg-white text-black px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">publicité</span> en ligne ?
            </h2>
            
            {/* Introduction text */}
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl text-gray-100 leading-relaxed animate-fade-in-up mb-6" style={{animationDelay: '0.3s'}}>
                <strong>Vos concurrents investissent déjà massivement dans la publicité digitale.</strong> Pendant que certains cabinets génèrent <span className="bg-white text-black px-3 py-1 mx-1 rounded-sm transform rotate-1 inline-block shadow-lg">+300% de nouveaux clients</span> grâce aux ads, d'autres restent invisibles.
              </p>
              <p className="text-lg text-gray-200 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                Nos campagnes ultra-ciblées sur <strong>Google, Meta, LinkedIn et TikTok</strong> transforment votre budget publicitaire en machine à prospects qualifiés. <span className="bg-white text-black px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg">ROI moyen : ×4 en 180 jours.</span>
              </p>
            </div>
          </div>
          
          {/* Problems */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              Les 5 difficultés majeures des campagnes publicitaires 🎯
            </h3>
            
            <div className="max-w-6xl mx-auto">
              {/* First row: 3 cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Problem 1 */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500/8 via-red-300/12 to-red-500/8 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative bg-gradient-to-br from-white/[0.08] via-white/[0.06] to-white/[0.04] backdrop-blur-md rounded-2xl p-6 border border-white/[0.15] shadow-lg hover:-translate-y-2 transition-all duration-500">
                    <p className="text-white leading-relaxed mb-4"><strong>Brûler votre budget</strong> sans aucun client en retour. <span className="bg-white text-black px-2 py-1 rounded text-xs font-semibold inline-block mt-2">💰 Moyenne : -2500€/mois gaspillés</span></p>
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-white font-semibold text-sm mb-2">✅ Nos solutions :</p>
                      <ul className="text-gray-300 text-xs space-y-1">
                        <li>• Tracking avancé avec GA4 + pixels conversion</li>
                        <li>• Attribution multi-touch pour mesurer le vrai ROI</li>
                        <li>• Reporting détaillé : coût par prospect qualifié</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Problem 2 */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/8 via-orange-300/12 to-orange-500/8 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative bg-gradient-to-br from-white/[0.08] via-white/[0.06] to-white/[0.04] backdrop-blur-md rounded-2xl p-6 border border-white/[0.15] shadow-lg hover:-translate-y-2 transition-all duration-500">
                    <p className="text-white leading-relaxed mb-4"><strong>Ciblage approximatif</strong> = argent jeté par les fenêtres. <span className="bg-white text-black px-2 py-1 rounded text-xs font-semibold inline-block mt-2">🎯 87% des clics sont non-qualifiés</span></p>
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-white font-semibold text-sm mb-2">✅ Nos solutions :</p>
                      <ul className="text-gray-300 text-xs space-y-1">
                        <li>• Audiences lookalike basées sur vos meilleurs clients</li>
                        <li>• Géo-ciblage précis par tribunal + revenus</li>
                        <li>• Exclusions négatives pour éliminer les curieux</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Problem 3 */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/8 via-yellow-300/12 to-yellow-500/8 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative bg-gradient-to-br from-white/[0.08] via-white/[0.06] to-white/[0.04] backdrop-blur-md rounded-2xl p-6 border border-white/[0.15] shadow-lg hover:-translate-y-2 transition-all duration-500">
                    <p className="text-white leading-relaxed mb-4"><strong>Improviser</strong> au lieu de maîtriser les techniques pros. <span className="bg-white text-black px-2 py-1 rounded text-xs font-semibold inline-block mt-2">⏰ 15h/semaine perdues en optimisations amateur</span></p>
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-white font-semibold text-sm mb-2">✅ Nos solutions :</p>
                      <ul className="text-gray-300 text-xs space-y-1">
                        <li>• Gestion 100% déléguée par experts certifiés</li>
                        <li>• Optimisations automatisées via scripts IA</li>
                        <li>• Tests A/B permanents sur annonces/landing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Second row: 2 cards centered */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* Problem 4 */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500/8 via-green-300/12 to-green-500/8 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative bg-gradient-to-br from-white/[0.08] via-white/[0.06] to-white/[0.04] backdrop-blur-md rounded-2xl p-6 border border-white/[0.15] shadow-lg hover:-translate-y-2 transition-all duration-500">
                    <p className="text-white leading-relaxed mb-4"><strong>ROI décevant</strong> : 1€ investi = 0,20€ de retour. <span className="bg-white text-black px-2 py-1 rounded text-xs font-semibold inline-block mt-2">📉 Vs nos clients : 1€ = 4€ de CA</span></p>
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-white font-semibold text-sm mb-2">✅ Nos solutions :</p>
                      <ul className="text-gray-300 text-xs space-y-1">
                        <li>• Landing pages optimisées conversion (+340%)</li>
                        <li>• Entonnoir de nurturing email automatisé</li>
                        <li>• Call-tracking pour mesurer prospects téléphone</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Problem 5 */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/8 via-blue-300/12 to-blue-500/8 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative bg-gradient-to-br from-white/[0.08] via-white/[0.06] to-white/[0.04] backdrop-blur-md rounded-2xl p-6 border border-white/[0.15] shadow-lg hover:-translate-y-2 transition-all duration-500">
                    <p className="text-white leading-relaxed mb-4"><strong>Noyé</strong> dans la masse face aux gros cabinets. <span className="bg-white text-black px-2 py-1 rounded text-xs font-semibold inline-block mt-2">🏆 Pendant qu'eux dominent les résultats payants</span></p>
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-white font-semibold text-sm mb-2">✅ Nos solutions :</p>
                      <ul className="text-gray-300 text-xs space-y-1">
                        <li>• Créa différenciante : vidéos UGC + témoignages</li>
                        <li>• Stratégie d'enchères agressive sur mots-clés top</li>
                        <li>• Extensions d'annonces maximisées (lieu, prix, etc.)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <button className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 mx-auto">
              Écrasez vos concurrents avec nos campagnes ads
              <span className="text-xl group-hover:translate-x-1 transition-transform duration-500">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Nos <span className="bg-black text-white px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">solutions</span> expertes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformez vos campagnes publicitaires en véritable machine à prospects grâce à notre expertise technique et notre approche data-driven.
            </p>
          </div>
          
          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Solution 1 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/8 via-gray-300/12 to-blue-500/8 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/[0.98] backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Campagnes ultra-ciblées adaptées aux spécialités juridiques
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Audiences précises par domaine juridique, localisation et revenus pour toucher uniquement vos prospects idéaux.
                </p>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl shadow-sm">
                    <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-gray-800 bg-clip-text text-transparent">Ciblage expert</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Solution 2 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/8 via-gray-300/12 to-green-500/8 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/[0.98] backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  Publicités optimisées pour Google, YouTube, LinkedIn, TikTok et Meta
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Créatifs adaptés à chaque plateforme et format pour maximiser l'engagement et les conversions.
                </p>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl shadow-sm">
                    <span className="text-sm font-bold bg-gradient-to-r from-green-600 to-gray-800 bg-clip-text text-transparent">Multi-plateformes</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Solution 3 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/8 via-gray-300/12 to-purple-500/8 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/[0.98] backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  Stratégies avancées de retargeting pour relancer les prospects
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Relancez intelligemment vos visiteurs avec des messages personnalisés selon leur parcours sur votre site.
                </p>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl shadow-sm">
                    <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-gray-800 bg-clip-text text-transparent">Retargeting intelligent</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Solution 4 */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/8 via-gray-300/12 to-orange-500/8 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/[0.98] backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  Analyse en temps réel et ajustements pour maximiser vos conversions
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Optimisation continue basée sur la data pour améliorer constamment les performances de vos campagnes.
                </p>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/20 to-orange-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl shadow-sm">
                    <span className="text-sm font-bold bg-gradient-to-r from-orange-600 to-gray-800 bg-clip-text text-transparent">Optimisation continue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-12">
            <button className="bg-black text-white font-semibold py-4 px-8 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Attirez plus de clients grâce à la publicité payante !
            </button>
          </div>
        </div>
      </section>

      {/* Section 4: Google Reviews */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.02] to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200/50 shadow-lg mb-6">
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="text-sm font-medium text-gray-700">5/5 sur Google</span>
              <span className="text-xs text-gray-500">• 12 Notes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Découvrez pourquoi plus de 150 cabinets d'avocats choisissent BL NK pour développer leur activité
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Review 1 - Mamadou Waggeh */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl opacity-20 group-hover:opacity-40 transition-all duration-500 blur-sm"></div>
              <div className="relative bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-1">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Cela fait maintenant un an que je travaille avec l'agence BLNK, et je ne peux que recommander. Leur expertise en SEO, acquisition en ligne et identité visuelle n'est plus à démontrer. L'équipe comprend parfaitement les enjeux spécifiques aux professions réglementées."
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-700 font-bold text-lg">MW</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Mamadou Waggeh</p>
                    <p className="text-sm text-gray-600">Il y a 3 semaines</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Review 2 - Antoine Skrzynski */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl opacity-20 group-hover:opacity-40 transition-all duration-500 blur-sm"></div>
              <div className="relative bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-1">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "BL NK est une agence sérieuse et compétente qui m'accompagne efficacement. Pierre COLLIOT suit de près le développement du référencement du cabinet et s'est entouré d'une équipe efficace. Le résultat est un site plus propre, plus professionnel."
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-700 font-bold text-lg">AS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Antoine Skrzynski</p>
                    <p className="text-sm text-gray-600">Local Guide • Il y a 4 semaines</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Review 3 - Nathalie Attias */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl opacity-20 group-hover:opacity-40 transition-all duration-500 blur-sm"></div>
              <div className="relative bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-1">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Je connais Alexis Déborde depuis plus de 10 ans, c'est un partenaire compétent et fiable, un entrepreneur incarné et hyperactif sans jamais perdre le sens des priorités. Je ne conduis aucun projet de stratégie marketing et communication sans lui."
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-700 font-bold text-lg">NA</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Nathalie ATTIAS</p>
                    <p className="text-sm text-gray-600">Il y a 4 semaines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/60 shadow-lg">
              <span className="text-gray-700 text-sm">Basé sur 12 avis Google authentiques</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose BL NK */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Pourquoi choisir <span className="bg-black text-white px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">BL NK</span> pour vos campagnes ads ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expertise unique qui combine maîtrise publicitaire et connaissance approfondie du secteur juridique
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Expertise juridique exclusive
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Spécialisés uniquement dans le secteur juridique. Nous maîtrisons les règles déontologiques et les spécificités de communication pour avocats.
                    </p>
                    <div className="bg-black text-white px-3 py-1 rounded-sm inline-block shadow-lg text-sm font-semibold">
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
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Ciblage ultra-précis
                </h3>
                <p className="text-gray-700 leading-relaxed flex-1 mb-4">
                  Audiences lookalike et géo-ciblage par tribunaux pour maximiser la qualification.
                </p>
                <div className="bg-black text-white px-3 py-1 rounded-sm inline-block shadow-lg text-sm font-semibold">
                  ROI optimisé
                </div>
              </div>
            </div>
            
            {/* Square feature */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-3xl border border-purple-200/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 mb-4">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Optimisation continue
                </h3>
                <p className="text-gray-700 leading-relaxed flex-1 mb-4">
                  Tests A/B permanents et ajustements data-driven pour améliorer vos performances.
                </p>
                <div className="bg-black text-white px-3 py-1 rounded-sm inline-block shadow-lg text-sm font-semibold">
                  Performance +340%
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Transparence et accompagnement total
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Reporting détaillé en temps réel et support dédié pour optimiser continuellement vos investissements publicitaires.
                    </p>
                    <div className="bg-black text-white px-3 py-1 rounded-sm inline-block shadow-lg text-sm font-semibold">
                      ✓ Suivi personnalisé
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Nos <span className="bg-black text-white px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">services</span> publicitaires
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des prestations complètes adaptées à votre secteur d'activité et à vos objectifs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service 1: Google Ads */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/8 via-gray-300/12 to-blue-500/8 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/[0.98] backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                {/* Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                    🔍 Search & Display
                  </div>
                </div>
                
                <div className="text-center mb-8 pt-4">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Google Ads & YouTube</h4>
                  <p className="text-gray-600">Captez vos prospects au moment où ils vous cherchent</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Campagnes de recherche sur mots-clés spécialisés</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Annonces display et remarketing ciblées</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Vidéos YouTube pour renforcer votre expertise</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Optimisation continue des enchères et budgets</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Tracking avancé des conversions et ROI</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Service 2: Social Media */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/8 via-gray-300/12 to-purple-500/8 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/[0.98] backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                {/* Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                    📱 Multi-plateformes
                  </div>
                </div>
                
                <div className="text-center mb-8 pt-4">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Social Media Ads</h4>
                  <p className="text-gray-600">Touchez votre audience sur Meta, LinkedIn, TikTok</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Ciblage par profils socio-démographiques précis</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Créations visuelles adaptées à chaque plateforme</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Campagnes de notoriété et génération de leads</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">A/B testing des messages et audiences</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Stratégie de contenu pour développer l'engagement</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Service 3: Landing Pages */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/8 via-gray-300/12 to-green-500/8 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/[0.98] backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                {/* Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                    🎯 Conversion
                  </div>
                </div>
                
                <div className="text-center mb-8 pt-4">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Landing Pages & CRO</h4>
                  <p className="text-gray-600">Optimisez vos conversions et transformez vos visiteurs</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Pages d'atterrissage optimisées conversion</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Formulaires de contact simplifiés et efficaces</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Call-to-action persuasifs et bien positionnés</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Tests de versions pour améliorer les performances</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Intégration CRM et email marketing</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Service 4: Suivi */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/8 via-gray-300/12 to-orange-500/8 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/[0.98] backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
                {/* Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                    📊 Analytics
                  </div>
                </div>
                
                <div className="text-center mb-8 pt-4">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Suivi & Optimisation</h4>
                  <p className="text-gray-600">Pilotez vos performances avec des données précises</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Tableaux de bord temps réel avec métriques clés</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Rapports détaillés mensuels avec recommandations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Optimisation budgets selon les performances</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Veille concurrentielle et ajustements stratégiques</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">Support dédié et conseils personnalisés</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">        
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              <span className="bg-white text-black px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg">Résultats</span> clients
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
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-blue-50 transition-colors duration-300">Alter Avocats</h3>
                    <p className="text-gray-100 text-lg font-medium group-hover:text-gray-200 transition-colors duration-300">Droit pénal & divorce</p>
                  </div>
                </div>
            
                {/* Metrics display */}
                <div className="relative group/metrics mb-8">
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-500/10 via-blue-400/8 to-green-500/10 rounded-2xl blur opacity-50 group-hover/metrics:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.06] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/[0.2] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-bold text-gray-100 tracking-wider uppercase">Prises de contact</span>
                      <div className="px-3 py-1 bg-green-500/20 text-green-200 text-xs font-bold rounded-full border border-green-400/30">+180%</div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-3xl sm:text-4xl font-black text-white">5 → 14</div>
                      <div className="text-sm text-gray-200 font-medium">par mois</div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-100 leading-relaxed text-lg font-light mb-8 group-hover:text-gray-200 transition-colors duration-300">
                  Campagnes Google Ads ultra-ciblées en droit pénal et divorce. Optimisation continue des mots-clés et landing pages pour maximiser les conversions qualifiées.
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
                      S
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-purple-50 transition-colors duration-300">SOA Avocats</h3>
                    <p className="text-gray-100 text-lg font-medium group-hover:text-gray-200 transition-colors duration-300">Droit de la famille & MARD</p>
                  </div>
                </div>
            
                {/* Metrics display */}
                <div className="relative group/metrics mb-8">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/10 via-blue-400/8 to-purple-500/10 rounded-2xl blur opacity-50 group-hover/metrics:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.06] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/[0.2] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-bold text-gray-100 tracking-wider uppercase">ROI campagnes</span>
                      <div className="px-3 py-1 bg-purple-500/20 text-purple-200 text-xs font-bold rounded-full border border-purple-400/30">×3.5</div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-3xl sm:text-4xl font-black text-white">1€ → 3,5€</div>
                      <div className="text-sm text-gray-200 font-medium">de CA</div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-100 leading-relaxed text-lg font-light mb-8 group-hover:text-gray-200 transition-colors duration-300">
                  Stratégie LinkedIn Ads ciblée familles en conflit. Créations premium et audiences lookalike pour générer des leads qualifiés en droit de la famille et solutions amiables MARD.
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

      {/* Section 8: SEO Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Quels résultats attendre d'une <span className="bg-black text-white px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">agence Ads</span> pour avocat ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des résultats concrets et mesurables pour développer votre cabinet
            </p>
          </div>
          
          {/* SEO Content */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                Faire appel à une agence Ads spécialisée dans les professions juridiques permet à un cabinet d'avocat d'obtenir des <strong>résultats concrets et mesurables</strong> en matière de visibilité et de génération de contacts qualifiés. Grâce à une gestion experte de campagnes Google Ads ou LinkedIn Ads, l'agence cible précisément les requêtes ou audiences pertinentes (droit du travail, droit de la famille, droit des affaires, etc.), tout en maîtrisant les coûts.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg mt-6">
                Résultat : <strong>plus de rendez-vous, une meilleure rentabilité des investissements publicitaires (ROAS) et une croissance maîtrisée de la clientèle.</strong> L'expertise d'une agence permet aussi d'éviter les erreurs coûteuses et d'optimiser en continu les performances.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg mt-6">
                Chez <strong>BL NK</strong>, notre expertise sectorielle fait la différence : nos équipes, composées d'anciens avocats et juristes, comprennent finement les enjeux spécifiques de chaque cabinet et adaptent les campagnes pour coller au plus près des besoins terrain.
              </p>
              
              {/* Key benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">📊</span>
                    Résultats mesurables
                  </h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• ROI moyen ×4 en 180 jours</li>
                    <li>• +180% de prises de contact</li>
                    <li>• Coût par prospect optimisé</li>
                    <li>• Tracking complet des conversions</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">⚖️</span>
                    Expertise juridique
                  </h3>
                  <ul className="text-gray-600 space-y-2 text-sm">
                    <li>• Équipes d'anciens avocats</li>
                    <li>• Respect déontologie avocat</li>
                    <li>• Intégration outils cabinet</li>
                    <li>• Suivi prospect → signature</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.06] via-transparent to-white/[0.04]"></div>
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/[0.01] rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '20s'}}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-4xl sm:text-5xl font-semibold text-white leading-tight mb-12 max-w-4xl mx-auto">
              <span className="bg-white text-black px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">FAQ</span> publicité digitale
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
              Planifiez votre audit ads gratuit !
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Prêt à <span className="bg-white text-black px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">booster</span> vos conversions ?
          </h2>
          <p className="text-xl text-gray-100 leading-relaxed mb-8">
            Contactez-nous dès aujourd'hui pour découvrir comment nos campagnes ads peuvent transformer votre cabinet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Planifiez un audit gratuit
            </button>
            <button className="bg-transparent text-white border-2 border-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300">
              Voir nos études de cas
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-4">
                <div className="h-12 w-auto filter invert text-white font-bold text-2xl">BL NK</div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Agence spécialisée en publicité digitale pour avocats et professions libérales. 
                Nous optimisons vos campagnes ads pour un ROI maximal.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Google Ads</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Social Ads</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Retargeting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reporting</a></li>
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