import Button from "./Button";

function App() {
  let name = "Sardor";

  let xushxabar = `Tabriklayman, saytimizga xush kelibsiz ${name}`;
  const submitQildi = (e) => {
    e.preventDefault();
    console.log("topshirildi");
  };

  return (
    <>
      <h1>{xushxabar}</h1>
      <form onSubmit={submitQildi}>
        <input type="Matn" />
        <Button tugmaNomi={"Gazni bosing"} orqaRang={"red"} />
      </form>
    </>
  );
}

export default App;
