import { collection, config, fields } from '@keystatic/core';
const repo = import.meta.env.PUBLIC_KEYSTATIC_REPO as string | undefined;
export default config({
  storage: repo ? { kind: 'github', repo: repo as `${string}/${string}` } : { kind: 'local' },
  ui: { brand: { name: 'Óvalo Futuro · Hassan' } },
  collections: {
    posts: collection({
      label: 'Artículos y recursos',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título', validation: { isRequired: true } } }),
        description: fields.text({
          label: 'Resumen',
          multiline: true,
          validation: { isRequired: true, length: { max: 220 } },
        }),
        category: fields.select({
          label: 'Categoría',
          options: [
            { label: 'Inglés', value: 'ingles' },
            { label: 'Educación', value: 'educacion' },
            { label: 'Inteligencia artificial', value: 'ia' },
          ],
          defaultValue: 'educacion',
        }),
        publishedAt: fields.date({
          label: 'Fecha de publicación',
          validation: { isRequired: true },
        }),
        draft: fields.checkbox({ label: 'Guardar como borrador', defaultValue: true }),
        cover: fields.image({
          label: 'Imagen de portada (opcional)',
          directory: 'public/images/posts',
          publicPath: '/images/posts/',
        }),
        coverAlt: fields.text({ label: 'Descripción de la imagen para accesibilidad' }),
        content: fields.markdoc({
          label: 'Contenido',
          options: { image: { directory: 'public/images/posts', publicPath: '/images/posts/' } },
        }),
      },
    }),
  },
});
