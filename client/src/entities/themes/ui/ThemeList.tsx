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
    <div className="container" style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', width: '850px', justifyContent: 'center', alignItems: 'center' }}>
      <div className="card" style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', flexDirection: "column" , alignItems: "center"}}>
        {themeCards.map((themeCard) => (
          <div
          style={{
            width: '90%', 
            height: '70px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center", 
            margin: '10px',
           
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
