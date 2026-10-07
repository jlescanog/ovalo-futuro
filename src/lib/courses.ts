export const courses = {
  ingles: {
    title: 'Inglés',
    category: 'IDIOMAS',
    duration: '16 Semanas',
    level: 'Todos los niveles',
    description:
      'Programa intensivo de inglés técnico y conversacional orientado al mundo digital. Diseñado para profesionales que necesitan comunicarse efectivamente en entornos internacionales.',
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
    description:
      'Capacitación práctica en herramientas de inteligencia artificial para transformar la práctica docente. Aprende a diseñar contenido adaptativo, automatizar evaluaciones y potenciar la personalización del aprendizaje.',
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
    description:
      'Introducción práctica a la inteligencia artificial para estudiantes de todas las edades. Desarrolla pensamiento computacional mientras experimentas con modelos de lenguaje, visión por computadora y creatividad asistida por IA.',
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
} as const;
