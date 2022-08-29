import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
// import handleUpdate from "./Adminupdate";
import Adminupdate from "./Adminupdate";
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
    getUser();
    getAdmin();
  }, []);
  // handle delete
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/user/delete/${id}`);
    getUser();
  };
  const [ID, setId] = useState("");
  const [click, setOnclick] = useState(false);
  // methode to handle delete
  const HandledeleteAdmin = async (id) => {
    await axios.delete(`http://localhost:5000/user/delete/${id}`);
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
              <th className="text-center uppercase font-light">email</th>
              <th className="text-center uppercase font-light">password</th>
              <th className="text-center uppercase font-light">delete</th>
            </tr>
          </thead>
          {user.user?.map((e) => (
            <tbody className="">
              <tr
                className="h-20 border-gray-300 border-b-2 bg-gray-100"
                key={e._id}
              >
                <td className="text-center font-extralight">{e.email}</td>
                <td className="text-center p-4 font-extralight">
                  {e.password}
                </td>
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
              <th className="text-center uppercase font-light ">email</th>
              <th className="text-center uppercase font-light">password</th>
              <th className="text-center font-light uppercase">update</th>
              <th className="text-center font-light uppercase">delete</th>
            </tr>
          </thead>
          {admin.user?.map((t) => (
            <tbody className="">
              <tr className="h-20 border-gray-300 border-b-2 bg-gray-100">
                <td className="text-center font-extralight">{t.email}</td>
                <td className="text-center font-extralight">{t.password}</td>
                <td
                  className="text-center font-extralight"
                  onClick={() => setOnclick(true)}
                >
                  <button
                    className="bg-green-100  w-[100px] p-2 rounded"
                    onClick={() => setId(t._id)}
                  >
                    <i className="bi bi-pen-fill"></i>
                  </button>
                </td>
                <td className="text-center ">
                  <button
                    className="bg-red-200 p-2 rounded w-[100px]"
                    onClick={() => HandledeleteAdmin(t._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        {click === true ? <Adminupdate id={ID} setOnclick={setOnclick} /> : ""}
      </Admin>
    </div>
  );
}
