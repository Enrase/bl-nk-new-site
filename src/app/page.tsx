import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import TeamMemberImage from '@/components/TeamMemberImage'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BL NK - Agence SEO pour Avocats et Professions Libérales',
  description: 'Agence SEO spécialisée pour les avocats et professions libérales. Développez votre visibilité en ligne avec nos stratégies de référencement naturel sur mesure.',
  keywords: 'SEO avocats, référencement naturel, professions libérales, marketing juridique',
}

export default function SEOPage() {
  return (
    <div className="bg-white">
      <Navbar currentPage="seo" />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50/20 to-white relative overflow-hidden pt-16 pb-8">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/30 via-transparent to-gray-200/20"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-gray-50/40 to-transparent"></div>
          
          <div className="absolute top-1/4 right-1/5 w-80 h-80 bg-gray-300/[0.08] rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '6s'}}></div>
          <div className="absolute bottom-1/3 left-1/6 w-64 h-64 bg-gray-400/[0.12] rounded-full filter blur-2xl animate-pulse" style={{animationDuration: '8s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gray-500/[0.06] rounded-full filter blur-xl animate-pulse" style={{animationDuration: '10s'}}></div>
        </div>
        
        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-center text-center h-full">
            <div className="max-w-5xl mx-auto">
              {/* Simple Badge */}
              <div className="mb-8">
                <span className="inline-flex items-center text-gray-600 text-sm font-medium">
                  <span className="mr-2">⚖️</span>
                  Agence SEO avocats et professions libérales
                </span>
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-10 leading-[1.02] tracking-[-0.02em] text-black px-4 max-w-6xl mx-auto">
                <span className="relative inline-block animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  Soyez celui que 
                  <div className="absolute -bottom-2 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-gray-400/30 to-transparent blur-[1px] rounded-full animate-pulse" style={{animationDuration: '3s'}}></div>
                </span>
                <br className="hidden sm:block"/>
                <span className="relative inline-block mt-2 sm:mt-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <span className="relative z-10 font-black">
                    Google <span className="bg-black text-white px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg">recommande</span>
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-6 bg-gradient-to-r from-gray-200/40 via-gray-300/60 to-gray-200/40 blur-sm rounded-full transform rotate-1 animate-bounce" style={{animationDuration: '4s'}}></div>
                </span>
                <br className="block sm:hidden"/>
                <span className="relative inline-block animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                  <span className="relative z-10">en premier</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shine"></div>
                </span>
              </h1>
              
              {/* Premium KPIs Section */}
              <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                  {/* KPI 1: Trafic */}
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/8 via-gray-300/12 to-blue-500/8 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
                    <div className="relative bg-gradient-to-br from-white/85 via-white/80 to-white/75 backdrop-blur-sm rounded-xl border border-gray-200/40 p-4 lg:p-5 shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition-all duration-400 hover:-translate-y-0.5 text-center">
                      <div className="relative mb-2">
                        <div className="text-2xl lg:text-3xl font-black bg-gradient-to-br from-blue-600 to-gray-800 bg-clip-text text-transparent">+250%</div>
                        <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-12 h-[1.5px] bg-gradient-to-r from-blue-500/30 to-gray-600/30 rounded-full"></div>
                      </div>
                      <p className="text-xs lg:text-sm font-medium text-gray-600">de trafic en moyenne</p>
                    </div>
                  </div>
                  
                  {/* KPI 2: Positionnement */}
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500/8 via-gray-300/12 to-green-500/8 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
                    <div className="relative bg-gradient-to-br from-white/85 via-white/80 to-white/75 backdrop-blur-sm rounded-xl border border-gray-200/40 p-4 lg:p-5 shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition-all duration-400 hover:-translate-y-0.5 text-center">
                      <div className="relative mb-2">
                        <div className="text-2xl lg:text-3xl font-black bg-gradient-to-br from-green-600 to-gray-800 bg-clip-text text-transparent">Top 3</div>
                        <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-12 h-[1.5px] bg-gradient-to-r from-green-500/30 to-gray-600/30 rounded-full"></div>
                      </div>
                      <p className="text-xs lg:text-sm font-medium text-gray-600">Google en 6 mois</p>
                    </div>
                  </div>
                  
                  {/* KPI 3: Satisfaction */}
                  <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/8 via-gray-300/12 to-purple-500/8 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
                    <div className="relative bg-gradient-to-br from-white/85 via-white/80 to-white/75 backdrop-blur-sm rounded-xl border border-gray-200/40 p-4 lg:p-5 shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition-all duration-400 hover:-translate-y-0.5 text-center">
                      <div className="relative mb-2">
                        <div className="text-2xl lg:text-3xl font-black bg-gradient-to-br from-purple-600 to-gray-800 bg-clip-text text-transparent">95%</div>
                        <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-12 h-[1.5px] bg-gradient-to-r from-purple-500/30 to-gray-600/30 rounded-full"></div>
                      </div>
                      <p className="text-xs lg:text-sm font-medium text-gray-600">de clients satisfaits</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Description */}
              <div className="max-w-4xl mx-auto mb-12">
                <div className="relative group text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-gray-500/8 via-gray-300/12 to-gray-500/8 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
                    <div className="relative bg-gradient-to-br from-white/85 via-white/80 to-white/75 backdrop-blur-sm rounded-xl border border-gray-200/40 p-4 lg:p-5 shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition-all duration-400 hover:-translate-y-0.5">
                      <div className="relative mb-2">
                        <div className="text-2xl lg:text-3xl font-black bg-gradient-to-br from-gray-600 to-gray-800 bg-clip-text text-transparent">9 fois sur 10</div>
                        <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-12 h-[1.5px] bg-gradient-to-r from-gray-500/30 to-gray-600/30 rounded-full"></div>
                      </div>
                      <p className="text-xs lg:text-sm font-medium text-gray-600">un internaute cherche son avocat sur Internet</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative group animate-fade-in-up mt-8" style={{animationDelay: '1.0s'}}>
                  <div className="absolute -inset-3 bg-gradient-to-r from-gray-200/10 via-gray-100/15 to-gray-200/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-800"></div>
                  
                  <div className="relative inline-block px-6 py-4 bg-gradient-to-br from-white/90 via-white/85 to-white/80 rounded-2xl border border-gray-200/50 backdrop-blur-sm shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition-all duration-500 hover:scale-[1.015] cursor-default">
                    <p className="text-xl sm:text-2xl font-semibold text-black relative text-center">
                      Êtes-vous visible quand ils ont besoin de vous ?
                    </p>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-[2px] bg-gradient-to-r from-transparent via-gray-400/40 to-transparent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SEO Section */}
      <section className="py-20 sm:py-28 lg:py-36 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.03]"></div>
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white/[0.01] rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-white/[0.015] rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '25s'}}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto animate-fade-in-up">
              Pourquoi le SEO est-il <span className="bg-white text-black px-3 py-1 mx-1 rounded-sm transform rotate-1 inline-block shadow-lg animate-rock-wiggle">important</span> pour votre cabinet ?
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Dans un marché juridique concurrentiel, être visible sur Google est devenu indispensable pour développer votre cabinet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 animate-on-scroll text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Premier réflexe</h3>
              <p className="text-gray-200 leading-relaxed">
                9 fois sur 10, un internaute cherche son avocat sur Internet avant de prendre sa décision.
              </p>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 animate-on-scroll text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Visibilité cruciale</h3>
              <p className="text-gray-200 leading-relaxed">
                Si vous n'apparaissez pas dans les premiers résultats Google, vous perdez des clients potentiels.
              </p>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 animate-on-scroll text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Confiance établie</h3>
              <p className="text-gray-200 leading-relaxed">
                Le SEO positionne durablement votre cabinet et inspire confiance à vos prospects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Pourquoi investir dans le SEO <span className="bg-black text-white px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">transforme</span> votre cabinet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quatre bénéfices mesurables qui font la différence pour votre développement commercial
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/8 via-gray-300/12 to-blue-500/8 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/[0.98] backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 animate-slide-in-left">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Visibilité accrue et crédibilité renforcée
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Apparaître en première page Google établit immédiatement votre expertise et inspire confiance à vos prospects.
                </p>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl shadow-sm">
                    <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-gray-800 bg-clip-text text-transparent">75% des clics sur la page 1</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/8 via-gray-300/12 to-green-500/8 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/[0.98] backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 animate-slide-in-right">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  Clients plus qualifiés et motivés
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Les prospects qui vous trouvent via Google recherchent activement vos services et sont prêts à s'engager.
                </p>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl shadow-sm">
                    <span className="text-sm font-bold bg-gradient-to-r from-green-600 to-gray-800 bg-clip-text text-transparent">+60% de taux de conversion</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/8 via-gray-300/12 to-purple-500/8 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/[0.98] backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 animate-on-scroll">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  ROI supérieur aux méthodes traditionnelles
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Le SEO génère un retour sur investissement durable, contrairement aux publicités qui s'arrêtent dès que vous cessez de payer.
                </p>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl shadow-sm">
                    <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-gray-800 bg-clip-text text-transparent">ROI supérieur à la pub</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/8 via-gray-300/12 to-blue-500/8 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-white/[0.98] backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 animate-on-scroll">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-gray-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Développement commercial 24h/24
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Votre site travaille en permanence pour vous, attirant de nouveaux clients même pendant vos vacances.
                </p>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl shadow-sm">
                    <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-gray-800 bg-clip-text text-transparent">Acquisition automatique</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Prêt à développer votre cabinet ?
              </h3>
              <p className="text-gray-600 mb-6">
                Découvrez comment le SEO peut améliorer votre développement commercial
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="bg-black text-white font-semibold py-3 px-6 rounded-xl hover:bg-gray-800 transition-colors duration-300">
                  Analyser mon potentiel SEO
                </button>
                <button className="bg-white text-gray-900 border border-gray-300 font-semibold py-3 px-6 rounded-xl hover:border-gray-900 transition-colors duration-300">
                  Étude de cas gratuite
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Services SEO <span className="bg-black text-white px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">spécialisés</span> pour avocats
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche sur-mesure qui respecte les spécificités du secteur juridique
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 animate-on-scroll">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                SEO Technique
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Optimisation complète de votre site web pour les moteurs de recherche et l'expérience utilisateur.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-700">Vitesse de chargement optimisée</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-700">Structure technique perfectionnée</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-700">Responsive design mobile-first</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-700">Sécurité et conformité RGPD</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 animate-on-scroll">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Contenu Juridique Expert
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Création de contenus spécialisés qui positionnent votre expertise et attirent vos clients cibles.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-700">Articles de blog optimisés</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-700">Pages de services détaillées</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-700">FAQ juridiques complètes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-700">Actualités juridiques régulières</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 animate-on-scroll">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Référencement Local
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Optimisation pour être trouvé par les clients de votre zone géographique d'intervention.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-700">Google My Business optimisé</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-700">Citations locales cohérentes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-700">Avis clients gérés</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-700">Géolocalisation précise</span>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-20 mb-16">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                L'équipe <span className="bg-black text-white px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">SEO</span> dédiée
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des experts spécialisés dans le référencement juridique pour améliorer vos résultats
              </p>
              <div className="flex justify-center items-center gap-6 text-sm text-gray-500 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Double expertise Droit + SEO</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>10+ ans d'expérience minimum</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Secteur juridique uniquement</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-purple-50/30 rounded-3xl -z-10"></div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-blue-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-3 animate-on-scroll text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full mx-auto overflow-hidden border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-blue-600 to-gray-800">
                      <TeamMemberImage 
                        src="https://api.bl-nk.fr/wp-content/uploads/2025/08/Julie-Kunzli-LinkedIn.jpeg" 
                        alt="Julie Kunzli" 
                        initials="JK" 
                      />
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
                    Spécialisée en Droit des Affaires et Droit Pénal. Formatrice et rédactrice SEO depuis plus de 10 ans.
                  </p>
                  <div className="flex justify-center gap-2">
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-medium">Droit des affaires</span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-medium">SEO 10+ans</span>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-green-400/10 to-green-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-3 animate-on-scroll text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full mx-auto overflow-hidden border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-green-600 to-gray-800">
                      <TeamMemberImage 
                        src="https://api.bl-nk.fr/wp-content/uploads/2025/08/DSCF9812-scaled.jpg" 
                        alt="Pierre Colliot" 
                        initials="PC" 
                      />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">★</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">Pierre Colliot</h4>
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-100 to-green-200 rounded-full mb-4">
                    <span className="text-green-700 font-medium text-sm">Expert SEO 10+ans</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Expert SEO depuis + de 10 ans, spécialiste du secteur juridique et des professions réglementées.
                  </p>
                  <div className="flex justify-center gap-2">
                    <span className="px-2 py-1 bg-green-50 text-green-600 rounded text-xs font-medium">SEO juridique</span>
                    <span className="px-2 py-1 bg-green-50 text-green-600 rounded text-xs font-medium">Fondateur</span>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-purple-400/10 to-purple-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-3 animate-on-scroll text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full mx-auto overflow-hidden border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-purple-600 to-gray-800">
                      <TeamMemberImage 
                        src="https://api.bl-nk.fr/wp-content/uploads/2025/08/Melanie-Truffaut-LinkedIn.jpeg" 
                        alt="Mélanie Truffaut" 
                        initials="MT" 
                      />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">★</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">Mélanie Truffaut</h4>
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full mb-4">
                    <span className="text-purple-700 font-medium text-sm">Ancienne Avocate</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Ancienne avocate, experte des matières civilistes. Apporte son expertise juridique au SEO.
                  </p>
                  <div className="flex justify-center gap-2">
                    <span className="px-2 py-1 bg-purple-50 text-purple-600 rounded text-xs font-medium">Droit civil</span>
                    <span className="px-2 py-1 bg-purple-50 text-purple-600 rounded text-xs font-medium">Droit Pénal</span>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-blue-500/10 to-blue-600/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-3 animate-on-scroll text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full mx-auto overflow-hidden border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-blue-700 to-gray-900">
                      <TeamMemberImage 
                        src="https://api.bl-nk.fr/wp-content/uploads/2025/08/DSCF9789-scaled.jpg" 
                        alt="Jeremy Geuil" 
                        initials="JG" 
                      />
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
                    Développeur spécialiste WordPress, Webflow, Astro et NextJS pour la partie technique SEO.
                  </p>
                  <div className="flex justify-center gap-2">
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-medium">WordPress</span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-medium">NextJS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="relative mt-20">
            <div className="bg-gradient-to-r from-white/70 via-gray-50/50 to-white/70 rounded-3xl p-10 sm:p-14 lg:p-16 border border-gray-200/30">
              <div className="text-center mb-12 sm:mb-16">
                <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-4 leading-tight">
                  Notre processus en 4 étapes
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Une méthode éprouvée pour des résultats durables
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-gray-800 text-white rounded-xl font-semibold mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                    1
                  </div>
                  <h4 className="text-lg font-semibold text-black mb-3">Audit 360°</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Analyse complète de votre présence digitale et de la concurrence
                  </p>
                </div>
                
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-600 to-gray-800 text-white rounded-xl font-semibold mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                    2
                  </div>
                  <h4 className="text-lg font-semibold text-black mb-3">Stratégie</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Plan d'action personnalisé selon votre spécialité juridique
                  </p>
                </div>
                
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-gray-800 text-white rounded-xl font-semibold mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                    3
                  </div>
                  <h4 className="text-lg font-semibold text-black mb-3">Exécution</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Mise en œuvre technique et création de contenu expert
                  </p>
                </div>
                
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-700 to-gray-900 text-white rounded-xl font-semibold mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                    4
                  </div>
                  <h4 className="text-lg font-semibold text-black mb-3">Suivi</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Monitoring continu et optimisations pour améliorer le ROI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO vs SEA Comparison Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">        
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              SEO <span className="bg-white text-black px-3 py-1 mx-1 rounded-sm transform rotate-1 inline-block shadow-lg animate-rock-wiggle">vs</span> SEA : quel investissement privilégier ?
            </h2>
            <p className="text-xl text-gray-100 leading-relaxed">
              Comprendre les différences pour faire le bon choix stratégique
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 animate-slide-in-left animate-pulse-glow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-gray-800 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">SEO</h3>
                  <p className="text-green-300 text-sm font-semibold">Référencement naturel</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Investissement durable</h4>
                    <p className="text-gray-100 text-sm leading-relaxed">Les résultats perdurent même après l'arrêt des actions SEO</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">ROI élevé</h4>
                    <p className="text-gray-100 text-sm leading-relaxed">Coût par acquisition jusqu'à 5x inférieur au SEA sur le long terme</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Crédibilité maximale</h4>
                    <p className="text-gray-100 text-sm leading-relaxed">75% des utilisateurs font plus confiance aux résultats organiques</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-600/10 rounded-xl p-4 border border-green-600/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">6-12 mois</div>
                  <p className="text-gray-200 text-sm">pour des résultats optimaux</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 animate-slide-in-right animate-pulse-glow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-gray-800 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">SEA</h3>
                  <p className="text-purple-300 text-sm font-semibold">Publicité payante</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Résultats immédiats</h4>
                    <p className="text-gray-100 text-sm leading-relaxed">Visibilité instantanée dès le lancement des campagnes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Contrôle total</h4>
                    <p className="text-gray-100 text-sm leading-relaxed">Budget, audience et messages entièrement maîtrisés</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Targeting précis</h4>
                    <p className="text-gray-100 text-sm leading-relaxed">Ciblage géographique et démographique précis</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-600/10 rounded-xl p-4 border border-purple-600/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">3-6 semaines</div>
                  <p className="text-gray-200 text-sm">pour des résultats visibles</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
                <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💡</span>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Notre recommandation pour les avocats
                </h3>
                
                <p className="text-gray-100 leading-relaxed mb-8">
                  Pour les cabinets d'avocats, <span className="font-semibold text-white">le SEO est l'investissement prioritaire</span>. Il construit une présence durable et inspire confiance, qualités essentielles dans le secteur juridique. Le SEA peut compléter en ciblant des urgences ou lancer rapidement une nouvelle spécialisation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-black font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300">
                    Obtenir une stratégie SEO
                  </button>
                  <button className="border border-gray-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-gray-800 transition-all duration-300">
                    Discuter des options
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi nous <span className="bg-black text-white px-3 py-1 mx-1 rounded-sm transform rotate-2 inline-block shadow-lg">choisir</span> ?
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'expertise technique rencontre la connaissance du milieu juridique
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 animate-on-scroll">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expertise juridique</h3>
              <p className="text-gray-600 leading-relaxed">
                Équipe d'anciens juristes et avocats qui comprennent vos contraintes déontologiques et votre vocabulaire technique.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 animate-on-scroll">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Résultats mesurables</h3>
              <p className="text-gray-600 leading-relaxed">
                Méthodologie data-driven avec KPIs précis : positions Google, trafic qualifié, conversions client.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 animate-on-scroll">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">100% personnalisé</h3>
              <p className="text-gray-600 leading-relaxed">
                Chaque stratégie est unique, adaptée à votre spécialité, votre marché local et vos objectifs de croissance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <h2 className="text-3xl font-bold text-gray-900">Avis Google</h2>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex text-yellow-400 text-xl">★★★★★</div>
              <span className="text-2xl font-bold text-gray-900">4.9</span>
              <span className="text-gray-600">(12 avis)</span>
            </div>
            <p className="text-gray-600">BL NK - Agence SEO spécialisée avocats</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow animate-on-scroll">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">P</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Pierre Négrel</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>5 avis</span>
                    <span>•</span>
                    <span>il y a 4 semaines</span>
                  </div>
                </div>
              </div>
              <div className="flex text-yellow-400 text-sm mb-3">★★★★★</div>
              <p className="text-gray-700 text-sm leading-relaxed">J'ai eu une superbe expérience avec cette agence de communication qui a su répondre à mes nombreuses attentes et exigences au niveau de ma stratégie de référencement de mon site web. Je ne regrette pas du tout d'avoir su leur faire confiance suite aux recommandations d'un collègue.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow animate-on-scroll">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">M</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Mamadou Waggeh</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>7 avis</span>
                    <span>•</span>
                    <span>il y a 3 semaines</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Nouveau</span>
                  </div>
                </div>
              </div>
              <div className="flex text-yellow-400 text-sm mb-3">★★★★★</div>
              <p className="text-gray-700 text-sm leading-relaxed">Cela fait maintenant un an que je travaille avec l'agence BLNK, et je ne peux que recommander. Leur expertise en SEO, acquisition en ligne et identité visuelle n'est plus à démontrer. L'équipe comprend parfaitement les enjeux spécifiques aux professions réglementées, notamment dans le domaine du droit.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow animate-on-scroll">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">A</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Antoine Skrzynski</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Guide local</span>
                    <span>26 avis</span>
                    <span>•</span>
                    <span>il y a 4 semaines</span>
                  </div>
                </div>
              </div>
              <div className="flex text-yellow-400 text-sm mb-3">★★★★★</div>
              <p className="text-gray-700 text-sm leading-relaxed">BL NK est une agence sérieuse et compétente qui m'accompagne efficacement. Pierre COLLIOT suit de près le développement du référencement du cabinet et s'est entouré d'une équipe efficace. Le résultat est un site plus propre, plus professionnel et une présence améliorée.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow animate-on-scroll">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-gray-800 rounded-full flex items-center justify-center text-white font-semibold">C</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Camille Merlet</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>5 avis</span>
                    <span>•</span>
                    <span>il y a 3 semaines</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Nouveau</span>
                  </div>
                </div>
              </div>
              <div className="flex text-yellow-400 text-sm mb-3">★★★★★</div>
              <p className="text-gray-700 text-sm leading-relaxed">Super équipe, j'ai la chance d'être suivie depuis presque 10 ans. La com est toujours très pertinente et soignée. Je recommande vivement !</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow animate-on-scroll">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-gray-800 rounded-full flex items-center justify-center text-white font-semibold">N</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Nicolas Paris</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>8 avis</span>
                    <span>•</span>
                    <span>il y a 2 semaines</span>
                  </div>
                </div>
              </div>
              <div className="flex text-yellow-400 text-sm mb-3">★★★★★</div>
              <p className="text-gray-700 text-sm leading-relaxed">Excellente agence de communication ! Très professionnels et à l'écoute. Ils ont su comprendre nos besoins et adapter leur stratégie en conséquence. Je recommande sans hésitation.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow animate-on-scroll">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-gray-800 rounded-full flex items-center justify-center text-white font-semibold">J</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Julie Martinson</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>3 avis</span>
                    <span>•</span>
                    <span>il y a 1 semaine</span>
                  </div>
                </div>
              </div>
              <div className="flex text-yellow-400 text-sm mb-3">★★★★★</div>
              <p className="text-gray-700 text-sm leading-relaxed">Accompagnement de qualité pour optimiser notre visibilité en ligne. L'équipe maîtrise parfaitement les enjeux du secteur juridique. Résultats au rendez-vous !</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">        
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              <span className="bg-white text-black px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg">Résultats</span> clients
            </h2>
            <p className="text-xl text-gray-100 leading-relaxed">
              Des chiffres qui parlent. Des cabinets qui grandissent.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="group relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/[0.08] via-green-400/[0.04] to-blue-500/[0.08] rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/[0.12] via-green-400/[0.08] to-blue-500/[0.12] rounded-3xl blur-lg opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>
              
              <div className="relative bg-gradient-to-br from-white/[0.08] via-white/[0.06] to-white/[0.04] backdrop-blur-md rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/[0.15] shadow-[0_12px_40px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_24px_80px_rgba(0,0,0,0.5),0_8px_32px_rgba(59,130,246,0.15)] transition-all duration-700 h-full hover:-translate-y-3 group-hover:border-blue-400/30">
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
            
                <div className="relative group/metrics mb-8">
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-500/10 via-blue-400/8 to-green-500/10 rounded-2xl blur opacity-50 group-hover/metrics:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.06] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/[0.2] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-bold text-gray-100 tracking-wider uppercase">Visiteurs mensuels</span>
                      <div className="px-3 py-1 bg-green-500/20 text-green-200 text-xs font-bold rounded-full border border-green-400/30">+300%</div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-3xl sm:text-4xl font-black text-white">2K → 8K</div>
                      <div className="text-sm text-gray-200 font-medium">en 16 mois</div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-100 leading-relaxed text-lg font-light mb-8 group-hover:text-gray-200 transition-colors duration-300">
                  Multiplication par 4 du trafic organique, générant une augmentation significative des prises de rendez-vous clients.
                </p>
                
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
            
            <div className="group relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/[0.08] via-blue-400/[0.04] to-purple-500/[0.08] rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/[0.12] via-blue-400/[0.08] to-purple-500/[0.12] rounded-3xl blur-lg opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>
              
              <div className="relative bg-gradient-to-br from-white/[0.08] via-white/[0.06] to-white/[0.04] backdrop-blur-md rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/[0.15] shadow-[0_12px_40px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_24px_80px_rgba(0,0,0,0.5),0_8px_32px_rgba(147,51,234,0.15)] transition-all duration-700 h-full hover:-translate-y-3 group-hover:border-purple-400/30">
                <div className="flex items-center gap-6 mb-10">
                  <div className="relative group/logo">
                    <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/20 to-blue-600/15 rounded-2xl blur group-hover/logo:from-purple-400/25 group-hover/logo:to-blue-500/20 transition-colors duration-500"></div>
                    <div className="relative w-18 h-18 bg-gradient-to-br from-white via-gray-100 to-white text-black rounded-xl flex items-center justify-center font-black text-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] border border-gray-200/20 group-hover/logo:scale-110 transition-transform duration-300">
                      C
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-purple-50 transition-colors duration-300">Clément Poirier</h3>
                    <p className="text-gray-100 text-lg font-medium group-hover:text-gray-200 transition-colors duration-300">Droit immobilier</p>
                  </div>
                </div>
            
                <div className="relative group/metrics mb-8">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/10 via-blue-400/8 to-purple-500/10 rounded-2xl blur opacity-50 group-hover/metrics:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.06] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/[0.2] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-bold text-gray-100 tracking-wider uppercase">Position Google</span>
                      <div className="px-3 py-1 bg-purple-500/20 text-purple-200 text-xs font-bold rounded-full border border-purple-400/30">TOP 3</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-xl sm:text-2xl font-black text-white">"Avocat Droit Immobilier"</div>
                      <div className="text-sm text-gray-200 font-medium">en 6 mois</div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-100 leading-relaxed text-lg font-light mb-8 group-hover:text-gray-200 transition-colors duration-300">
                  Positionnement sur une requête très compétitive, générant un flux régulier de prospects qualifiés.
                </p>
                
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
      <section className="py-20 bg-gray-50">        
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Nos <span className="bg-black text-white px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">réalisations</span> SEO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nous avons transformé la visibilité en ligne de nos clients
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-12 hover:shadow-xl transition-shadow duration-300 animate-on-scroll text-center">
              <div className="text-6xl mb-8">📁</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Portfolio Complet</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Consultez nos cas clients détaillés et les résultats obtenus pour chaque cabinet d'avocats
              </p>
              
              <button className="bg-black text-white font-bold py-4 px-8 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                Découvrez nos réalisations →
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-12">
            <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <span className="text-2xl">🚀</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Prêt à développer votre cabinet ?
            </h2>
            
            <p className="text-xl text-gray-100 leading-relaxed mb-8">
              Obtenez une analyse gratuite de votre potentiel SEO et découvrez comment multiplier vos prospects qualifiés.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 text-lg">
                Audit SEO gratuit
              </button>
              <button className="border border-gray-600 text-white font-semibold py-4 px-8 rounded-xl hover:bg-gray-800 transition-all duration-300 text-lg">
                Parler à un expert
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Réponse sous 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Spécialistes avocats</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Premium Cocon Sémantique Section */}
      <section className="py-20 sm:py-28 lg:py-36 bg-gradient-to-br from-white via-gray-50/20 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/30 via-transparent to-gray-200/20"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-gray-50/40 to-transparent"></div>
          
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-400/[0.04] rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gray-300/[0.06] rounded-full filter blur-2xl animate-pulse" style={{animationDuration: '24s'}}></div>
          
          <div className="absolute top-1/5 right-1/5 w-2 h-2 bg-gray-400/[0.1] rounded-full animate-pulse" style={{animationDelay: '1s', animationDuration: '10s'}}></div>
          <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 bg-gray-500/[0.12] rounded-full animate-pulse" style={{animationDelay: '3s', animationDuration: '8s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-[1.02] mb-6 max-w-6xl mx-auto">
              Le <span className="relative z-10 bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-clip-text text-transparent font-bold">cocon sémantique</span> :
              <br/>l'architecture SEO qui booste votre autorité
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Une méthodologie SEO qui organise vos contenus juridiques en clusters thématiques interconnectés pour maximiser votre positionnement sur Google.
            </p>
            
            <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-6 max-w-5xl mx-auto mb-8">
              <div className="text-sm text-gray-500 mb-4 font-mono flex items-center gap-2">
                <span>ARCHITECTURE FRÉQUENCE-INVERSE + COCON SÉMANTIQUE</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white border border-blue-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <span className="font-semibold text-blue-700">Page Mère</span>
                  </div>
                  <div className="text-xs text-gray-600 mb-2">Difficulté: 65 | Vol: 8900/mois</div>
                  <div className="text-sm font-mono bg-blue-50 p-2 rounded text-blue-800">/droit-immobilier/</div>
                  <div className="text-xs text-gray-500 mt-1">Liens entrants: 12 | Autorité: 85%</div>
                </div>
                <div className="bg-white border border-green-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-semibold text-green-700">Pages Filles</span>
                  </div>
                  <div className="text-xs text-gray-600 mb-2">Difficulté: 45 | Vol: 3200/mois</div>
                  <div className="text-sm font-mono bg-green-50 p-2 rounded text-green-800">/vente-immobiliere/</div>
                  <div className="text-xs text-gray-500 mt-1">Liens internes: 8 | CTR: 12.3%</div>
                </div>
                <div className="bg-white border border-purple-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="font-semibold text-purple-700">Petites-filles</span>
                  </div>
                  <div className="text-xs text-gray-600 mb-2">Difficulté: 25 | Vol: 890/mois</div>
                  <div className="text-sm font-mono bg-purple-50 p-2 rounded text-purple-800">/compromis-vente/</div>
                  <div className="text-xs text-gray-500 mt-1">Conv: 8.7% | CPC sauvé: 4.2€</div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 text-white">
                <div className="text-xs text-gray-400 mb-2 font-mono">ALGORITHME DE DISTRIBUTION DU JUS DE LIENS</div>
                <div className="flex items-center justify-between text-sm">
                  <span>Maillage interne optimisé:</span>
                  <span className="font-mono">Jus(M) = 0.85 × Σ(Jus(Fi)/Liens(Fi)) + 0.15</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 mb-16">
            <div className="group text-center">
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-600 to-gray-800 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-3 h-3 bg-white/80 rounded-sm"></div>
                    <div className="w-3 h-3 bg-white/60 rounded-sm"></div>
                    <div className="w-3 h-3 bg-white/60 rounded-sm"></div>
                    <div className="w-3 h-3 bg-white/40 rounded-sm"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Page Mère</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Page principale sur une thématique large (ex: "Droit Immobilier")</p>
              <div className="text-xs bg-gray-50 p-3 rounded-lg space-y-1">
                <div className="font-mono text-blue-600">Schema.org: ServiceJuridique + Organisation</div>
                <div className="text-gray-600">Intention: Informationnelle + Commerciale</div>
                <div className="text-gray-600">Score E-A-T: 92/100 (Expertise juridique)</div>
                <div className="text-gray-600">Champ sémantique: 847 termes juridiques</div>
              </div>
            </div>
            
            <div className="group text-center">
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-600 to-gray-800 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-2 bg-white/80 rounded-full"></div>
                    <div className="w-6 h-2 bg-white/60 rounded-full"></div>
                    <div className="w-4 h-2 bg-white/40 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Pages Filles</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Sous-catégories qui détaillent la thématique (ex: "Vente Immobilière")</p>
              <div className="text-xs bg-gray-50 p-3 rounded-lg space-y-1">
                <div className="font-mono text-green-600">TAL: 'achat vente' + entités nommées</div>
                <div className="text-gray-600">Modélisation thématique: 78% pertinence</div>
                <div className="text-gray-600">Co-occurrences: notaire, compromis, acte</div>
                <div className="text-gray-600">Position zéro: Extrait optimisé cible</div>
              </div>
            </div>
            
            <div className="group text-center">
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-600 to-gray-800 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <div className="relative">
                    <div className="w-4 h-4 bg-white/80 rounded-full"></div>
                    <div className="absolute -top-1 -left-1 w-6 h-6 border-2 border-white/40 rounded-full"></div>
                    <div className="absolute -top-2 -left-2 w-8 h-8 border border-white/20 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Pages Petites-filles</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Contenus ultra-spécialisés (ex: "Compromis de Vente")</p>
              <div className="text-xs bg-gray-50 p-3 rounded-lg space-y-1">
                <div className="font-mono text-purple-600">Mots-clés LSI: 234 variations détectées</div>
                <div className="text-gray-600">Intention utilisateur: Transactionnelle (97%)</div>
                <div className="text-gray-600">Fréquence-Inverse: 0.87 sur 'compromis vente'</div>
                <div className="text-gray-600">Entités: Code Civil, Art. 1589, etc.</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-2 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mb-4 mx-auto"></div>
              <h4 className="font-bold text-black mb-3">Sculpture du jus de liens</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Distribution calculée de l'autorité via ancres optimisées et liens follow/nofollow stratégiques</p>
              <div className="text-xs text-blue-600 font-mono bg-blue-50 p-2 rounded mt-2">Équité maillage interne: +340%</div>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-2 h-12 bg-gradient-to-b from-green-500 to-green-600 rounded-full mb-4 mx-auto"></div>
              <h4 className="font-bold text-black mb-3">Autorité thématique</h4>
              <p className="text-gray-600 text-sm leading-relaxed">L'IA de Google identifie votre expertise via regroupement sémantique dense</p>
              <div className="text-xs text-green-600 font-mono bg-green-50 p-2 rounded mt-2">Score E-A-T: 94.2/100</div>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-2 h-12 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full mb-4 mx-auto"></div>
              <h4 className="font-bold text-black mb-3">Cocon sémantique</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Fréquence-Inverse optimisée + mots-clés LSI + entités nommées pour domination SERP</p>
              <div className="text-xs text-purple-600 font-mono bg-purple-50 p-2 rounded mt-2">Densité sémantique: 87.3%</div>
            </div>
            
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="w-2 h-12 bg-gradient-to-b from-gray-500 to-gray-600 rounded-full mb-4 mx-auto"></div>
              <h4 className="font-bold text-black mb-3">Domination longue traîne</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Capture de 73% du trafic via requêtes 4+ mots à haute intention commerciale</p>
              <div className="text-xs text-gray-600 font-mono bg-gray-50 p-2 rounded mt-2">Taux de conversion: +420%</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
