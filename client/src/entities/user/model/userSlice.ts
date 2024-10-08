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

const userReg = createAsyncThunk(
  'user/registration',
   ({ name, email, password, confirmPassword, score }: RegFormType) =>
    AuthApi.postRegistraion({ name, email, password, confirmPassword, score }),

  )
const userLogOut = createAsyncThunk('user/logout', () =>
  AuthApi.logOut());



const updateScoreDown = createAsyncThunk(
  'user/updateScore',
  ({ id, point }: { id: number; point: number }) => AuthApi.updateScore({ id, point }),
);

const updateScoreUp = createAsyncThunk(
  'user/updateScore',
  ({ id, point }: { id: number; point: number }) => AuthApi.updateScore({ id, point }),
);

const refreshAccessToken = createAsyncThunk('user/refreshAccessToken', async () =>
  AuthApi.refreshTokens(),
);

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
    builder.addCase(updateScoreUp.fulfilled, (_state, action) => {
      return action.payload
    });
     builder.addCase(userLogOut.fulfilled, (_state, action) => {
      setAccessToken('');
      return action.payload;
    });
  },
});

export { userLogin, refreshAccessToken, userReg, updateScoreDown, updateScoreUp, userLogOut };
export default userSlice.reducer;


