import { useState, useEffect } from "react"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledHandleScroll)
    return () => window.removeEventListener("scroll", throttledHandleScroll)
  }, [])

 
  const clipPathPercentage = Math.min(80 + scrollY * 0.05, 100) 
  const clipPath = `polygon(0 0, 100% 0, 100% ${clipPathPercentage}%, 0 100%)`

  return (
    <section
      id="/"
      className="w-full h-screen bg-blue-700 text-white overflow-hidden px-5 lg:px-10 flex flex-col justify-center"
      style={{ clipPath }}
    >
      <div className="container mx-auto px-4 py-8 md:py-32">
        <h1 className="text-3xl md:text-6xl md:leading-tight font-bold mb-6">
          Descubra por que o Pesquisa Ativa está revolucionando o mundo dos negócios!
        </h1>
        <p className="text-xl mb-8">
          Oferecemos métodos de pesquisa rápidos e assertivos para impulsionar seu negócio.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:shadow-xl transition-colors duration-300">
          Quero agendar uma consultoria gratuita!
        </button>
      </div>
    </section>
  )
}

