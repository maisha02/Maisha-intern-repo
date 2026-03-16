import { useEffect, useState } from "react";

function UseEffectDemo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const result = await response.json();
    setData(result);
  };

  return (
    <div>
      <h2>useEffect Demo</h2>

      <button onClick={fetchData}>Fetch Data</button>

      {data && (
        <p>
          {data.id} - {data.title}
        </p>
      )}
    </div>
  );
}

export default UseEffectDemo;