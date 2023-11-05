import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Links flex gap-4 justify-start bg-slate-400 p-2">
        <Link to="/" className=" text-base font-bold text-white">
          SHOP
        </Link>
        <Link
          to="/cart"
          className="flex items-center text-base gap-1 font-semibold text-white"
        >
          {" "}
          CART
          <BsFillCartPlusFill className=" text-lg text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
