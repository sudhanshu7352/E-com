







import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getApData, getBookData, getData, getElData } from "../../redux/action"
import "./books.css"

export const Books =()=>{
    const {books} =useSelector((store)=>store.books)
    const dispatch =useDispatch()
    useEffect(()=>{
       axios.get(" http://localhost:8080/books").then((res)=>{
          // console.log(res.data)
           dispatch(getBookData(res.data))
       })
    },[])

    const handleSort=(e)=>{
        let {id,value} =e.target
            if(id =="priceSort" && value =="low"){
                books.sort((a,b)=>a.price -b.price)
                dispatch(getBookData(books))
            }
            if(id =="priceSort" && value =="high"){
                books.sort((a,b)=>b.price -a.price)
                dispatch(getBookData(books))
            }
        
    }
    return(
        <>
        <div>
            <select name="" id="priceSort" onChange={handleSort}>
                <option value="">-- sort by price --</option>
                <option value="low">low to high</option>
                <option value="high">high to low</option>
            </select>
        </div>
        <div className="book_container">
            {books.map((e)=>(
                <div key={e.id}>
                    <img src={e.image} />
                    <h3>{e.name}</h3>
                    <h4>₹ {e.price}.00</h4>
                </div>
                
            ))}
        </div>
        </>
    )
      
    
}