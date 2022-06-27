import React from "react";
import styled from "styled-components";
import imj from "../../../assert/images (1).jpg";
import { Link } from "react-router-dom";
export default function Products() {
  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(245, 234, 221, 0.906);
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
    <Wrapper className="shadow-xl">
      <div>
        <img src={imj} alt="photos" />
        <span>
          <i>spinach</i>
        </span>
      </div>
      <span>
        500<span style={{ fontWeight: "bold" }}>ksh</span>
      </span>
      <p>
        Coast farmcare agrovet is an organization online web application for
        selling their product{" "}
      </p>
      <Link to="/update">
        <button>update</button>
      </Link>
      <button style={{ backgroundColor: "red" }}>remove</button>
    </Wrapper>
  );
}
