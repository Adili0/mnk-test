// store.js
import { configureStore } from "@reduxjs/toolkit";
import { movieSliceSliceReducer } from "./MovieSeats";

const store = configureStore({
  reducer: {
    movieSliceSliceReducer:movieSliceSliceReducer
  },
});

export default store;