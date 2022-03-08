import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { nanoid } from "nanoid";
import { useEffect } from "react";

export const Grocery = () => {
  const [grocery, setGrocery] = useState([]);

  const add = (data) => {
      const payload={
        id :nanoid(),
          title: data,
          status:false,
        //   id:uuid()
      }
    setGrocery([...grocery, payload]);
  };
  const handleDelete =(id)=>{
     console.log(id)
    // const updated=grocery.map((e)=>(
    //   e.id===id?{}:{}
    // ))

        setGrocery(grocery.filter(item=> item.id !==id))
  }
  return (
    <div>
      <GroceryInput addGroc={add} />
      {grocery.map((e) => (
        <GroceryList title={e.title} id={e.id} key={e.id} handleDelete={handleDelete}/>
      ))}
    </div>
  );
};
