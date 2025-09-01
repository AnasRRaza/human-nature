import { createTheme } from '@rneui/themed';

import { FONTS } from '@/constants/fonts';

export const theme = createTheme({
  lightColors: {},
  darkColors: {},
  components: {
    Text: () => ({
      style: {
        fontFamily: FONTS.OUTFIT,
      },
    }),
  },
  mode: 'light',
});
