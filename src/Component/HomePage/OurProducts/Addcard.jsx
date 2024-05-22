// AddCard.jsx
import { useState } from "react";
import Latest from "./Latest";
import Navbar from "../Navabar/Navbar";


 const AddCard = () => {
    const [cartItems, setCartItems] = useState(Array(6).fill(0));

    const addToCart = (index) => {
        setCartItems((prevCartItems) => {
            const newCartItems = [...prevCartItems];
            newCartItems[index]++;
            return newCartItems;
        });
    };

    return (
        <div>
            <Latest addToCart={addToCart} />
            <Navbar cartItems={cartItems} />
        </div>
    );
};

export default AddCard;