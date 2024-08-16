import React, { useState } from 'react';
import type { QuestionType } from '../type/questionType';
import QuestionModal from './QuestionModal';

function QuestionList({
  question,
  setUserScore,
}: {
  question: QuestionType;
  setUserScore: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  const [openModal, setOpenModal] = useState(false);
  const [isDesabled, setIsDesabled] = useState(false);

  const handlerChecker = (): void => {
    setOpenModal((prev) => !prev);
    setIsDesabled((prev) => !prev);
  };

  return (
    <div>
      <button type="button" onClick={handlerChecker} disabled={isDesabled}>
        {question.point}
      </button>
      {openModal && (
        <QuestionModal
          question={question}
          setOpenModal={setOpenModal}
          setUserScore={setUserScore}
        />
      )}
    </div>
  );
}

export default QuestionList;
