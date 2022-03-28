import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Counter = () => {
  const { counter, increaseCount, decreaseCount } = useContext(CounterContext);

  return (
    <div className="Counter">
      <h1>Counter :{counter}</h1>

      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
    </div>
  );
};

export default Counter;
