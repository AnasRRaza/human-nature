import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@rneui/themed';

import AppNavigationContainer from '@/navigation/NavigationContainer';
import { store } from '@/store';
import { theme } from '@/theme';

import '@/localization/i18n';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Provider store={store}>
          <StatusBar />
          <AppNavigationContainer />
          <Toast />
        </Provider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
