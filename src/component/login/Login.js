import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import { useDispatch } from "react-redux";
import { updateUser } from "../../Redux/Apicall";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const user = {
    email,
    password,
  };

  // method to handle submit
  // const handleSubmit = () => {
  //   updateUser(user, dispatch);
  // };

  const Main = styled.div`
    display: flex;
  `;
  const Light = styled.div`
    flex: 6;
    height: 62vh;
    span {
      text-transform: uppercase;
    }
    div {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      margin-bottom: 20px;
      span {
        margin-bottom: 20px;
        input {
          color: gray;
          width: 250px;
        }
      }
    }
    button {
      width: 100px;
      padding: 10px;
      border-radius: 15px;
      margin-bottom: 15px;
    }
  `;
  const Email = styled.span`
    font-size: 15px;
    text-transform: uppercase;
    margin-right: 45px;
  `;
  const Password = styled.span`
    font-size: 15px;
    text-transform: uppercase;
    margin-right: 12px;
  `;
  const Right = styled.div`
    flex: 6;
    height: 62vh;
    span {
      text-transform: uppercase;
    }
    div {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      margin-bottom: 20px;
      span {
        margin-bottom: 5px;
        input {
          color: gray;
          width: 250px;
        }
      }
    }
    button {
      width: 100px;
      padding: 10px;
      border-radius: 15px;
    }
  `;
  const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    border-radius: 20px;
    padding-bottom: 100px;
    margin-left: 4px;
    margin-right: 4px;
  `;
  const Ema = styled.span`
    font-size: 15px;
    text-transform: uppercase;
    margin-right: 115px;
  `;
  const Pass = styled.span`
    font-size: 15px;
    text-transform: uppercase;
    margin-right: 79px;
  `;
  const Corn = styled.span`
    font-size: 15px;
    text-transform: uppercase;
    margin-right: 12px;
  `;
  return (
    <form>
      <Main>
        <Light>
          {/* heading */}
          <Center className="shadow-xl">
            <span>login in</span>
            <div>
              <span>
                <Email>email:</Email>
                <input
                  type="text"
                  // placeholder="enter email address"
                  className="p-3 border-b-4 border-gray-400 bg-gray-100"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </span>
              <span>
                <Password>password:</Password>
                <input
                  type="password"
                  placeholder="enter password"
                  className="p-3 border-b-4 border-gray-400 bg-gray-100"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </span>
            </div>
            <button
              className="bg-gray-500"
              // onClick={handleSubmit()}
            >
              send
            </button>
          </Center>
        </Light>

        {/* registered section     */}
        <Right>
          <Center className="shadow-xl">
            <span>register</span>
            <div>
              <span>
                <Ema>email:</Ema>
                <input
                  placeholder="enter email address"
                  className="p-3 border-b-4 border-gray-400 bg-gray-100"
                />
              </span>
              <span>
                <Pass>password:</Pass>
                <input
                  placeholder="enter password"
                  className="p-3 border-b-4 border-gray-400 bg-gray-100"
                />
              </span>
              <span>
                <Corn>confirm password:</Corn>
                <input
                  placeholder="confirm password"
                  className="p-3 border-b-4 border-gray-400 bg-gray-100"
                />
              </span>
            </div>
            <button className="bg-gray-400">send</button>
          </Center>
        </Right>
      </Main>
      <Footer />
    </form>
  );
}
