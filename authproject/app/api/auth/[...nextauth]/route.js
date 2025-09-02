/* app/api/auth/[...nextauth]/route.js */
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"; //1-1
import { connectDB } from "@/app/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
//주요기능
//깃헙 로그인기능 만들기 (OAuth 로그인)

export const authOptions = {
  providers: [
    // //1-2. 깃헙 로그인 기능 설정
    GithubProvider({
      clientId: "Ov23lisNUJHnRj14GdYC",
      clientSecret: "7413a36946dd41abaf8a2f6232fe238601d68030",
    }),
  ],
  secret: "jwt생성시쓰는암호", //1-3
  adapter: MongoDBAdapter(connectDB),
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
