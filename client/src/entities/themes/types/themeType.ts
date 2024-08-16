import type { QuestionType } from '../../questions/type/questionType';

export type ThemeType = {
  id: number;
  title: string;
};
export type ThemeWithQuestionsType = {
  id: number;
  title: string;
  Questions: QuestionType[];
};
export type ThemeWithoutIdType = Omit<ThemeType, 'id'>;

export type ThemeIdType = ThemeType['id'];
