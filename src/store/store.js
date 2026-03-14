import { configureStore } from "@reduxjs/toolkit"
import simpleReducer from "../slice/simpleSlice"

export const store = configureStore({
  reducer: {
    counter: simpleReducer
  }
})