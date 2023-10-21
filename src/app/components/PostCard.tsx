import Link from 'next/link';
import Image from 'next/image';

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

const PostCard  = ({ post }: { post: Post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="border rounded-lg">
        <Image
          src={`/${post.data.image}`}
          width={1200}
          height={700}
          alt={post.data.title}
        />
      </div>
      <div className="px-2 py-4">
        <h1 className="font-bold text-lg">{post.data.title}</h1>
        <span>{post.data.date}</span>
      </div>
    </Link>
  );
};

export default PostCard;