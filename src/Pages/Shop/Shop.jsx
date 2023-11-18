import React from "react";
import { Products } from "../../Product";
import Product from "./Product";

const Shop = () => {
  return (
    <div>
      <div className="ShopTitle">
        <h1 className="text-center">TheDiscountShop</h1>
      </div>
      <div className="products flex flex-wrap">
        {Products.map((product, index) => (
          <Product
            key={index}
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
