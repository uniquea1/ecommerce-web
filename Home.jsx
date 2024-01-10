import ItemCard from "./itemCard";
import { NavLink, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import './Home.css'

export default function Home({items}, index){
    const navigate = useNavigate();
    const handleHomeClick = () => {navigate("/");}
    
    return(
        <>
            <header>
                <h1>E-Commerce</h1>
                <Navigation/>
            </header>
            <NavLink to = "/IndividualProduct/1" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                        <ItemCard key = {0} item = {items[0]} />
            </NavLink>
            <NavLink to = "/IndividualProduct/2" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                        <ItemCard key = {1} item = {items[1]} />
            </NavLink>
            <NavLink to = "/IndividualProduct/3" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                        <ItemCard key = {2} item = {items[2]} />
            </NavLink>
            <NavLink to = "/IndividualProduct/4" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} state={{data:"name"}}>
                        <ItemCard key = {3} item = {items[3]} />
            </NavLink>
        </>
    )
}