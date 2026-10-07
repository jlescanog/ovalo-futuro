import { getCollection } from 'astro:content';
export const site = {
  name: 'Óvalo Futuro',
  mentor: 'Hassan',
  email: 'hola@ovalofuturo.edu',
  phone: '51982355550',
  description:
    'Inglés, mentorías y asesoría educativa con Hassan. Una mirada entre culturas para abrir nuevas posibilidades de aprendizaje.',
};
export const whatsapp = (message = 'Hola Hassan, me gustaría conocer más sobre Óvalo Futuro.') =>
  `https://wa.me/${site.phone}?text=${encodeURIComponent(message)}`;
export const categories = {
  ingles: 'Inglés',
  educacion: 'Educación',
  ia: 'Inteligencia artificial',
};
export async function publishedPosts() {
  const now = new Date();
  return (await getCollection('posts', ({ data }) => !data.draft && data.publishedAt <= now)).sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
  );
}
export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
