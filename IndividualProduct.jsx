import OrderBox from "./OrderBox";
import { useState } from "react";
import Navigation from "./Navigation";
import './IndividualProduct.css'

const x = true;
export default function IndividualProduct({item, set, cart}){
    const [i,setI] = useState(1);
    function addToCart(name, quantity, price, index){
        const anItem = {name, quantity, price, index};
        console.log(anItem);
        set(anItem);
        console.log(cart)
        setI(i+1)
    }
    
    return(
        <>
            <Navigation/>
            <div className="itemPage">
                <div className="titleBar">
                        <img href = {item.image.locaton} alt={item.image.alt} id="img"></img>
                        <h2>{item.name}</h2>
                    </div>
                <div className="itemText">

                    <div className="Text"> 
                           <p>
                                <h3>description</h3>
                                An irresistible new edition of Harry Potter and the Philosopher's Stone 
                                created with ultra-talented designers MinaLima, the design magicians behind 
                                the gorgeous visual graphic style of the Harry Potter and Fantastic Beasts 
                                films. J.K. Rowling's complete and unabridged text is accompanied by 
                                MinaLima's handsome colour illustrations on nearly every page, superb 
                                design, and eight exclusive interactive paper-engineered 
                                elements - including Harry's Hogwarts letter, the magical entrance to Diagon 
                                Alley, a sumptuous feast in the Great Hall of Hogwarts and more. 
                            </p>
                    </div>
                </div>
                <OrderBox item = {item} func = {addToCart} i={i}/>
            </div>
        </>
    )
}