import { useState } from "react";

function App() {
  let [count, setCount] = useState("");

  let xushxabar = `Salom, xush kelibsiz ${count}`;
  const yozildi = (e) => {
    setCount(e.target.value);
    console.log("bosildi", e);
  };

  return (
    <>
      <h1>{xushxabar}</h1>
      <input type="text" onChange={yozildi} />
      <br />
      <h2>{count}</h2>
    </>
  );
}

export default App;
