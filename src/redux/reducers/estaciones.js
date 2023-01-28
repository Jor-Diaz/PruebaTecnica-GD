import {
  POST_ESTACIONES_LIST_SUCCESS,
  POST_ESTACIONES_LIST_FAIL,
} from "redux/actions/types";

const initialState = {
  estaciones_list: null,
  post: null,
  count: null,
  next: null,
  previous: null,
};

export default function estaciones(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case POST_ESTACIONES_LIST_SUCCESS:
      console.log(payload);
      return {
        ...state,
        estaciones_list: payload.result.records,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case POST_ESTACIONES_LIST_FAIL:
      return {
        ...state,
        estaciones_list: null,
        count: null,
        next: null,
        previous: null,
      };
    default:
      return state;
  }
}
