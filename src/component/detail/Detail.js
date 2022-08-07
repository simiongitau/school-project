import React from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import gff from "../../assert/dap.jpg";
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
        letter-space: 2px;
        margin-top: 10px;
        padding-bottom: 28px;
      }
      span {
        display: flex;
        justify-content: space-between;
        width: 400px;
        margin-left: 290px;
        button {
          width: 150px;
          padding: 8px;
          border-radius: 10px;
          outline: none;
          text-transform: uppercase;
        }
      }
    }
  `;
  const Light = styled.div`
    flex: 6;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      span {
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        text-transform: capitalize;
        margin-top: 10px;
        width: 250px;
        margin-left: 30px;
      }
      img {
        width: 350px;
        height: 350px;
      }
    }
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
        <Light>
          <div>
            <img
              src={`http://localhost:5000/${Detail.productImage}`}
              alt="photos"
            />
            <span>
              <span>name:</span>
              <span>{Detail.name}</span>
            </span>
          </div>
        </Light>
        <Right>
          {/* <h1>good</h1>
            paragraph */}
          <div>
            <p className="font-light">{Detail.desc}</p>
            <span>
              <button
                className="bg-[#f7fee7]"
                onClick={() => hanbleAddTocart(Detail)}
              >
                add to cart
              </button>
              <Link to="/">
                <button className="bg-[#f7fee7]">back</button>
              </Link>
            </span>
          </div>
          {/* back button */}
          {/* add to cart button */}
        </Right>
      </Container>
      <Footer />
    </>
  );
}
