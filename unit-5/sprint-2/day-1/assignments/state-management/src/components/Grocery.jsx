import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";

export const Grocery = () => {
  const [grocery, setGrocery] = useState([]);

  const add = (data) => {
      const payload={
          data,
        //   id:uuid()
      }
    setGrocery([...grocery, payload]);
  };
  const handleDelete =(id)=>{

  }
  return (
    <div>
      <GroceryInput addGroc={add} />
      {grocery.map((e) => (
        <GroceryList groc={e} />
      ))}
    </div>
  );
};
