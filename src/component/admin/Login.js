import React from "react";
import styled from "styled-components";

export default function Login() {
  const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
    width: 100%;
  `;
  const Container = styled.div`
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    height: 40vh;
    width: 70vh;
    input {
      margin-bottom: 20px;
      width: 65%;
      font-weight: 500;
    }
    button {
      width: 130px;
      padding: 10px;
      cursor: pointer;
      border-radius: 20px;
    }
  `;
  return (
    <>
      <Main>
        <Container className="shadow-xl flex justify-center items-center">
          <div className="">
            <span style={{ marginRight: "30px" }} className="uppercase">
              email:
            </span>
            <input
              placeholder="enter email"
              className="border-b-4 border-gray-400 bg-gray-100 p-3 ml-5"
            />
          </div>
          <div>
            <span className="uppercase">password:</span>
            <input
              placeholder="enter password"
              className="border-b-4 border-gray-400 bg-gray-100 p-3 ml-3"
            />
          </div>
          <button className="bg-gray-300">send</button>
        </Container>
      </Main>
    </>
  );
}
