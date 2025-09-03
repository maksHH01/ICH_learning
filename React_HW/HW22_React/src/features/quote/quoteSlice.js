import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://dummyjson.com/quotes/random";

const initialState = {
  quote: "",
  author: "",
  status: "idle",
  error: null,
};

export const fetchQuote = createAsyncThunk(
  "quote/fetchQuote",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(BASE_URL);
      console.log(response.data);
      return {
        quote: response.data.quote,
        author: response.data.author,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.quote = action.payload.quote;
        state.author = action.payload.author;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.payload);
      });
  },
});

export default quoteSlice.reducer;
