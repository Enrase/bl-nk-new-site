'use client'

import Link from 'next/link'
import Image from 'next/image'

interface NavbarProps {
  currentPage?: 'ads' | 'strategie' | 'creation' | 'seo'
}

export default function Navbar({ currentPage }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image 
                src="/logo-blnk.svg" 
                alt="BL NK - Stratégie Communication" 
                width={32}
                height={32}
                className="h-8 w-auto" 
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1">
                Services
                <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {/* Développer ma visibilité */}
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                    Développer ma visibilité
                  </div>
                  <Link 
                    href="/ads-avocats" 
                    className={`flex items-center px-4 py-3 text-sm transition-colors ${
                      currentPage === 'ads' 
                        ? 'text-gray-900 font-medium bg-gray-50' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Publicité Google Ads
                  </Link>
                  <Link 
                    href="/creation-site-web" 
                    className={`flex items-center px-4 py-3 text-sm transition-colors ${
                      currentPage === 'creation' 
                        ? 'text-gray-900 font-medium bg-gray-50' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Création de site web
                  </Link>
                  <Link 
                    href="/" 
                    className={`flex items-center px-4 py-3 text-sm transition-colors ${
                      currentPage === 'seo' 
                        ? 'text-gray-900 font-medium bg-gray-50' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    SEO & Référencement
                  </Link>
                  
                  {/* Construire ma marque */}
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mt-2">
                    Construire ma marque
                  </div>
                  <Link 
                    href="/strategie-avocats" 
                    className={`flex items-center px-4 py-3 text-sm transition-colors ${
                      currentPage === 'strategie' 
                        ? 'text-gray-900 font-medium bg-gray-50' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Stratégie Marketing
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="#portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">
              Portfolio
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Audit gratuit
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}