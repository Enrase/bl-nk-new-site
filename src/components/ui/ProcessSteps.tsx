interface ProcessStep {
  number: number
  title: string
  description: string
  icon?: string
  color?: 'blue' | 'green' | 'purple' | 'orange'
}

interface ProcessStepsProps {
  title: string
  highlightedWord?: string
  subtitle?: string
  steps: ProcessStep[]
  layout?: 'horizontal' | 'vertical' | 'grid'
  style?: 'basic' | 'premium' | 'minimal'
  backgroundColor?: 'white' | 'gray' | 'dark'
  showConnectors?: boolean
}

export default function ProcessSteps({
  title,
  highlightedWord,
  subtitle,
  steps,
  layout = 'horizontal',
  style = 'basic',
  backgroundColor = 'gray',
  showConnectors = true
}: ProcessStepsProps) {
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

  const getStepColor = (color: string = 'blue') => {
    const colors = {
      blue: 'from-blue-600 to-gray-800',
      green: 'from-green-600 to-gray-800', 
      purple: 'from-purple-600 to-gray-800',
      orange: 'from-orange-600 to-gray-800'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getLayoutClasses = () => {
    switch (layout) {
      case 'vertical':
        return 'flex flex-col space-y-8'
      case 'grid':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10'
    }
  }

  const getCardClasses = () => {
    switch (style) {
      case 'premium':
        return 'group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2'
      case 'minimal':
        return 'text-center group'
      default:
        return 'text-center group'
    }
  }

  return (
    <section className={`py-20 ${backgroundClasses[backgroundColor]}`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl font-semibold ${textClasses[backgroundColor]} mb-4 leading-tight`}>
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
            <p className={`text-lg ${subtitleClasses[backgroundColor]} max-w-2xl mx-auto leading-relaxed`}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Steps Container */}
        {style === 'premium' ? (
          <div className="relative">
            <div className="bg-gradient-to-r from-white/70 via-gray-50/50 to-white/70 rounded-3xl p-10 sm:p-14 lg:p-16 border border-gray-200/30">
              <div className={getLayoutClasses()}>
                {steps.map((step, index) => (
                  <div key={index} className={getCardClasses()}>
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${getStepColor(step.color)} text-white rounded-xl font-semibold mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                      {step.icon || step.number}
                    </div>
                    <h4 className={`text-lg font-semibold ${textClasses[backgroundColor]} mb-3`}>
                      {step.title}
                    </h4>
                    <p className={`text-sm ${subtitleClasses[backgroundColor]} leading-relaxed`}>
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className={getLayoutClasses()}>
            {steps.map((step, index) => (
              <div key={index} className={getCardClasses()}>
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${getStepColor(step.color)} text-white rounded-xl font-semibold mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                  {step.icon || step.number}
                </div>
                <h4 className={`text-lg font-semibold ${textClasses[backgroundColor]} mb-3`}>
                  {step.title}
                </h4>
                <p className={`text-sm ${subtitleClasses[backgroundColor]} leading-relaxed`}>
                  {step.description}
                </p>
                
                {/* Connector Line */}
                {showConnectors && layout === 'horizontal' && index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                    <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2">
                      <svg className="w-2 h-2 text-gray-300" fill="currentColor" viewBox="0 0 8 8">
                        <path d="M2.3 0L4.6 2.3L2.3 4.6L1.4 3.7L2.1 3L1.4 2.3z"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}