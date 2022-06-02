import { IQuestion } from '@/interfaces/IQuestion';
import { Flex, Text, RadioGroup, Radio, Stack } from '@chakra-ui/react';
import React from 'react';

interface IQuestionProps {
  question: IQuestion;
  setAnswer(question: string, answer: boolean): void;
}

export const Question: React.FC<IQuestionProps> = ({
  question,
  setAnswer,
}): JSX.Element => {
  return (
    <Flex
      flexDirection={'column'}
      background={'#fff'}
      width={'480px'}
      justifyContent={'center'}
      alignItems={'center'}
      marginBottom={'1rem'}
      padding={'1rem'}
      borderRadius={'4px'}
      boxShadow={'shadows.black'}
    >
      <Text marginBottom={'1rem'} fontSize={'18px'}>
        {question.question}
      </Text>
      <RadioGroup
        onChange={value => setAnswer(question.question, !!parseInt(value))}
        marginBottom={'1rem'}
      >
        <Stack direction="row">
          <Radio value={1}>Yes</Radio>
          <Radio value={0}>No</Radio>
        </Stack>
      </RadioGroup>
    </Flex>
  );
};
