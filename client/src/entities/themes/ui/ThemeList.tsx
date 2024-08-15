import React from 'react';
import ThemeCard from './ThemeCard';
import { useAppSelector } from '../../../app/providers/store/store';

function ThemeList(): JSX.Element {
  const themeCards = useAppSelector((state) => state.themes);
   
  return (
    <div>
      {themeCards.map((themeCard) => (
        <div className="col-sm-6" key={themeCard.id}>
          <ThemeCard themeCard={ThemeCard} />
        </div>
      ))}
    </div>
  );
}

export default ThemeList;
