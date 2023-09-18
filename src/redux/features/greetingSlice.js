import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  loading: false,
};

export const fetchMessage = createAsyncThunk(
  'greeting/fetchMessage',
  async () => {
    const response = await fetch(
      'http://localhost:3000/message/index',
    );
    const data = await response.json();
    return data;
  },
);

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessage.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchMessage.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        message: action.payload,
      }));
  },
});

export default greetingSlice.reducer;
