interface HeroSectionProps {
  title: string
  highlightedWord?: string
  subtitle: string
  description?: string
  primaryCTA?: {
    text: string
    href?: string
    onClick?: () => void
  }
  secondaryCTA?: {
    text: string
    href?: string
    onClick?: () => void
  }
  stats?: Array<{
    value: string
    label: string
    icon?: string
  }>
  backgroundType?: 'dark' | 'light' | 'gradient'
  showBackgroundEffects?: boolean
}

export default function HeroSection({
  title,
  highlightedWord,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  stats,
  backgroundType = 'light',
  showBackgroundEffects = true
}: HeroSectionProps) {
  const backgroundClasses = {
    dark: 'bg-gradient-to-br from-gray-900 to-black',
    light: 'bg-gradient-to-br from-white via-gray-50/20 to-white',
    gradient: 'bg-gradient-to-br from-gray-900 via-black to-gray-900'
  }

  const textClasses = {
    dark: 'text-white',
    light: 'text-gray-900',
    gradient: 'text-white'
  }

  const subtitleClasses = {
    dark: 'text-gray-100',
    light: 'text-gray-600',
    gradient: 'text-gray-100'
  }

  return (
    <section className={`min-h-screen flex items-center justify-center ${backgroundClasses[backgroundType]} relative overflow-hidden pt-16 pb-8`}>
      {/* Background Effects */}
      {showBackgroundEffects && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/30 via-transparent to-gray-200/20"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-gray-50/40 to-transparent"></div>
          
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-400/[0.04] rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gray-300/[0.06] rounded-full filter blur-2xl animate-pulse" style={{animationDuration: '24s'}}></div>
          
          <div className="absolute top-1/5 right-1/5 w-2 h-2 bg-gray-400/[0.1] rounded-full animate-pulse" style={{animationDelay: '1s', animationDuration: '10s'}}></div>
          <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 bg-gray-500/[0.12] rounded-full animate-pulse" style={{animationDelay: '3s', animationDuration: '8s'}}></div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Subtitle */}
          <div className={`text-lg sm:text-xl font-medium ${subtitleClasses[backgroundType]} mb-8 animate-fade-in-up`} style={{animationDelay: '0.1s'}}>
            {subtitle}
          </div>

          {/* Main Title */}
          <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-bold ${textClasses[backgroundType]} leading-tight mb-8 max-w-5xl mx-auto animate-fade-in-up`} style={{animationDelay: '0.2s'}}>
            {title.split(' ').map((word, index) => 
              word.toLowerCase() === highlightedWord?.toLowerCase() ? (
                <span key={index} className="bg-white text-black px-3 py-1 mx-2 rounded-sm transform rotate-1 inline-block shadow-lg animate-rock-wiggle">
                  {word}
                </span>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </h1>

          {/* Description */}
          {description && (
            <p className={`text-xl sm:text-2xl ${subtitleClasses[backgroundType]} leading-relaxed mb-12 max-w-4xl mx-auto animate-fade-in-up`} style={{animationDelay: '0.3s'}}>
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              {primaryCTA && (
                <button 
                  onClick={primaryCTA.onClick}
                  className="bg-black text-white font-bold py-4 px-8 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 text-lg shadow-lg"
                >
                  {primaryCTA.text}
                </button>
              )}
              {secondaryCTA && (
                <button 
                  onClick={secondaryCTA.onClick}
                  className={`border ${backgroundType === 'light' ? 'border-gray-300 text-gray-900 hover:border-gray-900' : 'border-white/30 text-white hover:bg-white/10'} font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg backdrop-blur-sm`}
                >
                  {secondaryCTA.text}
                </button>
              )}
            </div>
          )}

          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white/[0.08] backdrop-blur-md border border-white/[0.15] rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    {stat.icon && (
                      <div className="text-3xl mb-4">{stat.icon}</div>
                    )}
                    <div className={`text-2xl sm:text-3xl font-black ${textClasses[backgroundType]} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.value}
                    </div>
                    <div className={`text-sm ${subtitleClasses[backgroundType]} leading-tight`}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}