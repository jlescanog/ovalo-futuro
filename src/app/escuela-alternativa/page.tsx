import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function EscuelaAlternativaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-coral font-bold text-xs tracking-[0.2em] uppercase">Modelo Pedagógico</span>
            <h1 className="text-4xl md:text-6xl font-bold text-navy tracking-tighter mt-4 mb-8">ESCUELA ALTERNATIVA</h1>
            <p className="text-texto-muted text-xl mb-16 leading-relaxed">
              Un modelo educativo a distancia que prioriza la autonomía, el pensamiento crítico y la ejecución de proyectos reales sobre la memorización teórica.
            </p>
          </div>
          
          <div className="space-y-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-crema p-12 border-l-4 border-navy">
                <h2 className="text-2xl font-bold text-navy mb-6 tracking-tight">AUTONOMÍA GUIADA</h2>
                <p className="text-texto-muted text-sm leading-relaxed mb-6">
                  No más horarios rígidos. Proveemos la estructura y los recursos, tú decides cuándo y dónde profundizar, con hitos de progreso claros.
                </p>
              </div>
              <div className="p-12">
                <h3 className="text-dorado font-bold text-xs tracking-widest uppercase mb-4">MÉTODO</h3>
                <p className="text-navy font-bold text-lg italic">&quot;Aprender haciendo, fallar rápido, iterar constantemente.&quot;</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 p-12">
                <h3 className="text-dorado font-bold text-xs tracking-widest uppercase mb-4">COMUNIDAD</h3>
                <p className="text-navy font-bold text-lg italic">&quot;El conocimiento es colectivo; la ejecución es individual.&quot;</p>
              </div>
              <div className="order-1 md:order-2 bg-blanco p-12 border border-navy/10">
                <h2 className="text-2xl font-bold text-navy mb-6 tracking-tight">APRENDIZAJE COLABORATIVO</h2>
                <p className="text-texto-muted text-sm leading-relaxed">
                  Aunque es a distancia, nunca estás solo. Canales de Discord dedicados, peer-reviews y laboratorios grupales semanales mantienen el ritmo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
