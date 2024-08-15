import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeType } from '../types/themeType';
import ThemeApi from '../api/ThemeApi';


const initialState: ThemeType[] = [];

// Создаем асинхронный thunk для загрузки тем с использованием API
const loadThemes = createAsyncThunk<ThemeType[]>(
  'theme/load',
  async () => {
    return await ThemeApi.getAllThemes();
  }
);

// Создаем slice для управления состоянием тем
const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Обработка успешного выполнения thunk loadThemes
    builder.addCase(loadThemes.fulfilled, (state, action: PayloadAction<ThemeType[]>) => {
      state.push(...action.payload); // Добавляем полученные темы в состояние
    });
  },
});

// Экспортируем thunk для использования в компонентах
export { loadThemes };
// Экспортируем reducer для добавления в store
export default themeSlice.reducer;
