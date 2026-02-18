import Link from "next/link";
import { format, parseISO } from "date-fns";

interface Post {
  _id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime?: string;
  tags: string[];
  excerpt?: string;
  image?: string;
}

interface PostListProps {
  posts: Post[];
  viewMode?: "list" | "cards";
  columns?: 2 | 3; // Number of columns for card view (default: 3)
  showExcerpts?: boolean; // Show excerpts in card view (default: true)
}

// Group posts by year
function groupByYear(posts: Post[]): Record<string, Post[]> {
  return posts.reduce(
    (acc, post) => {
      const year = post.date.substring(0, 4);
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(post);
      return acc;
    },
    {} as Record<string, Post[]>
  );
}

export default function PostList({
  posts,
  viewMode = "cards",
  columns = 3,
  showExcerpts: _showExcerpts = true,
}: PostListProps) {
  // Sort posts by date descending
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Card view: render all posts in a grid
  if (viewMode === "cards") {
    // Apply column class for 2 or 3 columns
    const cardGridClass =
      columns === 2 ? "post-cards post-cards-2col" : "post-cards";
    return (
      <div className={cardGridClass}>
        {sortedPosts.map((post) => (
          <Link key={post._id || post.slug} href={`/blog/${post.slug}`} className="post-card">
            <div className="post-card-content">
              {/* Date at top */}
              <time className="post-card-date" dateTime={post.date} itemProp="datePublished">
                {format(parseISO(post.date), "MMM d, yyyy").toUpperCase()}
              </time>
              <meta itemProp="dateModified" content={post.date} />

              {/* Title below date */}
              <h3 className="post-card-title">{post.title}</h3>

              {/* Description/excerpt below title */}
              {(post.excerpt || post.description) && (
                <p className="post-card-excerpt">
                  {post.excerpt || post.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    );
  }

  // List view: group by year
  const groupedPosts = groupByYear(sortedPosts);
  const years = Object.keys(groupedPosts).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="post-list">
      {years.map((year) => (
        <div key={year} className="post-year-group">
          <h2 className="year-heading">{year}</h2>
          <ul className="posts">
            {groupedPosts[year].map((post) => (
              <li key={post._id || post.slug} className="post-item">
                <Link href={`/blog/${post.slug}`} className="post-link">
                  <span className="post-title">{post.title}</span>
                  <span className="post-meta">
                    {/* {post.readTime && (
                      <span className="post-read-time">{post.readTime}</span>
                    )} */}
                    <time className="post-date" dateTime={post.date} itemProp="datePublished">
                      {format(parseISO(post.date), "MMMM d")}
                    </time>
                    <meta itemProp="dateModified" content={post.date} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

