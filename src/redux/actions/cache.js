import axios from "axios";
import { POST_CACHE_LIST_SUCCESS, POST_CACHE_LIST_FAIL } from "./types";

export const post_cache_list = () => async (dispatch) => {
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
        type: POST_CACHE_LIST_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: POST_CACHE_LIST_FAIL,
      });
    }
  } catch {
    dispatch({
      type: POST_CACHE_LIST_FAIL,
    });
  }
};
