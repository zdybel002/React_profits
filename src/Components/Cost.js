import "../Css/Cost.css";

import CostItem from "./CostItem";
import Card from "./Card";

function Cost(props) {
  return (
    <Card className="costs">
      <CostItem
        data={props.costs[0].data}
        description={props.costs[0].description}
        amount={props.costs[0].amount}
      ></CostItem>
      <CostItem
        data={props.costs[1].data}
        description={props.costs[1].description}
        amount={props.costs[1].amount}
      ></CostItem>
      <CostItem
        data={props.costs[2].data}
        description={props.costs[2].description}
        amount={props.costs[2].amount}
      ></CostItem>
    </Card>
  );
}

export default Cost;
