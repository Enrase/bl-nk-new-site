interface Logo {
  name: string
  image: string
  alt: string
  width?: number
  height?: number
}

interface LogoCarouselProps {
  title?: string
  subtitle?: string
  logos: Logo[]
  backgroundColor?: 'white' | 'gray' | 'dark'
  speed?: 'slow' | 'normal' | 'fast'
  showTitleSection?: boolean
  carouselStyle?: 'basic' | 'premium' | 'minimal'
}

export default function LogoCarousel({
  title = "Ils nous font confiance",
  subtitle,
  logos,
  backgroundColor = 'white',
  speed = 'normal',
  showTitleSection = true,
  carouselStyle = 'basic'
}: LogoCarouselProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gradient-to-br from-gray-900 to-black'
  }

  const textClasses = {
    white: 'text-gray-900',
    gray: 'text-gray-900',
    dark: 'text-white'
  }

  const subtitleClasses = {
    white: 'text-gray-600',
    gray: 'text-gray-600',
    dark: 'text-gray-100'
  }

  const speedClasses = {
    slow: 'animate-scroll-logos-slow',
    normal: 'animate-scroll-logos',
    fast: 'animate-scroll-logos-fast'
  }

  const getLogoContainerClasses = () => {
    switch (carouselStyle) {
      case 'premium':
        return 'bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105'
      case 'minimal':
        return 'opacity-60 hover:opacity-100 transition-opacity duration-300'
      default:
        return 'bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300'
    }
  }

  return (
    <section className={`py-20 ${backgroundClasses[backgroundColor]} overflow-hidden`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        {showTitleSection && (
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold ${textClasses[backgroundColor]} mb-4`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`text-xl ${subtitleClasses[backgroundColor]} max-w-3xl mx-auto`}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Logo Carousel */}
        <div className="relative">
          {carouselStyle === 'premium' && (
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 rounded-3xl -z-10"></div>
          )}
          
          <div className="flex overflow-hidden">
            <div className={`flex items-center gap-8 ${speedClasses[speed]} hover:pause`}>
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div key={`first-${index}`} className={`flex-shrink-0 ${getLogoContainerClasses()}`}>
                  <img
                    src={logo.image}
                    alt={logo.alt}
                    className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    style={{
                      width: logo.width ? `${logo.width}px` : 'auto',
                      height: logo.height ? `${logo.height}px` : '48px'
                    }}
                  />
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div key={`second-${index}`} className={`flex-shrink-0 ${getLogoContainerClasses()}`}>
                  <img
                    src={logo.image}
                    alt={logo.alt}
                    className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    style={{
                      width: logo.width ? `${logo.width}px` : 'auto',
                      height: logo.height ? `${logo.height}px` : '48px'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>

        {/* Stats or additional info */}
        {carouselStyle === 'premium' && (
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className={`text-sm font-medium ${textClasses[backgroundColor]}`}>
                  +{logos.length} partenaires de confiance
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}