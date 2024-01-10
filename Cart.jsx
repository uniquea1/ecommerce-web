import OrderList from "./OrderList";
import { NavLink, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

export default function Cart({cartList, set}){
    console.log(cartList)
    const x = cartList
    let i = 0;

    return(
        <div>
            <h1>My cart</h1>
            <Navigation/>
            {cartList.map((cartList,index)=>(<div><OrderList key={i++} item={cartList}/> <button onClick={
                () => {
                    x.splice(index,1)
                    set(x)
                    console.log(index+" element's "+"deletion done!")
                    window.location.href("http://localhost:5173/Cart");
                    //console.log(cartList)
                }
            }>
                <NavLink to="/"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                    cancel
                </NavLink>
            </button></div>))}
        </div>
    )
}