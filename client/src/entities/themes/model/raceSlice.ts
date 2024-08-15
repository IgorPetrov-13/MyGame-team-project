/* eslint-disable arrow-body-style */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RaceType, RaceWithoutIdType } from '../types/raceType';
import RaceApi from '../api/RaceApi';

const initialState: RaceType[] = [];

const loadRaces = createAsyncThunk('race/load', () => RaceApi.getAllRaces());
const deleteRaces = createAsyncThunk('race/delete', (id: number) => RaceApi.deleteRace(id));
const updateRaces = createAsyncThunk(
  'race/update',
  ({ id, form }: { id: number; form: RaceWithoutIdType }) => RaceApi.updateRace({ id, form }),
);

const raceSlice = createSlice({
  name: 'raceSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadRaces.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
    // eslint-disable-next-line arrow-body-style
    builder.addCase(deleteRaces.fulfilled, (state, action) => {
      return state.filter((el) => el.id !== action.meta.arg);
    });
    builder.addCase(updateRaces.fulfilled, (state, action) => {
      return state.map((el) => (el.id === action.payload.id ? action.payload : el));
    });
  },
});

export { loadRaces, deleteRaces, updateRaces };
export default raceSlice.reducer;
