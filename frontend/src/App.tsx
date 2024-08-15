import { useEffect, useState } from "react";
import { useDBContext } from "./main";

function App() {
  const [message, setMessage] = useState("");
  const { backendURL } = useDBContext();

  useEffect(() => {
    fetchMessage();
  }, []);

  const fetchMessage = async () => {
    try {
      const res = await fetch(`${backendURL}/api/test`);
      const data = await res.json();
      setMessage(data.message);
      console.log("fetched data");
    } catch (error) {
      console.error(error);
    }
  };

  const echoMessage = async () => {
    try {
      const res = await fetch("/api/echo", {
        method: "post",
        body: message,
      });
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <p>This is from Backend: {message}</p>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={echoMessage}>Echo</button>
    </div>
  );
}

export default App;
