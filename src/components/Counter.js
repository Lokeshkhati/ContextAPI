import { useCounter } from "../context/CounterContext";

const Counter = () => {
  const { counter, increaseCount, decreaseCount } = useCounter();

  return (
    <div className="Counter">
      <h1>Counter :{counter}</h1>

      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
    </div>
  );
};

export default Counter;
