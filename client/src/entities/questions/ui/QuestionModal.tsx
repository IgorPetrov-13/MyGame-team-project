import React from 'react';
import type { QuestionType } from '../type/questionType';
import { useAppSelector } from '../../../app/providers/store/store';

import './buttonCSS.css';
import AnswerButton from './AnswerButton';

type TypeProps = {
  question: QuestionType;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function QuestionModal({ question, setOpenModal }: TypeProps): JSX.Element {
  const answers = useAppSelector((state) => state.answers);
 

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={() => setOpenModal(false)} />
      <div className="modal-content">
        <div className="box">
          <p>{question.text}</p>

          {answers.map((answer) => (
            <div key={answer.id}>
                <AnswerButton answer={answer} />
            </div>
          ))}
          <button className="button is-danger" type="button" onClick={() => setOpenModal(false)}>
            Close
          </button>
        </div>
      </div>
      <button
        type="button"
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setOpenModal((prev) => !prev)}
      />
    </div>
  );
}

export default QuestionModal;
