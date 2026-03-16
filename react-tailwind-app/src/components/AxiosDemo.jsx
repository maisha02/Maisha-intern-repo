import { useState } from "react";
import axiosInstance from "../api/axiosInstance";

function AxiosDemo() {
  const [response, setResponse] = useState(null);

  const sendRequest = async () => {
    const controller = new AbortController();

    try {
      const res = await axiosInstance.post(
        "/posts",
        {
          title: "Test Post",
          body: "Axios request example",
          userId: 1,
        },
        {
          signal: controller.signal,
        }
      );

      setResponse(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <div>
      <h2>Axios API Demo</h2>

      <button onClick={sendRequest}>
        Send API Request
      </button>

      {response && (
        <p>Response ID: {response.id}</p>
      )}
    </div>
  );
}

export default AxiosDemo;