import React from 'react';
import type { QuestionType } from '../type/questionType';
import { useAppSelector } from '../../../app/providers/store/store';

import './buttonCSS.css';
import AnswerButton from './AnswerButton';

type TypeProps = {
  question: QuestionType;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUserScore: React.Dispatch<React.SetStateAction<number>>;
};

function QuestionModal({ question, setOpenModal, setUserScore }: TypeProps): JSX.Element {
  const answers = useAppSelector((state) => state.answers);
  const filtredAnswers = answers.filter((answer) => answer.questionId === question.id);

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={() => setOpenModal(false)} />
      <div className="modal-content">
        <div className="box">
          <p style={{fontSize: '25px'}}>{question.text}</p>

          {filtredAnswers.map((answer) => (
            <div key={answer.id} style={{marginButtom: '10px'}}>
              <AnswerButton answer={answer} setUserScore={setUserScore} question={question} />
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
