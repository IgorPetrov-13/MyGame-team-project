import React, { useState } from 'react';
import type { AnswerType } from '../../answers/types/answerType';
import './buttonCSS.css';
import { useAppSelector } from '../../../app/providers/store/store';
import type { QuestionType } from '../type/questionType';

type TypeProps = {
  answer: AnswerType;
  setUserScore: React.Dispatch<React.SetStateAction<number>>;
  question: QuestionType;
};
function AnswerButton({ answer, setUserScore, question }: TypeProps): JSX.Element {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const user = useAppSelector((state) => state.users.user);
  const handlerChecker = (point: number): void => {
    setSelectedAnswer(answer.isRigh ? 'correct' : 'incorrect');
    if (answer.isRigh) {
      setUserScore((prev: number) => prev + point);
    } else {
      setUserScore((prev: number) => prev - point);
    }
  };

  return (
    <div>
      <button
        style={{ color: 'black', marginBottom: '10px' }}
        type="button"
        onClick={() => handlerChecker(question.point)}
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
