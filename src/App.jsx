import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [visitors, setVisitors] = useState(null);

  //API Endpoint
  const API_URL = import.meta.env.VITE_APP_API_URL;
  // console.log("API URL:", API_URL);

  function handleData(val = null) {
    const data = val?.value ?? 0;
    // console.log("DB Data", val.value);
    setVisitors(data);
  }

  useEffect(() => {
    if (!API_URL) {
      console.error("API_URL is missing");
      return;
    }

    // Example: calling your API (replace with your real endpoint)
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => handleData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <main>
        <div className="title">
          <h1>Website Visitor Count</h1>
        </div>

        <div>
          <span className="visitor"> Total Visitors: </span>
          {visitors !== null ? (
            <strong>{visitors}</strong>
          ) : (
            <span>Loading...</span>
          )}
        </div>

        <div className="detail">
          This shows the Total Number of Users visits after creating this
          website.
        </div>
      </main>

      <footer className="footer">
        <p className="footer-text">
          Made with 💖 by
          <strong className="footer-author">Yokesh B</strong>
        </p>
      </footer>
    </>
  );
};

export default App;
