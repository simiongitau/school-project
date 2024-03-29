import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
export default function Products() {
  const [data, setData] = useState([]);
  // fetching products
  const fetchProduct = () => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  // handle delete function
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/product/delete/${id}`);
    toast.success(`product removed`, {
      position: "top-center",
    });
    fetchProduct();
  };
  return (
    <div className="relative">
      <Link to="/update" className="absolute top-3 right-2">
        <button className="bg-gray-100  w-[100px] p-2 rounded flex items-center justify-center uppercase">
          add
        </button>
      </Link>
      <table className="table-auto w-[95%] mx-auto bg-[#d4d1ba] mb-2">
        <thead>
          <tr className="h-[80px] border-b-2 border-indigo-300">
            <th className="uppercase text-center font-light">image</th>
            <th className="uppercase font-light">name</th>
            <th className="uppercase font-light">price</th>
            <th className="text-center uppercase font-light">description</th>
            <th className="uppercase font-light">instore</th>
            <th className="uppercase font-light">delete</th>
          </tr>
        </thead>
        {data.product?.map((product) => (
          <tbody className="">
            <tr
              className="h-20 border-indigo-300 border-b-2 "
              key={product._id}
            >
              <td className="p-2">
                <img
                  src={`http://localhost:5000/${product.productImage}`}
                  alt="photoo"
                  className="w-[90px] h-[50px]"
                />
              </td>
              <td className="font-serif">{product.name}</td>
              <td className="font-mono">{product.price}KESH</td>
              <td className="text-justify p-2 w-[50%] font-extralight text-sm font-sans">
                {product.desc}
              </td>
              <td className="text-center capitalize font-serif">
                {product.instore}
              </td>

              <td>
                <button
                  className="bg-red-200 p-2 rounded w-[100px] m-2"
                  onClick={() => handleDelete(product._id)}
                >
                  delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
