import "../Css/CostData.css";
function CostData(props) {
  const month = props.data.toLocaleString("pl-PL", { month: "long" });
  const year = props.data.getFullYear(); // Poprawiono nazwę metody
  const day = props.data.toLocaleString("pl-PL", { day: "2-digit" });
  return (
    <div className="cost_date">
      <div className="cost_date__month">{month}</div>
      <div className="cost_date__year">{year}</div>
      <div className="cost_date__day">{day}</div>
    </div>
  );
}

export default CostData;
