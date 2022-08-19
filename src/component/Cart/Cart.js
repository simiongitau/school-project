import React from "react";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Paypal from "../Paypal";
import {
  removeItemsCart,
  decreaseCart,
  addToCart,
  clearCart,
  getTotals,
} from "../../Redux/cartSlice";
import { Link } from "react-router-dom";
export default function Cart() {
  const [county, setCounty] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [telNumber, setTelNumber] = useState("");
  console.log(county);
  console.log(location);
  console.log(name, telNumber);
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart);
  const cartsQuantity = useSelector((state) => state.cart.cartTotalQuantity);
  console.log(carts.cartItems);
  // updating the subtottal
  useEffect(() => {
    dispatch(getTotals());
  }, [carts, dispatch]);
  // method to remove item from the cart
  const handleRemove = (cartItem) => {
    dispatch(removeItemsCart(cartItem));
  };
  // decrease function
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  // increase function
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  // clear cart function
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  // paypal
  const transport = {
    location: location,
    county: county,
    name: name,
    telNumber: telNumber,
  };
  console.log(transport);
  const transactionSuccess = async (data) => {
    let variables = {
      cartDetail: carts.cartItems,
      paymentData: data,
      total: carts.cartTotalAmount,
      transport: transport,
      cartsQuantity: cartsQuantity,
    };
    console.log(variables);
    await axios
      .post("http://localhost:5000/successBuy", variables)
      .then((response) => {
        if (response.data.onSuccess) {
        } else {
          alert("fail to buy");
        }
      });
  };
  const transactionError = () => {
    console.log("transaction Error");
  };
  const transactionCancel = () => {
    console.log("transaction Cancel");
  };
  return (
    <div className=" bg-gray-200 pl-4 h-screen ">
      <i
        className="bi bi-x-circle text-4xl text-red-700"
        onClick={() => handleClearCart()}
      ></i>
      {/* neader section   */}
      <div className="row relative w-full flex ">
        {/* cart section */}
        {/* mapping cart items */}
        {carts.cartItems.length === 0 ? (
          <div className="w-[60%]">
            <h4 className="text-4xl mx-[40px]">your cart is empty!</h4>
            <Link to="/">
              <span className="text-sm text-blue-400 mx-10 cursor-pointer underline">
                back to shop
              </span>
            </Link>
          </div>
        ) : (
          carts.cartItems.map((cartItem) => {
            return (
              <div className="grid grid-cols-1">
                <div
                  className="flex mt-[20px]  rounded items-center border-b-4  w-[55%] justify-between p-2 border-gray-400"
                  key={cartItem.id}
                >
                  {/* div of image and it details */}
                  <div className="flex">
                    {/* image */}
                    <img
                      src={`http://localhost:5000/${cartItem.productImage}`}
                      alt="photos"
                      width="100px"
                      height="100px"
                      className="rounded"
                    />
                    <div className=" space-y-4 p-2 w-[55%]">
                      {/* product name */}
                      <span>
                        <i>{cartItem.name}</i>
                      </span>
                      {/* price */}
                      <h4 className="font-bold uppercase">
                        {cartItem.price}
                        kesh
                      </h4>
                    </div>
                  </div>
                  {/* div of quantity */}
                  <div className="flex items-center gap-2 p-2">
                    <h5>{cartItem.cartQuantity}</h5>
                    <div className="flex flex-col">
                      <button
                        className="bg-blue-200 rounded p-3 mb-3 shadow-xl"
                        onClick={() => handleIncreaseCart(cartItem)}
                      >
                        +
                      </button>
                      <button
                        className="bg-blue-200 rounded p-3 "
                        onClick={() => handleDecreaseCart(cartItem)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  {/* amount */}
                  {/* <span className="font-bolder uppercase">{cartItem.total}</span> */}
                  {/* delete */}
                  <button
                    className=" bg-red-300 p-3 rounded shadow-xl shadow-blue-200"
                    onClick={() => handleRemove(cartItem)}
                  >
                    remove
                  </button>
                </div>
              </div>
            );
          })
        )}

        {/* summarly section */}
        <form className="mt-[2px]  shadow-xl rounded-2 mr-3  p-3 z-10 absolute top-0 bg-gray-300 w-[25%] right-0">
          <div className="mt-[30px] text-center uppercase text-sm underline font-bold">
            order summarly
          </div>
          <div className="p-1 bg-gray-300 w-[155px] ml-[31%]"></div>
          <div className=" mt-[5px] flex justify-between mb-4">
            <span className="text-sm font-light uppercase">total item</span>
            <span className="mr-[10px] font-bold text-green-700 text-xl">
              {cartsQuantity}
            </span>
          </div>
          <span className=" ml-[40%] text-sm uppercase underline my-1 font-bold">
            shipping detail
          </span>
          <div className=" flex flex-col gap-2">
            <div className="flex items-center">
              <label className="uppercase text-sm">name:</label>
              <input
                className=" border-b-4 border-gray-400 bg-gray-100 p-3 w-[100%] ml-10 outline-none"
                placeholder="mary muthoni"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center">
              <span className="uppercase text-sm">telphone no :</span>
              <input
                type="Number"
                placeholder="07*********"
                className="border-b-4 border-gray-400 bg-gray-100 p-3 w-[100%] ml-2 outline-none"
                onChange={(e) => setTelNumber(e.target.value)}
                required
              />
            </div>
            {/* county selection */}
            <div className="flex justify-center items-center gap-2 pl-2 pr-2">
              <select
                className="p-4 w-[200px] border-b-2 border-gray-500 outline-none uppercase text-sm"
                onChange={(e) => setCounty(e.target.value)}
              >
                <option value="">*select county*</option>
                <option value="kisumu" className="uppercase text-sm">
                  kisumu
                </option>
                <option value="kitale" className="uppercase text-sm">
                  kitale
                </option>
                <option value="transzoia" className="uppercase text-sm">
                  Transnzoia
                </option>
                <option value="eldoret" className="uppercase text-sm">
                  Eldoret
                </option>
              </select>
              {/* location selection */}
              <select
                className="p-4 w-[200px] border-b-2 border-gray-500 outline-none uppercase text-sm"
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="volvo">*select station*</option>
                <option value="munyaka" className="uppercase text-sm">
                  Munyaka
                </option>
                <option value="kitale tower" className="uppercase text-sm">
                  kitale tower
                </option>
                <option value=" olkalau" className="uppercase text-sm">
                  olkalau
                </option>
                <option value=" gilgil" className="uppercase text-sm">
                  gilgil
                </option>
                <option value="kisumu mall" className="uppercase text-sm">
                  kisumu mall
                </option>
              </select>
            </div>
            {/* county drop down */}

            {/* location */}
          </div>
          <div className="mb-[40px] mt-[50px] flex justify-center">
            <h5 className=" shadow-sm text-sm text-green-600 capitalize">
              tax 16% and transport fee within eldoret.
            </h5>
          </div>

          <div className="flex items-center justify-between">
            <span className="uppercase font-bold text-sm">total cost</span>
            <h4 className="font-bold uppercase text-green-500 underline">
              {carts.cartTotalAmount} kesh
            </h4>
          </div>
          <div>
            <Paypal
              toPay={carts.cartTotalAmount}
              onSuccess={transactionSuccess}
              transactionError={transactionError}
              transactionCancel={transactionCancel}
              className="p-4"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
