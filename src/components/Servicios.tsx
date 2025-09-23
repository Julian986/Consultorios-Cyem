import { useState } from 'react'
import { UserIcon, HeartIcon, CogIcon, SparklesIcon, FireIcon, EyeIcon, MicrophoneIcon, AcademicCapIcon, MusicalNoteIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import ProfesionalesModal from './ProfesionalesModal'

type Profesional = {
  nombre: string
  matricula: string
  telefono: string
}

type Servicio = {
  icon: any
  titulo: string
  descripcion: string
  profesionales: Profesional[]
}

const servicios: Servicio[] = [
  {
    icon: EyeIcon,
    titulo: 'Oftalmología',
    descripcion: 'Atención especializada en salud visual y oftalmológica.',
    profesionales: [
      { nombre: 'Dra. Yael Tolosa', matricula: 'MP 3042', telefono: '2915355014' }
    ]
  },
  {
    icon: MicrophoneIcon,
    titulo: 'Fonoaudiología',
    descripcion: 'Evaluación y tratamiento de trastornos del habla, lenguaje y audición.',
    profesionales: [
      { nombre: 'Lic. Karina Lopez', matricula: 'MP 5847', telefono: '2932442528' },
      { nombre: 'Florencia García Moreno', matricula: 'MP 6267', telefono: '2915108803' },
      { nombre: 'Lic. Brenda Luciana Menchaca', matricula: 'MP 6165', telefono: '2983540763' },
      { nombre: 'Lic. M. Fernanda Curruinca', matricula: 'MP 6275', telefono: '2983534798' },
      { nombre: 'Lic. Rocío Guardia', matricula: 'MP 6162', telefono: '2983530669' }
    ]
  },
  {
    icon: UserIcon,
    titulo: 'Kinesiología',
    descripcion: 'Rehabilitación física especializada en diferentes áreas terapéuticas.',
    profesionales: [
      { nombre: 'Lic. Montecchiari Evangelina', matricula: 'MP 3349', telefono: '2914162406' },
      { nombre: 'Lic. Sofía De Cara Quinteros', matricula: 'MP 6680', telefono: '2915376003' },
      { nombre: 'Lic. Agostina Giachetti', matricula: 'MP 9229', telefono: '5491157232464' },
      { nombre: 'Lic. Andrés Agustín Ziegler', matricula: 'MP 9228', telefono: '5492914480072' },
      { nombre: 'Lic. Patricia Daniela Mena', matricula: 'MP 2069', telefono: '2317401569' },
      { nombre: 'Lic. Agustín Svevo', matricula: 'MP 10533', telefono: '2923452279' },
      { nombre: 'Lic. Lucas Otamendi', matricula: 'MP 10894', telefono: '2952420791' }
    ]
  },
  {
    icon: AcademicCapIcon,
    titulo: 'Psicopedagogía',
    descripcion: 'Evaluación y tratamiento de dificultades de aprendizaje.',
    profesionales: [
      { nombre: 'Lic. Micaela Rappa', matricula: 'MP 198529', telefono: '2916462268' },
      { nombre: 'Lic. Mirian Raquel Lucero', matricula: 'MP 618', telefono: '2914232326' }
    ]
  },
  {
    icon: UserGroupIcon,
    titulo: 'Psicología',
    descripcion: 'Atención psicológica integral para todas las edades.',
    profesionales: [
      { nombre: 'Lic. Sandra González', matricula: 'MP 718', telefono: '2914737217' }
    ]
  },
  {
    icon: CogIcon,
    titulo: 'Terapia Ocupacional',
    descripcion: 'Rehabilitación funcional para mejorar la independencia en actividades cotidianas.',
    profesionales: [
      { nombre: 'Lic. Frache Sirley Anahí', matricula: 'MP 1518 MN 2852', telefono: '2914362811' },
      { nombre: 'Lic. Martina Belén Hedrich', matricula: '', telefono: '2914326598' }
    ]
  },
  {
    icon: HeartIcon,
    titulo: 'Nutrición',
    descripcion: 'Asesoramiento nutricional personalizado para complementar tu tratamiento.',
    profesionales: [
      { nombre: 'Lic. Carla Incardona', matricula: 'MP 6611', telefono: '2915663036' }
    ]
  },
  {
    icon: SparklesIcon,
    titulo: 'Psicología Holística y Biodecodificación',
    descripcion: 'Enfoque integral que combina psicología tradicional con técnicas holísticas.',
    profesionales: [
      { nombre: 'Lic. Candela Gomez', matricula: 'MP 849', telefono: '2914720915' }
    ]
  },
  {
    icon: FireIcon,
    titulo: 'Psicología Infantil',
    descripcion: 'Atención psicológica especializada en niños y adolescentes.',
    profesionales: [
      { nombre: 'Lic. Sabrina Sanchez', matricula: 'MP 2127', telefono: '2916480161' }
    ]
  },
  {
    icon: MusicalNoteIcon,
    titulo: 'Musicoterapia',
    descripcion: 'Uso terapéutico de la música para promover el bienestar y la salud.',
    profesionales: [
      { nombre: 'Lic. Maricel Atala', matricula: 'MP 210666', telefono: '2915395061' }
    ]
  }
]

export default function Servicios() {
  const [modalAbierto, setModalAbierto] = useState<{titulo: string, profesionales: Profesional[]} | null>(null)

  const abrirModal = (titulo: string, profesionales: Profesional[]) => {
    setModalAbierto({ titulo, profesionales })
  }

  const cerrarModal = () => {
    setModalAbierto(null)
  }

  return (
    <section id="servicios" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-slate-900">Servicios </span>
            <span>Multidisciplinarios</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos tratamientos integrales con diferentes especialidades de la salud trabajando de manera coordinada para tu recuperación completa.
          </p>
          <div className="mt-6 w-24 h-1 mx-auto rounded-full" style={{background: 'linear-gradient(to right, rgba(59, 130, 246, 0.6), rgba(59, 130, 246, 0.4))'}}></div>
        </div>

        {/* Grid de servicios - Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicios.map((servicio) => (
            <div 
              key={servicio.titulo} 
              className="group bg-white rounded-2xl border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Card principal */}
              <div className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icono */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-lg transition-all duration-300 group-hover:scale-110" style={{background: 'none', border: '1px solid rgb(225, 225, 225)'}}>
                      <servicio.icon className="w-8 h-8" style={{color: 'rgb(65, 62, 62)'}} />
                    </div>
                    <div className="absolute -inset-1 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" style={{background: 'linear-gradient(to bottom right, oklch(0.5 0.24 260.56), oklch(0.6 0.24 260.56))'}}></div>
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
                    {servicio.titulo}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {servicio.descripcion}
                  </p>
                  
                  {/* Contador de profesionales */}
                  <div className="flex items-center gap-2">
                    <UserGroupIcon className="w-4 h-4" style={{color: 'oklch(0.5 0.24 260.56)'}} />
                    <span className="text-sm font-semibold text-slate-700">
                      {servicio.profesionales.length} Profesional{servicio.profesionales.length !== 1 ? 'es' : ''}
                    </span>
                  </div>
                  
                  {/* Botón para ver profesionales */}
                  <button
                    onClick={() => abrirModal(servicio.titulo, servicio.profesionales)}
                    className="w-full inline-flex items-center justify-center gap-2 font-semibold px-4 py-3 rounded-lg transform hover:scale-105 transition-all duration-200"
                    style={{background: 'none', border: '1px solid rgb(225, 225, 225)', boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3), 0 6px 15px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)', cursor: 'pointer'}}
                  >
                    <UserGroupIcon className="w-4 h-4" style={{color: 'rgb(47, 44, 44)'}} />
                    <span style={{color: 'rgb(65, 62, 62)', background: 'none'}}>Ver profesionales</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de profesionales */}
      {modalAbierto && (
        <ProfesionalesModal
          isOpen={true}
          onClose={cerrarModal}
          titulo={modalAbierto.titulo}
          profesionales={modalAbierto.profesionales}
        />
      )}
    </section>
  )
}