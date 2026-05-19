import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conoce la historia, misión y equipo detrás de Ovalo Futuro.',
};

export default function NosotrosPage() {
  return (
    <main className="flex-grow pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <span className="text-coral font-bold text-xs tracking-[0.2em] uppercase">Quiénes Somos</span>
          <h1 className="text-4xl md:text-6xl font-bold text-navy tracking-tighter mt-4 mb-8">SOBRE OVALO FUTURO</h1>
          <p className="text-texto-muted text-xl leading-relaxed">
            Nacimos con la convicción de que la educación del futuro no se parece a la del pasado. Combinamos tecnología, mentoría humana y acceso equitativo para formar las próximas generaciones de profesionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-blanco p-12 border border-navy/5">
            <h2 className="text-2xl font-bold text-navy mb-6 tracking-tight">MISIÓN</h2>
            <p className="text-texto-muted text-sm leading-relaxed">
              Democratizar el acceso a la educación técnica de alta calidad mediante modelos híbridos que combinan autonomía, comunidad y acompañamiento experto.
            </p>
          </div>
          <div className="bg-blanco p-12 border border-navy/5">
            <h2 className="text-2xl font-bold text-navy mb-6 tracking-tight">VISIÓN</h2>
            <p className="text-texto-muted text-sm leading-relaxed">
              Ser la plataforma educativa de referencia en Latinoamérica para el aprendizaje de habilidades digitales, formando profesionales autónomos y críticos.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <span className="text-coral font-bold text-xs tracking-[0.2em] uppercase">Equipo</span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy tracking-tighter mt-2 mb-16">NUESTRO EQUIPO</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Ana Lucero', role: 'Directora Académica', bio: '10+ años diseñando programas de aprendizaje en instituciones de tecnología.' },
            { name: 'Diego Ramírez', role: 'Líder de Tecnología', bio: 'Ingeniero de software con experiencia en startups EdTech de escala internacional.' },
            { name: 'Valeria Soto', role: 'Coordinadora de Becas', bio: 'Especialista en políticas de inclusión educativa y desarrollo comunitario.' },
          ].map((member) => (
            <div key={member.name} className="bg-crema p-10 border border-navy/5">
              <div className="w-16 h-16 bg-navy/10 rounded-full mb-6 flex items-center justify-center">
                <span className="text-navy font-bold text-xl">{member.name.charAt(0)}</span>
              </div>
              <h3 className="text-lg font-bold text-navy tracking-tight">{member.name}</h3>
              <p className="text-coral text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-texto-muted text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
