import React, { useReducer } from "react";

const inetialState = { count: 0 };

const reducer = (currentState: typeof inetialState, action) => {
  console.log("current State=>", currentState);
  console.log("action=>", action);
  switch (action.type) {
    case "increment":
      return { count: currentState.count + 1 };
    case "decrement":
      return { count: currentState.count - 1 };
    case "incrementBy3":
      return { count: currentState.count + action.payload };
    default:
      return currentState;
  }
};
const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, inetialState);
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "incrementBy3", payload: 3 })}
        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Increment by 3
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Decrement
      </button>
    </div>
  );
};

export default UseReducerExample;
