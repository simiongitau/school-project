import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import { useDispatch } from "react-redux";
import { updateUser } from "../../Redux/Apicall";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");
  // register dtail catching
  const [email1, setEmail1] = useState("");
  const [password1, setPassord1] = useState("");
  const [confirm, setConfirm] = useState("");
  console.log(confirm);
  const dispatch = useDispatch();

  // fuction to submit value login
  const SubmitData = (e) => {
    e.preventDefault();
    updateUser({ email, password }, dispatch);
  };
  // function to subbmit register
  const SubmitRegister = (e) => {
    e.preventDeafult();
  };
  return (
    <div className="grid grid-cols-2 pt-[100px]">
      {/* login div */}
      <div className="p-10 flex justify-center">
        <form
          className="bg-blue-200 w-[70%]  rounded shadow-xl p-3"
          onSubmit={SubmitData}
        >
          <span className="font-bold uppercase mx-[50%] ">login</span>
          <div className="flex justify-around items-center mt-4">
            <span className="uppercase font-light">name:</span>
            <input
              type="text"
              required
              className="p-3 ml-7 border-b-2 outline-none border-gray-600"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-around items-center">
            <span className="uppercase font-light">password:</span>
            <input
              type="password"
              required
              className="p-3 mt-4  border-b-2 outline-none border-gray-600"
              onChange={(e) => setPassord(e.target.value)}
            />
          </div>
          <button
            className="bg-gray-600 p-3 w-[150px] rounded mt-20 mx-[40%] text-white"
            type="submit"
          >
            send
          </button>
        </form>
      </div>
      {/* register div */}
      <div className=" p-10 justify-center">
        <form
          className="w-[80%] shadow-xl bg-blue-200 rounded p-4"
          onSubmit={SubmitRegister}
        >
          <span className="font-bold uppercase mx-[40%] ">register</span>
          <div className="flex justify-around mt-3 items-center">
            <span className="uppercase font-light ">email:</span>
            <input
              type="text"
              required
              className="p-3 ml-[106px] outline-none border-b-2 border-gray-500"
              onChange={(e) => setEmail1(e.target.value)}
            />
          </div>
          <div className="flex justify-around mt-3 items-center ">
            <span className="uppercase font-light">password:</span>
            <input
              type="text"
              required
              className="p-3 ml-20 border-b-2 border-gray-500 outline-none"
              onChange={(e) => setPassord1(e.target.value)}
            />
          </div>
          <div className="flex justify-around mt-3 items-center">
            <span className="uppercase font-light">confirm password:</span>
            <input
              type="text"
              required
              className="p-3 ml-4 border-b-2 border-gray-500 outline-none"
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
          <button className="p-3 bg-gray-500 w-[150px] rounded mx-[40%] my-4 text-white">
            send
          </button>
        </form>
      </div>
    </div>
  );
}
