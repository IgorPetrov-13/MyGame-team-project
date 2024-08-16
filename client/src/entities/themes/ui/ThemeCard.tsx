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
    <div
      className="card"
      style={{ width: '18rem', display: 'flex', justifyContent: 'space-evenly' }}
    >
      <div
        className="card-body"
        style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}
      >
        <div className="card-title">{themeCard.title}</div>
        {themeCard.Questions.map((question) => (
          <div
            key={question.id}
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}
          >
            <QuestionList question={question} setUserScore={setUserScore} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThemeCard;
