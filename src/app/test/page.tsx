import prisma from "../lib/prisma";

const Page = async () => {
  const posts = await prisma.user.findMany();

  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">ユーザ一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.username},{post.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;