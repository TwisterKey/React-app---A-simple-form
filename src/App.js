import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "car Insurance",
    amount: 300,
    date: new Date(2026, 2, 3),
  },
  { id: "e2", title: "car ", amount: 250, date: new Date(2021, 5, 3) },
  { id: "e3", title: " Insurance", amount: 700, date: new Date(2020, 2, 3) },
  {
    id: "e4",
    title: "mniau",
    amount: 1000,
    date: new Date(2021, 0, 3),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <Expenses item={expenses}></Expenses>
  //   </div>
  // ); //sintaxa JSX(JS XML)

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get started"),
  //   React.createElement(Expenses, { item: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses item={expenses}></Expenses>
    </div>
  );
};

export default App;
