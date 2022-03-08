export const GroceryList =({title,id,handleDelete})=>{
    return <div>{title}
      <button onClick={()=>handleDelete(id)}>Delete</button>    
    </div>
}
// onClick={()=>handleDelete(groc.id)}