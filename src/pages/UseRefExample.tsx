import { useEffect, useRef } from "react";
import CustomInput from "../components/CustomInput";

const UseRefExample = () => {
  //   const [count, setCount] = useState(0);
  const myRef = useRef<HTMLImageElement | null>(null);

  //   const increment = () => {
  //     myRef.current = myRef.current + 1;
  //     setCount(count + 1);

  //     console.log("myRef=>", myRef.current);
  //     console.log("Count=>", count);
  //   };

  useEffect(() => {
    myRef.current?.focus();
  }, []);

  return (
    <div>
      {/* <button onClick={() => increment()}>{count}</button> */}
      <h1>useRef</h1>
      <form>
        <CustomInput ref={myRef} className="border border-red-800" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseRefExample;
