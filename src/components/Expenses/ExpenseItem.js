import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("hau"); //se da update
    console.log(title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount} lei</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
        {/* pasam un pointer catre functie */}
      </Card>
    </li>
  );
};
export default ExpenseItem;
