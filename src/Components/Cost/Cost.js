import "../Css/Cost.css";

import CostItem from "./CostItem";
import Card from "./Card";
import CostFilter from "../NewCost/CostFilter";
import React, { useState } from "react";

function Cost(props) {
  const [selectedYear, setSelectedYear] = useState("2019");

  // const filtredCost = objectValue.filter(
  //   (item) => item.data.getFullYear() === "2022"
  // );

  const takeValueYear = (value) => {
    setSelectedYear(value);
    console.log("Cost " + value);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.data.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostFilter onChangeYear={takeValueYear} year={selectedYear} />

        {filteredCosts.map((cost, index) => (
          <CostItem
            data={cost.data}
            description={cost.description}
            amount={cost.amount}
            key={index}
          ></CostItem>
        ))}
      </Card>
    </div>
  );
}

export default Cost;
