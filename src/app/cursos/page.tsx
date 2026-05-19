import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cursos',
  description: 'Oferta académica de Ovalo Futuro: Inglés, IA para Docentes e IA para Alumnos.',
};

export default function CursosPage() {
  return (
    <main className="flex-grow pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-coral font-bold text-xs tracking-[0.2em] uppercase">Oferta Académica</span>
          <h1 className="text-4xl md:text-6xl font-bold text-navy tracking-tighter mt-4 mb-16">CURSOS TÉCNICOS</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { slug: 'ingles', title: 'Inglés', duration: '16 Semanas', level: 'Todos los niveles', desc: 'Inglés técnico y conversacional orientado al mundo digital y entornos profesionales internacionales.' },
              { slug: 'ia-docentes', title: 'IA para Docentes', duration: '10 Semanas', level: 'Intermedio', desc: 'Capacitación práctica en IA generativa para transformar la práctica docente y personalizar el aprendizaje.' },
              { slug: 'ia-alumnos', title: 'IA para Alumnos', duration: '12 Semanas', level: 'Principiante', desc: 'Introducción accesible a la inteligencia artificial para estudiantes de todas las edades.' },
            ].map((curso) => (
              <div key={curso.slug} className="bg-blanco p-12 border border-navy/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="bg-coral-xs text-coral text-[10px] px-3 py-1 font-bold uppercase tracking-widest">{curso.level}</span>
                    <span className="text-texto-muted text-[10px] font-bold uppercase tracking-widest">{curso.duration}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-navy mb-4 tracking-tight">{curso.title}</h2>
                  <p className="text-texto-muted text-sm leading-relaxed mb-12">
                    {curso.desc}
                  </p>
                </div>
                <Link
                  href={`/cursos/${curso.slug}`}
                  className="block w-full py-4 border-2 border-navy text-navy font-bold text-xs tracking-widest hover:bg-navy hover:text-blanco transition-all text-center"
                >
                  VER TEMARIO COMPLETO
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
  );
}
