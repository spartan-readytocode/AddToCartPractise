import React from "react";
import { Products } from "../../Product";
import Product from "./Product";

const Shop = () => {
  return (
    <div>
      <div className="Shoptitle">
        <h1 className="text-center">TheDiscountshop</h1>
      </div>
      <div className="products flex flex-wrap ">
        {Products.map((product) => (
          <Product
            key={product.id}
            productName={product.productName}
            price={product.price}
            productImage={product.productImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
