interface ReviewType {
  name: string
  initials: string
  avatar?: string
  rating: number
  reviewCount: number
  timeAgo: string
  content: string
  badges?: string[]
  avatarColor?: string
}

interface GoogleReviewsProps {
  title?: string
  subtitle?: string
  overallRating?: number
  totalReviews?: number
  businessName?: string
  reviews: ReviewType[]
  showGoogleLogo?: boolean
  backgroundColor?: 'white' | 'gray'
  maxReviews?: number
}

export default function GoogleReviews({
  title = "Avis Google",
  subtitle,
  overallRating = 4.9,
  totalReviews = 12,
  businessName = "BL NK - Agence SEO spécialisée avocats",
  reviews,
  showGoogleLogo = true,
  backgroundColor = 'white',
  maxReviews = 6
}: GoogleReviewsProps) {
  const displayedReviews = reviews.slice(0, maxReviews)
  
  const getAvatarColor = (color?: string, index?: number) => {
    const colors = ['bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-gradient-to-br from-green-600 to-gray-800', 'bg-gradient-to-br from-purple-600 to-gray-800', 'bg-gradient-to-br from-blue-600 to-gray-800']
    return color || colors[index ? index % colors.length : 0]
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
    ))
  }

  return (
    <section className={`py-20 ${backgroundColor === 'white' ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          {showGoogleLogo && (
            <div className="flex items-center justify-center gap-3 mb-6">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            </div>
          )}
          
          {!showGoogleLogo && (
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
          )}

          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex text-yellow-400 text-xl">
              {renderStars(Math.floor(overallRating))}
            </div>
            <span className="text-2xl font-bold text-gray-900">{overallRating}</span>
            <span className="text-gray-600">({totalReviews} avis)</span>
          </div>
          
          <p className="text-gray-600">{businessName}</p>
          
          {subtitle && (
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow animate-on-scroll">
              {/* Review Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className={`w-10 h-10 ${getAvatarColor(review.avatarColor, index)} rounded-full flex items-center justify-center text-white font-semibold`}>
                  {review.avatar ? (
                    <img src={review.avatar} alt={review.name} className="w-full h-full object-cover rounded-full" />
                  ) : (
                    review.initials
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
                    {review.badges?.map((badge, badgeIndex) => (
                      <span key={badgeIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{badge}</span>
                    ))}
                    <span>{review.reviewCount} avis</span>
                    <span>•</span>
                    <span>{review.timeAgo}</span>
                  </div>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex text-yellow-400 text-sm mb-3">
                {renderStars(review.rating)}
              </div>
              
              {/* Review Content */}
              <p className="text-gray-700 text-sm leading-relaxed">{review.content}</p>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {reviews.length > maxReviews && (
          <div className="text-center mt-12">
            <button className="bg-gray-900 text-white font-semibold py-3 px-8 rounded-xl hover:bg-gray-800 transition-colors duration-300">
              Voir plus d'avis
            </button>
          </div>
        )}
      </div>
    </section>
  )
}