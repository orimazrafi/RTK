import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import todoInputSlice from './features/TodoInput/TodoInputSlice';
import CounterSlice from "./features/Counter/CounterSlice"
import { logger } from "redux-logger";
const middleware = [...getDefaultMiddleware(), logger]
export const store = configureStore({
    reducer: {
        todoInput: todoInputSlice,
        counter: CounterSlice,
    }, middleware,
    devTools: process.env.NODE_ENV === "development"
})