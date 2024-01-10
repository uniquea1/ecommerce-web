import { NavLink, useNavigate } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import './Navigation.css'

export default function Navigation () { 
    const navigate = useNavigate();
    const handleHomeClick = () => {navigate("/");}
    return(
        <div className="navBar">
            <nav>
                <NavLink to="/"  onClick={handleHomeClick} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                <strong className="nav">Home</strong>
                </NavLink>
                <NavLink to="/Cart"  className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                <strong className="nav"> My Cart</strong>
                </NavLink>
            </nav>
      </div>
    )
  }
