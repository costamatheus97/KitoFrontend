import { Header } from '@/components/Header';
import { IQuestionnaire } from '@/interfaces/IQuestionnaire';
import { api } from '@/services/api';
import { Flex, Heading, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Questionnaire } from './components/Questionnaire';

export const QuestionnairePage: React.FC = (): JSX.Element => {
  const [questionnaires, setQuestionnaires] = useState<IQuestionnaire>();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    api
      .get(`/questionnaires/${searchParams}`, {})
      .then(result => setQuestionnaires(result.data[0]));
  }, [searchParams]);

  return (
    <>
      <Header />

      {questionnaires ? (
        <Flex
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Heading marginBottom={'3rem'}>{questionnaires.title}</Heading>
          <Questionnaire questionnaires={questionnaires} />
        </Flex>
      ) : (
        <Spinner />
      )}
    </>
  );
};
