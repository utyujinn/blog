import Link from 'next/link';
import PostCard from './PostCard';

type Post = {
  slug: string,
  data: {
    title: string,
    author: string,
    date: string,
    image: string,
  },
  content: string,
};

const ArticleList = async () => {
  const response = await fetch('http://localhost:3000/api/getprops');
  if (!response.ok) throw new Error('Failed to fetch data');
  const posts: Post[] = await response.json();

  return (
    <div className="my-8">
      <div className="grid grid-cols-3 gap-4">
      {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
      ))}
      </div>
    </div>
  );
};

export default ArticleList;