import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ThemeWithQuestionsType } from '../types/themeType';
import ThemeApi from '../api/ThemeApi';

const initialState: ThemeWithQuestionsType[] = [];

// Создаем асинхронный thunk для загрузки тем с использованием API
const loadThemes = createAsyncThunk<ThemeWithQuestionsType[]>('theme/load', () =>
  ThemeApi.getAllThemes(),
);

// Создаем slice для управления состоянием тем
const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Обработка успешного выполнения thunk loadThemes
    builder.addCase(
      loadThemes.fulfilled,
      (state, action: PayloadAction<ThemeWithQuestionsType[]>) => {
        state.push(...action.payload); // Добавляем полученные темы в состояние
      },
    );
  },
});

// Экспортируем thunk для использования в компонентах
export { loadThemes };
// Экспортируем reducer для добавления в store
export default themeSlice.reducer;
