interface StatType {
  value: string
  label: string
  suffix?: string
  color?: 'blue' | 'green' | 'purple' | 'orange'
  icon?: string
}

interface PremiumStatsProps {
  title?: string
  subtitle?: string
  stats: StatType[]
  layout?: 'horizontal' | 'grid' | 'vertical'
  style?: 'basic' | 'premium' | 'glassmorphism'
  backgroundColor?: 'white' | 'gray' | 'dark'
  showBackgroundEffects?: boolean
  columns?: 2 | 3 | 4
}

export default function PremiumStats({
  title,
  subtitle,
  stats,
  layout = 'horizontal',
  style = 'premium',
  backgroundColor = 'white',
  showBackgroundEffects = true,
  columns = 4
}: PremiumStatsProps) {
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

  const getStatColor = (color: string = 'blue') => {
    const colors = {
      blue: 'from-blue-600 to-gray-800',
      green: 'from-green-600 to-gray-800',
      purple: 'from-purple-600 to-gray-800',
      orange: 'from-orange-600 to-gray-800'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getGlowEffect = (color: string = 'blue') => {
    const colors = {
      blue: 'from-blue-500/20 via-blue-400/10 to-blue-500/20',
      green: 'from-green-500/20 via-green-400/10 to-green-500/20',
      purple: 'from-purple-500/20 via-purple-400/10 to-purple-500/20',
      orange: 'from-orange-500/20 via-orange-400/10 to-orange-500/20'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getLayoutClasses = () => {
    switch (layout) {
      case 'vertical':
        return 'flex flex-col space-y-8'
      case 'grid':
        const gridCols = {
          2: 'grid-cols-1 md:grid-cols-2',
          3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
          4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
        }
        return `grid ${gridCols[columns]} gap-8`
      default:
        return 'flex flex-wrap justify-center gap-8'
    }
  }

  const getStatClasses = () => {
    switch (style) {
      case 'premium':
        return 'group relative text-center'
      case 'glassmorphism':
        return 'bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 text-center'
      default:
        return 'text-center group'
    }
  }

  return (
    <section className={`py-20 ${backgroundClasses[backgroundColor]} ${showBackgroundEffects ? 'relative overflow-hidden' : ''}`}>
      {/* Background Effects */}
      {showBackgroundEffects && style === 'premium' && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '15s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse" style={{animationDuration: '20s'}}></div>
        </div>
      )}

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className={`text-3xl font-bold ${textClasses[backgroundColor]} mb-4`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-xl ${subtitleClasses[backgroundColor]} max-w-3xl mx-auto`}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Stats Container */}
        {style === 'premium' ? (
          <div className="relative">
            <div className="bg-white/[0.08] backdrop-blur-md border border-white/[0.15] rounded-3xl p-12 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <div className={getLayoutClasses()}>
                {stats.map((stat, index) => (
                  <div key={index} className={getStatClasses()}>
                    {/* Glow Effect */}
                    <div className={`absolute -inset-2 bg-gradient-to-r ${getGlowEffect(stat.color)} rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                    
                    <div className="relative">
                      {/* Icon */}
                      {stat.icon && (
                        <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${getStatColor(stat.color)} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {stat.icon}
                        </div>
                      )}

                      {/* Value */}
                      <div className="mb-2">
                        <span className={`text-4xl font-bold bg-gradient-to-r ${getStatColor(stat.color)} bg-clip-text text-transparent`}>
                          {stat.value}
                        </span>
                        {stat.suffix && (
                          <span className={`text-2xl font-semibold ${textClasses[backgroundColor]}`}>
                            {stat.suffix}
                          </span>
                        )}
                      </div>

                      {/* Label */}
                      <p className={`text-sm ${subtitleClasses[backgroundColor]} font-medium uppercase tracking-wide`}>
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500/20 rounded-full"></div>
          </div>
        ) : (
          <div className={getLayoutClasses()}>
            {stats.map((stat, index) => (
              <div key={index} className={getStatClasses()}>
                {/* Icon */}
                {stat.icon && (
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${getStatColor(stat.color)} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg`}>
                    {stat.icon}
                  </div>
                )}

                {/* Value */}
                <div className="mb-2">
                  <span className={`text-4xl font-bold bg-gradient-to-r ${getStatColor(stat.color)} bg-clip-text text-transparent`}>
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className={`text-2xl font-semibold ${textClasses[backgroundColor]}`}>
                      {stat.suffix}
                    </span>
                  )}
                </div>

                {/* Label */}
                <p className={`text-sm ${subtitleClasses[backgroundColor]} font-medium uppercase tracking-wide`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}