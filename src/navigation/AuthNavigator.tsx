import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { makeStyles } from '@rneui/themed';

import SignIn from '@/screens/Auth/SignIn';
import Start from '@/screens/Auth/Start';
import { AUTH_ROUTES, AuthStackNavigatorParamList } from '@/types/routes';

const Stack = createStackNavigator<AuthStackNavigatorParamList>();

const AuthNavigator = () => {
  const styles = useStyles();

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={AUTH_ROUTES.START}>
        <Stack.Screen name={AUTH_ROUTES.START} component={Start} />
        <Stack.Screen name={AUTH_ROUTES.SIGNIN} component={SignIn} />
        <Stack.Screen name={AUTH_ROUTES.SIGNUP} component={SignIn} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default AuthNavigator;

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
}));
