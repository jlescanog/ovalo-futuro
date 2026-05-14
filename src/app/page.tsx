import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* HERO SECTION */}
        <section className="bg-crema py-24 md:py-40 border-b border-navy/5">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-7xl font-bold text-navy tracking-tighter mb-8 leading-tight">
              EDUCACIÓN PARA EL <br />
              <span className="text-coral">FUTURO DIGITAL</span>
            </h1>
            <p className="text-texto-muted max-w-2xl mx-auto text-lg mb-12 font-medium">
              Ovalo Futuro ofrece un ecosistema de aprendizaje técnico y personalizado para desarrollar las habilidades que el mundo demanda hoy.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link 
                href="/cursos" 
                className="bg-coral hover:bg-coral-claro text-blanco px-10 py-4 font-bold transition-all text-sm tracking-widest"
              >
                EXPLORAR CURSOS
              </Link>
              <Link 
                href="/mentorias" 
                className="border-2 border-navy text-navy hover:bg-navy hover:text-blanco px-10 py-4 font-bold transition-all text-sm tracking-widest"
              >
                SOLICITAR MENTORÍA
              </Link>
            </div>
          </div>
        </section>

        {/* CURSOS SECTION */}
        <section className="bg-blanco py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div>
                <span className="text-coral font-bold text-xs tracking-[0.2em] uppercase">Programas base</span>
                <h2 className="text-3xl md:text-5xl font-bold text-navy tracking-tighter mt-2">NUESTROS CURSOS</h2>
              </div>
              <Link href="/cursos" className="text-navy font-bold text-xs tracking-widest border-b-2 border-dorado pb-1 hover:text-coral transition-colors">
                VER TODOS LOS CURSOS
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Desarrollo Fullstack', category: 'TECNOLOGÍA', desc: 'Domina las herramientas modernas de desarrollo web.' },
                { title: 'Diseño de Sistemas', category: 'ARQUITECTURA', desc: 'Aprende a escalar aplicaciones de alto impacto.' },
                { title: 'Inteligencia Artificial', category: 'DATA', desc: 'Implementación práctica de modelos generativos.' },
              ].map((item, i) => (
                <div key={i} className="group bg-crema p-10 border border-navy/5 hover:border-coral/20 transition-all">
                  <span className="text-texto-muted text-[10px] font-bold tracking-[0.3em] uppercase">{item.category}</span>
                  <h3 className="text-xl font-bold text-navy mt-4 mb-6 tracking-tight group-hover:text-coral transition-colors">{item.title}</h3>
                  <p className="text-texto-muted text-sm leading-relaxed mb-8">{item.desc}</p>
                  <Link href={`/cursos/${i}`} className="text-navy font-bold text-xs tracking-widest group-hover:translate-x-2 transition-transform inline-block">
                    MÁS INFORMACIÓN &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MENTORIAS SECTION */}
        <section className="bg-crema py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-blanco p-2 md:p-12 border-l-4 border-coral">
                <blockquote className="text-2xl font-bold text-navy tracking-tight leading-relaxed italic">
                  &quot;La mentoría 1-a-1 aceleró mi carrera técnica en 6 meses más que 4 años de universidad.&quot;
                </blockquote>
                <p className="mt-8 text-texto-muted font-bold text-xs tracking-widest uppercase">— ESTUDIANTE OVALO 2025</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-coral font-bold text-xs tracking-[0.2em] uppercase">Acompañamiento</span>
              <h2 className="text-3xl md:text-5xl font-bold text-navy tracking-tighter mt-2 mb-8">MENTORÍAS PERSONALIZADAS</h2>
              <p className="text-texto-muted mb-8 leading-relaxed">
                Conectamos a estudiantes con profesionales de la industria para resolver problemas reales y definir rutas de carrera efectivas.
              </p>
              <Link 
                href="/mentorias" 
                className="bg-navy text-blanco px-8 py-3 text-sm font-bold tracking-widest hover:bg-coral transition-all inline-block"
              >
                RESERVAR SESIÓN
              </Link>
            </div>
          </div>
        </section>

        {/* BECAS SECTION */}
        <section className="bg-blanco py-24">
          <div className="max-w-7xl mx-auto px-6 text-center border-2 border-dorado p-16">
            <span className="bg-dorado text-navy font-bold text-[10px] px-3 py-1 tracking-[0.2em] uppercase">Oportunidad</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy tracking-tighter mt-6 mb-8">PROGRAMA DE BECAS 2026</h2>
            <p className="text-texto-muted max-w-xl mx-auto mb-12">
              Creemos en el talento, no en las barreras financieras. Aplicaciones abiertas para el semestre de otoño.
            </p>
            <Link 
              href="/becas" 
              className="bg-coral hover:bg-coral-claro text-blanco px-12 py-4 font-bold transition-all text-sm tracking-widest"
            >
              POSTULAR AHORA
            </Link>
          </div>
        </section>

        {/* ESCUELA ALTERNATIVA SECTION */}
        <section className="bg-crema py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-coral font-bold text-xs tracking-[0.2em] uppercase">Modalidad flexible</span>
              <h2 className="text-3xl md:text-5xl font-bold text-navy tracking-tighter mt-2">ESCUELA A DISTANCIA</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="bg-blanco p-8 border border-navy/5">
                <h3 className="font-bold text-navy text-lg mb-4">Aprendizaje Asíncrono</h3>
                <p className="text-texto-muted text-sm">Contenido grabado de alta calidad disponible 24/7 para que estudies a tu propio ritmo.</p>
              </div>
              <div className="bg-blanco p-8 border border-navy/5">
                <h3 className="font-bold text-navy text-lg mb-4">Sesiones en Vivo</h3>
                <p className="text-texto-muted text-sm">Talleres semanales de resolución de dudas con expertos en tiempo real.</p>
              </div>
            </div>
            <div className="text-center mt-16">
               <Link href="/escuela-alternativa" className="text-navy font-bold text-xs tracking-widest border-b-2 border-navy pb-1 hover:text-coral hover:border-coral transition-all">
                CONOCER LA METODOLOGÍA
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
