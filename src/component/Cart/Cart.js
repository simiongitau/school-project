import React from "react";
import styled from "styled-components";
import axios from "axios";
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
  const Wrapper = styled.div``;
  const Main = styled.div`
    /* display: flex; */
  `;
  const Product = styled.div`
    display: flex;
    margin-left: 10px;
    div {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-left: 2px;
      font-size: 19px;
      h4 {
        font-weight: 100;
      }
    }
    img {
      border-radius: 9px;
      height: 17vh;
      width: 150px;
      object: cover;
    }
  `;
  const Quantiy = styled.div`
    display: flex;
    align-items: center;
    h5 {
      margin-right: 20px;
    }
    div {
      display: flex;
      flex-direction: column;
    }
  `;
  const Detail = styled.span`
    margin-left: 150px;
    text-transform: uppercase;
  `;
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    div {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      margin-right: 5px;
      input {
        width: 59%;
        outline: none;
        background-color: smoke;
      }
    }
  `;
  const Tax = styled.span`
    display: flex;
    align-items: center;
    h5 {
      color: white;
      font-weight: 200;
      font-size: 15px;
    }
    span {
      display: flex;
      justify-content: space-between;
      margin-left: 140px;
      align-items: center;
    }
  `;
  const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    text-transform: uppercase;
    h4 {
      border-bottom: 1px solid red;
    }
  `;
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart);
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
  const transactionSuccess = async (data) => {
    let variables = {
      cartDetail: carts.cartItems,
      paymentData: data,
      total: carts.cartTotalAmount,
    };
    await axios
      .post("http://localhost:5000/user/successBuy", variables)
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
    <Wrapper>
      <i
        className="bi bi-x-circle text-4xl text-red-700"
        onClick={() => handleClearCart()}
      ></i>
      {/* neader section   */}
      <Main className="row relative w-full">
        {/* cart section */}
        {/* mapping cart items */}
        {carts.cartItems.length === 0 ? (
          <div className="w-[60%]">
            <h4 className="text-4xl m-[40px]">your cart is empty!</h4>
          </div>
        ) : (
          carts.cartItems.map((cartItem) => {
            return (
              <div
                className="col-lg-6 flex mt-[20px] w-[60%] gap-12 h-[20%] rounded justify-between items-center border-b-4 border-gray-400"
                key={cartItem.id}
              >
                {/* div of image and it details */}
                <Product>
                  {/* image */}
                  <img src={cartItem.imagi} alt="photos" />
                  <div>
                    {/* product name */}
                    <span>
                      <i>{cartItem.name}</i>
                    </span>
                    {/* price */}
                    <h4>{cartItem.price}</h4>
                  </div>
                </Product>
                {/* div of quantity */}
                <Quantiy>
                  <h5>{cartItem.cartQuantity}</h5>
                  <div>
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
                </Quantiy>
                {/* amount */}
                <span className="font-bolder uppercase">{cartItem.total}</span>
                {/* delete */}
                <button
                  className="mr-[8px] bg-red-300 p-3 rounded shadow-xl shadow-blue-200"
                  onClick={() => handleRemove(cartItem)}
                >
                  remove
                </button>
              </div>
            );
          })
        )}

        {/* summarly section */}
        <div className="mt-[10px]  shadow-xl rounded-2 mr-3 ml-3 p-3 z-10 absolute top-0 bg-green-100 w-[25%] right-0">
          <div className="mt-[30px] text-center uppercase">order summarly</div>
          <div className="p-1 bg-gray-300 w-[155px] ml-[31%]"></div>
          <div className=" mt-[10px] flex justify-between mb-9">
            <span className="text-xl font-light uppercase">total item</span>
            <span className="mr-[10px]">5</span>
          </div>
          <Detail>shipping detail</Detail>
          <Container>
            <div>
              <label className="uppercase">name:</label>
              <input
                placeholder="mary wanboi"
                type="name"
                required
                className=" border-b-4 border-gray-400 bg-gray-100 p-3"
              />
            </div>
            <div>
              <span className="uppercase">telphone no :</span>
              <input
                placeholder="07*********"
                className="border-b-4 border-gray-400 bg-gray-100 p-3"
              />
            </div>
            {/* county selection */}
            <div className="flex justify-center items-center">
              <select
                name="cars"
                id="cars"
                className="p-4 w-[200px] border-b-2 border-gray-500 outline-none uppercase text-sm"
              >
                <option value="volvo">*select county*</option>
                <option value="saab" className="uppercase text-sm">
                  kisumu
                </option>
                <option value="mercedes" className="uppercase text-sm">
                  kitale
                </option>
                <option value="audi" className="uppercase text-sm">
                  Transnzoia
                </option>
                <option value="volvo" className="uppercase text-sm">
                  Eldoret
                </option>
                <option value="saab" className="uppercase text-sm">
                  kisumu
                </option>
                <option value="mercedes" className="uppercase text-sm">
                  kitale
                </option>
                <option value="audi" className="uppercase text-sm">
                  Transnzoia
                </option>
                <option value="volvo" className="uppercase text-sm">
                  Eldoret
                </option>
                <option value="saab" className="uppercase text-sm">
                  kisumu
                </option>
                <option value="mercedes" className="uppercase text-sm">
                  kitale
                </option>
                <option value="audi" className="uppercase text-sm">
                  Transnzoia
                </option>
              </select>
              {/* location selection */}
              <select
                name="cars"
                id="cars"
                className="p-4 w-[200px] border-b-2 border-gray-500 outline-none uppercase text-sm"
              >
                <option value="volvo">*select station*</option>
                <option value="saab" className="uppercase text-sm">
                  Munyaka
                </option>
                <option value="mercedes" className="uppercase text-sm">
                  kitale tower
                </option>
                <option value="audi" className="uppercase text-sm">
                  olkalau
                </option>
                <option value="volvo" className="uppercase text-sm">
                  gilgil
                </option>
                <option value="saab" className="uppercase text-sm">
                  kisumu mall
                </option>
                <option value="mercedes" className="uppercase text-sm">
                  westaland
                </option>
                <option value="audi" className="uppercase text-sm">
                  kitengela
                </option>
                <option value="volvo" className="uppercase text-sm">
                  kapsoya
                </option>
                <option value="saab" className="uppercase text-sm">
                  kericho
                </option>
                <option value="mercedes" className="uppercase text-sm">
                  ziwa
                </option>
                <option value="audi" className="uppercase text-sm">
                  matunda
                </option>
              </select>
            </div>
            {/* county drop down */}

            {/* location */}
          </Container>
          <Tax className="mb-[40px] mt-[50px]">
            <h5 className="text-black shadow-sm">
              tax 16% and transport fee within eldoret
            </h5>
            <span>
              <h4>200</h4>
              <h4>ksh</h4>
            </span>
          </Tax>

          <Total>
            <span>total cost</span>
            <h4>{carts.cartTotalAmount} ksh</h4>
          </Total>
          <Paypal
            toPay={carts.cartTotalAmount}
            onSuccess={transactionSuccess}
            transactionError={transactionError}
            transactionCancel={transactionCancel}
            className="p-4"
          />
        </div>
      </Main>
    </Wrapper>
  );
}
