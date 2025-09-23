
export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <img className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto rounded-xl shadow-md ring-1 ring-slate-200 object-cover" style={{aspectRatio: '507/635'}} src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1758635086/imagen_inicio_2_jwaxwo.webp" alt="Frente de CYEM Consultorios y Espacios Multidisciplinarios" />
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Sobre nosotros</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">CYEM es un centro de rehabilitación que integra diferentes disciplinas de la salud en un mismo espacio, brindando atención integral a los pacientes. Nuestro equipo multidisciplinario trabaja de manera coordinada para ofrecer tratamientos personalizados y completos.</p>
          <p className="mt-3 text-slate-600 leading-relaxed">Nuestro enfoque se basa en la evaluación integral de cada paciente, combinando técnicas manuales tradicionales con equipamiento moderno y la colaboración entre diferentes especialistas para lograr los mejores resultados en el menor tiempo posible.</p>
          
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold style={{color: 'oklch(0.5 0.24 260.56)'}}">12+</div>
              <div className="text-sm text-slate-600">Años de experiencia</div>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold style={{color: 'oklch(0.5 0.24 260.56)'}}">1000+</div>
              <div className="text-sm text-slate-600">Pacientes tratados</div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-slate-900 mb-3">Formación académica:</h3>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 style={{backgroundColor: 'oklch(0.5 0.24 260.56)'}} rounded-full"></div>
                Licenciatura en Kinesiología - Universidad Nacional del Sur
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 style={{backgroundColor: 'oklch(0.5 0.24 260.56)'}} rounded-full"></div>
                Especialización en Rehabilitación Neurológica
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 style={{backgroundColor: 'oklch(0.5 0.24 260.56)'}} rounded-full"></div>
                Curso de Drenaje Linfático Manual
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}



