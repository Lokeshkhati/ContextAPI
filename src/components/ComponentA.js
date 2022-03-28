import ComponentB from "../components/ComponentB";
import { useCounter } from "../context/CounterContext";

const ComponentA = ({ name }) => {
  const { counter } = useCounter();
  return (
    <div style={{ backgroundColor: "red" }}>
      <p>Count : {counter}</p>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
