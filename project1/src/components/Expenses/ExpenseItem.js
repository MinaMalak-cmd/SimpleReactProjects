import React, { useState, useEffect } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle(title==props.title?'Updated!':props.title);
  };
  const changleHandler =(e)=>{
    let val =e.target.value;
   setTitle(val)  
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <input type="text" onChange={changleHandler} />
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
