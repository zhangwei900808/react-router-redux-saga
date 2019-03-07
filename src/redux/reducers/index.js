import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
// import visibilityFilter from './VisibilityFilter';
import todos from "./todos";

export default history =>
  combineReducers({
    router: connectRouter(history),
    todos // rest of your reducers
  });
