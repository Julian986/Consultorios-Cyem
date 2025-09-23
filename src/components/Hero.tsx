

export default function Hero() {
  return (
    <section id="inicio" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Elementos decorativos sutiles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-emerald-100/60 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-teal-100/40 rounded-full blur-2xl"></div>
        <svg className="absolute top-0 right-0 w-64 h-64 text-emerald-50" fill="currentColor" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" opacity="0.3"/>
          <circle cx="30" cy="30" r="15" opacity="0.2"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Contenido de texto */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge profesional */}
              <div className="inline-flex items-center px-4 py-2 border rounded-full text-sm font-medium" style={{borderColor: 'oklch(0.5 0.24 260.56)', color: 'oklch(0.5 0.24 260.56)'}}>
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Centro Multidisciplinario
            </div>

            {/* Título principal */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                CYEM
                <span className="block" style={{color: 'oklch(0.5 0.24 260.56)'}}>Consultorios</span>
          </h1>
              <p className="mt-4 text-xl text-slate-600 font-light">
                Consultorios y Espacios Multidisciplinarios
              </p>
            </div>

            {/* Descripción */}
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-0">
                Te acompañamos en tu proceso de recuperación y bienestar con 
                atención multidisciplinaria, técnicas modernas y un enfoque 
                integral centrado en tus necesidades de salud.
              </p>

            {/* Información clave de CYEM */}
            <div className="py-6">
              <div className="rounded-xl p-6 pl-0 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: 'oklch(0.9 0.05 262.68)'}}>
                    <svg className="w-4 h-4" style={{color: 'oklch(0.5 0.24 260.56)'}} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-slate-700 font-medium">Consultorios y Espacio Multidisciplinario</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: 'oklch(0.9 0.05 262.68)'}}>
                    <svg className="w-4 h-4" style={{color: 'oklch(0.5 0.24 260.56)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <p className="text-slate-700 font-medium">Atención a niños, adolescentes y adultos</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: 'oklch(0.9 0.05 262.68)'}}>
                    <svg className="w-4 h-4" style={{color: 'oklch(0.5 0.24 260.56)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-slate-700 font-medium">Se atienden todas las OS y Prepagas</p>
                </div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5492914162406?text=Hola%2C%20quiero%20agendar%20una%20consulta%20en%20CYEM" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
                style={{backgroundColor: 'oklch(0.5 0.24 260.56)'}}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'oklch(0.45 0.24 262.68)'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'oklch(0.5 0.24 260.56)'}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                </svg>
                Solicitar Turno
              </a>
              
              <a 
                href="#servicios" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 font-semibold rounded-lg hover:bg-white transition-colors"
                style={{borderColor: 'oklch(0.5 0.24 260.56)', color: 'oklch(0.5 0.24 260.56)'}}
              >
                Conocer Servicios
              </a>
            </div>
          </div>

          {/* Imagen profesional */}
          <div className="relative">
            <div className="relative max-w-3xl mx-auto">
              {/* Imagen principal del centro */}
              <div className="relative">
                <img 
                  className="rounded-2xl shadow-2xl object-cover" 
                  style={{aspectRatio: '527/685'}}
                  src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1758635086/imagen_edificio_gu4tue.webp" 
                  alt="CYEM Consultorios y Espacios Multidisciplinarios - Centro de rehabilitación en Bahía Blanca" 
                />
                
                {/* Badge de disponibilidad - más sutil */}
               {/*  <div className="absolute top-6 left-6 bg-emerald-600 text-white rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Disponible</span>
                  </div>
                </div> */}
              </div>

              {/* Estadísticas debajo de la imagen */}
         {/*      <div className="mt-8 grid grid-cols-2 gap-6 text-center">
                <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-100">
                  <div className="text-2xl font-bold text-emerald-600">8+</div>
                  <div className="text-sm text-slate-600">Años de experiencia</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-100">
                  <div className="text-2xl font-bold text-emerald-600">200+</div>
                  <div className="text-sm text-slate-600">Pacientes tratados</div>
                </div>
              </div> */}

              {/* Elementos decorativos sutiles */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full opacity-60 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-100 rounded-full opacity-40 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Información adicional */}
  {/*       <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800">Tratamientos Personalizados</h3>
            <p className="text-sm text-slate-600">Cada plan se adapta a tus necesidades específicas</p>
          </div>
          
          <div className="space-y-2">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800">Técnicas Modernas</h3>
            <p className="text-sm text-slate-600">Equipamiento actualizado y metodologías avanzadas</p>
          </div>
          
          <div className="space-y-2">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800">Atención Integral</h3>
            <p className="text-sm text-slate-600">Cuidado completo para tu recuperación y bienestar</p>
        </div>
        </div> */}
      </div>
    </section>
  )
}


