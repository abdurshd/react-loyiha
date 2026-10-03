function Button({ tugmaNomi = "bosing", orqaRang }) {
  return (
    <>
      <button
        onClick={() => console.log("Qizil tugma bosildi")}
        style={{
          backgroundColor: `${orqaRang}`,
          color: "white",
          width: "200px",
        }}
      >
        {tugmaNomi}
      </button>
    </>
  );
}

export default Button;
