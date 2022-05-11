







import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getApData, getBookData, getBookFilData } from "../../redux/action"
import "./books.css"

export const Books =()=>{
    const {books} =useSelector((store)=>store.books)
    const filbooks =useSelector((store)=>store.books.filbooks)
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
            if(id =="filterCategory"){
                 console.log(value,"a")
                  dispatch(getBookFilData(value))
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
            <select name="" id="filterCategory" onChange={handleSort}>
                <option value="">-- filter by category --</option>
                <option value="mystery">filter by mystery</option>
                <option value="mythology">filter by mythology</option>
                <option value="history">filter by history</option>
                <option value="technology">filter by technology</option>
                
            </select>
        </div>
        <div className="book_container">
            {books && filbooks.map((e)=>(
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