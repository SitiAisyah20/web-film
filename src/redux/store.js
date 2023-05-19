import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

// Create the store
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  // It not necessary if your feature is not too complex, you can just comment this line if you don't need it
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
