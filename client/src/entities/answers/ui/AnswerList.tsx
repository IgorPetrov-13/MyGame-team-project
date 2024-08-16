import React from 'react';

import { useAppSelector } from '../../../app/providers/store/store';

import AnswerCard from './AnswerCard';
import { AnswerType } from '../types/answerType';

function AnswerList(): JSX.Element {
  
  const answerCards = useAppSelector((state) => state.answers);

  return (
    <div className="row">
      {answerCards.map((answerCard: AnswerType) => (
        <div className="col-sm-6" key={answerCard.id}>
          <AnswerCard answerCard={answerCard} />
        </div>
      ))}
    </div>
  );
}

export default AnswerList;
