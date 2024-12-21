import "./DiagramBar.css";
const DiagramBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="diagram_bar">
      <div className="diagram_bar__inner">
        <div
          className="diagram_bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="diagram_bar_label">{props.label}</div>
    </div>
  );
};

export default DiagramBar;
