import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ovalofuturo.edu';

  const staticRoutes = [
    '',
    '/cursos',
    '/mentorias',
    '/becas',
    '/escuela-alternativa',
    '/contacto',
    '/nosotros',
    '/metodologia',
    '/privacidad',
  ];

  const dynamicRoutes = [
    '/cursos/ingles',
    '/cursos/ia-docentes',
    '/cursos/ia-alumnos',
  ];

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : route.startsWith('/cursos/') ? 0.8 : 0.7,
  }));
}
