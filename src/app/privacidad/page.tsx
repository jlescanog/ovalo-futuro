import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacidad',
  description: 'Política de privacidad de Ovalo Futuro. Conoce cómo protegemos tu información personal.',
};

export default function PrivacidadPage() {
  return (
    <main className="flex-grow pt-40 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <span className="text-coral font-bold text-xs tracking-[0.2em] uppercase">Legal</span>
        <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tighter mt-4 mb-12">POLÍTICA DE PRIVACIDAD</h1>

        <div className="prose prose-sm max-w-none text-texto-muted leading-relaxed space-y-6">
          <p className="font-bold text-navy">Última actualización: Mayo 2026</p>

          <p>
            En Ovalo Futuro valoramos y respetamos tu privacidad. Esta política describe cómo recopilamos, usamos y protegemos tu información personal cuando interactúas con nuestra plataforma.
          </p>

          <h2 className="text-xl font-bold text-navy tracking-tight mt-8">1. INFORMACIÓN QUE RECOPILAMOS</h2>
          <p>
            Podemos recopilar datos personales que nos proporcionas directamente, como nombre, correo electrónico, número de teléfono y áreas de interés, al completar formularios de contacto, postulaciones o registros en nuestra plataforma.
          </p>

          <h2 className="text-xl font-bold text-navy tracking-tight mt-8">2. USO DE LA INFORMACIÓN</h2>
          <p>Utilizamos tu información para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Responder a tus consultas y solicitudes.</li>
            <li>Gestionar tu participación en cursos, mentorías y programas de becas.</li>
            <li>Enviarte comunicaciones relevantes sobre nuestros servicios.</li>
            <li>Mejorar la calidad de nuestra plataforma educativa.</li>
          </ul>

          <h2 className="text-xl font-bold text-navy tracking-tight mt-8">3. PROTECCIÓN DE DATOS</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra acceso no autorizado, alteración, divulgación o destrucción.
          </p>

          <h2 className="text-xl font-bold text-navy tracking-tight mt-8">4. COMPARTIR INFORMACIÓN</h2>
          <p>
            No vendemos ni alquilamos tu información personal a terceros. Solo compartimos datos cuando es necesario para prestar nuestros servicios o cuando la ley lo exige.
          </p>

          <h2 className="text-xl font-bold text-navy tracking-tight mt-8">5. TUS DERECHOS</h2>
          <p>
            Tienes derecho a acceder, rectificar o eliminar tus datos personales. Para ejercer estos derechos, contáctanos a través de los canales disponibles en nuestra página de contacto.
          </p>

          <h2 className="text-xl font-bold text-navy tracking-tight mt-8">6. CAMBIOS A ESTA POLÍTICA</h2>
          <p>
            Podemos actualizar esta política ocasionalmente. Te notificaremos sobre cambios significativos publicando la versión revisada en este sitio.
          </p>

          <p className="mt-8">
            Si tienes preguntas sobre esta política, no dudes en escribirnos a <span className="text-navy font-bold">hola@ovalofuturo.edu</span>.
          </p>
        </div>
      </div>
    </main>
  );
}
