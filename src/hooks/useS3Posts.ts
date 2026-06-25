import { useState, useEffect } from 'react';

export function useS3Posts() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dmf25vwa4wepi.cloudfront.net/index.json')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load posts from S3", err);
        setLoading(false);
      });
  }, []);

  const getPostsByAuthor = (authorSlug: string) => {
    return posts.filter(p => p.author?.slug?.toLowerCase() === authorSlug.toLowerCase() || p.author?.name?.toLowerCase().replace(/\s+/g, '-') === authorSlug.toLowerCase());
  };

  const getPostsByTag = (tag: string) => {
    return posts.filter(p => p.tags && p.tags.some((t: string) => t.toLowerCase() === tag.toLowerCase()));
  };

  const getAllAuthors = () => {
    const authorsMap = new Map();
    posts.forEach(p => {
      if (p.author && p.author.name) {
        const slug = p.author.slug || p.author.name.toLowerCase().replace(/\s+/g, '-');
        if (!authorsMap.has(slug)) {
          authorsMap.set(slug, {
            name: p.author.name,
            slug: slug,
            image: p.author.image,
            count: 1
          });
        } else {
          authorsMap.get(slug).count++;
        }
      }
    });
    return Array.from(authorsMap.values());
  };

  const getAllTags = () => {
    const tagsMap = new Map();
    posts.forEach(p => {
      if (p.tags) {
        p.tags.forEach((tag: string) => {
          if (!tagsMap.has(tag)) {
            tagsMap.set(tag, { tag, count: 1 });
          } else {
            tagsMap.get(tag).count++;
          }
        });
      }
    });
    return Array.from(tagsMap.values());
  };

  return { posts, loading, getPostsByAuthor, getPostsByTag, getAllAuthors, getAllTags };
}
