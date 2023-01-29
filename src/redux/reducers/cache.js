import {
  GET_CACHE_LIST_SUCCESS,
  GET_CACHE_LIST_FAIL,
} from "redux/actions/types";

const initialState = {
  cache_list: null,
};

export default function cache(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CACHE_LIST_SUCCESS:
      return {
        ...state,
        cache_list: payload,
      };
    case GET_CACHE_LIST_FAIL:
      return {
        ...state,
        cache_list: null,
      };
    default:
      return state;
  }
}
