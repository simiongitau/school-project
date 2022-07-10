import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addDetail, addToCart } from "../../Redux/cartSlice";
export default function Products({ product }) {
  const Wrapper = styled.div`
    background-color: rgba(165, 173, 180, 0.842);
    padding: 10px;
    height: 40vh;
    width: 35vh;
    margin: 5px;
    border-radius: 6px;
    transition: 3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      height: 170px;
      width: 200px;
      object: cover;
    }
    :hover {
      background-color: gray;
      box-shadow: 2px;
    }
  `;
  const Info = styled.div`
    display: flex;
    font-size: 20px;
    font-weight: 300;
    justify-content: space-between;
    height: 60px;
    width: 100%;
    align-items: center;
    margin-top: 5px;
    text-transform: uppercase;
  `;
  const Nav = styled.div`
    width: 100%;
    margin-top: 3px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      width: 100px;
      border-radius: 20px;
      font-size: 15px;
      height: 40px;
      border: none;
      background-color: rgb(228, 245, 180);
      text-transform: uppercase;
    }
  `;
  // console.log(product);
  const dispatch = useDispatch();
  const { name, imagi, price } = product;
  // method to add items to cart
  const hanbleAddTocart = (product) => {
    // dispatch is used to update the state
    dispatch(addToCart(product));
  };
  // handle detail
  return (
    <div className="col-lg-3 col-sm-6">
      <Wrapper>
        {/* we have image */}
        <img src={imagi} alt="photos" />
        {/* div containing price and the name of product */}
        <Info>
          <span>{name}</span> <span>{price}</span>
        </Info>
        <Nav>
          <Link to="/detail">
            {" "}
            <button>maelezo</button>
          </Link>
          <button onClick={() => hanbleAddTocart(product)}>add to cart</button>
        </Nav>
      </Wrapper>
    </div>
  );
}
