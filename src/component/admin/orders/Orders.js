import React from "react";
import styled from "styled-components";
export default function Orders() {
  return (
    <div>
      <table className="table-auto w-[95%] mx-auto">
        <thead>
          <tr className="h-[80px] border-b-2 border-gray-300">
            <th>email</th>
            <th>password</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="h-20 border-gray-300 border-b-2 bg-gray-100">
            <td>simio#3gmail.com</td>
            <td>nairobi</td>
            <td>
              <button className="bg-red-200 p-2 rounded w-[100px]">
                delete
              </button>
            </td>
          </tr>
          <tr className="h-20 border-gray-300 border-b-2  bg-gray-100">
            <td>evans mwangi</td>
            <td>0994955</td>
            <td>eldoret</td>
          </tr>
          <tr className="h-20 border-gray-300 border-b-2 bg-gray-100 ">
            <td>ty</td>
            <td>093993993</td>
            <td>kitale</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
