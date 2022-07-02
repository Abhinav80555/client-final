import axios from "axios";
import { API } from "./global";
import { message } from "antd";

export const bookProduct = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await axios.post(`${API}/api/bookings/bookproduct`, reqObj);

    dispatch({ type: "LOADING", payload: false });
    message.success("your product booked successfully");
    setTimeout(() => {
      window.location.href = "/userbookings";
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
    message.error("something went wrong, please try later");
  }
};

export const getAllBookings = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await axios.get(`${API}/api/bookings/getallbookings`);
    dispatch({ type: "GET_ALL_BOOKINGS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};
