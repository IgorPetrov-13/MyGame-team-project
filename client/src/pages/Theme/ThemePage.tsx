/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import ThemeList from '../../entities/themes/ui/ThemeList';
import { useAppSelector } from '../../app/providers/store/store';

function ThemePage(): JSX.Element {
  const user = useAppSelector((state) => state.users.user);
  return (
    <div>
      <p>THEME PAGE</p>
      <p>Ваши очки: {user?.score}</p>
      <ThemeList/>
    </div>
  );
}

export default ThemePage;
