function Button({ tugmaNomi = "bosing", orqaRang, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
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
