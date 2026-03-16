import { useSelector } from "react-redux";
import { selectCounter } from "../store/counterSlice";

function CounterMessage() {
  const count = useSelector(selectCounter);

  let message = "Counter is at zero.";

  if (count > 5) {
    message = "Counter is getting high!";
  } else if (count > 0) {
    message = "Counter is increasing.";
  } else if (count < 0) {
    message = "Counter is decreasing.";
  }

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default CounterMessage;