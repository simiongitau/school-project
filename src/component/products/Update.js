import React from "react";

export default function Update() {
  return (
    <div className=" flex justify-center items-center h-screen">
      <form
        className="w-1/2 p-10 rounded flex items-center flex-col shadow-xl"
        action="submit"
      >
        <div className="flex gap-10 mb-10  w-full ml-[60%]">
          <label className="uppercase my-auto">name</label>
          <input className=" p-3 border-b-2  bg-gray-100 outline-none" />
        </div>
        <div className="flex gap-10 mb-10   w-full ml-[60%]">
          <label className="uppercase my-auto">price</label>
          <input className=" p-3 border-b-2 bg-gray-100 outline-none" />
        </div>
        <div className="flex gap-10 mb-10 w-full ml-[50%] items-center">
          <label>instore</label>
          <input className="w-20" type="radio" />
        </div>
        <div className="flex gap-10 mb-10">
          <label className="uppercase my-auto">description</label>
          <textarea className=" p-3 border-b-2 bg-gray-100 "></textarea>
        </div>
        <div className="bg-gray-500 w-[150px] rounded">
          {/* <label>image</label> */}
          <input className="p-9 opacity-5 cursor-pointer " type="file" />
        </div>
        <button type="submit" className=""></button>
      </form>
    </div>
  );
}
