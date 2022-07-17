import React from "react";
import { useState, useEffect } from "react";
import { fetchDeliver } from "../../../Redux/Apicall";
import { useDispatch } from "react-redux";
export default function Orders() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchDeliver(dispatch);
  }, [dispatch]);
  return (
    <div>
      <table className="table-auto w-[95%] mx-auto">
        <thead>
          <tr className="h-[80px] border-b-2 border-gray-300">
            <th>paymentID </th>
            <th>quantity</th>
            <th>email</th>
            <th>telephone number</th>
            <th>county</th>
            <th>pickup station</th>
            <th>product name </th>
            <th>clear/pending</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="h-20 border-gray-300 border-b-2 bg-gray-100">
            <td>simio#3gmail.com</td>
            <td>nairobi</td>
            <td>simio#3gmail.com</td>
            <td>nairobi</td>
            <td>nairobi</td>
            <td>nairobi</td>
            <td>nairobi</td>
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
        </tbody>
      </table>
    </div>
  );
}
