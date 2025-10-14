/* app/LoginBtn.js */
"use client";
export default function ResisterBtn() {
  return (
    <button onClick={() => (window.location.href = "/register")}>
      회원가입
    </button>
  );
}
