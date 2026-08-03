import getRssResponse from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return getRssResponse({
    title: 'Cô Thi Lập Trình',
    description:
      'Bài viết về học lập trình, luyện thi và kinh nghiệm giảng dạy từ Cô Thi.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/blog/${post.id}`,
      pubDate: post.data.date,
      categories: post.data.tags,
      enclosure: post.data.cover
        ? {
            url: new URL(post.data.cover, context.site!).href,
            length: 0,
            type: 'image/png',
          }
        : undefined,
    })),
    customData: '<language>vi</language>',
  });
}
