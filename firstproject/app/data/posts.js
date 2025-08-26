/* </app/data/post.js> */
let posts = [
  { id: 1, title: "첫 번째 글", content: "이것은 첫 번째 게시글입니다." },
  { id: 2, title: "두 번째 글", content: "이것은 두 번째 게시글입니다." },
  { id: 3, title: "세 번째 글", content: "이것은 세 번째 게시글입니다." },
];

export function getPosts() {
  return posts;
}

export function getPost(id) {
  const filtered = posts.find((post) => {
    post.id === id;
  });
  return filtered;
}

export function addPost(title, content) {
  //삽입
  const post = { id: posts[-1].id + 1, title: title, content: content };
  posts.push(post);
}

export function updatePost(id, title, content) {
  const idx = posts.findIndex((p) => p.id === Number(id));
  if (idx === -1) return null;
  //update
  posts[idx] = { ...posts[idx], title: title, content: content };
  return posts[idx];
}

export function deletePost(id) {
  const idx = posts.findIndex((p) => p.id === Number(id));
  if (idx === -1) return false;
  //slice로 삭제처리
  posts.slice(idx, 1);
  return true;
}
