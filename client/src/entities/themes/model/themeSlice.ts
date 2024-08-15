/* eslint-disable arrow-body-style */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ThemeType } from '../types/themeType';
import ThemeApi from '../api/ThemeApi';



const initialState: ThemeType[] = [];



const loadThemes= createAsyncThunk('theme/load', () => ThemeApi.getAllThemes());


const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadThemes.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  
  },
});

export { loadThemes};
export default themeSlice.reducer;
