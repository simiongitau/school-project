import React from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { addDetail, addToCart } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";
export default function Detail() {
  const Container = styled.div`
    display: flex;
    height: 63vh;
  `;
  const Right = styled.div`
    flex: 6;
    div {
      display: flex;
      flex-direction: column;
      margin-right: 10px;
      p {
        text-align: justify;
        letter-space: 3px;
        margin-top: 10px;
        padding-bottom: 28px;
      }
    }
  `;
  const Light = styled.div`
    flex: 6;
    display: flex;
  `;
  const dispatch = useDispatch();
  const Detail = useSelector((state) => state.product.productInfo);
  console.log(Detail.name);
  const hanbleAddTocart = (d) => {
    // dispatch is used to update the state
    dispatch(addToCart(d));
  };
  return (
    <>
      {/* {Detail?.map((e) => console.log(e))} */}
      <Container>
        <Light className="flex flex-col">
          <img
            src={`http://localhost:5000/${Detail.productImage}`}
            alt="photos"
            className="w-[350px] h-[350px] mx-auto"
          />
          <div className="w-full p-4 flex justify-center items-center space-x-2 font-light">
            <span className="uppercase">name:</span>
            <span className="underline font-bold uppercase">
              {Detail.name}.
            </span>
          </div>
        </Light>
        <Right>
          {/* <h1>good</h1>
            paragraph */}
          <div>
            <p className="font-ligh py-4 pr-6 font-extralight">{Detail.desc}</p>
            <div className=" flex justify-center items-center flex-row space-x-10 my-10">
              <button
                className="bg-green-400 p-[0.5em] rounded cursor-pointer text-sm uppercase"
                onClick={() => hanbleAddTocart(Detail)}
              >
                add to cart
              </button>
              <Link to="/">
                <button className="bg-green-400  p-[0.5em] w-[6.3em] rounded cursor-pointer uppercase text-sm">
                  back
                </button>
              </Link>
            </div>
          </div>
          {/* back button */}
          {/* add to cart button */}
        </Right>
      </Container>
      <Footer />
    </>
  );
}
