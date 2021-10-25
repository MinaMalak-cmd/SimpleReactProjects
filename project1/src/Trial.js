// import react, { useState, useEffect } from "react";
// const Trial = () => {
//   const [content, setContent] = useState("");
//   const sonChecksWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const possibleOutcome = ["sunny", "rainy", "error"];
//       const index = Math.floor(Math.random() * 2);
//       const outCome = possibleOutcome[index];
//       if (outCome == "sunny" || outCome == "rainy") {
//         resolve(outCome);
//       } else {
//         reject(new Error("unexpected error"));
//       }
//     }, 2000);
//   });
//   const fatherDecide = async () => {
//     let weather = await sonChecksWeather;

//     if (weather === "sunny") {
//       setContent("we will go boating");
//     }
//     else if (weather === "rainy") {
//       setContent("stay at home");
//     }
//   };
//   useEffect(()=>{
//       fatherDecide();
//   },[])
//   return (
//     <div className="bg-primary" style={{ color: "white" }}>
//       {content}
//     </div>
//   );
// };
// export default Trial;

import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

function Button(props) {
  return <button onClick={props.onClick}>{props.name}</button>;
}

function Trial() {
  const [count, setCount] = useState(0);
  const [isActive, setActive] = useState(false);

  const handleCount =  useCallback(()=>setCount(count + 1),[count]);
  const handleShow = 
    useCallback(() => setActive(!isActive), [isActive]);
//  const handleCount = () => setCount(count + 1);
//  const handleShow = () => setActive(!isActive);
  return (
    <div className="Trial">
      {isActive && (
        <div>
          <h1 style={{color:"white"}}>{count}</h1>
          <Button onClick={handleCount} name="Increment" />
        </div>
      )}
      <Button
        onClick={handleShow}
        name={isActive ? "Hide Counter" : "Show Counter"}
      />
    </div>
  );
}

export default Trial;