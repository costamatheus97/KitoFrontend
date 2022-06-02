import { useFieldArray, useForm } from 'react-hook-form';

import { Header } from '@/components/Header';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import React from 'react';

export const CreateQuestionnairePage: React.FC = (): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      title: '',
      questions: [
        {
          question: '',
          answer: '',
          value: 0,
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions',
  });

  const handleOnSubmit = values => {
    console.log(values);
  };

  return (
    <>
      <Header />
      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Heading marginBottom={'3rem'}>Create a Questionnaire</Heading>
        <Flex width={'480px'} justifyContent={'center'} alignItems={'center'}>
          <form
            style={{
              width: '100%',
            }}
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <FormControl>
              <Flex
                background={'#fff'}
                padding={'2rem'}
                flexDirection={'column'}
                alignItems={'center'}
                borderRadius={'4px'}
              >
                <FormLabel htmlFor="title">Title</FormLabel>
                <Input
                  id="title"
                  marginBottom={'1rem'}
                  placeholder="Questionnaire Title"
                  {...register('title', {
                    required: 'This is required',
                  })}
                />
              </Flex>
              {fields.map((question, index) => {
                return (
                  <Flex
                    key={`question-${question}`}
                    background={'#fff'}
                    padding={'2rem'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    borderRadius={'4px'}
                    margin={'2rem 0'}
                  >
                    <Button onClick={() => remove(index)}>x</Button>
                    <FormLabel htmlFor={`question-${question}`}>
                      Question
                    </FormLabel>
                    <Input
                      id={`question-${question}`}
                      marginBottom={'1rem'}
                      placeholder={'Question'}
                      {...register(`questions`, {
                        required: 'This is required',
                      })}
                    />
                    <FormLabel htmlFor={`answer-${question}`}>Answer</FormLabel>
                    <Input
                      id={`answer-${question}`}
                      marginBottom={'1rem'}
                      placeholder={'Yes or no'}
                      {...register(`questions`, {
                        required: 'This is required',
                      })}
                    />
                    <FormLabel htmlFor={`question-${question}`}>
                      Value
                    </FormLabel>
                    <Input
                      id={`value-${question}`}
                      marginBottom={'1rem'}
                      placeholder={'Must be 0.25 to 1'}
                      {...register(`questions`, {
                        required: 'This is required',
                      })}
                    />
                  </Flex>
                );
              })}
              <Button
                onClick={() => append({ question: '', answer: '', value: 0 })}
                width={'180px'}
                margin={'1rem auto'}
                display={'flex'}
                type={'button'}
              >
                +
              </Button>
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={isSubmitting}
                type="submit"
                width={'180px'}
                margin={'1rem auto'}
                display={'flex'}
              >
                Submit
              </Button>
            </FormControl>
          </form>
        </Flex>
      </Flex>
    </>
  );
};
