import { IQuestionnaire } from '@/interfaces/IQuestionnaire';
import { Flex, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { QuestionnaireCard } from './QuestionnaireCard';

interface IQuestionnaireListProps {
  questionnaires: IQuestionnaire[];
}

export const QuestionnaireList: React.FC<IQuestionnaireListProps> = ({
  questionnaires,
}): JSX.Element => {
  return (
    <Flex>
      <SimpleGrid
        columns={{ base: 1, lg: 3, xl: 4 }}
        spacing={'20'}
        mt={12}
        mx={{ base: 10, md: 20 }}
      >
        {questionnaires &&
          questionnaires.map(questionnaire => {
            return (
              <QuestionnaireCard key={questionnaire._id} {...questionnaire} />
            );
          })}
      </SimpleGrid>
    </Flex>
  );
};
