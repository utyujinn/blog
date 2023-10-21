import fs from 'fs';

const Getpages = () => {
  const posts = fs.readdirSync('posts');
  console.log('files:',posts);
  return {
    props: {
      posts: [],
    },
  };
};

export default Getpages;