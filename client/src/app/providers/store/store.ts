import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import themeSliceReducer from '../../../entities/themes/model/themeSlice';
import userSliceReducer from '../../../entities/user/model/userSlice';
// import questionSliceReducer from '../../../entities/questions/model/questionSlice.ts';
// import answerSliceReducer from '../../../entities/answers/model/answerSlice';

// store - хранилище состояния приложения
// store.dispatch - функция, которая отправляет action в store
// store.getState - функция, которая возвращает текущее состояние store
const store = configureStore({
  reducer: {
    themes: themeSliceReducer,
    // questions: questionSliceReducer,
    // answers: answerSliceReducer,
    users: userSliceReducer,
  },
});

type RootState = ReturnType<typeof store.getState>; // получение типа store.getState
type AppDispatch = typeof store.dispatch; // получение типа store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>(); // Хук селектора для вытаскивания данных из store
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // Хук диспатча что бы положить данные в store

export default store;
