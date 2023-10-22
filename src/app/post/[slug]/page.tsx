import fs from 'fs';
import matter from 'gray-matter';
import {marked} from 'marked';
import Image from 'next/image';

const Page = ({ params }: { params: { slug: string } }) => {
  const file = fs.readFileSync(`src/app/posts/${params.slug}.md`, 'utf-8');
  const {data,content} = matter(file);
  return (
    <div className="prose prose-lg max-w-none">
      <div className="border">
        <Image
          src={`/${data.image}`}
          width={1200}
          height={700}
          alt={data.title}
        />
      </div>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </div>
  );
};

export default Page;