/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import ThemeList from '../../entities/themes/ui/ThemeList';

function ThemePage(): JSX.Element {
  return (
    <div>
      <p>THEME</p>
      <ThemeList/>
    </div>
  );
}

export default ThemePage;
