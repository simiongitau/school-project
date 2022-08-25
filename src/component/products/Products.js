import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addDetail, addToCart } from "../../Redux/cartSlice";
import { getProduct } from "../../Redux/Apicall";
export default function Products({ product }) {
  const Wrapper = styled.div`
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
  const { name, price, productImage, instore, _id } = product;
  // method to add items to cart
  const hanbleAddTocart = (product) => {
    // dispatch is used to update the state
    dispatch(addToCart(product));
  };
  // handle detail
  const handleDetail = (id) => {
    getProduct(id, dispatch);
  };
  return (
    <div className="col-lg-3 col-sm-6 pt-4">
      <Wrapper className="bg-gray-400">
        {/* we have image */}
        <img src={`http://localhost:5000/${productImage}`} alt="photos" />
        {/* div containing price and the name of product */}
        <Info>
          <span className="text-sm font-bold uppercase">{name}</span>
          {instore === "true" ? (
            <span className="text-[0.6em] text-indigo-500 font-bold p-2">
              instore
            </span>
          ) : (
            <span>outstore</span>
          )}
          <span className="text-sm text-indigo-500 font-bold ">
            {price}
            <span className="pl-1">KESH</span>
          </span>
        </Info>
        <Nav>
          <Link to="/detail">
            <button onClick={() => handleDetail(_id)}>maelezo</button>
          </Link>
          <button onClick={() => hanbleAddTocart(product)}>add to cart</button>
        </Nav>
      </Wrapper>
    </div>
  );
}
