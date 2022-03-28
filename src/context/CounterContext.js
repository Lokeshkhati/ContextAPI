import { useState, createContext, useContext } from "react";

// 1st step...createContext
const CounterContext = createContext();

export const useCounter = () => useContext(CounterContext);

const CounterContextProvider = (props) => {
  const [counter, setCounter] = useState(0);
  const increaseCount = () => {
    setCounter((prevCount) => prevCount + 1);
  };
  const decreaseCount = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  const values = { counter, increaseCount, decreaseCount };
  return (
    // 2nd step ... provider
    <CounterContext.Provider value={values}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
