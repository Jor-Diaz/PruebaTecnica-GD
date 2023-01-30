import axios from "axios";
import { GET_CACHE_LIST_SUCCESS, GET_CACHE_LIST_FAIL } from "./types";

export const get_cache_list = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/cache`,
      config
    );
    if (res.status === 200) {
      dispatch({
        type: GET_CACHE_LIST_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_CACHE_LIST_FAIL,
      });
    }
  } catch {
    dispatch({
      type: GET_CACHE_LIST_FAIL,
    });
  }
};
