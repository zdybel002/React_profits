import React, { useState } from "react";
import "../Css/CostItem.css";

import CostData from "./CostData";
import Card from "./Card";

function CostItem(props) {
  const [description, setDescription] = useState(props.description);
  const changeDescriptionHandler = () => {
    setDescription("new Text");
  };
  return (
    <Card className="cost_item">
      <CostData data={props.data}></CostData>
      <div className="cost_item__description">
        <h2>{description}</h2>
        <div className="cost_item__price">{props.amount} $</div>
      </div>
      <button onClick={changeDescriptionHandler}>Edytować zawartość</button>
    </Card>
  );
}

export default CostItem;
