/* /app/list/page.js  */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ListPage() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    await fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
    //posts변경
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    //delete api실행
    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    fetchPosts();
  };

  return (
    <main>
      <h1>게시물 목록</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
            <div>{post.content}</div>
            <button className="button" onClick={() => handleDelete(post.id)}>
              삭제
            </button>
            <span className="button">
              <Link href={`/post/${post.id}/edit`}>수정</Link>
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
