import { combineReducers } from "redux";
import estaciones from "./estaciones";
import cache from "./cache";
export default combineReducers({
  estaciones,
  cache,
});
