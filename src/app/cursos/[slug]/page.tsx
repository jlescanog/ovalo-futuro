import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface CursoParams {
  params: Promise<{ slug: string }>;
}

const cursosData: Record<string, {
  title: string;
  category: string;
  duration: string;
  level: string;
  description: string;
  modules: string[];
  outcomes: string[];
}> = {
  'ingles': {
    title: 'Inglés',
    category: 'IDIOMAS',
    duration: '16 Semanas',
    level: 'Todos los niveles',
    description: 'Programa intensivo de inglés técnico y conversacional orientado al mundo digital. Diseñado para profesionales que necesitan comunicarse efectivamente en entornos internacionales.',
    modules: [
      'Fundamentos de comunicación profesional',
      'Vocabulario técnico especializado',
      'Comprensión oral y presentaciones',
      'Escritura académica y de negocios',
    ],
    outcomes: [
      'Participar en reuniones técnicas en inglés',
      'Redactar documentación técnica clara',
      'Comprender conferencias y podcasts especializados',
      'Presentar proyectos con fluidez profesional',
    ],
  },
  'ia-docentes': {
    title: 'IA para Docentes',
    category: 'EDTECH',
    duration: '10 Semanas',
    level: 'Intermedio',
    description: 'Capacitación práctica en herramientas de inteligencia artificial para transformar la práctica docente. Aprende a diseñar contenido adaptativo, automatizar evaluaciones y potenciar la personalización del aprendizaje.',
    modules: [
      'Fundamentos de IA generativa en educación',
      'Diseño de prompts pedagógicos efectivos',
      'Herramientas de creación de contenido adaptativo',
      'Ética y sesgos en el uso de IA educativa',
    ],
    outcomes: [
      'Diseñar lecciones personalizadas con IA',
      'Automatizar la retroalimentación formativa',
      'Identificar y mitigar sesgos algorítmicos',
      'Integrar herramientas de IA en el aula híbrida',
    ],
  },
  'ia-alumnos': {
    title: 'IA para Alumnos',
    category: 'TECNOLOGÍA',
    duration: '12 Semanas',
    level: 'Principiante',
    description: 'Introducción práctica a la inteligencia artificial para estudiantes de todas las edades. Desarrolla pensamiento computacional mientras experimentas con modelos de lenguaje, visión por computadora y creatividad asistida por IA.',
    modules: [
      '¿Qué es la inteligencia artificial?',
      'Experimentos con modelos de lenguaje',
      'Visión por computadora y reconocimiento de imágenes',
      'Proyecto final: solución asistida por IA',
    ],
    outcomes: [
      'Comprender los fundamentos de la IA sin programar',
      'Usar herramientas de IA de forma ética y crítica',
      'Desarrollar proyectos creativos con asistencia tecnológica',
      'Preparar una base sólida para estudios técnicos avanzados',
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(cursosData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CursoParams): Promise<Metadata> {
  const { slug } = await params;
  const curso = cursosData[slug];

  if (!curso) {
    return {
      title: 'Curso no encontrado',
    };
  }

  return {
    title: curso.title,
    description: curso.description,
  };
}

export default async function CursoDetailPage({ params }: CursoParams) {
  const { slug } = await params;
  const curso = cursosData[slug];

  if (!curso) {
    notFound();
  }

  return (
    <main className="flex-grow pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <Link
            href="/cursos"
            className="text-texto-muted hover:text-coral transition-colors text-sm font-bold tracking-widest inline-flex items-center gap-2 mb-8"
          >
            <span>&larr;</span> TODOS LOS CURSOS
          </Link>
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="bg-coral-xs text-coral text-[10px] px-3 py-1 font-bold uppercase tracking-widest">{curso.category}</span>
            <span className="text-texto-muted text-[10px] font-bold uppercase tracking-widest">{curso.duration}</span>
            <span className="text-texto-muted text-[10px] font-bold uppercase tracking-widest">{curso.level}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-navy tracking-tighter">{curso.title}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-navy mb-6 tracking-tight">DESCRIPCIÓN DEL PROGRAMA</h2>
            <p className="text-texto-muted leading-relaxed mb-12">{curso.description}</p>

            <h2 className="text-2xl font-bold text-navy mb-6 tracking-tight">MÓDULOS</h2>
            <div className="space-y-4">
              {curso.modules.map((module, i) => (
                <div key={i} className="flex items-start gap-4 bg-crema p-6 border border-navy/5">
                  <span className="text-dorado font-bold text-xs tracking-widest shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-navy font-bold text-sm tracking-tight">{module}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blanco p-10 border border-navy/5 h-fit">
            <h3 className="text-xl font-bold text-navy mb-6">LO QUE APRENDERÁS</h3>
            <ul className="space-y-4">
              {curso.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3 text-texto-muted text-sm">
                  <span className="w-2 h-2 bg-coral mt-1.5 shrink-0"></span>
                  {outcome}
                </li>
              ))}
            </ul>
            <Link
              href="/contacto"
              className="block w-full mt-10 bg-coral text-blanco py-4 font-bold text-sm tracking-widest hover:bg-navy transition-all text-center"
            >
              INSCRIBIRME AHORA
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
