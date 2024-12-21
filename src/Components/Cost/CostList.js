import CostItem from "./CostItem";

import "./CostList.css";

const CostList = (props) => {
  if (props.costs.length === 0) {
    return (
      <h2 className="cost-list__fallback">W tym roku nie było wydatków</h2>
    );
  }

  return (
    <ul className="cost-list">
      {props.costs.map((cost, index) => (
        <CostItem
          data={cost.data}
          description={cost.description}
          amount={cost.amount}
          key={index}
        ></CostItem>
      ))}
      ;
    </ul>
  );
};

export default CostList;
