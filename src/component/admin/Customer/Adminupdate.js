import React from "react";
import { useState } from "react";
export default function Adminupdate() {
  const [email, setEmail] = useState("");
  console.log(email);
  return (
    <form className="w-[500px] h-[300px] bg-slate-200 rounded p-4 flex flex-col absolute top-20">
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
        />
      </div>
      <button className="w-[150px] rounded bg-gray-500 p-3 m-auto ">
        send
      </button>
    </form>
  );
}
