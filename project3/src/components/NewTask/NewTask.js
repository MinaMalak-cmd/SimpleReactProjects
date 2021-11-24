import React, { useState,useEffect } from 'react';
import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useFetch from "../../hooks/use-fetch";

const NewTask = (props) => {
  let error=null,isLoading=false,data="";
  let url = "https://reactcustomhooks-aac18-default-rtdb.firebaseio.com/tasks.json";
  const [text,setText]  = useState("");
  const [options,setOptions] = useState({});
  const enterTaskHandler =  (taskText) => {
    setOptions((prev)=>
    {
      return{
        ...prev,
        body: JSON.stringify({ text: taskText }),
      }
    })
    setText(taskText);
   
  };
  const HandleRequest = (taskText,data) =>{  
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
      props.onAddTask(createdTask);
  } 
  [isLoading, error,data] = useFetch(url,options,HandleRequest);
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
