import axios from "axios";
import { updateStart, updateError, updateSuccess } from "./UserSlice";
//  creating a function
export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  // making api call
  try {
    const res = await axios.post(`http://localhost:5000/user`, user);
    dispatch(updateSuccess(res.data));
    console.log(res.data);
  } catch (error) {
    dispatch(updateError);
  }
};
