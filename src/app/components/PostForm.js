import { createPost } from "@/actions";

function PostForm() {
  return (
    <form action={createPost} className="flex flex-col gap-3 my-10 text-black">
      <input
        name="title"
        className="ring-[2px]"
        placeholder="Post Title"
        required
      />
      <textarea
        name="description"
        className="ring-[2px]"
        placeholder="Post Description"
        required
      />
      <button type="submit" className="text-white bg-red-900 px-4 py-2 rounded">
        Add a Post
      </button>
    </form>
  );
}

export default PostForm;
