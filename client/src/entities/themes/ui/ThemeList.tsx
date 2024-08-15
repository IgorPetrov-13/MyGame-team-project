import React from 'react';
import RaceCard from './ThemeCard';
import { useAppSelector } from '../../../app/providers/store/store';

function RaceList(): JSX.Element {
  const raceCards = useAppSelector((state) => state.races);
   
  return (
    <div>
      {raceCards.map((raceCard) => (
        <div className="col-sm-6" key={raceCard.id}>
          <RaceCard raceCard={raceCard} />
        </div>
      ))}
    </div>
  );
}

export default RaceList;
