// app/api/auth/signup/route.js)
import { connectDB } from "@/app/util/database";
import bcrypt from "bcrypt"; //2-1. bcrypt 모듈 임포트(npm install bcrypt)

// POST 요청 처리
export async function POST(request) {
  //0-0. register.js에서 회원가입 정보 전송시 확인용
  const formData = await request.formData();
  const body = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log("받은 데이터 ", body);

  //1-1. 요청이 POST일 때 insert

  //2-2. 비밀번호 해싱
  let hash = await bcrypt.hash(body.password, 10);
  console.log("hasing:", hash); //2-4. 해싱된 비밀번호 확인용
  body.password = hash;

  //2-3. 해싱된 비밀번호로 요청

  //1-2.board DB접속
  let db = (await connectDB).db("board");
  //'user_cred'테이블에insert
  await db.collection("user_cred").insertOne(body);
  console.log("register is good");

  // body에는 클라이언트에서 보낸 회원가입 정보가 담겨있습니다.
  // 예: { username: "user1", password: "pass123" }

  //과제0. try-catch문으로 에러발생시 '회원가입 실패' json값으로 리턴
  //과제1. 아틀라스 DB에 user_cred 컬렉션에 회원 정보 확인하기
  //과제2. user id 빈칸인 경우체크하고 이메일 중복시 확인하기

  return new Response(JSON.stringify("회원가입 성공"), { status: 200 });
}
