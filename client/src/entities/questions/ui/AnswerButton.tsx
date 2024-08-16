import React, { useState } from 'react';
import type { AnswerType } from '../../answers/types/answerType';
import './buttonCSS.css';
import { useAppDispatch, useAppSelector } from '../../../app/providers/store/store';
import { updateScoreDown, updateScoreUp } from '../../user/model/userSlice';

function AnswerButton({ answer }: { answer: AnswerType }): JSX.Element {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const user = useAppSelector((state) => state.users.user);
  const dispatch = useAppDispatch();
  const handlerChecker = (answer): void => {
    setSelectedAnswer(answer.isRigh ? 'correct' : 'incorrect');
    // if (answer.isRigh) {
    //     dispatch(updateScoreUp({user.id, answer.point}));
    // }  
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => handlerChecker(answer)}
        className={
          // eslint-disable-next-line no-nested-ternary
          selectedAnswer === 'correct'
            ? 'correct'
            : selectedAnswer === 'incorrect'
              ? 'incorrect'
              : ''
        }
      >
        {answer.text}
      </button>
    </div>
  );
}

export default AnswerButton;
