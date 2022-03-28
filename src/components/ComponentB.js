import { useCounter } from "../context/CounterContext";

const ComponentB = () => {
  const { increaseCount } = useCounter();
  return (
    <div style={{ backgroundColor: "blue" }}>
      <button onClick={increaseCount}>IncreaseCount</button>
    </div>
  );
};

export default ComponentB;
