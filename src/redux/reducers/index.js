import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./homeReducers";
import authReducers from "./authReducers";
import detailsReducers from "./detailsReducers";
import searchReducers from "./searchReducers";

const rootReducer = combineReducers({
  home: homeReducer,
  auth: authReducers,
  detail: detailsReducers,
  search: searchReducers,
});

export default rootReducer;
