"use client";
import { deletePost } from "@/actions";

function DeleteButton({ id }) {
  return (
    <form action={() => deletePost(id)}>
      <button type="submit">
        <div class="bg-red-300 dark:bg-neutral-700 rounded-md w-20 h-8 p-1 animate-pulse">
          Delete
        </div>
      </button>
    </form>
  );
}

export default DeleteButton;
