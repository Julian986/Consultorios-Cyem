import { XMarkIcon, UserIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'

type Profesional = {
  nombre: string
  matricula: string
  telefono: string
}

type ProfesionalesModalProps = {
  isOpen: boolean
  onClose: () => void
  titulo: string
  profesionales: Profesional[]
}

export default function ProfesionalesModal({ isOpen, onClose, titulo, profesionales }: ProfesionalesModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop borroso */}
      <div className="fixed inset-0 backdrop-blur-sm bg-white/20 transition-opacity" onClick={onClose}></div>
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 px-8 py-6 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Profesionales de {titulo}
                </h2>
                <p className="mt-2 text-lg text-slate-600">
                  Conoce a nuestro equipo de especialistas en {titulo.toLowerCase()}
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 hover:bg-slate-100 transition-colors duration-200"
                style={{cursor: 'pointer'}}
              >
                <XMarkIcon className="w-6 h-6 text-slate-500" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {profesionales.map((profesional, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Foto placeholder */}
                  <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-500 to-slate-600 flex items-center justify-center">
                      <UserIcon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Información */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {profesional.nombre}
                    </h3>
                    {profesional.matricula && (
                      <p className="text-sm text-slate-600 mb-4">
                        {profesional.matricula}
                      </p>
                    )}
                    
                    {/* Botón WhatsApp mejorado */}
                    <a
                      href={`https://wa.me/54${profesional.telefono.replace(/\s/g, '')}?text=Hola%2C%20quiero%20agendar%20un%20turno%20en%20${titulo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                      </svg>
                      <span className="text-sm font-semibold">WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
