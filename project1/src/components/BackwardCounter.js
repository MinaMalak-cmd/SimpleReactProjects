import Card from "./Card";
import useCounter from "../hooks/use-counter";

const BackwardCounter = () => {
  let counter = useCounter((num)=>num-1);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
