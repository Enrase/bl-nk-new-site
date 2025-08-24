'use client'

import TeamMemberImage from '../TeamMemberImage'

interface TeamMember {
  name: string
  role: string
  description: string
  image?: string
  initials: string
  skills?: string[]
  color?: 'blue' | 'green' | 'purple' | 'orange'
  socialLinks?: {
    linkedin?: string
    twitter?: string
  }
}

interface TeamGridProps {
  title: string
  highlightedWord?: string
  subtitle?: string
  description?: string
  members: TeamMember[]
  layout?: 'grid' | 'carousel'
  columns?: 2 | 3 | 4
  style?: 'basic' | 'premium' | 'glassmorphism'
  backgroundColor?: 'white' | 'gray' | 'dark'
  showStats?: boolean
  stats?: Array<{
    label: string
    value: string
    color: string
  }>
}

export default function TeamGrid({
  title,
  highlightedWord,
  subtitle,
  description,
  members,
  layout = 'grid',
  columns = 4,
  style = 'premium',
  backgroundColor = 'gray',
  showStats = true,
  stats = [
    { label: 'Double expertise Droit + SEO', value: '', color: 'blue-400' },
    { label: '10+ ans d\'expérience minimum', value: '', color: 'green-400' },
    { label: 'Secteur juridique uniquement', value: '', color: 'purple-400' }
  ]
}: TeamGridProps) {
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

  const getMemberColor = (color: string = 'blue') => {
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
          <h3 className={`text-3xl font-bold ${textClasses[backgroundColor]} mb-4`}>
            {title.split(' ').map((word, index) => 
              word.toLowerCase() === highlightedWord?.toLowerCase() ? (
                <span key={index} className="bg-black text-white px-3 py-1 mx-1 rounded-sm transform -rotate-1 inline-block shadow-lg animate-rock-wiggle">
                  {word}
                </span>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </h3>
          {subtitle && (
            <p className={`text-xl ${subtitleClasses[backgroundColor]} max-w-3xl mx-auto`}>
              {subtitle}
            </p>
          )}
          
          {/* Stats */}
          {showStats && stats && (
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 mt-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className={`w-2 h-2 bg-${stat.color} rounded-full`}></div>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Team Members Grid */}
        <div className={`grid ${gridCols[columns]} gap-8 ${style === 'premium' ? 'relative' : ''}`}>
          {style === 'premium' && (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-purple-50/30 rounded-3xl -z-10"></div>
          )}
          
          {members.map((member, index) => (
            <div key={index} className="group relative">
              {style === 'premium' && (
                <div className={`absolute -inset-1 bg-gradient-to-r ${getGlowEffect(member.color)} rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              )}
              
              <div className={`${
                style === 'premium' 
                  ? 'relative bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-3 animate-on-scroll text-center'
                  : style === 'glassmorphism'
                    ? 'bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center'
                    : 'bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 text-center'
              }`}>
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className={`w-24 h-24 rounded-full mx-auto overflow-hidden border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br ${getMemberColor(member.color)}`}>
                    {member.image ? (
                      <TeamMemberImage 
                        src={member.image} 
                        alt={member.name} 
                        initials={member.initials} 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                        {member.initials}
                      </div>
                    )}
                  </div>
                  <div className={`absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-${member.color}-500 to-${member.color}-600 rounded-full flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">★</span>
                  </div>
                </div>

                {/* Name & Role */}
                <h4 className={`text-xl font-semibold ${textClasses[backgroundColor]} mb-2 group-hover:text-${member.color}-600 transition-colors duration-300`}>
                  {member.name}
                </h4>
                <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r from-${member.color}-100 to-${member.color}-200 rounded-full mb-4`}>
                  <span className={`text-${member.color}-700 font-medium text-sm`}>{member.role}</span>
                </div>

                {/* Description */}
                <p className={`${subtitleClasses[backgroundColor]} text-sm leading-relaxed mb-4`}>
                  {member.description}
                </p>

                {/* Skills */}
                {member.skills && (
                  <div className="flex justify-center gap-2 flex-wrap">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className={`px-2 py-1 bg-${member.color}-50 text-${member.color}-600 rounded text-xs font-medium`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Social Links */}
                {member.socialLinks && (
                  <div className="flex justify-center gap-3 mt-4">
                    {member.socialLinks.linkedin && (
                      <a href={member.socialLinks.linkedin} className={`w-8 h-8 bg-${member.color}-100 rounded-lg flex items-center justify-center hover:bg-${member.color}-200 transition-colors duration-300`}>
                        <svg className={`w-4 h-4 text-${member.color}-600`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a href={member.socialLinks.twitter} className={`w-8 h-8 bg-${member.color}-100 rounded-lg flex items-center justify-center hover:bg-${member.color}-200 transition-colors duration-300`}>
                        <svg className={`w-4 h-4 text-${member.color}-600`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                        </svg>
                      </a>
                    )}
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