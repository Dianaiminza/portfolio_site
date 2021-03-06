import Axios from "axios";
import {USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
} from "../constants/userConstants";
const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("http://localhost:5000/signin", { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
}catch (error)
   {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
    console.log(error);
  }
}
export { signin};