import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  let counter = useCounter((num) => num + 1);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
