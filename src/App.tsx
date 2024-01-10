import { useState } from "react";
import "./App.css";
import UseStateExample from "./pages/UseStateExample";
import UseReducerExample from "./pages/UseReducerExample";
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <UseStateExample counter={counter} setCounter={setCounter}/>
      <UseReducerExample></UseReducerExample>
    </div>
  );
}

export default App;
