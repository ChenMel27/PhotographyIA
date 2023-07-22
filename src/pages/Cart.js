import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import copy1 from "./assets/copy1.png";
import "./Cart.css";

window.addEventListener("load", () => {
  document.body.classList.add("bg-color");
});

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  function copyToClipboard() {
    const tempInput = document.createElement('input')
    tempInput.value = totalAmount
    document.body.appendChild(tempInput)
    tempInput.select()
    document.execCommand('copy')
    document.body.removeChild(tempInput)
    setCopySuccess('Copied')
  }
  const [copySuccess, setCopySuccess] = useState('')

  useEffect(() => {
  setTimeout(() => setCopySuccess(''), 2000)
}, [copySuccess])

//creating cart page using redux to temporarily hold the product variables
  return (
    <>
      {cart.length > 0 ? (
        <>
          <div className="divback min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
          <h1 className="Summary p-5 space-y-5 mt-14 font-semibold text-lg text-[#A2AD9C]">
                  YOUR CART SUMMARY
            </h1>
            <div className="flex flex-col justify-center items-between p-2">
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
                
                <Link to={"/form"} id = "Button1" className="Button1 bg-[#A2AD9C] hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-[#A2AD9C] font-bold hover:text-[#A2AD9C] p-3">
                  Submit Request
                </Link>
                <div className="Elements">
                <p>
                  <span className="text-gray-700 font-semibold">
                    Total Items
                  </span>{" "}
                  : {cart.length}
                </p>
                <p>
                  {" "}
                  <span className="text-gray-700 font-semibold">
                    Total Amount
                  </span>{" "}
                  : <button >${totalAmount}</button>
                </p>
                {document.queryCommandSupported('copy') && (
                  <div id="copy-icon" onClick={() => copyToClipboard()} className="cursor-pointer">
                    <div className="mt-8 flex justify-center">
                      <img src={copy1} alt="Copy" />
                      <p className="ml-2 text-base-secondary text-sm light"></p>
                      {copySuccess ? <span className="blink">{copySuccess}</span> : 'Copy Total'}
                    </div>
                  </div>
                  )}
                  </div>
              </div>
            </div>
              <div className="Items">
              {cart.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })}
              </div>
            </div>
            <div>
          </div>
        </>
      ) : (
        <>
          <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-[#A2AD9C] font-semibold text-xl mb-2">
              Your cart is empty!
            </h1>
            <Link to={"/Shop"}>
              <button className="bg-[#A2AD9C] hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-[#A2AD9C] font-bold hover:text-[#A2AD9C] p-3">
                SHOP NOW
              </button>
            </Link>
          </div>
        </>
      )}
      <div className="bottom mt-10">
        <h1>Created by @MYCPortraits</h1>
      </div>
    </>
  );
};

export default Cart;
