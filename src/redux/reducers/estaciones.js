import {
  POST_ESTACIONES_LIST_SUCCESS,
  POST_ESTACIONES_LIST_FAIL,
} from "redux/actions/types";

const initialState = {
  estaciones_list: null,
  count: null,
};

export default function estaciones(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case POST_ESTACIONES_LIST_SUCCESS:
      return {
        ...state,
        estaciones_list: payload.result.records,
        count: payload.result.total,
      };
    case POST_ESTACIONES_LIST_FAIL:
      return {
        ...state,
        estaciones_list: null,
        count: null,
      };
    default:
      return state;
  }
}
