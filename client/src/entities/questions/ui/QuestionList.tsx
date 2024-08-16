import React, { useState } from 'react';
import type { QuestionType } from '../type/questionType';
import QuestionModal from './QuestionModal';

// const TypeProps = {
//     question: QuestionType,
//     setUserScore: React.Dispatch<React.SetStateAction<number>>
// };


function QuestionList({
  question,
  setUserScore,
}: TypeProps): JSX.Element {
  const [openModal, setOpenModal] = useState(false);


  return (
    <div>
      <button type="button" onClick={() => setOpenModal((prev) => !prev)}>
        {question.point}
      </button>
      {openModal && <QuestionModal question={question} setOpenModal={setOpenModal} setUserScore={setUserScore}/>}
    </div>
  );
}

export default QuestionList;
