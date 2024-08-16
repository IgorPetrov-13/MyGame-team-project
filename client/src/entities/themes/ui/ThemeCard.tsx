import React from 'react';
import type { ThemeWithQuestionsType } from '../types/themeType';
import QuestionList from '../../questions/ui/QuestionList';

function ThemeCard({
  themeCard,
  setUserScore,
}: {
  themeCard: ThemeWithQuestionsType;
  setUserScore: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element {
  console.log(themeCard.Questions, 'themeCard.Questions');




  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <div className="card-title">{themeCard.title}</div>
        {themeCard.Questions.map((question) => (
          <div key={question.id}>
            <QuestionList question={question}  setUserScore={setUserScore}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThemeCard;
