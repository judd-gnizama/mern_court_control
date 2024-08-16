import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetchMessage();
  }, []);

  const fetchMessage = async () => {
    try {
      const res = await fetch(`/api/test`);

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
