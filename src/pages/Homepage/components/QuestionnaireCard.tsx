import { IQuestionnaire } from '@/interfaces/IQuestionnaire';
import { Flex, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';

export const QuestionnaireCard: React.FC<IQuestionnaire> = ({
  _id,
  title,
  questions,
}): JSX.Element => {
  return (
    <Link style={{ textDecoration: 'none' }} href={`/questionnaire/${_id}`}>
      <Flex
        flexDirection={'column'}
        justifyContent={'space-around'}
        alignItems={'center'}
        background={'#fff'}
        padding={'1rem'}
        borderRadius={'4px'}
        boxShadow={'shadows.black'}
        width={'320px'}
        height={'280px'}
      >
        <Heading as={'h2'}>{title}</Heading>
        <Flex
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Text fontSize={'18px'} fontWeight={'500'}>
            First question:
          </Text>
          <Text fontSize={'18px'}>{questions[0].question}</Text>
        </Flex>
        <Link
          style={{ textDecoration: 'none' }}
          background={'blue.300'}
          maxWidth={'180px'}
          width={'100%'}
          height={'36px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          borderRadius={'4px'}
          fontSize={'18px'}
          fontWeight={'500'}
          _hover={{ bg: 'blue.400' }}
          href={`/questionnaire/${_id}`}
        >
          Go to questionnaire
        </Link>
      </Flex>
    </Link>
  );
};
