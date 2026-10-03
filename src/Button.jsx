function Button({ tugmaNomi = "bosing", orqaRang }) {
  return (
    <>
      <button
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
