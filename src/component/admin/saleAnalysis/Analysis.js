import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import getTotalsSales from "../../../Redux/orderSlice";
import { useSelector, useDispatch } from "react-redux";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { fetchOrder } from "../../../Redux/Apicall";
import { Chart as ChartJS } from "chart.js/auto";
export default function Analysis() {
  const Container = styled.div``;
  const Top = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 25px;
    div {
      height: 80px;
      width: 190px;
      background-color: rgba(243, 241, 227, 0.658);
      border-radius: 20px;
      border: 1px solid gray;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        font-size: 15px;
        text-transform: uppercase;
      }
      h3 {
        padding-top: 22px;
      }
    }
  `;
  // const Fig=styled.h3`
  // margin:left:0px;
  // `;
  const [chartMonths, setChatMonths] = useState([]);
  const [chartDart, setChartData] = useState("");
  const Data = useSelector((state) => state.order?.orderInfo);
  console.log(Data);
  const MONTHS = useMemo(
    () => [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    []
  );

  useEffect(() => {
    const months = Object.entries(
      Data.reduce((b, a) => {
        let m = a.updatedAt.split("T")[0].substr(0, 7) + "-01";
        if (b.hasOwnProperty(m)) b[m].push(a);
        else b[m] = [a];
        return b;
      }, {})
    )
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map((e) => ({ [e[0]]: e[1] }));

    let mArr = [];
    let monthlyTotals = [];
    months.forEach((item) => {
      const key = Object.keys(item)[0];
      const monthOfDate = MONTHS[new Date(key).getMonth()];
      mArr.push(monthOfDate);
      // console.log("Key is", item);
      const arrayOfProducts = Object.values(item)[0];

      const totalMonth = arrayOfProducts.reduce(function (acc, obj) {
        return acc + parseInt(obj.total);
      }, 0);

      // console.log("The month total is:", totalMonth);
      monthlyTotals.push(totalMonth);
    });
    // console.log("Month Array ", mArr);
    setChatMonths(mArr);
    console.log(chartMonths);
    setChartData(monthlyTotals);
  }, []);
  // console.log(Data);
  const data = {
    labels: chartMonths,
    datasets: [
      {
        data: chartDart,
        backgroundColor: ["#a78bfa", "#fde047", "white"],
      },
    ],
  };
  const totalSale = useSelector((state) => state.order?.totalSale);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchOrder(dispatch);
  }, [dispatch]);

  // handle delete
  const Handledelete = async (id) => {
    await axios.delete(`http://localhost:5000/order/delete/${id}`);
  };
  return (
    <Container className="flex flex-col">
      <Top>
        <div>
          <span>revenue generated</span>
          <h3>56,000ksh</h3>
        </div>
        <div>
          <span>total sales</span>
          <h3 className="font-bold uppercase">{totalSale} kesh</h3>
        </div>
      </Top>
      <div className="flex justify-around h-[380px] pt-2">
        {/* sale analysis digram */}
        <div>
          <Bar data={data} style={{ width: "640px", height: "150px" }} />
        </div>
        {/* <div className="flex flex-col gap-10 pt-7"></div> */}
      </div>
      {/* table of orders */}
      <table className="table-auto w-[95%] mx-auto">
        <thead>
          <tr className="h-[80px] border-b-2 border-gray-300">
            <th className="font-light uppercase">pending/success</th>
            <th className="font-light uppercase text-center">remove</th>
            <th className="font-light uppercase text-center">paymentID</th>
            <th className="font-light uppercase text-center">email</th>
            <th className="font-light uppercase text-center">total</th>
            <th className="font-light uppercase text-center">date</th>
          </tr>
        </thead>
        {Data.map((order) => (
          <tbody>
            <tr className="h-20 border-gray-300 border-b-2" key={order._id}>
              <td>
                <button className="bg-green-200 p-3 rounded text-blue-400">
                  {order.paid === "true" ? "paid" : "pending"}
                </button>
              </td>
              <td>
                <button
                  className="bg-indigo-200 p-3 rounded text-red-400"
                  onClick={() => Handledelete(order._id)}
                >
                  remove
                </button>
              </td>
              <td className="text-center">{order.paymentID}</td>
              <td className="text-center">{order.email}</td>
              <td className="text-center">{order.total}</td>
              <td className="text-center">
                {new Date(order.updatedAt).toLocaleDateString()}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </Container>
  );
}
