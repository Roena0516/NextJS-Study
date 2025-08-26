/* app/detaillink/page.js */
"use client";
import { useRouter } from "next/navigation";

export default function DetailLink() {
  let router = useRouter();
  return (
    <html>
      <body>
        <button onClick={() => router.push("/")}>홈으로</button>
        <button onClick={() => router.back()}>뒤로가기</button>
        <button onClick={() => router.push("/list")}>리스트로</button>
      </body>
    </html>
  );
}
