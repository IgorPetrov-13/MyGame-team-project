import React from 'react';
import ThemeCard from './ThemeCard';
import { useAppSelector } from '../../../app/providers/store/store';

function ThemeList({
  setUserScore,
}: {
  setUserScore: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  const themeCards = useAppSelector((state) => state.themes);

  console.log(themeCards, 'themeCards');

  return (
    <div className="container" style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
      <div className="card">
        {themeCards.map((themeCard) => (
          <div
            style={{
              width: '600px',
              height: '70px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            key={themeCard.id}
          >
            <ThemeCard themeCard={themeCard} setUserScore={setUserScore} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThemeList;
