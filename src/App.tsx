import React from 'react';
import RoutesComponent from '@/routes/routes';

import { theme } from '@/config/theme';
import { ChakraProvider } from '@chakra-ui/react';

import '@/styles/global.css';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <RoutesComponent />
      </ChakraProvider>
    </>
  );
};

export default App;
