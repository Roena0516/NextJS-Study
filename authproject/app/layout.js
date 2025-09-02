/* app/layout.jsx */

import { getServerSession } from "next-auth";
import LoginBtn from "./loginBtn.js"; //1. import
import LogoutBtn from "./logoutBtn.js";
import Link from "next/link.js";
import { authOptions } from "./api/auth/[...nextauth]/route.js";

export const metadata = {
  title: "Create Next App",
  description: "asdf",
};

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions); //1-1
  if (session) {
    console.log(JSON.stringify(session));
    console.log("세션출력" + session); //1-3. 세션출력해보기(문자열 변환)
  }
  return (
    <html>
      <body>
        <div className="navbar">
          <Link href="/" className="logo">
            BSSM board
          </Link>
          <Link href="/list">글목록</Link>
          {session ? <LogoutBtn /> : <LoginBtn />}
          {session ? session.user.name : ""}
          <img src={session ? session.user.image : ""}></img>
        </div>
        {children}
      </body>
    </html>
  );
}
