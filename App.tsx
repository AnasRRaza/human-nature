import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { ThemeProvider } from '@rneui/themed';

import AppNavigationContainer from '@/navigation/NavigationContainer';
import { theme } from '@/theme';

import '@/localization/i18n';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar />
        <AppNavigationContainer />
        <Toast />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
