import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data asynchronously
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      <h1>Data Fetcher</h1>
      {/* Display JSON inside <pre> */}
      <pre>{data ? JSON.stringify(data, null, 2) : "Loading..."}</pre>
    </div>
  );
};

export default App;
