import "./styles.css";
// import { useState } from "react";
import ComponentA from "./components/ComponentA";

import Counter from "./components/Counter";
import CounterContextProvider from "./context/CounterContext";

const App = () => {
  // const [name, setName] = useState("Lokesh Khati");

  return (
    <CounterContextProvider>
      <div className="App">
        {/* <h1>Context API</h1> */}

        <Counter />
        <ComponentA />
      </div>
    </CounterContextProvider>
  );
};

export default App;
