import { useEffect, useState } from "react";

import Counter from "../components/Counter";
import logo from "../assets/logo.svg";

export default function Home() {
  const [unicorns, setUnicorns] = useState([]);
  const [unicornName, setUnicornName] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/unicorns")
      .then((response) => response.json())
      .then((data) => setUnicorns(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/unicorns", {
      headers: {
        "content-type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        name: unicornName,
      }),
    }).then((response) => {
      if (response.status === 201) {
        alert("yihou");
        setUnicorns([...unicorns, { name: unicornName }]);
      } else {
        alert("raté");
      }
    });

    setUnicornName("");
  };

  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React !</p>

        <Counter />

        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={unicornName}
          onChange={(event) => setUnicornName(event.target.value)}
        />
        <button type="submit">Go</button>
      </form>
      <ul>
        {unicorns.map((unicorn) => (
          <li key={unicorn.id}>{unicorn.name}</li>
        ))}
      </ul>
    </>
  );
}
