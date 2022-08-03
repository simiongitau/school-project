import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { fetchDeliver } from "../../../Redux/Apicall";
import { useDispatch, useSelector } from "react-redux";
export default function Orders() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchDeliver(dispatch);
  }, [dispatch]);
  const deliver = useSelector((state) => state.deliver?.deliverInfo);
  const [condition, setCondition] = React.useState(false);
  const HandleOnclick = () => {
    setCondition(true);
  };
  console.log(condition);
  const productDtail = () => {
    return (
      <table className="table-auto w-[100%]">
        <thead className="">
          <tr>
            <th>paymentID</th>
            <th>quantity</th>
            <th>name</th>
            <th>total</th>
          </tr>
        </thead>
        {deliver.deliver.map((item) =>
          item.product.map((e) => (
            <tbody className="bg-green-500" key={e.id}>
              <tr className="bg-white border-y-2 border-gray-300 h-10">
                <td className="font-bold text-green-800">{item.paymentID}</td>
                <td>{e.cartQuantity}</td>
                <td>{e.name}</td>
                <td>{e.total}</td>
              </tr>
            </tbody>
          ))
        )}
      </table>
    );
  };

  // method handle update
  const handleUpdate = async (id) => {
    await axios.patch(`http://localhost:5000/deliver/update/${id}`, {
      status: "true",
    });
  };
  // handle delete
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/deliver/delete/${id}`);
  };
  return (
    <div className="relative">
      {condition === true ? (
        <div
          className="absolute w-[60%] bg-green-50 text-gray-900 left-[500px] top-4 rounded p-6 cursor-pointer"
          onClick={() => setCondition(false)}
        >
          {productDtail()}
        </div>
      ) : (
        ""
      )}
      <table className="table-auto w-[95%] mx-auto">
        <thead>
          <tr className="h-[80px] border-b-2 border-gray-300">
            <th className=" pl-20">paymentID </th>
            <th>quantity</th>
            <th className="pl-14">email</th>
            <th>telephone number</th>
            <th>county</th>
            <th>pickup station</th>
            <th>product name </th>
            <th>update</th>
            <th>clear/pending</th>
            <th>delete</th>
          </tr>
        </thead>

        <tbody className="">
          {deliver.deliver.map((items) => (
            <tr
              className="h-20 border-gray-300 border-b-2 bg-gray-100"
              key={items._id}
            >
              <td className="font-bold pl-3">{items.paymentID}</td>
              <td>{items.quantity}</td>
              <td>{items.email}</td>
              <td>{items.telphone_number}</td>
              <td>{items.county}</td>
              <td>{items.location}</td>
              <td>
                <button
                  className="bg-green-100 p-2 w-[100px] rounded"
                  onClick={HandleOnclick}
                >
                  products
                </button>
              </td>
              <td>
                <button
                  className="bg-green-100 p-2 rounded"
                  onClick={() => handleUpdate(items._id)}
                >
                  update
                </button>
              </td>
              <td>
                <button className="bg-green-100 p-2 w-[100px] rounded">
                  {items.status === "true" ? "cleared" : "pendiing.."}
                </button>
              </td>
              <td>
                <button
                  className="bg-red-100 p-2 rounded w-[100px]"
                  onClick={() => handleDelete(items._id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
