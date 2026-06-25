import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const articles = (await getCollection('articles', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'Rick Ramirez — Writing',
    description:
      'Articles on OT/ICS security, RF and cyber-physical systems, risk methodology, and security-first AI.',
    site: context.site,
    items: articles.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.date,
      link: `/articles/${a.slug}/`,
      categories: a.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}
