import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { ToastProvider } from 'react-native-toast-notifications';
import { ThemeProvider } from '@rneui/themed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppNavigationContainer from '@/navigation/NavigationContainer';
import { theme } from '@/theme';

import '@/localization/i18n';

function App(): React.JSX.Element {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <SafeAreaProvider>
            <StatusBar />
            <AppNavigationContainer />
            <Toast />
          </SafeAreaProvider>
        </ToastProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
