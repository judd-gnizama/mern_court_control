import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchMessage();
  }, []);

  const fetchMessage = async () => {
    try {
      const res = await fetch(`/api/test`);
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
      <h1>Welcome! This is from Backend</h1>
      <p>{message}</p>
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
