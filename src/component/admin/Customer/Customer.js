import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
export default function Customer() {
  const Wrapper = styled.div`
    display: flex;
  `;

  const Admin = styled.div`
    flex: 8;
  `;
  const Top = styled.div`
    flex: 4;
  `;
  const [click, setClick] = useState(false);
  console.log(click);
  const handleUpdate = () => {
    return (
      <form className="w-[500px] h-[300px] bg-slate-200 rounded p-4 flex flex-col">
        <h2 className="font-bold text-xl mx-auto uppercase">update</h2>
        <div className="flex items-center">
          <label className="uppercase">email:</label>
          <input
            className="p-3 my-2 ml-14 outline-none border-b-2 border-gray-800"
            required
          />
        </div>
        <div className="flex items-center">
          <label className="uppercase">password:</label>
          <input
            className="p-3 ml-4 outline-none border-b-2 border-gray-800"
            required
          />
        </div>
        <button className="w-[150px] rounded bg-gray-500 p-3 m-auto ">
          send
        </button>
      </form>
    );
  };
  return (
    <Wrapper>
      <Top>
        <span style={{ marginLeft: "150px", textTransform: "uppercase" }}>
          registered customers
        </span>
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
      </Top>
      <Admin>
        <span style={{ marginLeft: "400px", textTransform: "uppercase" }}>
          system administrator members
        </span>
        <table className="table-auto w-[95%] mx-auto">
          <thead>
            <tr className="h-[80px] border-b-2 border-gray-300">
              <th>email</th>
              <th>password</th>
              <th>update</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="h-20 border-gray-300 border-b-2 bg-gray-100">
              <td>simio#3gmail.com</td>
              <td>nairobi</td>
              <td>
                <button
                  className="bg-green-100  w-[100px] p-2 rounded flex items-center justify-center"
                  onClick={(e) => setClick(true)}
                >
                  <i className="bi bi-pen-fill"></i>
                </button>
              </td>
              <td>
                {" "}
                <button className="bg-red-200 p-2 rounded w-[100px]">
                  delete
                </button>
              </td>
            </tr>
            <tr className="h-20 border-gray-300 border-b-2  bg-gray-100">
              <td>evans mwangi</td>
              <td>0994955</td>
              <td>eldoret</td>
              <td>kapsoya</td>
            </tr>
            <tr className="h-20 border-gray-300 border-b-2 bg-gray-100 ">
              <td>093993993</td>
              <td>kitale</td>
              <td>town</td>
              <td>hjgjfggk</td>
            </tr>
          </tbody>
        </table>
        {click === true ? <div>{handleUpdate()}</div> : ""}
      </Admin>
    </Wrapper>
  );
}
