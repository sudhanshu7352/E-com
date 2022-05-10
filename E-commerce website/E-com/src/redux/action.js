

export const GETDATA ="GETDATA"
export const GET_EL_DATA ="GET_EL_DATA"



export const getData =(data)=>({type:GETDATA,payload:data})
export const getElData =(data)=>({type:GET_EL_DATA,payload:data})

