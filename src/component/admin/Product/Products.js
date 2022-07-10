import React from "react";
import styled from "styled-components";
import imj from "../../../assert/dap.jpg";
import { Link } from "react-router-dom";
export default function Products() {
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 19vh;
    width: 90%;
    padding: 0px 15px;
    margin: 10px 30px;
    border-radius: 10px;
    img {
      height: 100px;
      width: 150px;
    }
    div {
      display: flex;
      flex-direction: column;
      span {
        margin-left: 30px;
      }
    }
    button {
      border: 1px solid gray;
      outline: none;
      padding: 5px;
      width: 100px;
      border-radius: 20px;
      text-transform: uppercase;
    }
    p {
      height: 80px;
      width: 300px;
      text-align: jutify;
      font-weight: 100;
    }
  `;

  return (
    <Wrapper className="border-y-2 shadow-sm bg-gray-50">
      <div>
        <img src={imj} alt="photos" width="2opx" height="20px" />
        <span>
          <i>spinach</i>
        </span>
      </div>
      <span className="text-3xl font-light uppercase">
        500<span>kesh</span>
      </span>
      <p>
        Coast farmcare agrovet is an organization online web application for
        selling their product
      </p>
      <Link to="/update">
        <button>update</button>
      </Link>
      <button style={{ backgroundColor: "red" }}>remove</button>
    </Wrapper>
  );
}
