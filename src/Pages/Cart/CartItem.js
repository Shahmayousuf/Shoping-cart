import React from "react";

import "./Cart.css";
import { CartContext } from "../../context/cart/cartContext";
import { useContext } from "react";
const CartItem = (props) => {

  const { id, productName, price, productImage } = props.data;
    const {cartItems, addToCart,removeCart,updateItem}=useContext(CartContext)
    console.log(cartItems);
    // const qty=cartItems[id]
  return (
    <div className="cartitem">
      <img src={productImage} />
      <div className="description">
        <h1>{productName}</h1>
        <p>{price} INR</p>
        
       <div className="countbtn">
        <button onClick={()=>removeCart(id)}>-</button>
        <input value={cartItems[id]} onChange={(e)=>updateItem(Number(e.target.value),id)}></input>
        <button onClick={()=>addToCart(id)}>+</button>
      </div> 
      </div>
    
    </div>
  );
};

export default CartItem;
