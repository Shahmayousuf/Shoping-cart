import React, { useContext } from 'react'
import { CartContext } from '../../context/cart/cartContext'
import { PRODUCTS } from '../../Products/Products'
import CartItem from './CartItem'
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Cart = () => {
  const {cartItems,totalAmt,totalQty}=useContext(CartContext)
   const totalAmount=totalAmt()
   const totalQuantity=totalQty()
 
  return (
    <div>
        <div>
     
         <div className="cart">
         <h1>Your Cart Items</h1>
         <div className="cartItems">
          {PRODUCTS.map((item)=>{
           if(cartItems[item.id] !==0 ){
            return <CartItem data={item}/>
           }
          })}
         </div>
        
         </div>
     
      </div>
      <>
          
        {totalAmount > 0 ? (
          
         <div className="checkout">
        <p>Subtotal:{totalAmount} INR</p>
        <p>Total qty:{totalQuantity}</p>
   
      <Link to={'/'}>
      <Button >Continue Shopping</Button></Link>
      </div>
      ) : ( <><h2 style={{ fontFamily: 'math', color: 'dimgrey' }}>Your cart is empty</h2>
      <img className='cartempty' src="https://bakestudio.in/assets/images/cart/empty-cart.gif"  /></>
          
          )}
          
          </>

      </div>
   
  )
     
  
}

export default Cart
