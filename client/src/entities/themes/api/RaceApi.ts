import type { AxiosResponse } from 'axios';
import axiosInstance from '../../../services/apiAxiosInstance';
import type { RaceType, RaceWithoutIdType } from '../types/raceType';

class RaceApi {
  static getAllRaces = async (): Promise<RaceType[]> => {
    const response: AxiosResponse<RaceType[]> = await axiosInstance.get('/races');
    return response.data;
  };

  static deleteRace = async (id: number): Promise<boolean> => {
    const response: AxiosResponse<{ message: string }> = await axiosInstance.delete(`/races/${id}`);
    return response.status === 200;
  };

  static updateRace = async({id, form} : {id: number, form: RaceWithoutIdType}): Promise<RaceType> => {
    const response = await axiosInstance.put<RaceType>(`/races/${id}`, form)
    return response.data
  }

  static createRace = async(form: RaceWithoutIdType): Promise<RaceType> => {
    const response = await axiosInstance.post<RaceType>(`/races`, form)
    return response.data
  }
}

export default RaceApi;
