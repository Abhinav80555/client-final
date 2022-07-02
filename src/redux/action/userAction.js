import axios from "axios";
import { message } from "antd";
import { API } from "./global";

export const userLogin = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.post(`${API}/api/users/login`, reqObj);
    localStorage.setItem("user", JSON.stringify(response.data));
    message.success("Login Success");
    setTimeout(() => {
      window.location.href = "/";
    }, 500);

    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    message.error("Something went wrong");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const userRegister = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post(`${API}/api/users/register`, reqObj);
    // localStorage.setItem('user',JSON.stringify(response.data))
    message.success("Registration Success");
    setTimeout(() => {
      window.location.href = "/login";
    }, 500);
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    message.error("Something went wrong");
    dispatch({ type: "LOADING", payload: false });
  }
};
