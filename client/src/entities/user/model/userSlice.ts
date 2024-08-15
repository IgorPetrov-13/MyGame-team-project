/* eslint-disable arrow-body-style */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { User } from '../types/userType';
import { LoginFormType } from '../types/authFormType';
import AuthApi from '../api/AuthApi';
import { setAccessToken } from '../../../services/apiAxiosInstance';

const initialState: {
  user: User | null;
  accessToken: string;
} = {
  user: null,
  accessToken: '',
};

const userLogin = createAsyncThunk('user/login', async ({ email, password }: LoginFormType) =>
  AuthApi.postAuth({ email, password }),
);

const refreshAccessToken = createAsyncThunk('user/refreshAccessToken', async () => AuthApi.refreshTokens());

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (_state, action) => {
      setAccessToken(action.payload.accessToken);
      return action.payload;
    });
    builder.addCase(refreshAccessToken.fulfilled, (_state, action) => {
      setAccessToken(action.payload.accessToken);
      return action.payload;
    });
  }
});


export { userLogin , refreshAccessToken};
export default userSlice.reducer;