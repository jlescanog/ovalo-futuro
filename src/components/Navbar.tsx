import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-crema/80 backdrop-blur-md border-b border-navy/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-navy font-bold text-xl tracking-tighter">
          OVALO FUTURO
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/cursos" className="text-texto-muted hover:text-navy transition-colors text-sm font-medium">
            CURSOS
          </Link>
          <Link href="/mentorias" className="text-texto-muted hover:text-navy transition-colors text-sm font-medium">
            MENTORIAS
          </Link>
          <Link href="/becas" className="text-texto-muted hover:text-navy transition-colors text-sm font-medium">
            BECAS
          </Link>
          <Link href="/escuela-alternativa" className="text-texto-muted hover:text-navy transition-colors text-sm font-medium">
            ESCUELA ALTERNATIVA
          </Link>
        </div>
        <Link 
          href="/contacto" 
          className="bg-coral hover:bg-coral-claro text-blanco px-5 py-2 text-sm font-bold transition-all"
        >
          CONTACTO
        </Link>
      </div>
    </nav>
  );
}
