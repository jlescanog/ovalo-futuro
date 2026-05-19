import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Comunícate con Ovalo Futuro. Resolvemos tus dudas sobre cursos, mentorías y programas de becas.',
};

export default function ContactoPage() {
  return (
    <main className="flex-grow pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start mb-24">
          <div>
            <span className="text-coral font-bold text-xs tracking-[0.2em] uppercase">Comunícate</span>
            <h1 className="text-4xl md:text-6xl font-bold text-navy tracking-tighter mt-4 mb-8">CONTACTO</h1>
            <p className="text-texto-muted text-lg mb-12 leading-relaxed">
              Estamos aquí para resolver tus dudas. Completa el formulario y nuestro equipo te responderá en menos de 24 horas.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="w-2 h-2 bg-coral mt-2 shrink-0"></span>
                <div>
                  <p className="text-navy font-bold text-sm tracking-tight">CORREO ELECTRÓNICO</p>
                  <p className="text-texto-muted text-sm">hola@ovalofuturo.edu</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-2 h-2 bg-coral mt-2 shrink-0"></span>
                <div>
                  <p className="text-navy font-bold text-sm tracking-tight">TELÉFONO</p>
                  <p className="text-texto-muted text-sm">+51 982 355 550</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-2 h-2 bg-coral mt-2 shrink-0"></span>
                <div>
                  <p className="text-navy font-bold text-sm tracking-tight">HORARIO DE ATENCIÓN</p>
                  <p className="text-texto-muted text-sm">Lunes a Viernes, 9:00 - 18:00 PET</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-crema p-12 border border-navy/10">
            <h3 className="text-xl font-bold text-navy mb-6">ENVIAR MENSAJE</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold text-texto-muted uppercase tracking-[0.2em] mb-2">Nombre completo</label>
                <input type="text" className="w-full bg-blanco border border-navy/10 px-4 py-3 text-sm focus:outline-none focus:border-coral" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-texto-muted uppercase tracking-[0.2em] mb-2">Correo electrónico</label>
                <input type="email" className="w-full bg-blanco border border-navy/10 px-4 py-3 text-sm focus:outline-none focus:border-coral" placeholder="email@ejemplo.com" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-texto-muted uppercase tracking-[0.2em] mb-2">Asunto</label>
                <select className="w-full bg-blanco border border-navy/10 px-4 py-3 text-sm focus:outline-none focus:border-coral">
                  <option>Información de cursos</option>
                  <option>Mentorías</option>
                  <option>Programa de becas</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-texto-muted uppercase tracking-[0.2em] mb-2">Mensaje</label>
                <textarea rows={4} className="w-full bg-blanco border border-navy/10 px-4 py-3 text-sm focus:outline-none focus:border-coral resize-none" placeholder="Escribe tu mensaje aquí..."></textarea>
              </div>
              <button type="submit" className="w-full bg-coral text-blanco py-4 font-bold text-sm tracking-widest hover:bg-navy transition-all">
                ENVIAR MENSAJE
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
