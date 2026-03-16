import { useCallback, useState, memo } from "react";

const ChildButton = memo(function ChildButton({ onClick }) {
  console.log("Child re-rendered");

  return (
    <div>
      <button onClick={onClick}>Child Button</button>
    </div>
  );
});

function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(false);

  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div>
      <h2>useCallback Demo</h2>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <button onClick={() => setTheme(!theme)}>
        Toggle Theme
      </button>

      <p>Theme: {theme ? "Dark" : "Light"}</p>

      <ChildButton onClick={handleClick} />
    </div>
  );
}

export default UseCallbackDemo;