import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
  value: 0,
  userName: "Eylon",
  pwd: "",
  authenticated: false,
  token: ""
};

// async
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

// reducers
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log(action.payload);
      state.value += action.payload.n;
    },
    increment3: (state) => {
      state.value += 3;
    },
    sub2: (state) => {
      state.value -= 2;
    },
    login: (state, action) => {
      console.log(action.payload.username);
      if (action.payload.username === "eylon" && action.payload.pwd === "123") {
        state.authenticated = true;
        state.token = "abcd";
      }
    },
    logout: (state) => {
      state.authenticated = false;
      state.token = "";
    },

  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      state.value += action.payload;
    });
  },
});

export const { increment, increment3, sub2, login, logout } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export const selectUserName = (state) => state.counter.userName;
export const selectAuthenticated = (state) => state.counter.authenticated;
export const selectToken = (state) => state.counter.token;
export default counterSlice.reducer;