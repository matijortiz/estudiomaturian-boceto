import React from 'react'
import { Search, MessageCircle, Award, Lock } from 'lucide-react'

const HookSection: React.FC = () => {
  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000"
            alt="Elegant person"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full md:w-2/3 md:pl-12">
          <h2 className="text-3xl font-bold mb-8">Haz que te quieran: las cosas bien hechas tienen buenos comienzos.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <Search className="mr-4 text-maturian-salmon" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Personalización</h3>
                <p>Como un sastre toma tus medidas para hacer un traje, escuchamos tu visión y necesidades en primer lugar.</p>
              </div>
            </div>
            <div className="flex items-start">
              <MessageCircle className="mr-4 text-maturian-salmon" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Comunicación</h3>
                <p>Al ser un proceso creativo, vamos a ir avanzando con el despliegue de tu producto por varias etapas comunicativas.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Award className="mr-4 text-maturian-salmon" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Profesionalismo</h3>
                <p>Contamos con un equipo creativo brillante y personal experto en ventas online. El resultado final tendrá un valor más elevado en tu nicho o mercado.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Lock className="mr-4 text-maturian-salmon" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">Seguridad</h3>
                <p>Nuestro objetivo será asegurarnos que tu proyecto tenga visibilidad y resultados en los plazos acordados.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HookSection