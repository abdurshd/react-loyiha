import spinnerLoad from "/spinner.svg";

function ResultPanel({ status, items }) {
  if (status === "idle" && items.lenght === 0)
    return <p>Qidirishni boshlang</p>;
  if (status === "loading") return <img src={spinnerLoad} width={85} />;
  if (status === "error")
    return (
      <span style={{ backgroundColor: "#ffdfdd", color: "#ff0000" }}>
        Yuklashda xatolik yuz berdi
      </span>
    );
  if (status === "empty") return <p>Siz qidirgan meva topilmadi</p>;
  return (
    <ul>
      {items.map((meva) => (
        <li key={meva}>{meva}</li>
      ))}
    </ul>
  );
}

export default ResultPanel;
