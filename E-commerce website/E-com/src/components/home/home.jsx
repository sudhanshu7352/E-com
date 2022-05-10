import { useNavigate } from "react-router-dom"
import { Caro } from "./caraosel/caraosel"
import "./home.css"

export const Home =()=>{
    const navigate =useNavigate()
    return(
        <div>
            <Caro />
            {/* <h1>home</h1> */}
            <div className="prod_div">
                <h1>Clothing Products</h1>
            </div>
            <div  className="prod_div">
                <h1>Electronics Products</h1>
            </div>
            <div  className="prod_div">
                <h1>Appliances Products</h1>
            </div>
            <div  className="prod_div">
                <h1>Books Products </h1>
            </div>
        </div>

    )
}