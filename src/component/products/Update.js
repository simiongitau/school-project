import React from "react";
import { useState } from "react";
import axios from "axios";
export default function Update() {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [instore, setInstore] = useState(false);

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };
  console.log(file);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("desc", desc);
    formData.append("instore", instore);
    try {
      await axios.post("http://localhost:5000/uploadImage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleBoolen = () => {
    setInstore(true);
  };
  return (
    <div className=" flex justify-center items-center h-screen">
      <form
        className="w-1/2 p-10 rounded flex items-center flex-col shadow-xl"
        action="submit"
        onSubmit={onSubmit}
      >
        <div className="flex gap-10 mb-10  w-full ml-[60%]">
          <label className="uppercase my-auto">name</label>
          <input
            className=" p-3 border-b-2  bg-gray-100 outline-none"
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex gap-10 mb-10   w-full ml-[60%]">
          <label className="uppercase my-auto">price</label>
          <input
            className=" p-3 border-b-2 bg-gray-100 outline-none"
            required
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="flex gap-10 mb-10 w-full ml-[50%] items-center">
          <label>instore</label>
          <input
            className="w-20"
            type="radio"
            required
            onClick={handleBoolen}
          />
        </div>
        <div className="flex gap-10 mb-10">
          <label className="uppercase my-auto">description</label>
          <textarea
            className=" p-3 border-b-2 bg-gray-100 "
            required
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="flex w-[50%]">
          <label className="mr-20">image</label>
          <div className="bg-gray-500 w-[150px] rounde">
            <input
              className="p-2 opacity-5 cursor-pointer "
              type="file"
              required
              onChange={onChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="p-3 bg-gray-300 rounded mt-6 w-[150px] ml-10"
        >
          send
        </button>
      </form>
    </div>
  );
}
