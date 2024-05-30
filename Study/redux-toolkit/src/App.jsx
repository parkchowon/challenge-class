import { useDispatch } from "react-redux";
import "./App.css";
import Buttom from "./components/Buttom";
import Display from "./components/Display";
import { decrement, increment } from "./redux/slices/counter.slice";

function App() {
  const dispatch = useDispatch();

  const decrementFive = () => {
    dispatch(decrement(5));
  };

  const incrementFive = () => {
    dispatch(increment(5));
  };
  return (
    <>
      <main>
        <Display />
        <Buttom label="빼기 5" onClick={decrementFive} />{" "}
        <Buttom label="더하기 5" onClick={incrementFive} />
      </main>
    </>
  );
}

export default App;
