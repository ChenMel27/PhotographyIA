import React from "react";
import { add, remove } from "../redux/Slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import "./Product.css";

const Product = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const addToCart = () => {
    dispatch(add(item));
    enqueueSnackbar(`Item added to your cart successfully`, {
      variant: "success",
      autoHideDuration: 3000,
    });
  };

  const removeFromCart = () => {
    dispatch(remove(item.id));
    enqueueSnackbar(`Item removed from your cart!`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };

  return (
    <>
      <div id = "back" className="shadow-lg float-left group hover:scale-110 transition duration-300 ease-in flex flex-col items-center gap-3 p-4 h-[450px] w-[350px] mt-10 ml-5">
        <div className="h-[180px]">
        </div>
        <div>
          <h1 id = "title" className="leading-10 text-gray-700 font-semibold text-lg">
            {item.title}
          </h1>
        </div>
        <div className ="price">
          <p id = "price" className = "price ">$ {item.price}</p></div>
        <div className="border-b-4 flex items-center justify-between w-full mt-5">
          <div className="border-b-[0.5px] text font-light">
          <p className="leading-8 font-light border-b-[1px]">{item.edits}</p>
          <p className="leading-8 font-light border-b-[0.5px]">{item.meeting}</p>
          <p className="leading-8 font-light border-b-[0.5px]">{item.location}</p>
          <p className="leading-8 font-light border-b-[0.5px]">{item.people}</p>
          <p className= "text-white">  .{"\n"} </p>
          <p className= "text-white">  .{"\n"} </p>

          </div>
          </div>
          {cart.some((p) => p.id === item.id) ? (
            <button id = "button"
              className="button group-hover:bg-[#5E8763] group-hover:text-white transition duration-300 ease-in text-[#5E8763] border-2 border-text-[#5E8763] rounded-lg font-semibold p-3"
              onClick={removeFromCart}
            >
              Remove item
            </button>
          ) : (
            <button 
              className="add group-hover:bg-[#5E8763] group-hover:text-white transition duration-300 ease-in text-[#5E8763] border-2 border-text-[#5E8763] font-semibold p-3"
              onClick={addToCart}>
              Add to cart
            </button>
          )}
      </div>
    </>
  );
};

export default Product;