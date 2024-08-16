import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/apiAxiosInstance';
import type { User } from '../types/userType';
import type { LoginFormType } from '../types/authFormType';
import axios from 'axios';
import {  RegFormType } from '../types/regFormType';

class AuthApi {
  static postAuth = async ({
    email,
    password,
  }: LoginFormType): Promise<{ user: User; accessToken: string }> => {
    const response: AxiosResponse<{ user: User; accessToken: string }> = await axiosInstance.post(
      '/auth/authorization',
      { email, password },
    );
    return response.data;
  };

  static refreshTokens = async (): Promise<{ user: User; accessToken: string }> => {
    const response: AxiosResponse<{ user: User; accessToken: string }> =
      await axiosInstance.get('/tokens/refresh');
    return response.data;
  };
  static logOut = async (): Promise<{ user: User; accessToken: string }> => {
    const response: AxiosResponse<{ user: User; accessToken: string }> =
      await axiosInstance.delete('/auth/logout');
    return response.data;
  };
  static postRegistraion = async ({
    name,
    email,
    password,
    confirmPassword,
    score

  }: RegFormType): Promise<{ user: User; accessToken: string }> => {
    const response: AxiosResponse<{ user: User; accessToken: string }> = await axiosInstance.post(
      '/auth/registration',
      { name,
        email,
        password,
        confirmPassword,
        score },
    );
    return response.data;
  };
}

export default AuthApi;
