import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Update() {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [cat, setCart] = useState("");
  const [instore, setInstore] = useState(false);
  let navigate = useNavigate();

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };
  console.log(cat);
  console.log(file);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("desc", desc);
    formData.append("cat", cat);
    formData.append("instore", instore);
    try {
      await axios.post("http://localhost:5000/uploadImage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/home");
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
        className=" p-10 rounded flex  flex-col shadow-xl bg-slate-200"
        action="submit"
        onSubmit={onSubmit}
      >
        <div className="flex  mb-10 ">
          <label className="uppercase my-auto">name:</label>
          <input
            className=" p-3 border-b-2 ml-[70px] bg-gray-100 outline-none"
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex gap-10 mb-10 ">
          <label className="uppercase my-auto">price:</label>
          <input
            className=" p-3 border-b-2 bg-gray-100 outline-none ml-[35px]"
            required
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="flex my-3">
          <label className="uppercase my-auto">categorly:</label>
          <select
            name="cars"
            id="cars"
            className="p-4 w-[275px] border-b-2 border-gray-500 outline-none uppercase text-sm ml-8"
            onChange={(e) => setCart(e.target.value)}
          >
            <option value="" className="uppercase text-sm">
              * select categoly*
            </option>

            <option value="herbcide" className="uppercase text-sm">
              herbcide
            </option>
            <option value="pestcide" className="uppercase text-sm">
              pestcide
            </option>
            <option value="simlawseed" className="uppercase text-sm">
              simlawseed
            </option>
            <option value="fertilizer" className="uppercase text-sm">
              fertilizer
            </option>
            <option value="insectcide" className="uppercase text-sm">
              insectcide
            </option>
            <option value="animal feed" className="uppercase text-sm">
              animal $ bird feeds
            </option>
          </select>
        </div>
        <div className="flex gap-10 mb-10 items-center ">
          <label className="uppercase">instore:</label>
          <input
            className="w-20"
            type="radio"
            required
            onClick={handleBoolen}
          />
        </div>
        <div className="flex gap-10 mb-10 ">
          <label className="uppercase my-auto">info:</label>
          <textarea
            className=" w-[280px] p-3 border-b-2 bg-gray-100 ml-10 "
            required
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="flex ">
          <label className="my-auto uppercase">image:</label>
          <div className="bg-gray-500 rounded w-[60%] ml-20">
            <input
              className="p-2 opacity-5 cursor-pointer"
              type="file"
              required
              onChange={onChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="p-3 bg-gray-300 rounded w-[150px] mx-auto mt-4 "
        >
          send
        </button>
      </form>
    </div>
  );
}
