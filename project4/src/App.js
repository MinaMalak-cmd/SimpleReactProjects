import React, { useEffect, useState } from "react";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useFetch from "./hooks/use-fetch";

function App() {
  const [tasks, setTasks] = useState([]);
  let tempTasks= [];
  let error=null,isLoading=false;
  let url = "https://reactcustomhooks-aac18-default-rtdb.firebaseio.com/tasks.json";
  let options = {};
  let HandleRequest = (tasks) => {
         const loadedTasks = [];
          for (const taskKey in tasks) {
            loadedTasks.push({ id: taskKey, text: tasks[taskKey].text });
          }
        setTasks(loadedTasks);
  }
  [isLoading, error, tempTasks] = useFetch(url,options,HandleRequest);
  const taskAddHandler = (task) => { 
      setTasks((prevTasks) => prevTasks.concat(task));
  };
  return(
     <>
    {tasks &&
      <>
        <NewTask onAddTask={taskAddHandler} />
        
        <Tasks
          items={tasks}
          loading={isLoading}
          error={error}
          onFetch={HandleRequest}
        />
      </>
    }
    </>
  );
}

export default App;
