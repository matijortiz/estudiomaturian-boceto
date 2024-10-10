import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-maturian-gray text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Maturián</h3>
            <p>Dando vida a tu marca, negocio o talento a través de un proceso creativo planificado.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-maturian-salmon">Inicio</a></li>
              <li><a href="#combos" className="hover:text-maturian-salmon">Combos</a></li>
              <li><a href="#sobre-nosotros" className="hover:text-maturian-salmon">Sobre Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-maturian-salmon">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-maturian-salmon"><Facebook size={24} /></a>
              <a href="#" className="hover:text-maturian-salmon"><Twitter size={24} /></a>
              <a href="#" className="hover:text-maturian-salmon"><Instagram size={24} /></a>
              <a href="#" className="hover:text-maturian-salmon"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 Maturián. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer