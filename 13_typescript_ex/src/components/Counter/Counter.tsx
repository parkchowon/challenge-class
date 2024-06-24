import { useState } from "react";
import CounterBtn from "./CounterBtn";
import CounterDisplay from "./CounterDisplay";

function Counter() {
  const [count, setCount] = useState<number>(0);
  const [unit, setUnit] = useState<number>(1);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const handleChangeUnit: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUnit(Number(e.target.value));
  };

  return (
    <div>
      <CounterDisplay value={count} />
      <input
        value={unit}
        onChange={handleChangeUnit}
        type="number"
        placeholder="이곳에 숫자를 입력하세요"
      />
      <div className="flex">
        <CounterBtn onClick={decrement}>[-]</CounterBtn>
        <CounterBtn onClick={increment}>[+]</CounterBtn>
      </div>
    </div>
  );
}

export default Counter;
