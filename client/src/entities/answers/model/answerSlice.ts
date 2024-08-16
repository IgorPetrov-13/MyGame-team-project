import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { AnswerType } from '../types/answerType';
import AnswerApi from '../api/AnswerApi';

const initialState: AnswerType[] = [];

// Создаем асинхронный thunk для загрузки тем с использованием API
const loadAnswers = createAsyncThunk<AnswerType[]>('answer/load', () => AnswerApi.getAllAnswers());

// Создаем slice для управления состоянием тем
const answerSlice = createSlice({
  name: 'answerSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Обработка успешного выполнения thunk loadThemes
    builder.addCase(loadAnswers.fulfilled, (state, action: PayloadAction<AnswerType[]>) => {
      state.push(...action.payload); // Добавляем полученные темы в состояние
    });
  },
});

// Экспортируем thunk для использования в компонентах
export { loadAnswers };
// Экспортируем reducer для добавления в store
export default answerSlice.reducer;
