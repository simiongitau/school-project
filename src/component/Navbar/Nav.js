import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateStart, updateError, updateSuccess } from "../../Redux/UserSlice";
import axios from "axios";
// import { updateUser } from "../../Redux/Apicall";
export default function Nav() {
  // accesing the state from the component
  // state user belong from the store
  const name = useSelector((state) => state.user.userInfo);
  console.log(name);
  const Main = styled.div`
    height: 100px;
    width: 100%;
    background-color: rgba(248, 198, 241, 0.651);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 5px;
    padding-right: 10px;
    span {
      font-weight: 100;
      font-size: 20px;
      text-transform: uppercase;
      cursor: pointer;
      margin-left: 20px;
    }
    div {
      font-weight: 100;
      font-size: 20px;
      text-transform: uppercase;
      cursor: pointer;
      margin-right: 20px;
    }
  `;
  const Unorder = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 25vh;
    position: relative;
    height: 70px;
    align-items: center;

    li {
      list-style: none;
      font-size: 17px;
      font-weight: 100;
      text-transform: uppercase;
      width: 80px;
      padding: 5px;
      text-align: center;

      :hover {
        color: rgba(228, 245, 180, 0.952);
        cursor: pointer;
        background-color: gray;
        border-radius: 4px;
      }
    }
    span {
      padding: 5px;
      background-color: red;
      height: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      border-radius: 35px;
      left: 25;
      top: 0;
    }
  `;
  // my testing
  const dispatch = useDispatch();
  const updateUser = async () => {
    // dispatch method is used to change the value of state
    dispatch(updateStart());
    try {
      const res = await axios.get("http://localhost:5000/");
      dispatch(updateSuccess(res.data));
    } catch (error) {
      dispatch(updateError(error));
    }
  };
  // my testing
  return (
    <Main>
      {/* image div */}
      <span>eldo agrovet</span>
      {/* list of home,cart about */}
      <Unorder>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <li>home</li>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
          <li>cart</li>
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
          <li>about</li>
        </Link>
        <span>16</span>
      </Unorder>
      {/* login and out */}
      <div onClick={updateUser}>login/out</div>
    </Main>
  );
}
