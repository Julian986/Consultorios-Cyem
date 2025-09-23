import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-slate-600">
        <div>
          <h3 className="font-semibold text-slate-900">CYEM Consultorios</h3>
          <p className="mt-3 leading-relaxed">Centro de rehabilitación especializado en consultorios y espacios multidisciplinarios en Bahía Blanca. Atención integral para tu recuperación y bienestar físico.</p>
          <a href="https://wa.me/5492914162406?text=Hola%2C%20quiero%20agendar%20un%20turno%20en%20CYEM" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center rounded-md px-4 py-2 text-white font-medium shadow transition-colors"
                style={{backgroundColor: 'oklch(0.5 0.24 260.56)'}}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'oklch(0.45 0.24 262.68)'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'oklch(0.5 0.24 260.56)'}>
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
            </svg>
            Solicitar turno
          </a>
        </div>

        <div className="lg:pl-12 xl:pl-16">
          <h4 className="font-semibold text-slate-900">Navegación</h4>
          <ul className="mt-3 grid gap-2">
            <li><a href="#inicio" className="hover:style={{color: 'oklch(0.5 0.24 260.56)'}}">Inicio</a></li>
            <li><a href="#sobre-mi" className="hover:style={{color: 'oklch(0.5 0.24 260.56)'}}">Sobre mí</a></li>
            <li><a href="#servicios" className="hover:style={{color: 'oklch(0.5 0.24 260.56)'}}">Servicios</a></li>
            <li><a href="#testimonios" className="hover:style={{color: 'oklch(0.5 0.24 260.56)'}}">Testimonios</a></li>
            <li><a href="#contacto" className="hover:style={{color: 'oklch(0.5 0.24 260.56)'}}">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Contacto</h4>
          <ul className="mt-3 grid gap-2">
            <li className="flex items-start gap-2"><PhoneIcon className="w-5 h-5 style={{color: 'oklch(0.5 0.24 260.56)'}}" /><a href="https://wa.me/5492914162406" className="hover:style={{color: 'oklch(0.5 0.24 260.56)'}}">+54 9 291 416-2406</a></li>
            <li className="flex items-start gap-2"><EnvelopeIcon className="w-5 h-5 style={{color: 'oklch(0.5 0.24 260.56)'}}" /><a href="mailto:info@cyem.com.ar" className="hover:style={{color: 'oklch(0.5 0.24 260.56)'}}">info@cyem.com.ar</a></li>
            <li className="flex items-start gap-2"><MapPinIcon className="w-5 h-5 style={{color: 'oklch(0.5 0.24 260.56)'}}" /><span>Bahía Blanca, Buenos Aires</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Información</h4>
          <ul className="mt-3 grid gap-2">
            <li><a href="#" className="hover:style={{color: 'oklch(0.5 0.24 260.56)'}}">Aviso legal</a></li>
            <li><a href="#" className="hover:style={{color: 'oklch(0.5 0.24 260.56)'}}">Política de privacidad</a></li>
            <li><a href="#" className="hover:style={{color: 'oklch(0.5 0.24 260.56)'}}">Términos y condiciones</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} CYEM Consultorios y Espacios Multidisciplinarios. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:style={{color: 'oklch(0.5 0.24 260.56)'}}">Instagram</a>
            <a href="#" className="hover:style={{color: 'oklch(0.5 0.24 260.56)'}}">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}



