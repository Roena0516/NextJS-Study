import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  let client = await connectDB;
  const db = client.db("board");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <html>
      <body>
        <div className="list-bg">
          <div className="list-item" key={props.params.id}>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
          </div>
        </div>
      </body>
    </html>
  );
}
