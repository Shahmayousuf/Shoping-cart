import { hover } from "@testing-library/user-event/dist/hover";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import "./Shop.css";

import { CartContext } from "../../context/cart/cartContext";


const Productitems = (props) => {
      
     
    
  const { id, productName, price, productImage } = props.data;
   
  const{addToCart,cartItems}=useContext(CartContext)
    const cartItemAmt=cartItems[id]

  return (
    <div className="main-product">
      <div className="productitems">
        <img src={productImage}></img>
        <div className="description">
          <h4>{id}</h4>
          <h5>{productName}</h5>
          <p>{price} INR</p>

          <Button className="btn" onClick={()=>addToCart(id)}>Add To Cart {cartItemAmt>0 && <>({cartItemAmt})</>}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Productitems;
