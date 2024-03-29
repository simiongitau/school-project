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
  const [originalData, setOriginalData] = useState([]);
  console.log(Data);
  const Main = styled.div`
    display: flex;
  `;
  const Light = styled.div`
    flex: 2;
  `;
  const Right = styled.div`
    flex: 10;
  `;
  const fetchData = async () => {
    await axios
      .get(`http://localhost:5000/products`)
      .then((response) => {
        setData(response.data.product);
        setOriginalData(response.data.product);
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
  console.log(Data.product);
  const handleCategorly = (id) => {
    const final = originalData.filter((item) => item.category === id);
    setData(final);
  };
  return (
    <>
      <Main className="min-h-screen bg-[#d8e4eb]">
        <Light className="flex flex-col p-4">
          {/* <Side /> */}
          <h2 className="mx-auto font-bold uppercase">categorly</h2>
          <div className="p-1 bg-gray-100 rounded"></div>
          <button
            className="shadow-sm border-x-2 border-gray-200 p-3 bg-gray-100 uppercase font-light border-b-2 text-sm "
            onClick={() => handleCategorly("simlawseed")}
          >
            simlawseed
          </button>
          <button
            className="shadow-sm border-x-2 border-gray-200 p-3 bg-gray-100 uppercase font-light border-b-2 text-sm"
            onClick={() => handleCategorly("pestcide")}
          >
            pestcide
          </button>
          <button
            className="shadow-sm border-x-2 border-gray-200 p-3 bg-gray-100 uppercase font-light border-b-2 text-sm"
            onClick={() => handleCategorly("fertilizer")}
          >
            fertilizer
          </button>
          <button
            className="shadow-sm border-x-2 border-gray-200 p-3 bg-gray-100 uppercase font-light border-b-2 text-sm"
            onClick={() => handleCategorly("herbcide")}
          >
            herbalcide
          </button>
          <button
            className="shadow-sm border-x-2 border-gray-200 p-3 bg-gray-100 uppercase font-light border-b-2 text-sm"
            onClick={() => handleCategorly("insectcide")}
          >
            insectside
          </button>
          <button
            className="shadow-sm border-x-2 border-gray-200 p-3 bg-gray-100 uppercase font-light border-b-2 text-sm"
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
      <div className="footer ">
        <Footer />
      </div>
    </>
  );
}
