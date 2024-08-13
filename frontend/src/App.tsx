import { useEffect, useState } from "react";

const BACKEND = "https://mern-court-control.onrender.com";

function App() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetchMessage();
  }, []);

  const fetchMessage = async () => {
    try {
      const res = await fetch(`${BACKEND}/api/test`);

      const data = await res.json();

      setMessage(data.message);
      console.log("fetched data");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Welcome! This is from Backend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
