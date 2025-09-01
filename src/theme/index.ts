import { createTheme } from '@rneui/themed';

export const theme = createTheme({
  lightColors: {},
  darkColors: {},
  components: {
    Text: () => ({
      style: {
        fontFamily: 'Montserrat-Regular',
      },
    }),
  },
  mode: 'light',
});
