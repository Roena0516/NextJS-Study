//app/lib/queries/postQueries.js
export const postListKey = ["posts"]; //1-4. 쿼리 키 정의

export async function fetchPostList() {
  const res = await fetch("/api/list", { cache: "no-store" });

  if (!res.ok) throw new Error("Failed to fetch post list");
  return res.json();
}
