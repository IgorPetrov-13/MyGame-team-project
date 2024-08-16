/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import ThemeList from '../../entities/themes/ui/ThemeList';
import './ThemePage.css';

function ThemePage(): JSX.Element {
  const [userScore, setUserScore]: [number, React.Dispatch<React.SetStateAction<number>>] =
    useState(0);
  return (
    <div>
      <p>THEME PAGE</p>
      <p>Ваши очки: {userScore}</p>
      <ThemeList setUserScore= {setUserScore} />
    </div>
  );
}

export default ThemePage;
