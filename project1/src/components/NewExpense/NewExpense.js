import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddNewExpense }) => {
  const SaveDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    onAddNewExpense(expenseData)
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={SaveDataHandler} />
    </div>
  );
};

export default NewExpense;
