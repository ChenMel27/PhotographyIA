import React from "react";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./NavBar.css";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <>
      <nav className="no-underline flex items-center justify-between h-20  max-w-6xl ">
        <Link to={"/"} style={{ textDecoration: 'none' }}>

            <h1 className="MYC mx-auto">
              MYC
            </h1>
            <h5 className="no-underline Port">
              portraits
            </h5>

          
        </Link>
          <Link to={"/"} style={{ textDecoration: 'none' }}>
            <h1 id = "HOME" className="HOME no-underline text-base cursor-pointer hover:text-gray-500 transition duration-300 ease-in">
              Home
            </h1>
          </Link>
          <Link to={"/About"} style={{ textDecoration: 'none'}}>
            <h1 id = "ABOUT" className="ABOUT no-underline text-base cursor-pointer hover:text-gray-500 transition duration-300 ease-in">
              About
            </h1>
          </Link>
          <Link to={"/Shop"} style={{ textDecoration: 'none', marginRight : '-5rem'}}>
            <h1 id = "SHOP" className="SHOP no-underline text-base cursor-pointer hover:text-gray-500 transition duration-300 ease-in">
              Shop
            </h1>
          </Link>
          
          <Link className= "CART"to={"/cart"}>
            <div>
              <ShoppingBasket className="Cart text-2xl cursor-pointer hover:text-gray-500 transition transform duration-200" />
              {cart.length > 0 && (
                <div className="Number absolute bg-[#5E8763] text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full top- text-white">
                  {cart.length}
                </div>
              )}
            </div>
          </Link>     
      </nav>
    </>
  );
};

export default Navbar;
