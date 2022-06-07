import {Home} from './Home';
export default Home;

import { getAllFiles } from "../../lib/mdx";
export async function getStaticProps() {
  const allPosts = await getAllFiles();
  const maxPosts = 3;
  const posts = allPosts.slice(0, maxPosts);
  return {
    props: {
      posts,
    },
  };
}