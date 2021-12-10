import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products";
import sesionReducer from "./slices/sesion";
import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/es/storage";
import persistStore from "redux-persist/es/persistStore";
import createFilter from "redux-persist-transform-filter";

const rootReducer = combineReducers({
  products: productsReducer,
  sesion: sesionReducer
});

const saveSubsetFilter = createFilter("products", ["list"]); //Selecciona solo una parte del estado para almacenar

const persistConfig = {
  key: "root",
  storage,
  transforms: [saveSubsetFilter],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
