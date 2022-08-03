import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
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
  const [user, setUser] = useState("");
  const [admin, setAdmin] = useState("");
  // console.log(user.user);
  console.log(admin.user);
  const getUser = async () => {
    axios
      .get("http://localhost:5000/user")
      .then((response) => {
        const res = response.data;
        setUser(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAdmin = async () => {
    await axios
      .get("http://localhost:5000/user/admin")
      .then((response) => {
        setAdmin(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    // Promise.all([getUser(), getAdmin()]).then(function (results) {
    //   const acct = results[0].data.user;
    //   console.log(acct);
    //   setUser(acct);
    //   const perm = results[1];
    //   setAdmin(perm);
    // });
    getUser();
    getAdmin();
  }, []);
  // handle delete
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/user/delete/${id}`);
  };
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
    <div className="flex">
      {/* top */}
      <Top>
        <span style={{ marginLeft: "150px", textTransform: "uppercase" }}>
          registered customers
        </span>
        <table className="table-auto w-[95%] mx-auto">
          <thead>
            <tr className="h-[80px] border-b-2 border-gray-300">
              <th className="text-center">email</th>
              <th className="text-center">password</th>
              <th className="text-center">delete</th>
            </tr>
          </thead>
          {user.user?.map((e) => (
            <tbody className="">
              <tr
                className="h-20 border-gray-300 border-b-2 bg-gray-100"
                key={e._id}
              >
                <td className="text-center">{e.email}</td>
                <td className="text-center p-4">{e.password}</td>
                <td>
                  <button
                    className="bg-red-200 p-2 rounded w-[100px] text-center"
                    onClick={() => handleDelete(e._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </Top>
      <Admin>
        <span style={{ marginLeft: "400px", textTransform: "uppercase" }}>
          system administrator members
        </span>
        <table className="table-auto w-[95%] mx-auto">
          <thead>
            <tr className="h-[80px] border-b-2 border-gray-300">
              <th className="text-center ">email</th>
              <th>password</th>
              <th className="text-center">update</th>
              <th>delete</th>
            </tr>
          </thead>
          {admin.user?.map((t) => (
            <tbody className="">
              <tr className="h-20 border-gray-300 border-b-2 bg-gray-100">
                <td className="text-center">{t.email}</td>
                <td>{t.password}</td>
                <td className="text-center">
                  <button
                    className="bg-green-100  w-[100px] p-2 rounded"
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
            </tbody>
          ))}
        </table>
        {click === true ? <div>{handleUpdate()}</div> : ""}
      </Admin>
    </div>
  );
}
