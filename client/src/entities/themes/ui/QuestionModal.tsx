import React from 'react';
import type { QuestionType } from '../types/questionType';
import './QuestionModal.css';

function QuestionModal({ question, onClose }: { question: QuestionType; onClose: () => void }): JSX.Element {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{question.title}</h3>
        <div className="answers">
          {question.options.map((option, index) => (
            <button key={index} className="answer-button">
              {option}
            </button>
          ))}
        </div>
        <button className="close-button" onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
}

export default QuestionModal;
