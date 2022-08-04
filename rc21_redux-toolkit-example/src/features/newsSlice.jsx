import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "02d142c50d8b4247b974b25323435174";

export const getData = createAsyncThunk("newsSlice/getData", async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;

  const data = await axios(url);

  return data.data.articles;
});

// name=store da verdiğim isim
const newsSlice = createSlice({
  name: "newsSlice",
  initialState: {
    newsList: [],
    loading: true,
  },
  reducers: {
    clearList: (state) => {
      state.newsList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = false;
        state.newsList = action.payload;
      })
      .addCase(getData.rejected, (state) => {
        state.loading = false;
      });
  },
});
export const { clearList } = newsSlice.actions;

export default newsSlice.reducer;
