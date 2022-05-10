import { GETDATA, GET_EL_DATA } from "./action"


const initState={
    cloth:[],
     electronics:[]  
}

export const Reducer =(store=initState,{type,payload})=>{

    switch(type){
        case GETDATA:
            return {...store,cloth:payload}
        case GET_EL_DATA:
                return {...store,electronics:payload}    
        default:
            return store
    }
}