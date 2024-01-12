import { useEffect, useState } from "react";

const UseEffectExamople = () => {
  const [hedden, setHedden] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });
  console.log(user)
  useEffect(() => {
    console.log('Render')
  }, [user.name, user.email]);
  return (
    <div>
      <input
        onBlur={(e) => setUser({ ...user, name: e.target.value })}
        type="text"
        name="name"
        id="name"
        className="border border-red-500"
      />
      <input
        onBlur={(e) => setUser({ ...user, email: e.target.value })}
        type="text"
        name="email"
        id="email"
        className="border border-red-500"
      />

      {/* <button onClick={() => setHedden((event) => !event)}>
        {hedden ? "show" : "hedden"}
      </button>

      {!hedden && <Todo />} */}
    </div>
  );
};

// const Counter =()=>{
//     const [counter, setCounter] = useState(0);
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       console.log('counter')
//       setCounter((prev) => prev + 1);
//     }, 1000);
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);
//   return <h1 className="border-2 border-cyan-700 p-5">{counter}</h1>
// }

const Todo = () => {
  const controler = new AbortController();
  const signal = controler.signal;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
      .then((res) => res.json())
      .then((data) => alert(data.title));

    return () => {
      controler.abort();
    };
  }, []);

  console.log("data");
  return <div>Todo</div>;
};

export default UseEffectExamople;
