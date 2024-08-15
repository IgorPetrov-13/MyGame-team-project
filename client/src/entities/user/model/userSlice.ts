/* eslint-disable arrow-body-style */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { User } from '../types/userType';
import type { LoginFormType } from '../types/authFormType';
import AuthApi from '../api/AuthApi';
import { setAccessToken } from '../../../services/apiAxiosInstance';
import type { RegFormType } from '../types/regFormType';

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
const userReg = createAsyncThunk('user/registration', async ({ name,
  email,
  password,
  confirmPassword,
  score }: RegFormType) =>
  AuthApi.postRegistraion({ name,
    email,
    password,
    confirmPassword,
    score }),
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
    builder.addCase(userReg.fulfilled, (_state, action) => {
      setAccessToken(action.payload.accessToken);
      return action.payload;
    });
  }
});


export { userLogin , refreshAccessToken, userReg};
export default userSlice.reducer;