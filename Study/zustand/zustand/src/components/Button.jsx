import { useShallow } from "zustand/react/shallow";
import useLoginStore from "../zustand/login.store";

function Button() {
  const { logIn, logOut } = useLoginStore(
    useShallow((state) => ({
      logIn: state.logIn,
      logOut: state.logOut,
    }))
  );

  return (
    <>
      <button onClick={logIn}>로그인하기</button>
      <button onClick={logOut}>로그아웃하기</button>
    </>
  );
}

export default Button;
