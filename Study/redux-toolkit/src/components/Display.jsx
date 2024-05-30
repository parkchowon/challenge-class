import { useSelector } from "react-redux";

function Display() {
  const count = useSelector((state) => state.countReducer.count);
  return <div>{count}</div>;
}

export default Display;
