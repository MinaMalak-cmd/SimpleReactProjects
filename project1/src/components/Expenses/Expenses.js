import React, { useState } from "react";
import Chart from "../Chart/Chart";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("");
  const filteredYearExpenses = (e) => {
    setFilteredYear(e);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // let tempContent = <h1 className="expenses-list__fallback">No items here</h1>;
    let tempContent = (
      props.items.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    ))
    );

  if (filteredExpenses.length > 0) {
    tempContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    ));
  }
 
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onFilterData={filteredYearExpenses}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {tempContent}
    </Card>
  );
};;

export default Expenses;
