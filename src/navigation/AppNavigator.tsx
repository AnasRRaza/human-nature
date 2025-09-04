/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { makeStyles } from '@rneui/themed';

import Header from '@/components/Header';
import Home from '@/screens/Home';
import { APP_ROUTES, AppStackNavigatorParamList } from '@/types/routes';

const Stack = createStackNavigator<AppStackNavigatorParamList>();

const AppNavigator = () => {
  const styles = useStyles();

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <Stack.Navigator
        screenOptions={{
          header: props => (
            <Header title={props?.options?.title || ''} isBack />
          ),
        }}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={APP_ROUTES.HOME}
          component={Home}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const useStyles = makeStyles(theme => ({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
}));

export default AppNavigator;
