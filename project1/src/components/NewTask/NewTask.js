import React, { useState,useEffect } from 'react';
import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useFetch from "../../hooks/use-fetch";

const NewTask = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  let error=null,isLoading=false,data="";
  let url = "https://reactcustomhooks-aac18-default-rtdb.firebaseio.com/tasks.json";
  const [text,setText]  = useState("");
  const enterTaskHandler =  (taskText) => {
    console.log("Text",taskText)
    setText(taskText);    
  };
  console.log(text);
  const HandleRequest = (data) =>{  
      console.log("data",data)
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: text };
      props.onAddTask(createdTask);
  }
  let options = {
          method: "POST",
          body: JSON.stringify({ text: text }),
          headers: {
            "Content-Type": "application/json",
          },
        };
  [isLoading, error,data] = useFetch(url,options,HandleRequest);
  useEffect(() => {
    // enterTaskHandler(e);
  }, [text])
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
