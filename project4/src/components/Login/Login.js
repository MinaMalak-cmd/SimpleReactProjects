import React, { useState, useEffect, useReducer } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state,action) =>{
   switch(action.type) {
      case actionTypes.Enter:
        return {value:action.value, isValid:action.value.includes('@')}
      case actionTypes.Blur:
        return {...state, isValid:state.value.includes('@')}
      default:
      return {value:'', isValid:false}
   }
}
const passwordReducer = (state,action) =>{
   switch(action.type) {
      case actionTypes.Enter:
        return {value:action.value, isValid:action.value.trim().length > 6}
      case actionTypes.Blur:
        return {...state, isValid:state.value.trim().length > 6}
      default:
      return {value:'', isValid:false}
   }
}
const actionTypes = {
  Enter:"USER_INPUT",
  Blur:"BLUR_INPUT"
}
const Login = (props) => {
  let initEmail = {value:'',isValid:null}
  const [emailState,dispatchEmail] =  useReducer(emailReducer, initEmail);
  const [passwordState,dispatchPassword] =  useReducer(passwordReducer, initEmail);
  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(()=>{
    const timeVar = setTimeout(()=>{
      console.log("hi")
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      );
    },500)
    return ()=>{
      clearTimeout(timeVar)
    }
  },[emailState.isValid,passwordState.isValid])
  const emailChangeHandler = (event) => {
    dispatchEmail({type:actionTypes.Enter,value:event.target.value})
  };
  const passwordChangeHandler = (event) => {
    dispatchPassword({type:actionTypes.Enter,value:event.target.value})
  };
  const validateEmailHandler = () => {
    dispatchEmail({type:actionTypes.Blur})
  };
  const validatePasswordHandler = () => {
    dispatchPassword({type:actionTypes.Blur})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
