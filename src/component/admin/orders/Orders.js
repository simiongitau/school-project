import React from "react";
import styled from "styled-components";
export default function Orders() {
  const Main = styled.div`
    width: 90%;
    text-transform: uppercase;
    border-radius: 5px;
    background-color: rgba(245, 234, 221, 0.906);
    height: 70px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 25px;
    button {
      width: 100px;
      padding: 5px;
      border-radius: 20px;
      cursor: pointer;
      text-transform: uppercase;
      border: none;
      height: 40px;
      border: 1px solid gray;
    }
  `;
  return (
    <Main className="shadow-xl">
      <span>simiongitau99</span>
      <span style={{ fontWeight: "bolder" }}>tybghgdy</span>
      <span>
        5600 <span style={{ fontWeight: "bold" }}>ksh</span>
      </span>
      <button>success</button>
      <button>pedding</button>
      <button style={{ backgroundColor: "red" }}>cancel</button>
    </Main>
  );
}
