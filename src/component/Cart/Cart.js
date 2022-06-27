import React from "react";
import styled from "styled-components";
import top from "../../assert/images (1).jpg";
import { useDispatch, useSelector } from "react-redux";
import { removeItemsCart } from "../../Redux/cartSlice";
export default function Cart() {
  const Wrapper = styled.div`
    position: relative;
  `;
  const Cart = styled.div`
    flex: 8;
    height: 78vh;
    background-color: rgba(179, 174, 168, 0.295);
    border-radius: 15px;
    display: flex;
    height: 20vh;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;
  `;
  const Summarly = styled.div`
    flex: 4;
    height: 70vh;
    z-index: 1;
    position: absolute;
    right: 0;
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
        padding: 3px;
        border-radius: 2px;
        border: 1px solid gray;
        outline: none;
        background-color: rgba(183, 234, 243, 0.63);
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
      <Main>
        {/* cart section */}
        {/* mapping cart items */}
        {carts.cartItems.length === 0 ? (
          <div>
            <h4>your cart is empty</h4>
          </div>
        ) : (
          carts.cartItems.map((cartItem) => {
            return (
              <Cart className="mt-[20px]" key={cartItem.id}>
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
              </Cart>
            );
          })
        )}

        {/* summarly section */}
        <Summarly className="mt-[20px] bg-slate-200 shadow-xl rounded-2">
          <div className="mt-[30px] text-center uppercase">order summarly</div>
          <div className="p-1 bg-primary w-[150px] ml-[30%]"></div>
          <div className=" mt-[10px] flex justify-between mb-9">
            <span className="text-xl font-light uppercase">total item</span>
            <span className="mr-[10px]">5</span>
          </div>
          <Detail>shipping detail</Detail>
          <Container>
            <div>
              <label>name:</label>
              <input placeholder="mary wanboi" type="name" required />
            </div>
            <div>
              <span>telphone no :</span>
              <input placeholder="07*********" />
            </div>
            <div>
              <span>county:</span>
              <input placeholder="07*********" />
            </div>
            <div>
              <span>location</span>
              <input placeholder="07*********" />
            </div>
            {/* county drop down */}

            {/* location */}
          </Container>
          <Tax className="mb-[40px] mt-[50px]">
            <h5 className="text-black">tax 16% and transport fee</h5>
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
            <button className="bg-gray-700 p-2 w-[150px] ml-[150px] mt-2 rounded text-white">
              checkout
            </button>
          </>
        </Summarly>
      </Main>
      {/* <Footer/> */}
    </Wrapper>
  );
}
