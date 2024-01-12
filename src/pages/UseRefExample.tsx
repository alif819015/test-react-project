import { useRef, useState } from "react";

const UseRefExample = () => {
  const [count, setCount] = useState(0);
  const myRef = useRef(0);

  const increment = () => {
    myRef.current = myRef.current + 1;
    setCount(count + 1);

    console.log("myRef=>", myRef.current);
    console.log("Count=>", count);
  };

  return (
    <div>
      <button onClick={() => increment()}>{count}</button>
    </div>
  );
};

export default UseRefExample;
