import { Dispatch } from "react";

type TCounter = {
  counter: number;
  setCounter:Dispatch<React.SetStateAction<number>>
};
const UseStateExample = ({ counter, setCounter }:TCounter) => {
  // const [counter, setCounter] = useState(0);

  // const handleIncrement = () => {
  // setCounter(counter + 1);
  // setCounter((previousState) => previousState + 1);
  // setCounter((previousState) => previousState + 1);
  // setCounter((previousState) => previousState + 1);
  // };

  // const handleAsyncCronusly = () => {
  //   setTimeout(() => {
  //     setCounter((previousState)=>(previousState+1));
  //   }, 2000);
  // };
  return (
    <div>
      <h1>{counter}</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCounter(counter + 1)}
      >
        Imncrement
      </button>
      {/* <button
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAsyncCronusly}
      >
        Async Increment
      </button>
      <button
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCounter(counter - 1)}
      >
        Decrement
      </button>
      <button
        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCounter(0)}
      >
        Reset
      </button> */}
    </div>
  );
};

export default UseStateExample;
