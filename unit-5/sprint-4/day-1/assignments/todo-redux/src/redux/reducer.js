import { ADD_TODO } from "./action"

const initState ={
    TODO:[]
}
export const reducer =(store=initState,{type ,payload})=>{

    switch(type){
        case ADD_TODO :
            return {...store,todo:payload}
        default :
         return store    
    }
}