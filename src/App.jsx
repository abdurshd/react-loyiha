import Button from "./Button";

function App() {
  let name = "Sardor";

  let xushxabar = `Tabriklayman, saytimizga xush kelibsiz ${name}`;

  return (
    <>
      <h1>{xushxabar}</h1>
      <Button tugmaNomi={"Gazni bosing"} orqaRang={"red"} />
    </>
  );
}

export default App;
