export default function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 text-center">Contacto</h2>
        <p className="mt-2 text-slate-600 text-center max-w-2xl mx-auto">Completá el formulario para solicitar un turno o consultá directamente por WhatsApp. Atendemos en Bahía Blanca con turnos programados.</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <form className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <label className="block text-sm font-medium text-slate-700">Nombre</label>
            <input type="text" className="mt-1 w-full rounded-md bg-white border border-slate-300 px-3 py-2 style={{borderColor: 'oklch(0.5 0.24 260.56)', ringColor: 'oklch(0.5 0.24 260.56)'}}" placeholder="Nombre" />

            <label className="block text-sm font-medium text-slate-700 mt-4">Teléfono</label>
            <input type="tel" className="mt-1 w-full rounded-md bg-white border border-slate-300 px-3 py-2 style={{borderColor: 'oklch(0.5 0.24 260.56)', ringColor: 'oklch(0.5 0.24 260.56)'}}" placeholder="Teléfono" />

            <label className="block text-sm font-medium text-slate-700 mt-4">Email</label>
            <input type="email" className="mt-1 w-full rounded-md bg-white border border-slate-300 px-3 py-2 style={{borderColor: 'oklch(0.5 0.24 260.56)', ringColor: 'oklch(0.5 0.24 260.56)'}}" placeholder="Email" />

            <label className="block text-sm font-medium text-slate-700 mt-4">Tipo de consulta</label>
            <select className="mt-1 w-full rounded-md bg-white border border-slate-300 px-3 py-2 style={{borderColor: 'oklch(0.5 0.24 260.56)', ringColor: 'oklch(0.5 0.24 260.56)'}}">
              <option value="">Seleccioná el tipo de tratamiento</option>
              <option value="kinesiologia">Kinesiología</option>
              <option value="nutricion">Nutrición</option>
              <option value="psicologia">Psicología</option>
              <option value="fisioterapia">Fisioterapia</option>
              <option value="terapia-ocupacional">Terapia Ocupacional</option>
              <option value="evaluacion-integral">Evaluación Integral</option>
              <option value="otro">Otro</option>
            </select>

            <label className="block text-sm font-medium text-slate-700 mt-4">Mensaje</label>
            <textarea rows={4} className="mt-1 w-full rounded-md bg-white border border-slate-300 px-3 py-2 style={{borderColor: 'oklch(0.5 0.24 260.56)', ringColor: 'oklch(0.5 0.24 260.56)'}}" placeholder="Describí brevemente tu consulta o lesión" />

            <button type="submit" className="mt-5 w-full inline-flex items-center justify-center px-5 py-3 rounded-md text-white font-medium shadow transition-colors"
                style={{backgroundColor: 'oklch(0.5 0.24 260.56)'}}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'oklch(0.45 0.24 262.68)'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'oklch(0.5 0.24 260.56)'}>
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
              </svg>
              Solicitar turno por WhatsApp
            </button>
          </form>

          <div className="grid gap-4 content-start">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                <svg className="w-5 h-5 style={{color: 'oklch(0.5 0.24 260.56)'}}" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                </svg>
                Contacto directo
              </h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 style={{color: 'oklch(0.5 0.24 260.56)'}}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <a className="style={{color: 'oklch(0.5 0.24 260.56)'}} hover:underline" href="https://wa.me/5492914162406">+54 9 291 416-2406</a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 style={{color: 'oklch(0.5 0.24 260.56)'}}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a className="style={{color: 'oklch(0.5 0.24 260.56)'}} hover:underline" href="mailto:info@cyem.com.ar">info@cyem.com.ar</a>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 style={{color: 'oklch(0.5 0.24 260.56)'}} mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <div>
                    <p className="text-slate-600">Estados Unidos 65</p>
                    <p className="text-sm text-slate-500">B8000 Bahía Blanca, Provincia de Buenos Aires</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-3">Horarios de atención</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Lunes a Viernes:</span>
                  <span className="text-slate-900">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Sábados:</span>
                  <span className="text-slate-900">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Domingos:</span>
                  <span className="text-slate-500">Cerrado</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-0 overflow-hidden shadow-sm">
              <iframe title="Mapa CYEM Bahía Blanca" className="w-full h-64" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1556.1475533511054!2d-62.248514739711126!3d-38.73398976217819!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eda377a1b7c1eb%3A0x44aa5259b7803c1b!2sCYEM%20Consultorios%20y%20Espacios%20Multidisciplinarios!5e0!3m2!1ses!2sar!4v1757340866663!5m2!1ses!2sar" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



