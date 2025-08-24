interface CTAProps {
  title: string
  highlightedWord?: string
  description: string
  primaryButton: {
    text: string
    href?: string
    onClick?: () => void
  }
  secondaryButton?: {
    text: string
    href?: string
    onClick?: () => void
  }
  benefits?: string[]
  icon?: string
  backgroundType?: 'dark' | 'glass' | 'gradient'
  showBackgroundEffects?: boolean
}

export default function CallToAction({
  title,
  highlightedWord,
  description,
  primaryButton,
  secondaryButton,
  benefits = [],
  icon = "🚀",
  backgroundType = 'dark',
  showBackgroundEffects = true
}: CTAProps) {
  const containerClasses = {
    dark: 'py-20 bg-gradient-to-br from-gray-900 to-black text-white',
    glass: 'py-20 bg-white',
    gradient: 'py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white'
  }

  const cardClasses = {
    dark: 'bg-gray-800 border border-gray-700',
    glass: 'bg-white/[0.08] backdrop-blur-md border border-white/[0.15] shadow-[0_12px_40px_rgba(0,0,0,0.4)]',
    gradient: 'bg-white/[0.08] backdrop-blur-md border border-white/[0.15] shadow-[0_12px_40px_rgba(0,0,0,0.4)]'
  }

  const textClasses = {
    dark: 'text-white',
    glass: 'text-white',
    gradient: 'text-white'
  }

  const subtextClasses = {
    dark: 'text-gray-100',
    glass: 'text-gray-100',
    gradient: 'text-gray-100'
  }

  return (
    <section className={`${containerClasses[backgroundType]} ${showBackgroundEffects ? 'relative overflow-hidden' : ''}`}>
      {/* Background Effects */}
      {showBackgroundEffects && backgroundType !== 'dark' && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.03]"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.01] rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-white/[0.015] rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '25s'}}></div>
        </div>
      )}

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className={`${cardClasses[backgroundType]} rounded-2xl p-12`}>
          {/* Icon */}
          <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <span className="text-2xl">{icon}</span>
          </div>
          
          {/* Title */}
          <h2 className={`text-3xl sm:text-4xl font-bold ${textClasses[backgroundType]} mb-6`}>
            {title.split(' ').map((word, index) => 
              word.toLowerCase() === highlightedWord?.toLowerCase() ? (
                <span key={index} className="bg-white text-black px-3 py-1 mx-1 rounded-sm transform rotate-1 inline-block shadow-lg animate-rock-wiggle">
                  {word}
                </span>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </h2>
          
          {/* Description */}
          <p className={`text-xl ${subtextClasses[backgroundType]} leading-relaxed mb-8`}>
            {description}
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={primaryButton.onClick}
              className="bg-white text-black font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 text-lg"
            >
              {primaryButton.text}
            </button>
            {secondaryButton && (
              <button 
                onClick={secondaryButton.onClick}
                className="border border-gray-600 text-white font-semibold py-4 px-8 rounded-xl hover:bg-gray-800 transition-all duration-300 text-lg"
              >
                {secondaryButton.text}
              </button>
            )}
          </div>
          
          {/* Benefits */}
          {benefits.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}