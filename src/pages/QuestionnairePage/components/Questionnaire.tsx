import { IQuestionnaire } from '@/interfaces/IQuestionnaire';
import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { Question } from './Question';

interface IQuestionnaireListProps {
  questionnaires: IQuestionnaire;
}

export const Questionnaire: React.FC<IQuestionnaireListProps> = ({
  questionnaires,
}): JSX.Element => {
  const [userQuestions, setUserQuestions] = useState([
    ...questionnaires.questions,
  ]);

  const handleChangeAnswers = (question: string, answer: boolean) => {
    const updatedQuestions = userQuestions.map(userQuestion => {
      if (userQuestion.question === question) {
        return { ...userQuestion, answer };
      }

      return userQuestion;
    });

    setUserQuestions(updatedQuestions);
  };

  const handleSubmit = () => {
    const scores = userQuestions.map(userQuestion => {
      const actualQuestion = questionnaires.questions.find(
        question => question.question === userQuestion.question,
      );

      if (userQuestion.answer === actualQuestion?.answer) {
        return userQuestion.value;
      }

      return 0;
    });

    const score = scores.reduce((acc, curr) => acc + curr);

    localStorage.setItem('result', JSON.stringify(score));
  };

  return (
    <Flex
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {questionnaires?.questions?.map(question => {
        return (
          <Question
            key={question.question}
            setAnswer={handleChangeAnswers}
            question={question}
          />
        );
      })}
      <Button onClick={handleSubmit}>Submit Questionnaire</Button>
    </Flex>
  );
};
