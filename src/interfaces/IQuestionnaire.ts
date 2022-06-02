import { IQuestion } from './IQuestion';

export interface IQuestionnaire {
  _id: string;
  title: string;
  questions: IQuestion[];
}
