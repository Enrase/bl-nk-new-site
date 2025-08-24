interface TestimonialType {
  quote: string
  author: string
  role: string
  company?: string
  avatar?: string
  initials: string
  rating?: number
  color?: 'blue' | 'green' | 'purple' | 'orange'
}

interface TestimonialsSectionProps {
  title: string
  highlightedWord?: string
  subtitle?: string
  testimonials: TestimonialType[]
  layout?: 'grid' | 'carousel' | 'masonry'
  style?: 'basic' | 'premium' | 'glassmorphism'
  backgroundColor?: 'white' | 'gray' | 'dark'
  columns?: 2 | 3 | 4
  showRatings?: boolean
}

export default function TestimonialsSection({
  title,
  highlightedWord,
  subtitle,
  testimonials,
  layout = 'grid',
  style = 'premium',
  backgroundColor = 'gray',
  columns = 3,
  showRatings = true
}: TestimonialsSectionProps) {
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

  const getAvatarColor = (color: string = 'blue') => {
    const colors = {
      blue: 'bg-gradient-to-br from-blue-600 to-gray-800',
      green: 'bg-gradient-to-br from-green-600 to-gray-800',
      purple: 'bg-gradient-to-br from-purple-600 to-gray-800',
      orange: 'bg-gradient-to-br from-orange-600 to-gray-800'
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

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  const getCardClasses = () => {
    switch (style) {
      case 'premium':
        return 'group relative'
      case 'glassmorphism':
        return 'bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2'
      default:
        return 'bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300'
    }
  }

  const renderStars = (rating: number = 5) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
    ))
  }

  return (
    <section className={`py-20 ${backgroundClasses[backgroundColor]}`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold ${textClasses[backgroundColor]} mb-6`}>
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

        {/* Testimonials Grid */}
        <div className={`grid ${gridCols[columns]} gap-8`}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={getCardClasses()}>
              {/* Premium Glow Effect */}
              {style === 'premium' && (
                <div className={`absolute -inset-1 bg-gradient-to-r ${getGlowEffect(testimonial.color)} rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              )}

              <div className={style === 'premium' ? 'relative bg-white/[0.98] backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-3 animate-on-scroll' : ''}>
                {/* Quote */}
                <div className="mb-6">
                  <div className={`text-4xl ${textClasses[backgroundColor]} opacity-20 mb-4`}>"</div>
                  <p className={`${textClasses[backgroundColor]} text-lg leading-relaxed italic`}>
                    {testimonial.quote}
                  </p>
                </div>

                {/* Rating */}
                {showRatings && testimonial.rating && (
                  <div className="flex text-yellow-400 text-sm mb-6">
                    {renderStars(testimonial.rating)}
                  </div>
                )}

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${getAvatarColor(testimonial.color)} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg ${style === 'premium' ? 'group-hover:scale-110 transition-transform duration-300' : ''}`}>
                    {testimonial.avatar ? (
                      <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover rounded-full" />
                    ) : (
                      testimonial.initials
                    )}
                  </div>
                  <div>
                    <h4 className={`font-semibold ${textClasses[backgroundColor]} ${style === 'premium' ? `group-hover:text-${testimonial.color}-600 transition-colors duration-300` : ''}`}>
                      {testimonial.author}
                    </h4>
                    <p className={`text-sm ${subtitleClasses[backgroundColor]}`}>
                      {testimonial.role}
                      {testimonial.company && (
                        <span>, {testimonial.company}</span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Quote mark decoration */}
                {style === 'premium' && (
                  <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-${testimonial.color}-100 to-${testimonial.color}-200 rounded-full flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300`}>
                    <span className={`text-${testimonial.color}-600 text-xs font-bold`}>"</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        {style === 'premium' && (
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-lg">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 4).map((testimonial, index) => (
                  <div key={index} className={`w-8 h-8 ${getAvatarColor(testimonial.color)} rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                    {testimonial.initials}
                  </div>
                ))}
              </div>
              <span className={`text-sm font-medium ${textClasses[backgroundColor]}`}>
                +{testimonials.length} clients satisfaits
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}