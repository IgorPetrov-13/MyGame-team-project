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
      style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly',  }}
    >
      <div
        className="card-body"
        style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}
      >
        <div className="card-title" style={{fontSize: '18px', width:"100px"}}>{themeCard.title} </div>
        {themeCard.Questions.map((question) => (
          <div
            key={question.id}
            style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}
          >
            <QuestionList question={question} setUserScore={setUserScore} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThemeCard;
