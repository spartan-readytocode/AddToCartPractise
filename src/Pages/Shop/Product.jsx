import React from "react";

const Product = (props) => {
  const { id, productImage, productName, price } = props;
  return (
    <div className="ProductsComponents w-72 h-72">
      <div className="container flex flex-col items-center">
        <img src={productImage} className=" w-52 h-52 p-10" />
        <div className="discription text-center flex flex-col gap-1">
          <p>Product Name : {productName}</p>
          <p>Price :${price}</p>
        </div>
        <div className="buttons m-3">
          <button className=" bg-black p-1 text-white rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
