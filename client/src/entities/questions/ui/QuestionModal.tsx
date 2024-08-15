import React from 'react';
import type { QuestionType } from '../type/questionType';

function QuestionModal({
  question,
  setOpenModal,
}: {
  question: QuestionType;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={() => setOpenModal(false)} />
      <div className="modal-content">
        <div className="box">
          <p>{question.text}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis vel ab asperiores
            veritatis ducimus commodi cum. Doloribus magni, voluptatem minima optio eos
            perspiciatis, quos ut sit architecto, error sint repellat?
          </p>
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
