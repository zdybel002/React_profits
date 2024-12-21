import React, { useState } from "react";

import Card from "./Card";
import CostFilter from "../NewCost/CostFilter";
import CostList from "./CostList";
import CostDiagram from "./CostDiagram";

import "../Css/Cost.css";

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
        <CostDiagram costs={filteredCosts}></CostDiagram>
        <CostList costs={filteredCosts}></CostList>
      </Card>
    </div>
  );
}

export default Cost;
