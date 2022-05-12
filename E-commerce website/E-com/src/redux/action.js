import axios from "axios"


export const GETDATA ="GETDATA"
export const GET_FIL_DATA ="GET_FIL_DATA "

export const GET_EL_DATA ="GET_EL_DATA"
export const GET_EL_FIL_DATA ="GET_EL_FIL_DATA"
export const GET_APL_DATA ="GET_APL_DATA"
export const GET_APL_FIL_DATA ="GET_APL_FIL_DATA"

export const GET_BOOK_DATA ="GET_BOOK_DATA"
export const GET_BOOK_FIL_DATA ="GET_BOOK_FIL_DATA"

export const ADDCART ="ADDCART"
export const addCart =(data)=>({type:ADDCART,payload:data})


export const getData =(data)=>({type:GETDATA,payload:data})
export const getfilData =(data)=>({type:GET_FIL_DATA,payload:data})

export const getElData =(data)=>({type:GET_EL_DATA,payload:data})
export const getElFilData =(data)=>({type:GET_EL_FIL_DATA,payload:data})

export const getApData =(data)=>({type:GET_APL_DATA,payload:data})
export const getApFilData =(data)=>({type:GET_APL_FIL_DATA,payload:data})

export const getBookData =(data)=>({type:GET_BOOK_DATA,payload:data})
export const getBookFilData =(data)=>({type:GET_BOOK_FIL_DATA,payload:data})

export const cartData=()=>(dispatch)=>{
   // console.log("abc")
    axios.get("http://localhost:8080/cart").then((res)=>{
        // console.log(res.data,"sdjh")
        dispatch(addCart(res.data))
    })
    axios.get("http://localhost:8080/books").then((res)=>{
        // console.log(res.data,"sdjh")
        dispatch(getBookData(res.data))
    })
}

