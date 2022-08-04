import { configureStore } from "@reduxjs/toolkit";
import yetkiSlice from "../features/yetkiSlice";
import newsSlice from "../features/newsSlice";

const store = configureStore({
  reducer: {
    yetkiSlice: yetkiSlice,
    newsSlice: newsSlice,
  },
});
export default store;
