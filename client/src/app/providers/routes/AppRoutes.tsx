import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../../pages/MainPage/MainPage';
import LoginForm from '../../../entities/user/ui/LoginForm';
import Navbar from '../../../shared/layout/Navbar/Navbar';
import RegistrationForm from '../../../entities/user/ui/RegistrationForm';
import ThemePage from '../../../pages/Theme/ThemePage';

function AppRoutes(): JSX.Element {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/themes" element={<ThemePage />} />

        {/* всегда внизу */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default AppRoutes;
