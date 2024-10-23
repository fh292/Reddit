import { fetchPosts } from "@/actions";
import PostCard from "../components/PostCard";
async function posts() {
  const posts = await fetchPosts();
  return (
    <div className="flex flex-wrap flex-row gap-2 p-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default posts;
