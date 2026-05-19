import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex-grow flex items-center justify-center pt-40 pb-24 px-6">
      <div className="text-center max-w-xl">
        <span className="text-coral font-bold text-xs tracking-[0.2em] uppercase">Error 404</span>
        <h1 className="text-5xl md:text-7xl font-bold text-navy tracking-tighter mt-4 mb-8">
          PÁGINA NO ENCONTRADA
        </h1>
        <p className="text-texto-muted leading-relaxed mb-12">
          La ruta que buscas no existe o ha sido movida. Revisa la dirección o regresa al inicio para continuar explorando.
        </p>
        <Link
          href="/"
          className="bg-coral hover:bg-coral-claro text-blanco px-10 py-4 font-bold transition-all text-sm tracking-widest inline-block"
        >
          VOLVER AL INICIO
        </Link>
      </div>
    </main>
  );
}
