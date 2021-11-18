import { useState, useEffect } from "react";

const useCounter = (callbackfn) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(callbackfn);    
    }, 1000);
    return () => clearInterval(interval);
  }, [callbackfn]);
  return counter;
};

export default useCounter;
