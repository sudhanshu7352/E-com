import { GETDATA, GET_APL_DATA, GET_BOOK_DATA, GET_EL_DATA } from "./action"


const initState={
    cloth:[],
     electronics:[] ,
     appliances:[] ,
     books:[]
}

export const Reducer =(store=initState,{type,payload})=>{

    switch(type){
        case GETDATA:
            return {...store,cloth:payload}
        case GET_EL_DATA:
                return {...store,electronics:payload}  
        case GET_APL_DATA:
                    return {...store,appliances:payload}   
        case GET_BOOK_DATA:
            return {...store,books:payload}             
        default:
            return store
    }
}