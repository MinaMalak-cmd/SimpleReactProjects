import Card from "./Card";
import useCounter from "../hooks/use-counter";

const BackwardCounter = () => {
  let counter = useCounter(false);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
