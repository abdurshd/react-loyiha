import { useState } from "react";
import ResultPanel from "./ResultPanel.jsx";

function App() {
  const [qidiruvSoz, setQidiruvSoz] = useState([]);
  const [status, setStatus] = useState("idle");

  const mevalar = ["olma", "behi", "olcha", "banan"];

  let xushxabar = `Salom, xush kelibsiz`;

  const qidirildi = (e) => {
    const qiymat = e.target.value;
    setStatus("loading");
    setQidiruvSoz([]);

    setTimeout(() => {
      if (!qiymat.trim()) {
        setQidiruvSoz([]);
        setStatus("idle");
      } else if (qiymat === "xato") {
        setStatus("error");
      } else {
        const topildi = mevalar.filter((m) => {
          return m.toLowerCase().includes(qiymat.toLowerCase());
        });
        setQidiruvSoz(topildi);
        if (topildi.length === 0) {
          setStatus("empty");
        } else {
          setStatus("idle");
        }
      }
    }, 1000);
  };

  return (
    <>
      <h1>{xushxabar}</h1>
      <input type="text" onChange={qidirildi} />
      <br />
      <ResultPanel status={status} items={qidiruvSoz} />
    </>
  );
}

export default App;
