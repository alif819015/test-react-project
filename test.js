const wreeperFunction = (func) => {
    return (num)=>{
        return func(num) *2
    }
};

const addOne = (num) => {
  return num + 1;
};
console.log(addOne(2));

const addOneAndDoble = wreeperFunction(addOne);
console.log(addOneAndDoble(4))
