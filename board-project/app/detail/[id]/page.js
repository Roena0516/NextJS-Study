import { connectDB } from "@/util/database";

export default async function Detail(props) {
  let client = await connectDB;
  const db = client.db("board");
  let result = await db.collection("post").find().toArray();
  const detail = result.find((item) => item.postId === props.params.id);

  return (
    <html>
      <body>
        <div className="list-bg">
          <div className="list-item" key={props.params.id}>
            <h4>{detail.title}</h4>
            <p>{detail.content}</p>
          </div>
        </div>
      </body>
    </html>
  );
}
