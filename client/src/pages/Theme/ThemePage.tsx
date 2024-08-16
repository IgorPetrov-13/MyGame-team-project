/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import ThemeList from '../../entities/themes/ui/ThemeList';

function ThemePage(): JSX.Element {
  const [userScore, setUserScore]: [number, React.Dispatch<React.SetStateAction<number>>] =
    useState(0);
  return (
    <div style={{ textAlign: 'center',  }}>
      <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '50px', color: "white" }}>СВОЯ ИГРА</p>
      <p style={{fontSize: '35px', color: "white"}}>Ваши очки: {userScore}</p>
      <ThemeList setUserScore= {setUserScore} />
    </div>
  );
}

export default ThemePage;
