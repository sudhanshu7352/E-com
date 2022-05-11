import { FilterDramaTwoTone } from "@mui/icons-material"
import { GETDATA, GET_APL_DATA, GET_APL_FIL_DATA, GET_BOOK_DATA, GET_BOOK_FIL_DATA, GET_EL_DATA, GET_EL_FIL_DATA, GET_FIL_DATA } from "./action"


const initState={
    cloth:[],
    filcloth :[],
     electronics:[] ,
     filelectronics:[] ,
     appliances:[] ,
     filappliances:[] ,
     books:[],
     filbooks:[]
}

export const Reducer =(store=initState,{type,payload})=>{

    switch(type){
        case GETDATA:
            return {...store,cloth:payload,filcloth:payload}
         case GET_FIL_DATA:
                return {...store,filcloth:[...filData(store.cloth,payload)]}
        case GET_EL_DATA:
                return {...store,electronics:payload,filelectronics:payload}  
        case GET_EL_FIL_DATA:
            return {...store,filelectronics:[...filData(store.electronics,payload)]}        
        case GET_APL_DATA:
              return {...store,appliances:payload,filappliances:payload}   
        case GET_APL_FIL_DATA:
            return {...store,filappliances:[...filData(store.appliances,payload)]} 
        case GET_BOOK_DATA:
            return {...store,books:payload,filbooks:payload}   
        case GET_BOOK_FIL_DATA:
             return {...store,filbooks:[...filData(store.books,payload)]}           
        default:
            return store
    }
}

const filData=(data,value)=>{
    let newData
 //   console.log(value)
    if(value =="MEN" ||value =="WOMEN"){

         newData =data.filter((e)=>e.category==value)
    }
    if(value =="mobile" ||value =="laptop"){

        newData =data.filter((e)=>e.category==value)
   }
   if(value =="Television" ||value =="refrigerator" || value =="washing machine"){

    newData =data.filter((e)=>e.category==value)
   }
   if(value =="technology" ||value =="mystery"||value =="mythology" ||value =="history"){

    newData =data.filter((e)=>e.category==value)
    //console.log(newData)
    }
    //  if(value =="low"){
    //    newData= newData.sort((a,b)=>a.price -b.price)
    //  }
    //  if(value =="high"){
    //     newData= newData.sort((a,b)=>b.price -a.price)
    //   }  
  // console.log(newData,"he")
 return newData
}

// if(id =="priceSort" && value =="low"){
//     filcloth.sort((a,b)=>a.price -b.price)
//     dispatch(getData(filcloth))
//   //  dispatch(getfilData(value))
// }
// if(id =="priceSort" && value =="high"){
//     filcloth.sort((a,b)=>b.price -a.price)
//     dispatch(getData(filcloth))
//    // dispatch(getfilData(value))
// }