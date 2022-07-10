import React from "react";
import styled from "styled-components";
export default function Side() {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    span {
      font-weight: 200;
      font-size: 24px;
      margin-left: 30%;
      margin-top: 5px;
    }
    button {
      width: 150px;
      padding-top: 5px;
      padding-bottom: 5px;
      margin-left: 30px;
      margin-bottom: 20px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 15px;
      font-weight: 100;
      outline: none;
      text-transform: uppercase;
      height: 50px;
    }
    div {
      width: 100px;
      margin-bottom: 12px;
      height: 5px;
      background-color: red;
      border-radius: 2px;
      margin-left: 70px;
    }
  `;
  return (
    <Wrapper>
      <span>categoly</span>
      <div></div>

      <button className="shadow-sm border-x-2 border-green-200">
        pestcide
      </button>
      <button className="shadow-sm border-x-2 border-green-200">
        fertilizer
      </button>
      <button className="shadow-sm border-x-2 border-green-200">
        herbalcide
      </button>
      <button className="shadow-sm border-x-2 border-green-200">
        insectside
      </button>
      <button className="shadow-sm border-x-2 border-green-200">
        simlaw seed
      </button>
      <button className="shadow-sm border-x-2 border-green-200">
        animal & bird feeds
      </button>
    </Wrapper>
  );
}
