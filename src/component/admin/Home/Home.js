import React from "react";
import styled from "styled-components";
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";
import Analysis from "../saleAnalysis/Analysis";
import "./home.css";
export default function Home() {
  const Wrapper = styled.div`
    display: flex;
    background-color: rgba(70, 64, 64, 0.342);
  `;
  const Right = styled.div`
    flex: 10;
    background-color: rgba(245, 245, 245, 0.938);
  `;
  const Left = styled.div`
    flex: 2;
    padding: 10px;
    display: flex;
    div {
      margin-left: 20px;
      button {
        padding: 5px;
        width: 250px;
        height: 55px;
        cursor: pointer;
        text-transform: uppercase;
      }
    }
  `;
  return (
    <>
      <Wrapper className="">
        <Left className="">
          <div>
            <button className="bg-gray-200 shadow-sm border-b-2 border-gray-500 font-light">
              sale analysis
            </button>
            <Link to="/product">
              {" "}
              <button className="bg-gray-200 shadow-sm border-b-2 border-gray-500 font-light">
                products
              </button>
            </Link>
            <Link to="/customer">
              {" "}
              <button className="bg-gray-200 shadow-sm border-b-2  border-gray-500 font-light">
                customers
              </button>
            </Link>
            <Link to="/order">
              {" "}
              <button className="bg-gray-200 shadow-sm  border-b-2 border-gray-500 font-light">
                orders
              </button>
            </Link>
            <button className="bg-gray-200 shadow-sm  border-gray-500 font-light"></button>
          </div>
        </Left>
        <Right>
          <Analysis />
        </Right>
      </Wrapper>
      <div className="bottom-footer">
        <Footer />
      </div>
    </>
  );
}
