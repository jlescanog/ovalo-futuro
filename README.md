# Óvalo Futuro · por Hassan

Landing editorial en Astro con programas, mentorías, asesoría para colegios y un journal editable con Keystatic. Identidad verde bosque y papel claro; fuentes locales DM Sans e Instrument Serif. Animaciones de entrada, detalles al pasar el cursor y transiciones entre páginas, con respeto por movimiento reducido.

## Desarrollo

Requiere Node >= 22.12 y pnpm 11.

```sh
pnpm install
pnpm dev
```

Web: http://127.0.0.1:4321. Editor: http://127.0.0.1:4321/keystatic. En desarrollo, sin repositorio configurado, el editor guarda archivos locales.

```sh
pnpm check
pnpm build
pnpm build:static
```

## Publicar artículos

1. Entrar en `/keystatic` y abrir **Artículos y recursos**.
2. Crear un artículo con título, resumen, categoría, fecha y contenido.
3. Subir una portada opcional y escribir una descripción accesible de la imagen.
4. Mantener **Guardar como borrador** activado mientras se prepara el contenido.
5. Desactivar el borrador para publicar y guardar.

Los artículos se guardan en `src/content/posts/*.mdoc`; las imágenes en `public/images/posts`. Se ocultan borradores y artículos con fecha futura tanto en listados como en rutas públicas. La web pública es prerenderizada: un guardado en la rama de producción dispara un nuevo despliegue mediante la integración de GitHub del alojamiento. Una fecha futura requiere un nuevo build al llegar esa fecha; no existe un cron automático. Los guardados en otras ramas requieren merge para aparecer en producción.

Se incluyen tres artículos de ejemplo redactados para demostrar el journal, firmados como equipo editorial. Revisarlos con Hassan antes de publicar el sitio; se pueden editar, borrar o guardar como borrador desde Keystatic.

## Despliegue recomendado: Vercel + GitHub

El sitio selecciona automáticamente el adaptador Vercel cuando `VERCEL=1`. Conectar el repositorio en Vercel, elegir Astro, comando `pnpm build` y Node 24. Configurar `PUBLIC_SITE_URL` con el dominio definitivo.

Para que Hassan edite desde el navegador:

1. Establecer `PUBLIC_KEYSTATIC_REPO=propietario/repositorio` en `.env` local y en Vercel.
2. Iniciar el proyecto local y abrir `/keystatic` para crear/conectar una GitHub App siguiendo el asistente.
3. Copiar al alojamiento las variables generadas: `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET` y `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`.
4. Configurar en la GitHub App la URL de callback del dominio publicado: `https://tu-dominio/api/keystatic/github/oauth/callback`.
5. Dar a Hassan acceso de escritura al repositorio y acceso a la GitHub App.
6. Desplegar y comprobar inicio de sesión, carga de imagen, guardado de artículo y reconstrucción del sitio.

Sin repositorio configurado, el build de producción omite el panel y sus API. Nunca se publica el editor local sin autenticación. Los secretos son exclusivamente del servidor; no ponerlos en variables con prefijo `PUBLIC_`.

Documentación: [Astro + Keystatic](https://keystatic.com/docs/installation-astro), [modo GitHub](https://keystatic.com/docs/github-mode), [adaptador Vercel](https://docs.astro.build/en/guides/integrations-guide/vercel/).

## Hostinger

Para alojamiento de archivos estáticos: `pnpm build:static` y subir el contenido de `dist/` al directorio público. Incluye landing, páginas y artículos, pero no el panel Keystatic. Para editar remotamente, alojar el editor por separado con Node y conectar GitHub a un proceso de reconstrucción y subida, o usar Vercel para todo el sitio.

Si el plan contratado soporta un proceso Node persistente, el adaptador predeterminado genera `dist/server/entry.mjs`. En el despliegue conectado a GitHub, después del merge:

1. Verificar que Hostinger utiliza este repositorio y la rama `main`.
2. Seleccionar Node 24, directorio raíz del proyecto y gestor pnpm.
3. Configurar la compilación con `pnpm build` y el arranque con `pnpm start`.
4. Configurar `DEPLOY_TARGET=node`, `HOST=0.0.0.0`, el `PORT` asignado por el alojamiento y `PUBLIC_SITE_URL` con el dominio real.
5. Si se habilita el editor, agregar también las variables y la GitHub App indicadas arriba.
6. Guardar la configuración y ejecutar **Redeploy**. Revisar los registros y comprobar la página publicada.

El redeploy toma los cambios del repositorio si el despliegue está conectado a GitHub. Un despliegue creado con ZIP requiere subir un archivo actualizado. Confirmar la capacidad Node del plan antes de elegir esta opción.

Documentación: [Astro en Hostinger](https://docs.astro.build/en/guides/deploy/hostinger/), [redeploy en Hostinger](https://www.hostinger.com/support/how-to-redeploy-a-node-js-application/).

### Si el despliegue falla antes de compilar

El registro debe mostrar `Application type: Astro`; si todavía muestra `Next.js`, cambiar el preset en Hostinger y guardar antes del redeploy.

`packageManager` recomienda pnpm 11.19.0. Hostinger puede instalar con esa versión e invocar otra versión de pnpm 11 mediante Corepack al ejecutar la compilación. `pmOnFail: warn` en `pnpm-workspace.yaml` permite continuar con la versión del alojamiento y muestra una advertencia. El lockfile y las comprobaciones de dependencias se mantienen. Documentación: [configuración de pnpm](https://pnpm.io/settings#pmonfail).

## Contenido y contacto

- `src/pages/index.astro`: composición y textos de la landing.
- `src/lib/site.ts`: marca, correo y WhatsApp tomados del proyecto original. Confirmar esos datos con Hassan antes de publicar.
- `src/lib/courses.ts`: temarios y duraciones conservados del sitio anterior.
- `src/lib/pages.ts`: contenido de páginas informativas.
- `src/styles/global.css`: sistema visual y adaptaciones móviles.
- `keystatic.config.ts`: campos del editor.

El formulario prepara un mensaje de WhatsApp; no simula envío ni almacena consultas. No hay analítica ni fuentes remotas. La política informativa describe ese funcionamiento; revisar con el responsable del sitio antes de publicación.

Fotografía ilustrativa de estudiantes: [Unsplash](https://unsplash.com/photos/9a054b0db644), servida localmente como `public/images/learning.jpg`. No representa a Hassan. Las ilustraciones culturales y de programas son SVG/CSS propios. Sustituir o complementar con fotos reales de Hassan cuando estén disponibles.

Los archivos anteriores de Next.js se eliminan tras migrar las rutas. El historial Git conserva la versión original. No se ha publicado ni conectado ninguna cuenta externa automáticamente.
La integración React requiere oxc 0.145; se fija @vitejs/plugin-react 6.1.0 mediante pnpm overrides porque 6.1.2 cambia ese peer a 0.152. Revisar el pin cuando @astrojs/react actualice su requisito.
