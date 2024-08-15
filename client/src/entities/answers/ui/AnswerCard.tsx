import React from 'react';

import { AnswerType } from '../types/answerType';

function AnswerCard({ answerCard }: { answerCard: AnswerType }): JSX.Element {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h2 className="card-text">{answerCard.text}</h2>
       </div>
    </div>
  );
}

export default AnswerCard;
