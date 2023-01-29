import axios from "axios";
import {
  POST_ESTACIONES_LIST_SUCCESS,
  POST_ESTACIONES_LIST_FAIL,
} from "./types";

export const post_estaciones_list = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/`,
      config
    );
    if (res.status === 200) {
      dispatch({
        type: POST_ESTACIONES_LIST_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: POST_ESTACIONES_LIST_FAIL,
      });
    }
  } catch {
    dispatch({
      type: POST_ESTACIONES_LIST_FAIL,
    });
  }
};

export const post_estaciones_list_page = (p, code, cm) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
    data: {
      p: p,
      code: code,
      cm: cm,
    },
  };
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/`,
      config
    );
    if (res.status === 200) {
      dispatch({
        type: POST_ESTACIONES_LIST_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: POST_ESTACIONES_LIST_FAIL,
      });
    }
  } catch {
    dispatch({
      type: POST_ESTACIONES_LIST_FAIL,
    });
  }
};
