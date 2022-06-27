import React from "react";

export default function Update() {
  return (
    <div className=" flex justify-center items-center h-screen">
      <form
        className="bg-red-600 w-1/2 h-1/2 p-10 rounded flex items-center flex-col"
        action="submit"
      >
        <div className="flex gap-10 mb-10">
          <label>name</label>
          <input className=" p-2 bg-slate-400 outline-none" />
        </div>
        <div className="flex gap-10 mb-10">
          <label>price</label>
          <input className=" p-2 bg-slate-400 outline-none" />
        </div>
        <div className="flex gap-10 mb-10">
          <label>instore</label>
          <input className=" p-2 bg-slate-400 outline-none" type="radio" />
        </div>
        <div className="flex gap-10 mb-10">
          <label>description</label>
          <textarea className=" bg-slate-400 "></textarea>
        </div>
        <div>
          <label>image</label>
          <input className="" type="file" />
        </div>
        <button type="submit" className=""></button>
      </form>
    </div>
  );
}
