import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/apiAxiosInstance';
import type { User } from '../types/userType';
import type { LoginFormType } from '../types/authFormType';
import axios from 'axios';

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
      await axios.get('/api/v1/tokens/refresh');
    return response.data;
  };
}

export default AuthApi;
