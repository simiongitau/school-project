import React from "react";
import styled from "styled-components";
import axios from "axios";
import Products from "./Products";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../Redux/cartSlice";
import "./product.css";
import Footer from "../footer/Footer";
export default function Product() {
  const [Data, setData] = useState([]);
  console.log(Data);
  const Main = styled.div`
    display: flex;
  `;
  const Light = styled.div`
    flex: 2;
    background-color: rgba(128, 128, 128, 0.644);
    /* height: 90vh; */
  `;
  const Right = styled.div`
    flex: 10;
    /* height: 90vh; */
  `;
  const fetchData = async () => {
    await axios
      .get(`http://localhost:5000/products`)
      .then((response) => {
        setData(response.data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [carts, dispatch]);
  // console.log(Data);
  console.log(Data.product);
  const handleCategorly = (id) => {
    const final = Data.filter((item) => item.category === id);
    setData(final);
  };
  return (
    <>
      <Main className="">
        <Light className="flex flex-col p-4 gap-3">
          {/* <Side /> */}
          <h2 className="mx-auto font-bold uppercase">categorly</h2>
          <div className="p-1 bg-gray-100 rounded"></div>
          <button
            className="shadow-sm border-x-2 border-green-200 p-3 bg-gray-300 uppercase"
            onClick={() => handleCategorly("simlawseed")}
          >
            simlawseed
          </button>
          <button
            className="shadow-sm border-x-2 border-green-200 p-3 bg-gray-300 uppercase"
            onClick={() => handleCategorly("pestcide")}
          >
            pestcide
          </button>
          <button
            className="shadow-sm border-x-2 border-green-200 p-3 bg-gray-300 uppercase"
            onClick={() => handleCategorly("fertilizer")}
          >
            fertilizer
          </button>
          <button
            className="shadow-sm border-x-2 border-green-200 p-3 bg-gray-300 uppercase"
            onClick={() => handleCategorly("herbcide")}
          >
            herbalcide
          </button>
          <button
            className="shadow-sm border-x-2 border-green-200 p-3 bg-gray-300 uppercase"
            onClick={() => handleCategorly("insectcide")}
          >
            insectside
          </button>
          <button
            className="shadow-sm border-x-2 border-green-200 p-3 bg-gray-300 uppercase"
            onClick={() => handleCategorly("animalbird")}
          >
            animal & bird feeds
          </button>
        </Light>
        <Right className="container">
          <div className="row">
            {Data?.map((product) => {
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
