// import { updateStart, updateError, updateSuccess } from "./UserSlice";
// import { useDispatch } from "react-redux";
// import axios from "axios";
// // export because we are going to use in component
// const dispatch = useDispatch();
// export const updateUser = async (user, dispatch) => {
//   // dispatch method is used to change the value of state
//   dispatch(updateStart());
//   try {
//     const res = await axios.get("http://localhost:5000/");
//     dispatch(updateSuccess(res.data));
//   } catch (error) {
//     dispatch(updateError());
//   }
// };
