import React from 'react';
import ThemeCard from './ThemeCard';
import { useAppSelector } from '../../../app/providers/store/store';
import { ThemeType } from '../types/themeType';

function ThemeList(): JSX.Element {
  
  const themeCards = useAppSelector((state) => state.themes);

  return (
    <div className="row">
      {themeCards.map((themeCard: ThemeType) => (
        <div className="col-sm-6" key={themeCard.id}>
          <ThemeCard themeCard={themeCard} />
        </div>
      ))}
    </div>
  );
}

export default ThemeList;
