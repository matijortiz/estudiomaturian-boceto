import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Deja de ser Invisible a las oportunidades del mercado.</h1>
        <h2 className="text-2xl max-w-2xl">En Maturián damos vida a tu marca, negocio o talento a través de un proceso creativo planificado.</h2>
      </div>
    </section>
  )
}

export default Hero