import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk("/getProuducts", async () => {
  const products = await axios("http://localhost:6060/products");
  return products.data;
});

export interface UserStateTy {
  user: any;
  products: object[];
  loading: boolean;
  isLogin: boolean;
}

const initialState: UserStateTy = {
  products: [],
  isLogin: true,
  loading: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions;

export default userSlice.reducer;
