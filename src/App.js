import React, { useState } from "react";

import NewCost from "./Components/NewCost/NewCost";
import Cost from "./Components/Cost/Cost";

import "./App.css";

const initinal_costs = [
  {
    data: new Date(2021, 2, 24),
    description: "Lodówka",
    amount: 2999,
  },
  {
    data: new Date(2021, 6, 12),
    description: "miod",
    amount: 50,
  },
  {
    data: new Date(2019, 8, 11),
    description: "MacBook",
    amount: 4330,
  },
  {
    data: new Date(2019, 10, 19),
    description: "apple phone",
    amount: 3330,
  },
  {
    data: new Date(2022, 10, 4),
    description: "Spodnie",
    amount: 100,
  },
  {
    data: new Date(2022, 10, 12),
    description: "Sweter",
    amount: 120,
  },
];

function App() {
  const [costs, setCost] = useState(initinal_costs);

  const addCostHandler = (cost) => {
    setCost((prevCosts) => {
      return [cost, ...prevCosts];
    });
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
