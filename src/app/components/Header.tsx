import Link from 'next/link';

const header = () => {
  return (
    <header className="sticky top-0 border-b z-10 bg-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center h-12">
        <Link href="/about">
          LOGO
        </Link>
        <div>Link</div>
      </div>
    </header>
  );
};

export default header;