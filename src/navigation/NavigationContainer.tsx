import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList, STACKS } from '@/types/routes';

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { navigationRef } from './NavigationRef';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigationContainer = () => {
  const user = true;

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator>
        {!user ? (
          <RootStack.Screen
            name={STACKS.APP}
            component={AppNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <RootStack.Screen
            name={STACKS.AUTH}
            component={AuthNavigator}
            options={{ headerShown: false }}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
