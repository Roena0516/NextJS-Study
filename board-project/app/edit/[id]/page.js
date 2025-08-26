/* app/edit/[id]/page.js */

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  let client = await connectDB;
  const db = client.db("board");
  let result = await db
    .collection("post")
    .findOne({ _id: ObjectId(props.params.id) });

  return (
    <html>
      <body>
        <form action="/api/post/edit" method="POST">
          <input name="title" defaultValue={result.title} />
          <input name="content" defaultValue={result.content} />
          <input
            type="hidden"
            name="_id"
            defaultValue={result._id.toString()}
          />
        </form>
      </body>
    </html>
  );
}
