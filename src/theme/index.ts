import { createTheme } from '@rneui/themed';

import { FONTS } from '@/constants/fonts';

export const theme = createTheme({
  lightColors: {
    primary: '#A3B18A',
  },
  darkColors: {
    primary: '#A3B18A',
  },
  components: {
    Text: () => ({
      style: {
        fontFamily: FONTS.OUTFIT,
      },
    }),
  },
  mode: 'light',
});
