import { useState } from "react";
import { useEffect } from "react";

export const Timer = () => {
  const [counter, setCounter] = useState(0);
  const [end,setEnd]=useState(10)

  useEffect(() => {
    const id = setInterval(() => {
      console.log(counter);
      setCounter((prev) => {
        if (prev > end-1) {
          clearInterval(id);
          return end;
        }
        return prev + 1;
      });
    }, 400);
    return () => {
      clearInterval(id);
      console.log("unmounter");
    };
  }, []);

  return <div>Timer:{counter}</div>;
};
