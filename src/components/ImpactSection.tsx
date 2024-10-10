import React from 'react'

const ImpactSection: React.FC = () => {
  return (
    <section className="bg-gradient-dark text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Impacto Transformativo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="text-5xl font-bold text-maturian-salmon mb-2">90%</p>
            <p>Aumento en el impacto del producto al público</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-maturian-salmon mb-2">25%</p>
            <p>Aumento de la eficiencia comunicativa</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-maturian-salmon mb-2">95%</p>
            <p>Satisfacción del cliente</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-maturian-salmon mb-2">35%</p>
            <p>Incremento de las búsquedas hacia tus redes sociales</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpactSection