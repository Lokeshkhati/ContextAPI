import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const ComponentB = ({ name }) => {
  const { increaseCount } = useContext(CounterContext);
  return (
    <div style={{ backgroundColor: "blue" }}>
      <button onClick={increaseCount}>IncreaseCount</button>
    </div>
  );
};

export default ComponentB;
