import React from "react";

import NewCost from "./Components/NewCost/NewCost";
import Cost from "./Components/Cost";

import "./App.css";

function App() {
  const costs = [
    {
      data: new Date(2021, 2, 24),
      description: "Lodówka",
      amount: 2999,
    },
    {
      data: new Date(2006, 8, 11),
      description: "MacBook",
      amount: 4330,
    },
    {
      data: new Date(2010, 10, 4),
      description: "Spodnie",
      amount: 100,
    },
  ];

  // return React.createElement(
  //   "div",
  //   { className: "container" },
  //   React.createElement("h1", {}, "zacznijmy nauczkę"),
  //   React.createElement(Cost, { costs: costs })
  // );

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log("App Component");
  };

  return (
    <div className="container">
      <h1>Zaczniemy naukę</h1>
      <NewCost onAddCost={addCostHandler}></NewCost>
      <Cost costs={costs}></Cost>
    </div>
  );
}

export default App;
