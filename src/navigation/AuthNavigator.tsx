import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '@/screens/signin';
import { AUTH_ROUTES, AuthStackNavigatorParamList } from '@/types/routes';

const Stack = createStackNavigator<AuthStackNavigatorParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AUTH_ROUTES.SIGNIN} component={Login} />
      <Stack.Screen name={AUTH_ROUTES.SIGNUP} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
