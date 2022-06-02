// #F7F7F7

import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const shadows = {
  shadows: {
    black: '0px 0px 10px 1px rgba(0,0,0,0.1)',
  },
};

const dark = '#232323';
const light = '#f0f0f0';

export const theme = extendTheme({
  shadows,
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'yellow',
      },
    },
  },
  styles: {
    global: props => ({
      body: {
        bg: mode(light, dark)(props),
      },
    }),
  },
});
