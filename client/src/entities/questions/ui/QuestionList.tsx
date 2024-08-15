import React, { useState } from 'react';
import type { QuestionType } from '../type/questionType';
import QuestionModal from './QuestionModal';

function QuestionList({ question }: { question: QuestionType }): JSX.Element {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setOpenModal((prev) => !prev)}>
        {question.point}
      </button>
      {openModal && <QuestionModal question={question} setOpenModal={setOpenModal} />}
    </div>
  );
}

export default QuestionList;
