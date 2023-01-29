import React from "react";
import { loadPosts } from "../api/data";

export default function Test({ posts }) {
  useEffect(() => {
    console.log(posts);
  }, []);

  return <div>Test</div>;
}

export async function getStaticProps() {
    // Instead of fetching your `/api` route you can call the same
    // function directly in `getStaticProps`
    const posts = await loadPosts()
  
    // Props returned will be passed to the page component
    return { props: { posts } }
  }
