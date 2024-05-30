import { useAuth } from "../contexts/auth.context";

function Button() {
  const { logIn, logOut } = useAuth();

  return (
    <>
      <button onClick={logIn}>로그인하기</button>
      <button onClick={logOut}>로그아웃하기</button>
    </>
  );
}

export default Button;
