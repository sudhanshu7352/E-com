

export const reducer =(store,{type ,payload})=>{

    switch(type){
        case ADD_TODO :
            return {...store,todo:[...store.todo ,payload]}
        default :
         return store    
    }
}