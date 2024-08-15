import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import raceSliceReducer from '../../../entities/themes/model/raceSlice';
import userSliceReducer from '../../../entities/user/model/userSlice';
import characterSliceReducer from '../../../entities/characters/model/CharacterSlice';

// store - хранилище состояния приложения
// store.dispatch - функция, которая отправляет action в store
// store.getState - функция, которая возвращает текущее состояние store
const store = configureStore({
  reducer: {
    races: raceSliceReducer,
    user: userSliceReducer,
    characters: characterSliceReducer,
  },
});

type RootState = ReturnType<typeof store.getState>; // получение типа store.getState
type AppDispatch = typeof store.dispatch; // получение типа store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>(); // Хук селектора для вытаскивания данных из store
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // Хук диспатча что бы положить данные в store

export default store;
