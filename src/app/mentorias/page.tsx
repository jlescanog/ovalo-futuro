import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentorías',
  description: 'Acelera tu crecimiento profesional con mentorías 1-a-1 con expertos de la industria.',
};

export default function MentoriasPage() {
  return (
    <main className="flex-grow pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-24">
            <div>
              <span className="text-coral font-bold text-xs tracking-[0.2em] uppercase">Conexión Directa</span>
              <h1 className="text-4xl md:text-6xl font-bold text-navy tracking-tighter mt-4 mb-8">MENTORÍAS 1-A-1</h1>
              <p className="text-texto-muted text-lg mb-12 leading-relaxed">
                Acelera tu crecimiento profesional con el respaldo de expertos que ya recorrieron el camino. Sesiones enfocadas en resultados técnicos y estratégicos.
              </p>
              <div className="space-y-6">
                {['Revisión de Código', 'Simulación de Entrevistas', 'Diseño de Arquitectura', 'Planificación de Carrera'].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-navy font-bold text-sm tracking-tight">
                    <span className="w-2 h-2 bg-coral"></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-crema p-12 border border-navy/10">
              <h3 className="text-xl font-bold text-navy mb-6">SOLICITAR SESIÓN</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-texto-muted uppercase tracking-[0.2em] mb-2">Nombre completo</label>
                  <input type="text" className="w-full bg-blanco border border-navy/10 px-4 py-3 text-sm focus:outline-none focus:border-coral" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-texto-muted uppercase tracking-[0.2em] mb-2">Área de interés</label>
                  <select className="w-full bg-blanco border border-navy/10 px-4 py-3 text-sm focus:outline-none focus:border-coral">
                    <option>Frontend Development</option>
                    <option>Backend & Cloud</option>
                    <option>Data Engineering</option>
                    <option>Product Design</option>
                  </select>
                </div>
                <Link
                  href="/contacto"
                  className="block w-full bg-coral text-blanco py-4 font-bold text-sm tracking-widest hover:bg-navy transition-all text-center"
                >
                  ENVIAR SOLICITUD
                </Link>
              </form>
            </div>
          </div>
        </div>
      </main>
  );
}
