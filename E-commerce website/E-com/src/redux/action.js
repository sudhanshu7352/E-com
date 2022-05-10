

export const GETDATA ="GETDATA"
export const GET_EL_DATA ="GET_EL_DATA"
export const GET_APL_DATA ="GET_APL_DATA"
export const GET_BOOK_DATA ="GET_BOOK_DATA"


export const getData =(data)=>({type:GETDATA,payload:data})
export const getElData =(data)=>({type:GET_EL_DATA,payload:data})
export const getApData =(data)=>({type:GET_APL_DATA,payload:data})
export const getBookData =(data)=>({type:GET_BOOK_DATA,payload:data})

