import React from 'react'
import { Coffee, FileText, Rocket } from 'lucide-react'

const WorkflowSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Forma de Trabajo</h2>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-2/3 mb-8 md:mb-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Coffee className="mx-auto mb-4 text-maturian-gray" size={48} />
                <h3 className="text-xl font-semibold mb-2">Proyecto, Tiempo, Etapas</h3>
                <p>En las primeras etapas de tu proyecto te explicamos detalladamente los pasos a seguir, los plazos, y damos semanalmente avances de tu producto.</p>
              </div>
              <div className="text-center">
                <FileText className="mx-auto mb-4 text-maturian-gray" size={48} />
                <h3 className="text-xl font-semibold mb-2">Presupuestos y Pagos Online</h3>
                <p>Luego de la primera reunión gratuita donde definimos los requerimientos y el cómo llevar adelante tu proyecto de una buena manera, vamos a requerir de un pago inicial para ir desarrollándolo.</p>
              </div>
              <div className="text-center">
                <Rocket className="mx-auto mb-4 text-maturian-gray" size={48} />
                <h3 className="text-xl font-semibold mb-2">Finalización del Proyecto</h3>
                <p>Una vez finalizado el proyecto te entregamos un enlace de descarga con toda la documentación del proyecto, editables, los accesos y recursos necesarios para su mantenimiento.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
              alt="Team working"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkflowSection