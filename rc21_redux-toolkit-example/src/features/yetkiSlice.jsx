import { createSlice } from "@reduxjs/toolkit";

const yetkiSlice = createSlice({
  name: "yetkiSlice",
  initialState: {
    kullanici: {},
  },
  reducers: {
    olusturKullanici: (state, action) => {
      state.kullanici = action.payload;
      // console.log(state.kullanici);
      // console.log(action.payload);
      // action.payload={email,pasword}
    },
    silKullanici: (state) => {
      state.kullanici = "";
    },
  },
});
export const { olusturKullanici, silKullanici } = yetkiSlice.actions;
export default yetkiSlice.reducer;
