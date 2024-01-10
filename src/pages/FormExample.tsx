import { ChangeEvent, useReducer } from "react";

const inetialState = { name: "", email: "" };
type TAction = {
  type: string;
  payload: string;
};

const reducer = (currentState: typeof inetialState, action: TAction) => {
  console.log("current State=>", currentState);
  console.log("action=>", action);
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addEmail":
      return { ...currentState, email: action.payload };
    default:
      return currentState;
  }
};

const FormExample = () => {
  const [state, dispatch] = useReducer(reducer, inetialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action=""
        className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md"
      >
        <input
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          type="text"
          name="name"
          id="name"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />

        <input
          onChange={(e) =>
            dispatch({ type: "addEmail", payload: e.target.value })
          }
          type="text"
          name="email"
          id="email"
          className="w-full px-3 py-2 border rounded-md mt-4 focus:outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormExample;
