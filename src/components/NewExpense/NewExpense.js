import { React, useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [clicked, setClick] = useState(false);

  const isClicked = (event) => {
    event.preventDefault();
    setClick(true);
  };
  const isNotClicked = (event, how) => {
    event.preventDefault();
    setClick(how);
  };

  return (
    <div className="new-expense">
      {clicked ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          eClicked={isNotClicked}
        ></ExpenseForm>
      ) : (
        <button onClick={isClicked}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
