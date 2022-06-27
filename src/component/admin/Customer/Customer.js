import React from "react";
import styled from "styled-components";
export default function Customer() {
  const Wrapper = styled.div`
    display: flex;
  `;
  const Main = styled.div`
    background-color: rgba(245, 234, 221, 0.906);
    padding: 5px;
    height: 100px;
    margin: 5px 25px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    button {
      padding: 4px;
      width: 100px;
      height: 40px;
      outline: none;
      border: none;
      border-radius: 20px;
      background-color: red;
      font-weight: 200px;
      text-transform: uppercase;
      cursor: pointer;
    }
    div {
      div {
        background-color: white;
        height: 70px;
        width: 80px;
        border-radius: 50px;
      }
    }
  `;
  const Right = styled.div`
    border-radius: 20px;
    margin: 5px 150px;
    background-color: rgba(245, 234, 221, 0.906);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
    button {
      padding: 5px;
      width: 100px;
      border-radius: 10px;
      cursor: pointer;
      text-transform: uppercase;
      outline: none;
      border: none;
      height: 40px;
      border: 1px solid gray;
    }
    div {
      padding-top: 3px;
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      div {
        height: 80px;
        width: 80px;
        background-color: white;
        border-radius: 35px;
      }
    }
  `;
  const Admin = styled.div`
    flex: 8;
  `;
  const Top = styled.div`
    flex: 4;
  `;
  return (
    <Wrapper>
      <Top>
        <span style={{ marginLeft: "150px", textTransform: "uppercase" }}>
          registered customers
        </span>
        <Main className="shadow-lg">
          <div>
            <div>{/* image s  */}</div>
            <span>
              {/* <span style={{marginRight:'10px'}}>email:</span> */}
              <span>simiongitau99@gmail.com</span>
            </span>
          </div>
          <button>delete</button>
        </Main>
      </Top>
      <Admin>
        <span style={{ marginLeft: "400px", textTransform: "uppercase" }}>
          system administrator members
        </span>
        <Right className="shadow-lg">
          <div>
            <div></div>
            <span>simion33@gmail.com</span>
          </div>
          <button>add</button>
          <button>edit</button>
        </Right>
      </Admin>
    </Wrapper>
  );
}
