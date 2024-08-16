export type AnswerType = {
    id: number;
    text: string;
    isRigh: boolean;
    questionId: number;
    };
  
  export type AnswerWithoutIdType = Omit<AnswerType, 'id'>;
  
  export type AnswerIdType = AnswerType['id'];