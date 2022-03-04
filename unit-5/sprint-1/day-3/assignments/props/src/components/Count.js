import {useState} from "react"
function Counter(){
  const [count ,setCount] =useState(0)
    function handle(value){
      return setCount(count+value)
    }
    function multi(value){
        return setCount(count*value)
      }
    return (
        <>
        <h2>Count :{count}</h2>

        <div id="but">
             <button onClick={()=>handle(1)}>Increase</button>
             <button onClick={()=>{if(count>=1){handle(-1)}}}>Decrease</button>
             <button onClick={()=>multi(2)}>Double</button>
        </div>
        </>
    )
}
export default Counter