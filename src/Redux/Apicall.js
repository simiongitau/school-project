import axios from "axios";
import { updateStart, updateError, updateSuccess } from "./UserSlice";
//  creating a function
export const updateUser = async (login, dispatch) => {
  dispatch(updateStart());
  // making api call
  try {
    const res = await axios.post("http://localhost:5000/user", login);
    dispatch(updateSuccess(res.data));
    console.log(res.data);
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
      dispatch(updateError(error));
    });
};
