//app/api/posts/route.js
import { getPosts, addPost } from "@/data/posts";

export async function GET() {
  const posts = getPosts();
  return posts;
}

export async function POST(request) {
  const { title, content } = await request.json();
  const post = addPost(title, content);
  return new Response(JSON.stringify(post), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
