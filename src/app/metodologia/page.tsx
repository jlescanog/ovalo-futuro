import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metodología',
  description: 'Descubre el proceso pedagógico que diferencia a Ovalo Futuro: aprender haciendo, con autonomía guiada y proyectos reales.',
};

export default function MetodologiaPage() {
  return (
    <main className="flex-grow pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <span className="text-coral font-bold text-xs tracking-[0.2em] uppercase">Proceso Pedagógico</span>
          <h1 className="text-4xl md:text-6xl font-bold text-navy tracking-tighter mt-4 mb-8">METODOLOGÍA</h1>
          <p className="text-texto-muted text-xl leading-relaxed">
            Nuestro modelo no se basa en clases magistrales ni exámenes memorísticos. Diseccionamos cada competencia en ciclos de exploración, ejecución y retroalimentación.
          </p>
        </div>

        <div className="space-y-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-blanco p-12 border border-navy/5">
              <span className="text-dorado font-bold text-[10px] tracking-widest uppercase mb-4 block">FASE 01</span>
              <h2 className="text-2xl font-bold text-navy mb-6 tracking-tight">DIAGNÓSTICO Y MAPEO</h2>
              <p className="text-texto-muted text-sm leading-relaxed">
                Evaluamos el punto de partida de cada estudiante mediante desafíos prácticos. No importa tu nivel previo; importa tu disposición para resolver problemas reales.
              </p>
            </div>
            <div className="p-12">
              <h3 className="text-coral font-bold text-xs tracking-widest uppercase mb-4">PRINCIPIO</h3>
              <p className="text-navy font-bold text-lg italic">&quot;No enseñamos desde cero; conectamos con lo que ya sabes.&quot;</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 p-12">
              <h3 className="text-coral font-bold text-xs tracking-widest uppercase mb-4">PRINCIPIO</h3>
              <p className="text-navy font-bold text-lg italic">&quot;La complejidad se construye en iteraciones, no en saltos.&quot;</p>
            </div>
            <div className="order-1 md:order-2 bg-crema p-12 border-l-4 border-navy">
              <span className="text-dorado font-bold text-[10px] tracking-widest uppercase mb-4 block">FASE 02</span>
              <h2 className="text-2xl font-bold text-navy mb-6 tracking-tight">CICLOS DE EJECUCIÓN</h2>
              <p className="text-texto-muted text-sm leading-relaxed">
                Cada módulo se centra en un proyecto entregable. Aprendes mientras construyes, recibiendo retroalimentación técnica y estratégica en cada iteración.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-blanco p-12 border border-navy/5">
              <span className="text-dorado font-bold text-[10px] tracking-widest uppercase mb-4 block">FASE 03</span>
              <h2 className="text-2xl font-bold text-navy mb-6 tracking-tight">EVALUACIÓN POR PORTAFOLIO</h2>
              <p className="text-texto-muted text-sm leading-relaxed">
                Olvida los exámenes tradicionales. Tu progreso se mide por el conjunto de proyectos que documentas, defiendes y publicas.
              </p>
            </div>
            <div className="p-12">
              <h3 className="text-coral font-bold text-xs tracking-widest uppercase mb-4">PRINCIPIO</h3>
              <p className="text-navy font-bold text-lg italic">&quot;El aprendizaje se demuestra con obra, no con notas.&quot;</p>
            </div>
          </div>
        </div>

        <div className="mt-24 bg-navy-oscuro text-blanco p-12 md:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">DIFERENCIADORES CLAVE</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
              <div>
                <span className="text-dorado font-bold text-xs tracking-widest uppercase">01</span>
                <h3 className="font-bold mt-2 mb-2">Autonomía Guiada</h3>
                <p className="text-blanco/60 text-sm leading-relaxed">Tú decides el ritmo; nosotros garantizamos la estructura y los hitos.</p>
              </div>
              <div>
                <span className="text-dorado font-bold text-xs tracking-widest uppercase">02</span>
                <h3 className="font-bold mt-2 mb-2">Proyectos Reales</h3>
                <p className="text-blanco/60 text-sm leading-relaxed">Sin simulaciones. Trabajas con datos y contextos de la industria actual.</p>
              </div>
              <div>
                <span className="text-dorado font-bold text-xs tracking-widest uppercase">03</span>
                <h3 className="font-bold mt-2 mb-2">Comunidad Activa</h3>
                <p className="text-blanco/60 text-sm leading-relaxed">Peer-reviews, laboratorios grupales y canales de soporte permanentes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
