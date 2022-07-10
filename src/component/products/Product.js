import React from "react";
import Side from "../side/Side";
import product from "../../Data";
import styled from "styled-components";
import Products from "./Products";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../Redux/cartSlice";
import "./product.css";
import Footer from "../footer/Footer";
export default function Product() {
  const [Data, setData] = useState(product);
  const Main = styled.div`
    display: flex;
  `;
  const Light = styled.div`
    flex: 2;
    background-color: rgba(128, 128, 128, 0.644);
    height: 90vh;
  `;
  const Right = styled.div`
    flex: 10;
    height: 90vh;
  `;
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [carts, dispatch]);
  // console.log(Data);
  const filterSimlaw = (items) => {
    const result = Data.filter((curData) => {
      return curData.categorly === items;
    });
    setData(result);
  };
  return (
    <>
      <Main>
        <Light className="flex flex-col p-4 gap-3">
          {/* <Side /> */}
          <h2 className="mx-auto font-bold uppercase">categorly</h2>
          <div className="p-1 bg-gray-100 rounded"></div>
          <button
            className="shadow-sm border-x-2 border-green-200 p-3 bg-gray-300 uppercase"
            onClick={() => filterSimlaw("simlawseed")}
          >
            simlawseed
          </button>
          <button
            className="shadow-sm border-x-2 border-green-200 p-3 bg-gray-300 uppercase"
            onClick={() => filterSimlaw("simlawseed")}
          >
            pestcide
          </button>
          <button
            className="shadow-sm border-x-2 border-green-200 p-3 bg-gray-300 uppercase"
            onClick={() => filterSimlaw("fertilizer")}
          >
            fertilizer
          </button>
          <button
            className="shadow-sm border-x-2 border-green-200 p-3 bg-gray-300 uppercase"
            onClick={() => filterSimlaw("herbalcide")}
          >
            herbalcide
          </button>
          <button
            className="shadow-sm border-x-2 border-green-200 p-3 bg-gray-300 uppercase"
            onClick={() => filterSimlaw("simlawseed")}
          >
            insectside
          </button>
          <button
            className="shadow-sm border-x-2 border-green-200 p-3 bg-gray-300 uppercase"
            onClick={() => filterSimlaw("simlawseed")}
          >
            animal & bird feeds
          </button>
        </Light>
        <Right className="container">
          <div className="row">
            {Data.map((product) => {
              return <Products product={product} key={product.name} />;
            })}
          </div>
        </Right>
      </Main>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
