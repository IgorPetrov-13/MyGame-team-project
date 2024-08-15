import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/apiAxiosInstance';
import type { ThemeType } from '../types/themeType';

class ThemeApi {
  static getAllThemes = async (): Promise<ThemeType[]> => {
    const response: AxiosResponse<ThemeType[]> = await axiosInstance.get('/themes');
    return response.data;
  };
}

export default ThemeApi;
