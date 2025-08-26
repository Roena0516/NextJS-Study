/* app/list/page.js */
import { connectDB } from "@/util/database";
import Link from "next/link";
import ListItem from "./ListItem";

export default async function List() {
  //board DB연결후 post 테이블조회하여 result에 저장
  let client = await connectDB;
  const db = client.db("board");
  let result = await db.collection("post").find().toArray();

  return (
    <html>
      <body>
        <div className="list-bg">
          {result.map((a, i) => (
            <div className="list-item" key={i}>
              <Link href={"/detail/" + a._id}>
                <h4>{a.title}</h4>
              </Link>
              <p>{a.content}</p>
              <ListItem />
            </div>
          ))}
        </div>
      </body>
    </html>
  );
}
