import "./OrderBox.css"
import { useState } from "react"
export default function OrderBox({item, func, i}){
    
    const [quantity, setQuantity] = useState(1);
    function recive(ev){
        ev.preventDefault();
        func(item.name, quantity, item.price, i);
        console.log(i)
        alert("Just bought \""+item.name+"\" "+quantity+" times!")
    }
    return(
        <form className="note-form" onSubmit={recive}>
            <p>price: {item.price}</p>
            <p>in stock</p>
            <div>
                <label>Quantity  </label>
                <input type="number" min={"1"} max={"100"} placeholder="1" className="quantityInput" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}></input>
            </div>
            <button>Add to cart</button>
        </form>
    )
}