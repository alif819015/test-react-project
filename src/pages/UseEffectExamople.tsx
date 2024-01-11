import { useEffect, useState } from "react";

const UseEffectExamople = () => {
  const [hedden, setHedden] = useState(false);
  
  return (
    <div>
      <button onClick={()=> setHedden((event)=>!event)}>{hedden? "show" : "hedden"}</button>
      
      {!hedden && <Counter /> }
    </div>
  );
};

const Counter =()=>{
    const [counter, setCounter] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('counter')
      setCounter((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <h1 className="border-2 border-cyan-700 p-5">{counter}</h1>
}

export default UseEffectExamople;
