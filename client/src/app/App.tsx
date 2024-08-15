/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import './App.css';
import AppRoutes from './providers/routes/AppRoutes';
import Spinner from '../shared/ui/Spinner/Spinner';
import { useAppDispatch } from './providers/store/store';
import { loadRaces } from '../entities/themes/model/raceSlice';
import { refreshAccessToken } from '../entities/user/model/userSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState({
    loadingRaces: false,
    // loadingCharacters: true,
  });

  useEffect(() => {
    dispatch(refreshAccessToken()).catch(console.log);
  }, []);

  useEffect(() => {
    dispatch(loadRaces())
      .then(() => setLoading((prev) => ({ ...prev, loadingRaces: true })))
      .catch(console.log);
  }, []);

  return <div>{loading.loadingRaces ? <AppRoutes /> : <Spinner />}</div>;
}

export default App;
