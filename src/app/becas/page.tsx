import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BecasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-coral font-bold text-xs tracking-[0.2em] uppercase">Impacto Social</span>
            <h1 className="text-4xl md:text-6xl font-bold text-navy tracking-tighter mt-4 mb-8">PROGRAMA DE BECAS</h1>
            <p className="text-texto-muted max-w-2xl mx-auto leading-relaxed">
              Nuestro compromiso es eliminar las barreras económicas para el acceso a la educación técnica de calidad. Ofrecemos becas totales y parciales basadas en mérito y necesidad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { type: 'BECA TOTAL', coverage: '100%', detail: 'Para estudiantes de alto potencial con recursos limitados.' },
              { type: 'BECA MÉRITO', coverage: '50%', detail: 'Reconocimiento a la excelencia técnica y proyectos destacados.' },
              { type: 'BECA INCLUSIÓN', coverage: '75%', detail: 'Fomentando la diversidad de género y minorías en tecnología.' },
            ].map((beca, i) => (
              <div key={i} className="border-2 border-navy p-10 text-center">
                <span className="text-dorado font-bold text-[10px] tracking-widest uppercase">{beca.type}</span>
                <div className="text-5xl font-bold text-navy my-8 tracking-tighter">{beca.coverage}</div>
                <p className="text-texto-muted text-sm mb-12 min-h-[4rem]">{beca.detail}</p>
                <button className="text-navy font-bold text-xs tracking-widest border-b-2 border-coral pb-1 hover:text-coral transition-all">
                  REQUISITOS DE POSTULACIÓN
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
