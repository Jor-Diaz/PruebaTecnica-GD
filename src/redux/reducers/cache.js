import {
  POST_CACHE_LIST_SUCCESS,
  POST_CACHE_LIST_FAIL,
} from "redux/actions/types";

const initialState = {
  cache_list: null,
};

export default function cache(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case POST_CACHE_LIST_SUCCESS:
      return {
        ...state,
        cache_list: payload,
      };
    case POST_CACHE_LIST_FAIL:
      return {
        ...state,
        cache_list: null,
      };
    default:
      return state;
  }
}
