import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-oscuro text-blanco py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold tracking-tighter mb-6">OVALO FUTURO</h2>
          <p className="text-coral-claro/80 max-w-sm text-sm leading-relaxed">
            Redefiniendo la educación a través de la tecnología, mentoría personalizada y acceso equitativo para las futuras generaciones.
          </p>
        </div>
        <div>
          <h3 className="text-dorado font-bold text-xs tracking-widest uppercase mb-6">PROGRAMAS</h3>
          <ul className="space-y-4 text-sm text-blanco/60">
            <li><Link href="/cursos" className="hover:text-coral transition-colors">Cursos Técnicos</Link></li>
            <li><Link href="/mentorias" className="hover:text-coral transition-colors">Mentorías 1-a-1</Link></li>
            <li><Link href="/becas" className="hover:text-coral transition-colors">Programa de Becas</Link></li>
            <li><Link href="/escuela-alternativa" className="hover:text-coral transition-colors">Escuela a Distancia</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-dorado font-bold text-xs tracking-widest uppercase mb-6">INSTITUCIÓN</h3>
          <ul className="space-y-4 text-sm text-blanco/60">
            <li><Link href="/nosotros" className="hover:text-coral transition-colors">Sobre Nosotros</Link></li>
            <li><Link href="/metodologia" className="hover:text-coral transition-colors">Metodología</Link></li>
            <li><Link href="/contacto" className="hover:text-coral transition-colors">Contacto</Link></li>
            <li><Link href="/privacidad" className="hover:text-coral transition-colors">Privacidad</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-blanco/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blanco/40 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} OVALO FUTURO. TODOS LOS DERECHOS RESERVADOS.</p>
        <div className="flex gap-8">
          <span>INSTAGRAM</span>
          <span>LINKEDIN</span>
          <span>X</span>
        </div>
      </div>
    </footer>
  );
}
