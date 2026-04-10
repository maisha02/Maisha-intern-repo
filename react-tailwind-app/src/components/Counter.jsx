import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCounter } from "../store/counterSlice";

function Counter() {
  const count = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Counter</h2>

      <p>Count: {count}</p>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;