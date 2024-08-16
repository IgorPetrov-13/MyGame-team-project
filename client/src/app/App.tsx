/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import './App.css';
import AppRoutes from './providers/routes/AppRoutes';
import Spinner from '../shared/ui/Spinner/Spinner';
import { useAppDispatch } from './providers/store/store';
import { loadThemes } from '../entities/themes/model/themeSlice';
import { refreshAccessToken } from '../entities/user/model/userSlice';
import MainImage from '../shared/ui/mainImage/MainImage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(refreshAccessToken()).catch(console.log);
  }, []);

  useEffect(() => {
    dispatch(loadThemes())
      .then(() => setLoading((prev) => !prev))
      .catch(console.log);
  }, []);

  return <div>
  {loading ? (
    <>
    <AppRoutes />
    <MainImage/>
    </>
  ) : (
    <Spinner />
  )}
</div>
}

export default App;
