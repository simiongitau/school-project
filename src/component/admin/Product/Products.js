import React from "react";
import imj from "../../../assert/dap.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  };
  return (
    <div className="relative">
      <button className="top-0 absolute right-1 p-3 rounded bg-gray-200">
        add
      </button>
      <table className="table-auto w-[95%] mx-auto">
        <thead>
          <tr className="h-[80px] border-b-2 border-gray-300">
            <th className="uppercase text-center font-light">image</th>
            <th className="uppercase font-light">name</th>
            <th className="uppercase font-light">price</th>
            <th className="text-center uppercase font-light">description</th>
            <th className="uppercase font-light">instore</th>
            <th className="uppercase font-light">update</th>
            <th className="uppercase font-light">delete</th>
          </tr>
        </thead>
        {data.product?.map((product) => (
          <tbody className="">
            <tr
              className="h-20 border-gray-300 border-b-2 bg-gray-100"
              key={product._id}
            >
              <td className="p-2">
                <img
                  src={`http://localhost:5000/${product.productImage}`}
                  alt="photoo"
                  className="w-[90px] h-[50px]"
                />
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td className="text-center">{product.desc}</td>
              <td>{product.instore}</td>
              <td>
                <Link to="/update">
                  <button className="bg-green-100  w-[100px] p-2 rounded flex items-center justify-center">
                    <i className="bi bi-pen-fill"></i>
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="bg-red-200 p-2 rounded w-[100px]"
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
