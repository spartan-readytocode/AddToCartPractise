import React, { createContext, useState } from "react";
import { Products } from "../Product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < Products.length; i++) {
    cart[Products[i].id] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const addToCart = (item) => {
    setCartItem((prev) => ({ ...prev, [item.id]: prev[item.id] + 1 }));
  };

  const removeFromCart = (item) => {
    setCartItem((prev) => ({ ...prev, [item.id]: prev[item.id] - 1 }));
  };

  const contextValue = { cartItem, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
