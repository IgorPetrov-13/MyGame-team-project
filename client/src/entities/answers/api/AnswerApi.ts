import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/apiAxiosInstance';

import { AnswerType } from '../types/answerType';

class AnswerApi {
  static getAllAnswers = async (): Promise<AnswerType[]> => {
    const response: AxiosResponse<AnswerType[]> = await axiosInstance.get('/answers');
    return response.data;
  };
}

export default AnswerApi;
