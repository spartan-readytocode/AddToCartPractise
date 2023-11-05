import React, { createContext } from "react";
import { Products } from "../Product";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (i = 1; i < Products.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  return <ShopContext.Provider>{props.children}</ShopContext.Provider>;
};

export default ShopContext;
