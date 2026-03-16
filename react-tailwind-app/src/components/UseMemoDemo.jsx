import { useMemo, useState } from "react";

function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const numbers = Array.from({ length: 1000 }, (_, i) => i + 1);

  const total = useMemo(() => {
    console.log("Expensive calculation running...");
    return numbers.reduce((sum, num) => sum + num, 0);
  }, [numbers]);

  return (
    <div>
      <h2>useMemo Demo</h2>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>

      <p>Theme: {dark ? "Dark" : "Light"}</p>
      <p>Sum of numbers: {total}</p>
    </div>
  );
}

export default UseMemoDemo;