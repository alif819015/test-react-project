// import { useState } from "react";
import { useContext } from "react";
import "./App.css";
import { TThemContext, ThemContext } from "./context/ThemeProvider";
// import { MenuItem, MenuList } from "./components/Menu";
import UserContainer from "./pages/UserContainer";
import Select from "./components/Select";
// import UseRefExample from "./pages/UseRefExample";
// import UseEffectExamople from "./pages/UseEffectExamople";
// import FormExample from "./pages/FormExample";
// import UseStateExample from "./pages/UseStateExample";
// import UseReducerExample from "./pages/UseReducerExample";
function App() {
  // const [counter, setCounter] = useState(0);
  const { dark, setDark } = useContext(ThemContext) as TThemContext;
  console.log(dark);
  return (
    <div
      className={`h-screen w-full flex justify-center items-center ${
        dark ? "bg-black" : "bg-white"
      }`}
    >
      {/* <UseStateExample counter={counter} setCounter={setCounter}/> */}
      {/* <UseReducerExample></UseReducerExample> */}
      {/* <FormExample></FormExample> */}
      {/* <UseEffectExamople></UseEffectExamople> */}
      {/* <UseRefExample></UseRefExample> */}
      {/* <button
        className={`border border-blue-800 p-2 rounded-md ${
          dark ? "bg-purple-600" : "bg-pink-500"
        }`}
        onClick={() => setDark(!dark)}
      >
        Toggle
      </button>
      <MenuList>
        <MenuItem></MenuItem>
      </MenuList> */}

      {/* <UserContainer></UserContainer> */}
      <Select>
        <Select.SelectOption value='Option1'>Option1</Select.SelectOption>
        <Select.SelectOption value='Option2'>Option2</Select.SelectOption>
        <Select.SelectOption value='Option3'>Option3</Select.SelectOption>
        <Select.SelectOption value='Option4'>Option4</Select.SelectOption>
      </Select>
    </div>
  );
}

export default App;
