export const GroceryList =({title,id,handleDelete})=>{
    return <div className="groc">{title}
      <button className="del" onClick={()=>handleDelete(id)}>Delete</button>    
    </div>
}
// onClick={()=>handleDelete(groc.id)}