import axios from "axios";
import { updateStart, updateError, updateSuccess } from "./UserSlice";
import { orderStart, orderError, orderSuccess } from "./orderSlice";
import { deliverStart, deliverError, deliverSuccess } from "./deliverSlice";
//  creating a function
export const updateUser = async (login, dispatch, navigate) => {
  dispatch(updateStart());
  // making api call
  try {
    const res = await axios.post("http://localhost:5000/user/login", login);
    dispatch(updateSuccess(res.data));
    console.log(res.data);
    navigate("/home");
  } catch (error) {
    dispatch(updateError());
  }
};

// function to fetch the user
export const fetchUser = async (dispatch) => {
  dispatch(updateStart());
  await axios
    .get(`http://localhost:5000/user`)
    .then((response) => {
      dispatch(updateSuccess(response.data));
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
      dispatch(updateError(error));
    });
};

export const fetchOrder = async (dispatch) => {
  dispatch(orderStart());
  await axios
    .get(`http://localhost:5000/order`)
    .then((response) => {
      // console.log(response);

      const fetchedOrders = response.data?.order;
      const paidOrders = fetchedOrders.filter((item) => item?.paid === "true");

      const totalPaidOrdersAmount = paidOrders.reduce(function (acc, obj) {
        return acc + parseInt(obj.total);
      }, 0);

      dispatch(
        orderSuccess({
          orders: response.data.order,
          grandTotal: totalPaidOrdersAmount,
        })
      );

      console.log(paidOrders);
      // console Date
      console.log(
        "The date is: ",
        new Date(response.data?.order[0]?.updatedAt).toLocaleDateString()
      );
    })
    .catch((error) => {
      console.log(error);
      dispatch(orderError(error));
    });
};
export const fetchDeliver = async (dispatch) => {
  dispatch(deliverStart());
  await axios
    .get(`http://localhost:5000/deliver`)
    .then((response) => {
      dispatch(deliverSuccess(response.data));
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
      dispatch(deliverError(error));
    });
};
