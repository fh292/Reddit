"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const baseUrl = `https://api-creddit.eapi.joincoded.com`;
const headers = new Headers();
headers.append("Content-Type", "application/json");

export async function createPost(formData) {
  const post = Object.fromEntries(formData);
  console.log(post);

  const response = await fetch(`${baseUrl}/posts`, {
    method: "POST",
    headers,
    body: JSON.stringify(post),
  });

  const newPost = await response.json();
  redirect(`/`);
}

export async function fetchPosts() {
  let posts;
  try {
    const response = await fetch(`${baseUrl}/posts`);
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Error");
  }
  return posts;
}
export async function fetchPostById(id) {
  let post;

  try {
    const response = await fetch(`${baseUrl}/posts/${id}`);

    post = await response.json();
  } catch (error) {
    console.error("Post not found");
    redirect("/posts");
  }

  return post;
}

export async function deletePost(id) {
  const response = await fetch(`${baseUrl}/posts/${id}`, { method: "DELETE" });
  const res = await response.json();
  revalidatePath("/posts");
  redirect("/posts");
}
