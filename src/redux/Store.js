import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import todoReducer from "./TodoSlice";

export const Store = configureStore({
    reducer:{
        counters : counterReducer,
        todos : todoReducer,
    }
})