import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { IQuestionnaire } from '@/interfaces/IQuestionnaire';
import { api } from '@/services/api';
import { QuestionnaireList } from './components/QuestionnaireList';
import { Spinner, Heading, Flex } from '@chakra-ui/react';

export const Homepage: React.FC = (): JSX.Element => {
  const [questionnaires, setQuestionnaires] = useState<IQuestionnaire[]>();

  useEffect(() => console.log(questionnaires), [questionnaires]);

  useEffect(() => {
    api
      .get('/questionnaires', {})
      .then(result => setQuestionnaires(result.data));
  }, []);

  return (
    <>
      <Header />
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
      >
        <Heading as={'h1'}>Questionnaires</Heading>
        {questionnaires ? (
          <QuestionnaireList questionnaires={questionnaires} />
        ) : (
          <Spinner />
        )}
      </Flex>
    </>
  );
};
