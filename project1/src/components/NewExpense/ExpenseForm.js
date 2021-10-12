import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveData, onStopEditing }) => {
  const [data, setData] = useState({
    title: "",
    date: "",
    amount: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    onSaveData(data);
    setData({ title: "", amount: "", date: "" });
  };
  const titleHandler = (e) => {
    setData((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };
  const amountHandler = (e) => {
    setData((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  };
  const dateHandler = (e) => {
    setData((prevState) => {
      return { ...prevState, date: new Date(e.target.value) };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={data.title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
            value={data.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
            // value={data.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onStopEditing}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
