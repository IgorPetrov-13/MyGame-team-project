/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import ThemeList from '../../entities/themes/ui/ThemeList';
import './ThemePage.css';

function ThemePage(): JSX.Element {
  return (
    <div>
      <ThemeList/>
    </div>
  );
}

export default ThemePage;
