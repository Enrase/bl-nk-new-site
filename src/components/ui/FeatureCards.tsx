interface FeatureType {
  icon: string
  title: string
  description: string
  stats?: string
  benefits?: string[]
  color?: 'blue' | 'green' | 'purple' | 'gray'
}

interface FeatureCardsProps {
  title: string
  highlightedWord?: string
  subtitle?: string
  features: FeatureType[]
  backgroundColor?: 'white' | 'gray' | 'dark'
  cardStyle?: 'basic' | 'premium' | 'glassmorphism'
  layout?: 'grid' | 'horizontal'
  columns?: 2 | 3 | 4
}

export default function FeatureCards({
  title,
  highlightedWord,
  subtitle,
  features,
  backgroundColor = 'white',
  cardStyle = 'basic',
  layout = 'grid',
  columns = 3
}: FeatureCardsProps) {
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

  const getCardClasses = (color?: string) => {
    const baseClasses = 'transition-all duration-500 hover:-translate-y-2'
    
    switch (cardStyle) {
      case 'premium':
        return `group relative ${baseClasses} animate-on-scroll`
      case 'glassmorphism':
        return `group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl ${baseClasses}`
      default:
        return `bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 ${baseClasses}`
    }
  }

  const getIconBg = (color: string = 'blue') => {
    const colors = {
      blue: 'bg-gradient-to-br from-blue-600 to-gray-800',
      green: 'bg-gradient-to-br from-green-600 to-gray-800',
      purple: 'bg-gradient-to-br from-purple-600 to-gray-800',
      gray: 'bg-gray-100'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getGlowEffect = (color: string = 'blue') => {
    const colors = {
      blue: 'from-blue-500/8 via-gray-300/12 to-blue-500/8',
      green: 'from-green-500/8 via-gray-300/12 to-green-500/8',
      purple: 'from-purple-500/8 via-gray-300/12 to-purple-500/8',
      gray: 'from-gray-500/8 via-gray-300/12 to-gray-500/8'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  return (
    <section className={`py-20 ${backgroundClasses[backgroundColor]}`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold ${textClasses[backgroundColor]} mb-6 animate-fade-in-up`}>
            {title.split(' ').map((word, index) => 
              word.toLowerCase() === highlightedWord?.toLowerCase() ? (
                <span key={index} className="bg-black text-white px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">
                  {word}
                </span>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </h2>
          {subtitle && (
            <p className={`text-xl ${subtitleClasses[backgroundColor]} max-w-3xl mx-auto`}>
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Features Grid */}
        <div className={`grid ${gridCols[columns]} gap-8`}>
          {features.map((feature, index) => (
            <div key={index} className={getCardClasses(feature.color)}>
              {/* Premium Glow Effect */}
              {cardStyle === 'premium' && (
                <div className={`absolute -inset-1 bg-gradient-to-r ${getGlowEffect(feature.color)} rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              )}
              
              <div className={cardStyle === 'premium' ? 'relative bg-white/[0.98] backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]' : ''}>
                {/* Icon */}
                <div className={`w-16 h-16 ${backgroundColor === 'dark' ? 'bg-gray-700' : getIconBg(feature.color)} rounded-2xl flex items-center justify-center mb-6 shadow-lg ${cardStyle === 'premium' ? 'group-hover:scale-110 transition-transform duration-300' : ''}`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-semibold ${textClasses[backgroundColor]} mb-4 ${cardStyle === 'premium' ? `group-hover:text-${feature.color}-600 transition-colors duration-300` : ''}`}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className={`${subtitleClasses[backgroundColor]} mb-6 leading-relaxed`}>
                  {feature.description}
                </p>

                {/* Benefits */}
                {feature.benefits && (
                  <div className="space-y-3 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className={`text-sm ${backgroundColor === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Stats */}
                {feature.stats && (
                  <div className={cardStyle === 'premium' ? 'relative' : ''}>
                    {cardStyle === 'premium' && (
                      <div className={`absolute -inset-1 bg-gradient-to-r from-${feature.color}-400/20 to-${feature.color}-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    )}
                    <div className={`${cardStyle === 'premium' ? 'relative' : ''} inline-flex items-center px-4 py-2 bg-gradient-to-r from-${feature.color}-50 to-${feature.color}-100 border border-${feature.color}-200 rounded-xl shadow-sm`}>
                      <span className={`text-sm font-bold bg-gradient-to-r from-${feature.color}-600 to-gray-800 bg-clip-text text-transparent`}>
                        {feature.stats}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}