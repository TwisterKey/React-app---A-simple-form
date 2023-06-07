import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle:"",
  //   enteredAmount:"",
  //   enteredDate:""
  // });//ALTERNATIVA

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); //o sa fie stocata valoarea in state
    //ALTERNATIVA
    // setUserInput({
    //   ...userInput,
    //   enteredTitle:event.target.valuel,
    // })//se evita scrierea asa
    // setUserInput((prevState ) => {
    //   return {...prevState, enteredTitle: event.target.value};
    // }) //este safer way pentru facut
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value); //o sa fie stocata valoarea in state
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value); //o sa fie stocata valoarea in state
  };

  const isClicked = (event) => {
    event.preventDefault();
    props.eClicked(event, false);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //ca sa nu-si mai dea reload pagina cand apas pe submit

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    props.eClicked(event, false);
    //le setam ca si empty strings ca sa dam clear la ce e in casute (two-way binding)
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} //salvam valorile din casute
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={isClicked}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
