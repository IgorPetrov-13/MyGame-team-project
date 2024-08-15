import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AnswerType } from '../types/answerType';


const initialState: AnswerType[] = [];

// Создаем асинхронный thunk для загрузки тем с использованием API
const loadAnswers = createAsyncThunk<AnswerType[]>(
  'answer/load',
  async () => {
    return await AnswerApi.getAllAnswers();
  }
);

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