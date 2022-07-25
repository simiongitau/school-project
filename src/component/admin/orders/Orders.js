import React from "react";
import { useState, useEffect } from "react";
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
      <div>{deliver.deliver.map((item) => console.log(item.product))}</div>
    );
  };

  return (
    <div>
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
            <th>clear/pending</th>
            <th>delete</th>
          </tr>
        </thead>
        {condition === true ? <div>{productDtail()}</div> : ""}
        <tbody className="">
          {deliver.deliver.map((items) => (
            <tr className="h-20 border-gray-300 border-b-2 bg-gray-100">
              <td className="font-bold">{items.paymentID}</td>
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
                <button className="bg-green-100 p-2 w-[100px] rounded">
                  pending
                </button>
              </td>
              <td>
                <button className="bg-red-100 p-2 rounded w-[100px]">
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
