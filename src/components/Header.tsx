import React from 'react'
import { Aperture } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-maturian-gray text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <Aperture size={32} />
          <span className="text-xl font-bold">Maturián</span>
        </a>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#inicio" className="hover:text-maturian-salmon">Inicio</a></li>
            <li><a href="#combos" className="hover:text-maturian-salmon">Combos</a></li>
            <li><a href="#sobre-nosotros" className="hover:text-maturian-salmon">Sobre Nosotros</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header