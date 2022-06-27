import React from "react";
import styled from "styled-components";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { removeItemsCart } from "../../Redux/cartSlice";
import send from "../../assert/send.jpg";
export default function Cart() {
  const Wrapper = styled.div`
    position: relative;
  `;
  const Main = styled.div`
    display: flex;
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
        padding: 6px;
        width: 59%;
        border-radius: 2px;
        border: 1px solid gray;
        outline: none;
        background-color: rgba(183, 234, 243, 0.63);
        border-radius: 5px;
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
  // method to remove item from the cart
  const handleRemove = (cartItem) => {
    dispatch(removeItemsCart(cartItem));
  };
  return (
    <Wrapper>
      {/* neader section   */}
      <Main className="">
        {/* cart section */}
        {/* mapping cart items */}
        {carts.cartItems.length === 0 ? (
          <div className="w-[75%]">
            <h4 className="text-4xl m-[40px]">your cart is empty!</h4>
          </div>
        ) : (
          carts.cartItems.map((cartItem) => {
            return (
              <div
                className="mt-[20px] w-[76%] flex gap-12 h-[20%] bg-slate-200 justify-between items-center"
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
                    <button className="bg-blue-200 rounded p-3 mb-3 shadow-xl">
                      +
                    </button>
                    <button className="bg-blue-200 rounded p-3 ">-</button>
                  </div>
                </Quantiy>
                {/* amount */}
                <span>45000</span>
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
        <div className="mt-[20px] bg-slate-300 shadow-xl rounded-2 ml-4 p-3 z-10  ">
          <div className="mt-[30px] text-center uppercase">order summarly</div>
          <div className="p-1 bg-primary w-[150px] ml-[30%]"></div>
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
                className="shadow-sm"
              />
            </div>
            <div>
              <span className="uppercase">telphone no :</span>
              <input placeholder="07*********" />
            </div>
            {/* county selection */}
            <div className="flex justify-center items-center">
              <DropdownButton
                // id="dropdown-basic-button"
                title="select pick county"
                className=" text-black h-10 bg-gray-400 w-fit rounded  "
              >
                <Dropdown.Item href="#/action-1">eldoret</Dropdown.Item>
                <Dropdown.Item href="#/action-2">kisumu</Dropdown.Item>
                <Dropdown.Item href="#/action-3">nyeri</Dropdown.Item>
                <Dropdown.Item href="#/action-1">nyandarua</Dropdown.Item>
                <Dropdown.Item href="#/action-2">nakuru</Dropdown.Item>
                <Dropdown.Item href="#/action-3">bomet</Dropdown.Item>
                <Dropdown.Item href="#/action-1">kisii</Dropdown.Item>
                <Dropdown.Item href="#/action-2">baringo</Dropdown.Item>
                <Dropdown.Item href="#/action-3">embu</Dropdown.Item>
              </DropdownButton>
              {/* location selection */}
              <DropdownButton
                // id="dropdown-basic-button"
                title="select pick location"
                className="h-10 bg-gray-400 w-fit rounded"
              >
                <Dropdown.Item href="#/action-1">kericho</Dropdown.Item>
                <Dropdown.Item href="#/action-2">burnforest</Dropdown.Item>
                <Dropdown.Item href="#/action-3">kitale town</Dropdown.Item>
                <Dropdown.Item href="#/action-1">olkarau</Dropdown.Item>
                <Dropdown.Item href="#/action-2">vihiga</Dropdown.Item>
                <Dropdown.Item href="#/action-3">nyanza town</Dropdown.Item>
              </DropdownButton>
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
            <h4>60 000 ksh</h4>
          </Total>
          <>
            <button className="bg-gray-700 p-2 w-[150px] ml-[150px] mt-2 rounded text-white ">
              checkout
            </button>
          </>
        </div>
      </Main>
      {/* <Footer/> */}
    </Wrapper>
  );
}
