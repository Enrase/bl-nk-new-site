import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Premium Background with Glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.03]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.01] rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-white/[0.015] rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '25s'}}></div>
      </div>

      <div className="relative">
        {/* Premium CTA Section */}
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="bg-white/[0.08] backdrop-blur-md border border-white/[0.15] rounded-3xl p-12 sm:p-16 shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
              <div className="w-16 h-16 bg-white/[0.1] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <span className="text-3xl">⚖️</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Développez votre <span className="bg-white text-black px-3 py-1 mx-1 rounded-sm transform rotate-1 inline-block shadow-lg animate-rock-wiggle">cabinet</span> avec nous
              </h2>
              
              <p className="text-xl text-gray-100 leading-relaxed mb-10 max-w-3xl mx-auto">
                Rejoignez les 200+ avocats qui nous font confiance pour développer leur visibilité en ligne
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button className="bg-white text-black font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-lg shadow-lg">
                  Audit SEO Gratuit
                </button>
                <button className="border border-white/30 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/10 transition-all duration-300 text-lg backdrop-blur-sm">
                  Prendre RDV
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Audit complet gratuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Expertise juridique</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Résultats garantis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              
              {/* Logo & Description */}
              <div className="lg:col-span-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg p-2">
                    <Image 
                      src="/logo-blnk.svg" 
                      alt="BL NK" 
                      width={32}
                      height={32}
                      className="h-8 w-auto" 
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-white font-bold text-xl">BL NK</div>
                    <div className="text-gray-400 text-sm">Communication</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-8">
                  L'agence spécialisée en communication digitale pour avocats et professions libérales. 
                  <strong className="text-white">Expertise juridique + Performance SEO</strong>.
                </p>
                
                {/* Social Links with Premium Style */}
                <div className="flex space-x-3">
                  <a href="#" className="group relative">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                  </a>
                  <a href="#" className="group relative">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              {/* Services Premium */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Services
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full group-hover:bg-white transition-colors duration-300"></span>
                      SEO & Référencement
                    </Link>
                  </li>
                  <li>
                    <Link href="/ads-avocats" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full group-hover:bg-white transition-colors duration-300"></span>
                      Google Ads Avocats
                    </Link>
                  </li>
                  <li>
                    <Link href="/strategie-avocats" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full group-hover:bg-white transition-colors duration-300"></span>
                      Stratégie de Marque
                    </Link>
                  </li>
                  <li>
                    <Link href="/creation-site-web" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full group-hover:bg-white transition-colors duration-300"></span>
                      Sites Web Juridiques
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Expertise Premium */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Expertise
                </h3>
                <div className="space-y-3">
                  <div className="text-gray-300 text-sm">Cabinets d'Avocats</div>
                  <div className="text-gray-300 text-sm">Professions Libérales</div>
                  <div className="text-gray-300 text-sm">Droit des Affaires</div>
                  <div className="text-gray-300 text-sm">Droit Immobilier</div>
                  <div className="text-gray-300 text-sm">Droit Pénal & Civil</div>
                  
                  {/* Premium Stats */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-white font-bold text-lg">200+</div>
                    <div className="text-gray-400 text-sm">Cabinets accompagnés</div>
                  </div>
                </div>
              </div>

              {/* Contact Premium */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Contact
                </h3>
                <div className="space-y-4">
                  <a href="mailto:contact@bl-nk.fr" className="group flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span>contact@bl-nk.fr</span>
                  </a>
                  <div className="flex items-start gap-3 text-gray-300">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span>Paris, France</span>
                  </div>
                </div>

                {/* Performance Badge */}
                <div className="mt-6 p-4 bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-xl">
                  <div className="text-green-400 font-bold text-sm mb-1">🏆 Performance 2024</div>
                  <div className="text-white text-sm">+340% de visibilité moyenne</div>
                  <div className="text-gray-400 text-xs">pour nos clients avocats</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Premium */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2025 <span className="text-white font-semibold">BL NK</span>. Tous droits réservés.
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <Link href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Mentions légales
                </Link>
                <Link href="/confidentialite" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Confidentialité
                </Link>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-xs">Agence certifiée</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}