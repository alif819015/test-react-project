// import { useState } from "react";
import "./App.css";
import UseRefExample from "./pages/UseRefExample";
// import UseEffectExamople from "./pages/UseEffectExamople";
// import FormExample from "./pages/FormExample";
// import UseStateExample from "./pages/UseStateExample";
// import UseReducerExample from "./pages/UseReducerExample";
function App() {
  // const [counter, setCounter] = useState(0);
  return (
    <div>
      {/* <UseStateExample counter={counter} setCounter={setCounter}/> */}
      {/* <UseReducerExample></UseReducerExample> */}
      {/* <FormExample></FormExample> */}
      {/* <UseEffectExamople></UseEffectExamople> */}
      <UseRefExample></UseRefExample>
    </div>
  );
}

export default App;
