import React from 'react';
import { ThemeType } from '../types/themeType';

function ThemeCard({ themeCard }: { themeCard: ThemeType }): JSX.Element {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h2 className="card-title">{themeCard.title}</h2>
       </div>
    </div>
  );
}

export default ThemeCard;
