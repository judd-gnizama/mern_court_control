import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState(null);
  const BACKEND_URL = "";
  // const BACKEND_URL = "http://localhost:5000"

  useEffect(() => {
    fetchMessage();
  }, []);

  const fetchMessage = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/test`);

      const data = await res.json();

      setMessage(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Hello World!</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
