import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState(null);
  // const BACKEND_URL ="https://merncourtcontrolbackendprod-judd-gnizamas-projects.vercel.app";
  const BACKEND_URL = "http://localhost:5000";

  useEffect(() => {
    fetchMessage();
  }, []);

  const fetchMessage = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/test`);

      const data = await res.json();
      console.log(data.message);

      setMessage(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Hello World!</h1>
      <p>{message}</p>
      <button onClick={fetchMessage}>Fetch</button>
    </div>
  );
}

export default App;
