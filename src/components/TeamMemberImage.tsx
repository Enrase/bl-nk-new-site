'use client'

import { useState } from 'react'

interface TeamMemberImageProps {
  src: string
  alt: string
  initials: string
}

export default function TeamMemberImage({ src, alt, initials }: TeamMemberImageProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <>
      {!imageError ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover" 
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
          {initials}
        </div>
      )}
    </>
  )
}