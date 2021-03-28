import { combineReducers, configureStore } from "@reduxjs/toolkit";

import productReducer from "../pages/Product/product.slice";

const rootReducer = combineReducers({
  product: productReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
