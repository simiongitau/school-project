import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../Redux/Apicall";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");
  const [confirm, setConfirm] = useState("");
  const [regesterError, setRegisterError] = useState("");
  const [condition, setCondition] = useState(null);
  const Error = useSelector((state) => state.user.error);
  let navigate = useNavigate();
  console.log(Error);
  console.log(confirm);
  const dispatch = useDispatch();

  // function to submit value login
  const SubmitData = (e) => {
    e.preventDefault();
    updateUser({ email, password }, dispatch, navigate);
  };
  // function to submit register
  const SubmitRegister = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/user", { email, password, confirm })
      .then(function (response) {
        setCondition(response.data.success);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        setCondition(error.response.data.success);
      });
  };
  return (
    <div className="grid grid-cols-2 pt-[100px]">
      {/* login div */}
      <div className="p-10 flex justify-center">
        <form
          className=" w-[80%]  rounded shadow-xl p-3 bg-gray-200"
          onSubmit={SubmitData}
        >
          <span className="font-bold uppercase mx-[50%] ">login</span>
          <div className="flex justify-around items-center mt-4">
            <span className="uppercase font-light">email:</span>
            <input
              type="email"
              required
              className="p-3 ml-7 border-b-2 outline-none border-gray-600 bg-gray-100"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-around items-center">
            <span className="uppercase font-light">password:</span>
            <input
              type="password"
              required
              className="p-3 mt-4  border-b-2 outline-none border-gray-600 bg-gray-100"
              onChange={(e) => setPassord(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center">
            {Error === true ? (
              <h1 className="text-red-500 text-sm my-2">
                incorrect credial or no account register first
              </h1>
            ) : (
              ""
            )}
          </div>
          <button
            className="bg-gray-600 p-3 w-[150px] rounded   text-white my-[50px] mx-[250px]"
            type="submit"
          >
            send
          </button>
        </form>
      </div>
      {/* register div */}
      <div className=" p-10 justify-center">
        <form
          className="w-[80%] shadow-xl bg-gray-200 rounded p-4"
          onSubmit={SubmitRegister}
        >
          <span className="font-bold uppercase mx-[40%] ">register</span>
          <div className="flex justify-around mt-3 items-center">
            <span className="uppercase font-light ">email:</span>
            <input
              type="email"
              required
              className="p-3 ml-[106px] outline-none border-b-2 border-gray-500 bg-gray-100"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-around mt-3 items-center ">
            <span className="uppercase font-light">password:</span>
            <input
              type="password"
              required
              className="p-3 ml-20 border-b-2 border-gray-500 outline-none bg-gray-100"
              onChange={(e) => setPassord(e.target.value)}
            />
          </div>
          <div className="flex justify-around mt-3 items-center">
            <span className="uppercase font-light">confirm password:</span>
            <input
              type="password"
              required
              className="p-3 ml-4 border-b-2 border-gray-500 outline-none bg-gray-100"
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center">
            {condition === false ? (
              <span className="text-sm text-red-500">
                fail:minimum password of 6 digit require or incorrect email
                format
              </span>
            ) : condition === true ? (
              toast.success(`successful registered`, {
                position: "top-center",
              })
            ) : (
              ""
            )}
          </div>
          <button className="p-3 bg-gray-500 w-[150px] rounded mx-[40%] my-4 text-white">
            send
          </button>
        </form>
      </div>
    </div>
  );
}
