import React from 'react';
import type { ThemeWithQuestionsType } from '../types/themeType';
import QuestionList from '../../questions/ui/QuestionList';

function ThemeCard({ themeCard }: { themeCard: ThemeWithQuestionsType }): JSX.Element {
  console.log(themeCard.Questions);
  
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <div className="card-title">{themeCard.title}</div>
        {themeCard.Questions.map((question) => (
          <div key={question.id}>
            <QuestionList question={question} /> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThemeCard;
