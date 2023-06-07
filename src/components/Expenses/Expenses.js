import Card from "../UI/Card";
import "./expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (prop) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  // const filteredExpenses = prop.item.filter(expense => {
  //   return expense.date.getFullYear().toString() === filteredYear;
  // });

  let filteredList = prop.item.filter(
    (item) => item.date.getFullYear() == filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredList} />
      <ExpensesList items={filteredList} />
      {/* {filteredList.length === 0 && <p>No expses found</p>}
      {filteredList.length > 0 &&
        filteredList.map((item) => (
          <ExpenseItem
            key={item.id} //ca sa nu mai dea eroarea
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))} */}
      {/* {filteredList.length === 0 ? (
        <p>No expses found</p>
      ) : (
        filteredList.map((item) => (
          <ExpenseItem
            key={item.id} //ca sa nu mai dea eroarea
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      )} */}

      {/* <ExpenseItem
        title={prop.item[1].title}
        amount={prop.item[1].amount}
        date={prop.item[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={prop.item[0].title}
        amount={prop.item[0].amount}
        date={prop.item[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={prop.item[2].title}
        amount={prop.item[2].amount}
        date={prop.item[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={prop.item[3].title}
        amount={prop.item[3].amount}
        date={prop.item[3].date}
      ></ExpenseItem> */}
    </Card>
  ); //sintaxa JSX(JS XML)
};

export default Expenses;
