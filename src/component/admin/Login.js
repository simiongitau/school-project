import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../Redux/Apicall";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const Error = useSelector((state) => state.user.error);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ email, password }, dispatch, navigate);
  };

  console.log(email, password);
  return (
    <div
      className=" h-[87.5vh] flex justify-center items-center"
      onSubmit={handleSubmit}
    >
      <form className="shadow-xl p-3 bg-[#d4d1ba] w-[50%] h-[55%] flex flex-col justify-center items-center rounded">
        <span className="font-bold text-xl capitalize ">login</span>
        <div className="flex items-center my-10">
          <span className="uppercase">email:</span>
          <input
            placeholder="enter email"
            className="border-b-4 border-gray-400 bg-gray-100 p-3 ml-[100px] outline-none"
            required
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-12 ">
          <span className="uppercase">password:</span>
          <input
            placeholder="enter password"
            className="border-b-4 border-gray-400 bg-gray-100 p-3 ml-3 outline-none"
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {Error === true ? (
          <h1 className="text-red-500 my-2">incorrect credial?</h1>
        ) : (
          ""
        )}
        <button className="bg-gray-400 p-3 w-[150px] rounded my-auto">
          send
        </button>
      </form>
    </div>
  );
}
