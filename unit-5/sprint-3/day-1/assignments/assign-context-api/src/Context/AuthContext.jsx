import { createContext } from "react";


export const AuthContext =createContext() 

export const AuthContextProvider =()=>{


    return <AuthContext.Provider></AuthContext.Provider>
}