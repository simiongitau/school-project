import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import getTotalsSales from "../../../Redux/orderSlice";
import { useSelector, useDispatch } from "react-redux";
import { Doughnut } from "react-chartjs-2";
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
  const data = {
    labels: ["januarly", "febluarly", "march"],
    datasets: [
      {
        data: [40, 5, 15],
        backgroundColor: ["#a78bfa", "#fde047", "white"],
      },
    ],
  };
  const totalSale = useSelector((state) => state.order?.totalSale);
  console.log("totalSale" + totalSale);

  const dispatch = useDispatch();
  useEffect(() => {
    fetchOrder(dispatch);
  }, [dispatch]);
  return (
    <Container className="flex flex-col">
      <Top>
        <div>
          <span>revenue generated</span>
          <h3>56,000ksh</h3>
        </div>
        <div>
          <span>total sales</span>
          <h3>230,000ksh</h3>
        </div>
      </Top>
      <div className="flex justify-around h-[380px] pt-2">
        {/* sale analysis digram */}
        <div style={{ width: "350px", height: "100px" }}>
          <Doughnut data={data} />
        </div>
        <div className="flex flex-col gap-10 pt-7">
          <span>january</span>
          <span>january</span>
          <span>january</span>
        </div>
      </div>
      {/* table of orders */}
      <table className="table-auto w-[95%] mx-auto">
        <thead>
          <tr className="h-[80px] border-b-2 border-gray-300">
            <th>pending/success</th>
            <th>email address</th>
            <th>destination</th>
            <th>telphone number</th>
            <th>pick point</th>
            <th>order id</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-20 border-gray-300 border-b-2  ">
            <td>
              <button className="bg-red-400 p-3 rounded">pennding</button>
            </td>
            <td>simio#3gmail.com</td>
            <td>nairobi</td>
            <td>070003002</td>
            <td>kahoya</td>
            <td>ewlepwewp</td>
            <td>2/4/2017</td>
          </tr>
          <tr className="h-20 border-gray-300 border-b-2  ">
            <td>
              <button className="bg-green-400 p-3 rounded w-[100px]">
                success
              </button>
            </td>
            <td>evans mwangi</td>
            <td>0994955</td>
            <td>eldoret</td>
            <td>kapsoya</td>
            <td>djfjjf</td>
            <td>3/4/2001</td>
          </tr>
          <tr className="h-20 border-gray-300 border-b-2  ">
            <td>marry</td>
            <td>093993993</td>
            <td>kitale</td>
            <td>town</td>
            <td>hjgjfggk</td>
            <td>5/66/2020</td>
            <td>5/66/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
