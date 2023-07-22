import React from "react";
import { Delete } from "@mui/icons-material";
import { remove } from "../redux/Slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import "./CartItems.css";

const CartItem = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const removeItemFromCart = () => {
    dispatch(remove(item.id));
    enqueueSnackbar(`Item removed from your cart!`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };

  return (
    <>

      <div className="Items flex items-center p-5 justify-between bg-[#A2AD9C] mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-[#5E8763] font-semibold">
              {item.title}
            </h1>
            <p>${item.price}</p>
          </div>

        <div
          onClick={removeItemFromCart}
          className="trash cursor-pointer"
        >
          <Delete className="text-gray-800" />
        </div>
      </div>
      </div>
    </>
  );
};

export default CartItem;
