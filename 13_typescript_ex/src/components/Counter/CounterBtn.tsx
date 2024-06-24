import { PropsWithChildren } from "react";

type CounterBtnProps = {
  onClick: () => void;
};

function CounterBtn({
  onClick: handleClick,
  children,
}: PropsWithChildren<CounterBtnProps>) {
  return <button onClick={handleClick}>{children}</button>;
}

export default CounterBtn;
