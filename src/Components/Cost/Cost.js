import "../Css/Cost.css";

import CostItem from "./CostItem";
import Card from "./Card";
import CostFilter from "./CostFilter";
import React, { useState } from "react";

function Cost(props) {
  const [valueYear, setValueYear] = useState("2019");
  const takeValueYear = (value) => {
    setValueYear(value);
    console.log("Cost " + value);
  };
  return (
    <div>
      {/*  */}
      <CostFilter onChangeYear={takeValueYear} year={valueYear} />
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
    </div>
  );
}

export default Cost;
