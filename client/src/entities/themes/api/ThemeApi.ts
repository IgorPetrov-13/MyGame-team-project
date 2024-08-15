import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/apiAxiosInstance';
import type {  ThemeWithQuestionsType } from '../types/themeType';

class ThemeApi {
  static getAllThemes = async (): Promise<ThemeWithQuestionsType[]> => {
    const response: AxiosResponse<ThemeWithQuestionsType[]> = await axiosInstance.get('/themes');
    return response.data;
  };
}

export default ThemeApi;
