import { Flex, Link } from '@chakra-ui/react';
import React from 'react';

export const Header: React.FC = (): JSX.Element => {
  return (
    <Flex
      background={'#fff'}
      width={'100%'}
      marginBottom={'3rem'}
      height={'64px'}
      alignItems={'center'}
      padding={'0 1rem'}
      boxShadow={'shadows.black'}
    >
      <Link
        style={{ textDecoration: 'none' }}
        fontSize={'2rem'}
        fontWeight={'500'}
        href={'/'}
        fontStyle={'italic'}
      >
        Questionnator
      </Link>
    </Flex>
  );
};
