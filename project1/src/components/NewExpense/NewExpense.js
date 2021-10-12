import React from "react";
import { useState } from "react/cjs/react.development";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddNewExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const SaveDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    onAddNewExpense(expenseData);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveData={SaveDataHandler}
          onStopEditing={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
