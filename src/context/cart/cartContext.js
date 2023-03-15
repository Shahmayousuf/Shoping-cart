import { createContext, useState } from "react";
import React from "react";
import { PRODUCTS } from "../../Products/Products";

export const CartContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++)
    //   initial  cart state....
    //   cartid[1]:0
    //   cartid[2]:0.....

    cart[i] = 0;
  return cart;
};
export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const removeCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };
  const updateItem = (newqty, id) => {
    setCartItems((prev) => ({ ...prev, [id]: newqty }));
  };
  const totalAmt = () => {
    let total = 0;
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        let itemdetail = PRODUCTS.find((item) => item.id === Number(items));
        total += cartItems[items] * itemdetail.price;
      }
    }
    return total;
  };
  const totalQty = () => {
    let qty = 0;

    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        qty += cartItems[items];
      }
    }

    return qty;
  };
  const contextValues = {
    cartItems,
    addToCart,
    removeCart,
    updateItem,
    totalAmt,
    totalQty,
  };

  return (
    <div>
      <CartContext.Provider value={contextValues}>
        {props.children}
      </CartContext.Provider>
    </div>
  );
};
