import React from "react";
import styled from "styled-components";
import imj from "../../../assert/dap.jpg";
import { Link } from "react-router-dom";
export default function Products() {
  return (
    <div className="">
      <table className="table-auto w-[95%] mx-auto">
        <thead>
          <tr className="h-[80px] border-b-2 border-gray-300">
            <th>image</th>
            <th>name</th>
            <th>price</th>
            <th>categorly</th>
            <th>description</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="h-20 border-gray-300 border-b-2 bg-gray-100">
            <td>
              <img src={imj} alt="photo" width="40px" height="40px" />
            </td>
            <td>simio#3gmail.com</td>
            <td>nairobi</td>
            <td>070003002</td>
            <td>kahoya</td>
            <td>
              <Link to="/update">
                {" "}
                <button className="bg-green-200 p-2 rounded w-[100px]">
                  edit
                </button>
              </Link>
            </td>
            <td>
              {" "}
              <button className="bg-red-200 p-2 rounded w-[100px]">
                delete
              </button>
            </td>
          </tr>
          <tr className="h-20 border-gray-300 border-b-2  bg-gray-100">
            <td>
              <img src={imj} alt="photo" width="40px" height="40px" />
            </td>
            <td>evans mwangi</td>
            <td>0994955</td>
            <td>eldoret</td>
            <td>kapsoya</td>
            <td>djfjjf</td>
            <td>3/4/2001</td>
          </tr>
          <tr className="h-20 border-gray-300 border-b-2 bg-gray-100 ">
            <td>
              <div>
                <img src={imj} alt="photo" width="40px" height="40px" />
              </div>
            </td>
            <td>093993993</td>
            <td>kitale</td>
            <td>town</td>
            <td>hjgjfggk</td>
            <td>5/66/2020</td>
            <td>5/66/2020</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
