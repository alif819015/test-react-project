import { createContext, useContext, useState } from "react";

const SelectContext = createContext(null);
const Select = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <SelectContext.Provider value={{ selectedOption, setSelectedOption }}>
      <select onChange={(e) => setSelectedOption(e.target.value)}>
        {children}
      </select>
      ;
    </SelectContext.Provider>
  );
};

const SelectOption = ({ value, children }) => {
  const { selectedOption } = UseSelectContext();
  const isActive = selectedOption === value;
  return (
    <option
      className={`${isActive ? "bg-purple-800" : "bg-slate-100"}`}
      value={value}
    >
      {children}
    </option>
  );
};
Select.SelectOption = SelectOption;
export default Select;

const UseSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("context out of bound");
  }
  return context;
};
