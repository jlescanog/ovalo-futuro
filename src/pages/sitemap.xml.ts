import type { APIRoute } from 'astro';
import { publishedPosts } from '../lib/site';
export const GET: APIRoute = async ({ site }) => {
  if (!site)
    return new Response('Configura PUBLIC_SITE_URL para generar el sitemap.', { status: 404 });
  const routes = [
    '/',
    '/cursos',
    '/cursos/ingles',
    '/cursos/ia-docentes',
    '/cursos/ia-alumnos',
    '/nosotros',
    '/mentorias',
    '/metodologia',
    '/becas',
    '/escuela-alternativa',
    '/contacto',
    '/privacidad',
    '/blog',
    ...(await publishedPosts()).map((post) => `/blog/${post.id}`),
  ];
  const escape = (value: string) =>
    value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((route) => `<url><loc>${escape(new URL(route, site).href)}</loc></url>`).join('')}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
