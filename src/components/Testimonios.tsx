import { StarIcon } from '@heroicons/react/24/solid'

type Testimonio = {
	nombre: string
	texto: string
	rating: number
	fecha: string
	fuente: string
	avatar: string
}

const testimonios: Testimonio[] = [
	{
		nombre: 'María S.',
		texto: 'Después de mi cirugía de rodilla, el equipo de CYEM me ayudó a recuperar completamente la movilidad. Su profesionalismo y atención integral son excepcionales.',
		rating: 5,
		fecha: 'Nov 2024',
		fuente: 'Google',
		avatar: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1753711317/photo-1544005313-94ddf0286df2_qicg9u.webp',
	},
	{
		nombre: 'Carlos R.',
		texto: 'Llegué con una lesión deportiva y gracias al tratamiento multidisciplinario de CYEM pude volver a jugar fútbol sin dolor. Muy recomendable.',
		rating: 5,
		fecha: 'Oct 2024',
		fuente: 'Google',
		avatar: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1753711316/photo-1500648767791-00dcc994a43e_alwlur.webp',
	},
	{
		nombre: 'Elena M.',
		texto: 'El drenaje linfático que me realizó fue excelente. Noté mejoras desde la primera sesión. Una gran profesional.',
		rating: 5,
		fecha: 'Sep 2024',
		fuente: 'Doctoralia',
		avatar: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1755631766/photo-1502685104226-ee32379fefbe_dc6oxf.webp',
	},
	{
		nombre: 'Roberto J.',
		texto: 'Después de mi ACV, el tratamiento neurológico de CYEM fue fundamental para mi recuperación. Excelente atención multidisciplinaria.',
		rating: 5,
		fecha: 'Ago 2024',
		fuente: 'Google',
		avatar: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1753711316/photo-1500648767791-00dcc994a43e_alwlur.webp',
	},
	{
		nombre: 'Lucía P.',
		texto: 'Mi problema respiratorio mejoró mucho con las sesiones en CYEM. El equipo es muy dedicado y explica todo el proceso claramente.',
		rating: 5,
		fecha: 'Jul 2024',
		fuente: 'Doctoralia',
		avatar: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1753711317/photo-1544005313-94ddf0286df2_qicg9u.webp',
	},
	{
		nombre: 'Diego F.',
		texto: 'Excelente profesional. Me trató una contractura cervical y el alivio fue inmediato. Muy recomendable en Bahía Blanca.',
		rating: 5,
		fecha: 'Jun 2024',
		fuente: 'Google',
		avatar: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1755631766/photo-1502685104226-ee32379fefbe_dc6oxf.webp',
	},
]

// Eliminado: ya no usamos iniciales para el avatar

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Testimonios</h2>
          <p className="mt-1 text-sm font-medium" style={{color: '#f97316'}}>Reemplazar por los reales</p>
        </div>
        <p className="mt-2 text-slate-600 text-center max-w-2xl mx-auto">Lo que dicen nuestros pacientes sobre los tratamientos multidisciplinarios en CYEM.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonios.map((t) => (
            <blockquote key={t.nombre} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={`Foto de ${t.nombre}`} className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200" />
                <div className="min-w-0">
                  <div className="font-medium text-slate-900 truncate">{t.nombre}</div>
                  <div className="text-xs text-slate-500 truncate">{t.fuente} • {t.fecha}</div>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-1" aria-label={`${t.rating} de 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className={`h-4 w-4 ${i < t.rating ? 'text-yellow-400' : 'text-slate-300'}`} />
                ))}
              </div>

              <p className="mt-3 text-slate-700">“{t.texto}”</p>
            </blockquote>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#contacto" className="inline-block style={{color: 'oklch(0.5 0.24 260.56)'}} font-medium hover:underline">Ver más testimonios</a>
        </div>
      </div>
    </section>
  )
}




