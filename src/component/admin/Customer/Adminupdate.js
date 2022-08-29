import React from "react";
import axios from "axios";
import { useState } from "react";
export default function Adminupdate({ id, setOnclick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(id);
  const role = {
    role: "admin",
  };
  // methode to handle submit
  const HandleSubmit = (e, id) => {
    e.preventDefault();
    console.log("welcome");
    axios
      .patch(`http://localhost:5000/user/update/${id}`, {
        email,
        password,
        role,
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };
  console.log(id);
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#00000030] absolute top-0 left-0 z-50">
      <form
        className="w-[500px] h-[300px] mt-5 bg-slate-200 rounded p-4 flex flex-col "
        onSubmit={HandleSubmit}
      >
        <i
          className="bi bi-x-circle text-red-500 text-end text-xl cursor-pointer"
          onClick={() => setOnclick(false)}
        ></i>
        <h2 className="font-bold text-xl mx-auto uppercase">update</h2>
        <div className="flex items-center">
          <label className="uppercase">email:</label>
          <input
            className="p-3 my-2 ml-14 outline-none border-b-2 border-gray-800"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <label className="uppercase">password:</label>
          <input
            className="p-3 ml-4 outline-none border-b-2 border-gray-800"
            required
            onClick={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-[150px] rounded bg-gray-500 p-3 m-auto "
          type="submit"
        >
          send
        </button>
      </form>
    </div>
  );
}
