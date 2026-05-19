"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Opcional: reportar error a servicio de logging
    console.error(error);
  }, [error]);

  return (
    <main className="flex-grow flex items-center justify-center pt-40 pb-24 px-6">
      <div className="text-center max-w-xl">
        <span className="text-coral font-bold text-xs tracking-[0.2em] uppercase">Error Inesperado</span>
        <h1 className="text-5xl md:text-7xl font-bold text-navy tracking-tighter mt-4 mb-8">
          ALGO SALIÓ MAL
        </h1>
        <p className="text-texto-muted leading-relaxed mb-12">
          Ha ocurrido un error inesperado. Intenta recargar la página o vuelve al inicio.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={() => reset()}
            className="bg-coral hover:bg-coral-claro text-blanco px-10 py-4 font-bold transition-all text-sm tracking-widest"
          >
            INTENTAR DE NUEVO
          </button>
        </div>
      </div>
    </main>
  );
}
