import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CursosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-coral font-bold text-xs tracking-[0.2em] uppercase">Oferta Académica</span>
          <h1 className="text-4xl md:text-6xl font-bold text-navy tracking-tighter mt-4 mb-16">CURSOS TÉCNICOS</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'Desarrollo Web Moderno', duration: '12 Semanas', level: 'Principiante' },
              { title: 'Arquitectura Cloud', duration: '16 Semanas', level: 'Avanzado' },
              { title: 'UX/UI Engineering', duration: '10 Semanas', level: 'Intermedio' },
              { title: 'Data Science & ML', duration: '20 Semanas', level: 'Avanzado' },
            ].map((curso, i) => (
              <div key={i} className="bg-blanco p-12 border border-navy/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="bg-coral-xs text-coral text-[10px] px-3 py-1 font-bold uppercase tracking-widest">{curso.level}</span>
                    <span className="text-texto-muted text-[10px] font-bold uppercase tracking-widest">{curso.duration}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-navy mb-4 tracking-tight">{curso.title}</h2>
                  <p className="text-texto-muted text-sm leading-relaxed mb-12">
                    Un programa intensivo diseñado para llevarte de los conceptos básicos a la implementación profesional en entornos de producción.
                  </p>
                </div>
                <button className="w-full py-4 border-2 border-navy text-navy font-bold text-xs tracking-widest hover:bg-navy hover:text-blanco transition-all">
                  VER TEMARIO COMPLETO
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
